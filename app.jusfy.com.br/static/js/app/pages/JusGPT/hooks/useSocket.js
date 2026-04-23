import {
    useState,
    useEffect,
    useRef
} from "react";
import {
    toast
} from "react-toastify";
import {
    io
} from "socket.io-client";
import {
    EventsSegmentJusGPT
} from "../helpers/EventsSegmentJusGPT";
import {
    PromoNotificationEvents
} from "../../../modules/ChatLauncher/hooks/usePromoNotification";
import {
    useErrorModalSubscription
} from "../../../hooks/useErrorModalSubscription";

export const useSocket = (authToken, callbacks = {}, options = {}) => {
    const {
        trackNewChatCreated,
        trackResponseError
    } = EventsSegmentJusGPT();
    const {
        openModalSubscriptionGPT
    } = useErrorModalSubscription();

    // Estados do socket
    const [socket, setSocket] = useState(null);
    const [loadingMessage, setLoadingMessage] = useState(false);
    const [loadingChat, setLoadingChat] = useState(false);
    const [chatMessages, setChatMessages] = useState([]);
    const [chatRecent, setChatRecent] = useState([]);
    const [chatId, setChatId] = useState(null);
    const [waitingForFile, setWaitingForFile] = useState(false);
    const [pendingQuickChatType, setPendingQuickChatType] = useState(null);
    const [deletingChatId, setDeletingChatId] = useState(null);
    const [business, setBusiness] = useState(null);

    const isFirstChunkRef = useRef(true);
    const chatMessagesRef = useRef([]);
    const chatIdRef = useRef(null);
    const titleUpdatedChatsRef = useRef(new Set());
    const pendingQuickChatTypeRef = useRef(null);
    const activeChatIdRef = useRef(null);
    const streamingMessageIndexRef = useRef(null);

    // Controle de conexão — usado por waitForSocket
    const isConnectedRef = useRef(false);
    const pendingSocketResolversRef = useRef([]);

    const {
        isDrawerChat = false, defaultMessage = ""
    } = options;

    const accessToken = `Bearer ${authToken}`;

    // Inicializar socket
    useEffect(() => {
        if (!authToken) return;

        console.log('Inicializando socket JusGPT...');

        const newSocket = io(process.env.REACT_APP_SOCKET_URL || 'http://localhost:4000', {
            path: process.env.REACT_APP_SOCKET_PATH,
            transports: ['websocket'],
            auth: {
                token: authToken
            },
            autoConnect: true,
            reconnection: true,
            reconnectionAttempts: 5,
            reconnectionDelay: 1000,
            reconnectionDelayMax: 5000,
            timeout: 20000,
        });

        setSocket(newSocket);

        return () => {
            console.log('Limpando socket JusGPT...');
            newSocket.close();
        };
    }, [authToken]);

    // Configurar listeners do socket
    useEffect(() => {
        if (!socket) return;

        const flushPendingResolvers = () => {
            isConnectedRef.current = true;
            pendingSocketResolversRef.current.forEach(resolve => {
                resolve();
            });
            pendingSocketResolversRef.current = [];
        };

        socket.on('connect', () => {
            console.log('Socket JusGPT conectado!');
            flushPendingResolvers();
        });

        // Se o socket já estava conectado antes deste effect rodar (race condition),
        // drena a fila imediatamente sem precisar aguardar o próximo evento 'connect'
        if (socket.connected) {
            flushPendingResolvers();
        }

        socket.on('disconnect', () => {
            console.log('Socket JusGPT desconectado!');
            isConnectedRef.current = false;
        });

        socket.on('error', (error) => {
            console.error('Erro no socket JusGPT:', error);
        });

        socket.on('connect_error', (err) => {
            console.log('Erro de conexão JusGPT:', err.message);
        });

        // Listener para título criado
        socket.on('contextTitleCreated', (response) => {
            setChatRecent(prevChats =>
                prevChats.map(chat =>
                    chat.id === response.chat_id ?
                    { ...chat,
                        title: response.title,
                        description: response.title,
                        date: response.date || chat.date
                    } :
                    chat
                )
            );
        });

        // Listener para carregar mensagens do chat
        socket.on('load_chat_messages', (response) => {
            setLoadingChat(false);
            setChatId(response.chat_id);

            const messages = response.messages.map((msg) => ({
                text: msg.message,
                file: msg.file,
                role: msg.role,
                me: msg.role === 'user',
                ia: msg.role === 'model',
                docx: msg.role === 'model'
            }));

            setChatMessages(messages.length > 0 ? messages : (defaultMessage ? [{
                text: defaultMessage,
                role: "assistant",
            }] : []));

            // Callback para evento de chat carregado
            if (callbacks.onChatLoaded) {
                callbacks.onChatLoaded(response.chat_id, messages.length);
            }
        });

        // Listener para erros
        socket.on('error', () => {
            setLoadingMessage(false);
            setChatMessages(prev => [...prev, {
                text: "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.",
                role: 'system',
            }]);
            isFirstChunkRef.current = true;
            streamingMessageIndexRef.current = null;

            // Track do erro
            trackResponseError({
                chat_id: chatIdRef.current,
                error_type: 'processing_error',
                wait_time: 0
            });
        });

        // Listener para timeout de processamento
        socket.on('timeout_error', (data) => {
            setLoadingMessage(false);

            // Usa a mensagem do socket se disponível, senão usa mensagem padrão
            const errorMessage = data ? .message ||
                "Isso pode acontecer quando o PDF é muito grande, tem muitas imagens ou foi gerado a partir de scans. Tente comprimir ou reparar o arquivo antes de enviar novamente.";

            setChatMessages(prev => [...prev, {
                text: errorMessage,
                role: 'system',
                isTimeoutError: true
            }]);
            isFirstChunkRef.current = true;
            streamingMessageIndexRef.current = null;

            // Track do erro de timeout
            trackResponseError({
                chat_id: chatIdRef.current,
                error_type: 'timeout',
                wait_time: data ? .wait_time || 30
            });
        });

        // Listener para mensagens de promoção
        socket.on('promo_message', ({
            content,
            chat_id
        }) => {
            console.log('Recebida mensagem de promoção:', {
                content,
                chat_id,
                isDrawerChat
            });

            // Verifica se a mensagem é para o chat atualmente ativo
            const currentActiveChatId = activeChatIdRef.current;

            // Se o chat_id não bate com o chat ativo, ignora a mensagem
            if (chat_id && chat_id !== currentActiveChatId) {
                console.log('Ignorando mensagem de promoção para chat inativo:', {
                    chat_id,
                    currentActiveChatId
                });
                return;
            }

            // Se é um drawer chat E há um chat ativo, adiciona a mensagem na conversa
            if (isDrawerChat && currentActiveChatId) {
                const currentMessages = chatMessagesRef.current;
                const newMessages = [
                    ...currentMessages,
                    {
                        text: content,
                        role: "assistant",
                        isPromotion: true,
                    },
                ];
                setChatMessages(newMessages);
            }

            // Sempre notifica o evento para que o ChatLauncher decida o que fazer
            PromoNotificationEvents.notifyPromoReceived();
        });

        // Listener para novas mensagens
        socket.on('new_message', ({
            content,
            chat_id
        }) => {
            setBusiness(null);

            // Verifica se a mensagem é para o chat atualmente ativo
            const currentActiveChatId = activeChatIdRef.current;

            // Se o chat_id não bate com o chat ativo, ignora a mensagem
            if (chat_id && chat_id !== currentActiveChatId) {
                console.log('Ignorando mensagem para chat inativo:', {
                    chat_id,
                    currentActiveChatId
                });
                return;
            }

            setLoadingMessage(false);
            const currentMessages = chatMessagesRef.current;

            if (isFirstChunkRef.current) {
                const newMessages = [
                    ...currentMessages,
                    {
                        text: content,
                        role: "model",
                    },
                ];

                // Armazena o índice da mensagem que está sendo construída
                streamingMessageIndexRef.current = newMessages.length - 1;
                setChatMessages(newMessages);
                isFirstChunkRef.current = false;
            } else {
                // Chunks subsequentes - atualiza apenas a mensagem do modelo que está sendo construída
                const updatedMessages = [...currentMessages];
                const streamingIndex = streamingMessageIndexRef.current;

                // Verifica se o índice é válido e se a mensagem ainda é do modelo
                if (streamingIndex !== null &&
                    streamingIndex < updatedMessages.length &&
                    updatedMessages[streamingIndex].role === "model") {
                    updatedMessages[streamingIndex].text += content;
                    setChatMessages(updatedMessages);
                } else {
                    // Se perdeu a referência, procura pela última mensagem do modelo
                    for (let i = updatedMessages.length - 1; i >= 0; i--) {
                        if (updatedMessages[i].role === "model") {
                            updatedMessages[i].text += content;
                            streamingMessageIndexRef.current = i;
                            setChatMessages(updatedMessages);
                            break;
                        }
                    }
                }
            }
        });

        // Listener para stream completo
        socket.on('streamComplete', (data) => {
            // Extrai chat_id se vier como objeto ou usa data diretamente se for string/undefined
            const chat_id = data ? .chat_id || data;
            const currentActiveChatId = activeChatIdRef.current;

            // Se o chat_id não bate com o chat ativo, ignora o streamComplete
            if (chat_id && chat_id !== currentActiveChatId) {
                console.log('Ignorando streamComplete para chat inativo:', {
                    chat_id,
                    currentActiveChatId
                });
                return;
            }

            // Reset das referências de streaming
            isFirstChunkRef.current = true;
            streamingMessageIndexRef.current = null;

            const currentMessages = chatMessagesRef.current;
            const currentChatId = chatIdRef.current;

            // Atualizar título se é a primeira resposta
            if (currentMessages.length === 2 && currentChatId && !titleUpdatedChatsRef.current.has(currentChatId)) {
                const firstUserMessage = currentMessages.find(msg => msg.role === 'user');
                if (firstUserMessage) {
                    // Verificar se existe texto na mensagem, caso contrário usar título padrão
                    const messageText = firstUserMessage.text || '';
                    const chatTitle = messageText.length > 50 ?
                        messageText.substring(0, 50) + '...' :
                        messageText.length > 0 ?
                        messageText :
                        'Nova Conversa';

                    titleUpdatedChatsRef.current.add(currentChatId);

                    setChatRecent(prevChats =>
                        prevChats.map(chat =>
                            chat.id === currentChatId ?
                            { ...chat,
                                title: chatTitle,
                                description: chatTitle
                            } :
                            chat
                        )
                    );
                }
            }

            // Aguardar arquivo para QuickChats específicos
            if (pendingQuickChatTypeRef.current &&
                (pendingQuickChatTypeRef.current === 'Resumo de caso' ||
                    pendingQuickChatTypeRef.current === 'Análise de documentos')) {
                setTimeout(() => {
                    setChatMessages(prev => {
                        const updatedMessages = [...prev];
                        if (updatedMessages.length > 0) {
                            updatedMessages[updatedMessages.length - 1] = {
                                ...updatedMessages[updatedMessages.length - 1],
                                isFileRequest: true
                            };
                        }
                        return updatedMessages;
                    });
                    setWaitingForFile(true);
                    setPendingQuickChatType(null);
                    pendingQuickChatTypeRef.current = null;
                }, 500);
            }
        });

        // Listener para exibir banner de stauts de geração de documento
        socket.on('business_generation_status', (response) => {
            if (response.chat_id !== chatIdRef.current) {
                return;
            } else if (response.content === 'Erro ao gerar documento') {
                setBusiness(null);
                setLoadingMessage(false);
                const currentMessages = chatMessagesRef.current;

                const newMessages = [
                    ...currentMessages,
                    {
                        text: response.content,
                        role: "error",
                    },
                ];
                setChatMessages(newMessages);
                return;
            }
            console.log('business_generation_status', response);
            setBusiness(response);
        });

        // Listener para arquivo gerado
        socket.on('fileGenerated', (response) => {
            setLoadingMessage(false);

            const base64 = response.file_data;
            const byteCharacters = atob(base64);
            const byteNumbers = new Array(byteCharacters.length);

            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], {
                type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            });

            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Documento JusGPT.docx';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

            // Callback para evento de DOCX recebido
            if (callbacks.onDocxReceived) {
                callbacks.onDocxReceived(chatIdRef.current);
            }

            setChatMessages(prev => [
                ...prev,
                {
                    text: "Arquivo gerado com sucesso, lembre-se de substituir os exemplos utilizados e revisar o conteúdo do arquivo.",
                    role: 'system',
                }
            ]);
        });

        // Listeners para delete de chat
        socket.on('delete-chat-success', (response) => {
            setChatRecent(prevChats => prevChats.filter(chat => chat.id !== response.chat_id));
            toast.success('Conversa excluída com sucesso!');
            setDeletingChatId(null);
        });

        socket.on('delete-chat-error', (response) => {
            toast.error(response.message || 'Erro ao excluir conversa. Tente novamente.');
            setDeletingChatId(null);
        });

        // Mensagem inicial
        if (defaultMessage !== "") {
            setTimeout(() => {
                setChatMessages([{
                    text: defaultMessage || "Olá, eu sou o JusGPT, a inteligência artificial jurídica mais potente do Brasil. Estou aqui para te ajudar no que for preciso. Basta me perguntar!",
                    role: "assistant",
                }, ]);
            }, 200);
        }

        socket.on("chat_created", (response) => {
            setChatId(response.chat_id);
            trackNewChatCreated({
                chat_id: response.chat_id,
                is_quick_chat: isDrawerChat,
                quick_chat_type: isDrawerChat ? "drawer_quick_reply" : null,
            });
        });

        socket.on("chat_creation_error", () => {
            toast.error("Erro ao criar nova conversa. Tente novamente.");
        });

        socket.on("limit_exceeded_oabmg", (response) => {
            openModalSubscriptionGPT(response.period_end || new Date());
        });

        socket.on("message", (response) => {
            // Valida se a mensagem é para o chat ativo
            const chat_id = response.chat_id;
            const currentActiveChatId = activeChatIdRef.current;

            if (chat_id && chat_id !== currentActiveChatId) {
                console.log('Ignorando mensagem de erro para chat inativo:', {
                    chat_id,
                    currentActiveChatId
                });
                return;
            }

            // Reseta estados de loading e streaming
            setLoadingMessage(false);
            isFirstChunkRef.current = true;
            streamingMessageIndexRef.current = null;

            setChatMessages(prev => [...prev, {
                text: response.content || "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.",
                role: 'error',
            }]);

            // Track do erro
            trackResponseError({
                chat_id: chatIdRef.current,
                error_type: 'message_error',
                wait_time: 0
            });
        });

        // Cleanup
        return () => {
            if (socket) {
                socket.off('chats_list');
                socket.off('contextTitleCreated');
                socket.off('load_chat_messages');
                socket.off('error');
                socket.off('timeout_error');
                socket.off('new_message');
                socket.off('promo_message');
                socket.off('streamComplete');
                socket.off('business_generation_status');
                socket.off('fileGenerated');
                socket.off('delete-chat-success');
                socket.off('delete-chat-error');
                socket.off('limit_exceeded_oabmg');
                socket.off('message');
            }
        };
    }, [socket, accessToken]);

    // Sincronizar refs
    useEffect(() => {
        chatMessagesRef.current = chatMessages;
    }, [chatMessages]);

    useEffect(() => {
        chatIdRef.current = chatId;
        activeChatIdRef.current = chatId; // Sincroniza o chat ativo
    }, [chatId]);

    // Helper: aguarda próximo evento chat_created
    const waitForChatCreated = () => {
        return new Promise((resolve, reject) => {
            const handleCreated = (response) => {
                socket ? .off("chat_created", handleCreated); // garante execução única
                if (response ? .chat_id) {
                    resolve(response.chat_id);
                } else {
                    reject(new Error("Chat criado sem id"));
                }
            };
            socket ? .on("chat_created", handleCreated);
        });
    };

    // Função para cancelar mensagens pendentes quando muda de chat
    const cancelPendingMessages = () => {
        setLoadingMessage(false);
        isFirstChunkRef.current = true;
        streamingMessageIndexRef.current = null;
    };

    return {
        socket,
        loadingMessage,
        setLoadingMessage,
        loadingChat,
        setLoadingChat,
        chatMessages,
        setChatMessages,
        chatRecent,
        setChatRecent,
        chatId,
        setChatId,
        waitingForFile,
        setWaitingForFile,
        pendingQuickChatType,
        setPendingQuickChatType,
        deletingChatId,
        setDeletingChatId,
        pendingQuickChatTypeRef,
        accessToken,
        cancelPendingMessages,
        waitForChatCreated,
        /**
         * Retorna uma Promise que resolve assim que o socket estiver conectado.
         * Se já estiver conectado, resolve imediatamente.
         * Rejeita após `timeoutMs` ms (padrão 10 s) para evitar que fique pendente
         * indefinidamente caso o socket nunca conecte.
         */
        waitForSocket: (timeoutMs = 10000) => new Promise((resolve, reject) => {
            if (isConnectedRef.current) {
                resolve();
                return;
            }

            const timer = setTimeout(() => {
                const idx = pendingSocketResolversRef.current.indexOf(wrappedResolve);
                if (idx !== -1) pendingSocketResolversRef.current.splice(idx, 1);
                reject(new Error('waitForSocket: timeout aguardando conexão do socket'));
            }, timeoutMs);

            const wrappedResolve = () => {
                clearTimeout(timer);
                resolve();
            };

            pendingSocketResolversRef.current.push(wrappedResolve);
        }),
        business
    };
};