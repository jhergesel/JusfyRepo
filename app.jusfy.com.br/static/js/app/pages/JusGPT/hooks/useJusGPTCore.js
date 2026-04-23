import {
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback
} from "react";
import {
    toast
} from "react-toastify";
import {
    pdfjs
} from "react-pdf/dist/esm/entry.webpack";
import {
    uploadFile
} from "../api";
import {
    useSocket
} from "./useSocket";
import {
    EventsSegmentJusGPT
} from "../helpers/EventsSegmentJusGPT";
import {
    JUSGPT_ACCEPTED_FILE_EXTENSIONS
} from "../config/upload";

export function useJusGPTCore(authToken, {
    isDrawerChat = false,
    manageChatList = false,
    onNewChat,
    onMessageSent,
    defaultMessage = ""
} = {}) {
    const {
        trackMessageSent,
        trackFileUploaded,
        trackFileUploadError,
        trackDocxRequested,
        trackDocxReceived,
        trackTextCopied,
        trackChatLoaded,
    } = EventsSegmentJusGPT();

    const {
        socket,
        chatMessages,
        setChatMessages,
        chatId,
        setChatId,
        chatRecent,
        setChatRecent,
        loadingMessage,
        setLoadingMessage,
        cancelPendingMessages,
        accessToken,
        loadingChat,
        setLoadingChat,
        waitingForFile,
        setWaitingForFile,
        pendingQuickChatType,
        setPendingQuickChatType,
        deletingChatId,
        setDeletingChatId,
        pendingQuickChatTypeRef,
        waitForChatCreated,
        waitForSocket,
        business,
    } = useSocket(authToken, {
        onDocxReceived: (chatId) => {
            trackDocxReceived({
                chat_id: chatId,
                download_success: true
            });
        },
        onChatLoaded: (chatId, messagesCount) => {
            trackChatLoaded({
                chat_id: chatId,
                messages_count: messagesCount
            });
        }
    }, {
        isDrawerChat,
        defaultMessage
    });

    const fileInputRef = useRef(null);
    const slowResponseTimerRef = useRef(null);

    const [text, setText] = useState("");
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);
    const [uploadingFile, setUploadingFile] = useState(false);

    const newChat = async () => {
        cancelPendingMessages();
        setChatMessages([]);
        setLoadingMessage(false);

        const {
            chat_id
        } = await createChatInBackend();

        if (onNewChat) onNewChat(chat_id);

        return chat_id;
    };

    const createChatInBackend = async (tag = null, context = null) => {
        try {
            socket ? .emit("new_chat_jusgpt", null, accessToken, tag, context);

            const newChatId = await waitForChatCreated();

            if (manageChatList) {
                const newChatItem = {
                    id: newChatId,
                    title: "Nova conversa",
                    description: "Conversa iniciada",
                    date: new Date().toISOString(),
                    tag: tag,
                };
                setChatRecent((prev) => [newChatItem, ...prev]);
            }

            return {
                chat_id: newChatId
            };
        } catch (err) {
            console.error("Erro ao criar chat:", err);
            throw err;
        }
    };

    useEffect(() => {
        // Se recebeu business_generation_status, cancela o timer
        if (business && business.content) {
            if (slowResponseTimerRef.current) {
                clearTimeout(slowResponseTimerRef.current);
                slowResponseTimerRef.current = null;
            }
            // Remove mensagem de aviso se existir
            setChatMessages((prev) => prev.filter((msg) => !msg.isSlowWarning));
            return;
        }

        if (loadingMessage && !uploadingFile) {
            if (slowResponseTimerRef.current) clearTimeout(slowResponseTimerRef.current);
            slowResponseTimerRef.current = setTimeout(() => {
                setChatMessages((prev) => {
                    if (prev.some((msg) => msg.isSlowWarning)) return prev;
                    return [
                        ...prev,
                        {
                            text: "Esta mensagem está demorando mais que o esperado. Por favor, aguarde um pouco mais ou tente novamente.",
                            role: "system",
                            isSlowWarning: true,
                        },
                    ];
                });
            }, 30000);
        } else {
            if (slowResponseTimerRef.current) {
                clearTimeout(slowResponseTimerRef.current);
                slowResponseTimerRef.current = null;
            }
            if (!loadingMessage) {
                setChatMessages((prev) => prev.filter((msg) => !msg.isSlowWarning));
            }
        }
        return () => {
            if (slowResponseTimerRef.current) clearTimeout(slowResponseTimerRef.current);
        };
    }, [loadingMessage, uploadingFile, setChatMessages, business]);

    const getPdfPageCount = async (file) => {
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjs.getDocument({
                data: arrayBuffer
            }).promise;
            return pdf.numPages;
        } catch {
            return 0;
        }
    };

    const handleFileUpload = async (event) => {
        const files = Array.from(event.target.files);
        if (!files.length) return;

        const maxSize = 50 * 1024 * 1024;

        const validatedFiles = [];
        const validatedPreviews = [];

        for (const file of files) {
            const fileExtension = "." + file.name.split(".").pop().toLowerCase();

            // Valida tamanho
            if (file.size > maxSize) {
                toast.error(`O arquivo "${file.name}" excede o tamanho máximo permitido de 50 MB.`);
                continue;
            }

            // Valida tipo
            if (!JUSGPT_ACCEPTED_FILE_EXTENSIONS.includes(fileExtension)) {
                toast.error(`Arquivo "${file.name}" não suportado. Formatos aceitos: ${JUSGPT_ACCEPTED_FILE_EXTENSIONS.join(", ")}`);
                continue;
            }

            // Valida páginas do PDF
            if (fileExtension === ".pdf") {
                const pageCount = await getPdfPageCount(file);
                if (pageCount > 1000) {
                    toast.error(`O PDF "${file.name}" excede o limite de 1000 páginas permitido.`);
                    continue;
                }
            }

            validatedFiles.push(file);

            if (file.type.startsWith("image/")) {
                validatedPreviews.push(URL.createObjectURL(file));
            } else {
                validatedPreviews.push(null);
            }
        }

        if (validatedFiles.length > 0) {
            setSelectedFiles(prev => [...prev, ...validatedFiles]);
            setPreviewUrls(prev => [...prev, ...validatedPreviews]);
            toast.success(`${validatedFiles.length} arquivo(s) adicionado(s) com sucesso!`);
        }

        // Limpa o input para permitir selecionar o mesmo arquivo novamente
        event.target.value = "";
    };

    const removeFile = (index) => {
        setSelectedFiles(prev => prev.filter((_, i) => i !== index));
        setPreviewUrls(prev => prev.filter((_, i) => i !== index));
    };

    const handleSendMessage = useCallback(async (quick_chat_prompt = null, silent = false, file = null, tag = null, context = null, toolFlags = null) => {
        let currentChatId = chatId;

        const messageText = (text || quick_chat_prompt || "").trim();
        const filesToUpload = file ? [file] : selectedFiles;

        if (!messageText && filesToUpload.length === 0) return;

        // Cria chat no backend antes da primeira mensagem
        if (!currentChatId) {
            try {
                const {
                    chat_id
                } = await createChatInBackend(tag, context);
                currentChatId = chat_id;
            } catch (err) {
                console.error("Erro ao criar chat:", err);
            }
        }

        setLoadingMessage(true);

        if (!silent) {
            setChatMessages((prev) => [
                ...prev,
                {
                    text: messageText || (filesToUpload.length > 0 ? `Enviando ${filesToUpload.length} arquivo(s)…` : ""),
                    role: "user",
                    files: filesToUpload.length > 0 ?
                        filesToUpload.map(f => ({
                            name: f.name,
                            size: f.size,
                            type: f.type
                        })) :
                        null,
                },
            ]);
        }

        setText("");

        trackMessageSent({
            chat_id: currentChatId,
            has_file: filesToUpload.length > 0,
            file_type: filesToUpload[0] ? .type || null,
            message_length: messageText.length,
            is_quick_chat: isDrawerChat,
        });

        try {
            if (filesToUpload.length > 0) {
                setUploadingFile(true);

                // Upload de múltiplos arquivos de uma vez
                const uploadResponse = await uploadFile(filesToUpload, accessToken);

                if (!uploadResponse.success) throw new Error("Upload falhou");

                // uploadResponse.files é um array com [{fileUrl, originalName}, ...]
                const uploadedFiles = uploadResponse.files || [];

                // Track cada arquivo
                filesToUpload.forEach((file) => {
                    trackFileUploaded({
                        file_name: file.name,
                        file_type: file.type,
                        file_size: file.size,
                        upload_context: isDrawerChat ? "drawer" : "main",
                        upload_success: true,
                    });
                });

                const toolFlagsJson = JSON.stringify({
                    isContencioso: toolFlags ? .isContencioso || false,
                    isRDR: toolFlags ? .isRDR || false,
                    isProcon: toolFlags ? .isProcon || false,
                });

                socket.emit(
                    "adv-gemini-message",
                    currentChatId,
                    accessToken,
                    messageText || "Arquivos para análise",
                    uploadedFiles,
                    silent,
                    toolFlagsJson
                );
            } else {
                const toolFlagsJson = JSON.stringify({
                    isContencioso: toolFlags ? .isContencioso || false,
                    isRDR: toolFlags ? .isRDR || false,
                    isProcon: toolFlags ? .isProcon || false,
                });

                socket.emit(
                    "adv-gemini-message",
                    currentChatId,
                    accessToken,
                    messageText,
                    null,
                    silent,
                    toolFlagsJson
                );
            }

            if (onMessageSent) onMessageSent(chatId);
        } catch (err) {
            setLoadingMessage(false);
            trackFileUploadError({
                error_type: "upload_failed",
                file_name: filesToUpload[0] ? .name,
                file_type: filesToUpload[0] ? .type,
                file_size: filesToUpload[0] ? .size,
            });
            console.error(err);
            toast.error(err.response ? .data ? .error || "Erro ao enviar arquivo(s). Tente novamente.");
        } finally {
            setUploadingFile(false);
            setSelectedFiles([]);
            setPreviewUrls([]);
        }
    }, [chatId, text, selectedFiles, socket, accessToken, setChatMessages, setLoadingMessage, trackMessageSent, isDrawerChat, createChatInBackend, onMessageSent, setUploadingFile, trackFileUploaded, trackFileUploadError]);

    // === Utilitários ===
    const parseMarkdown = (t) => {
        let html = t || "";
        html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        html = html.replace(/_(.*?)_/g, "<em>$1</em>");
        html = html.replace(/\n/g, "<br />");
        html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
        html = html.replace(/\\\[(.*?)\]/g, '<span class="bracket">[$1]</span>');
        return html;
    };

    const copyToClipboard = (txt) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(txt).then(() => {
                trackTextCopied({
                    chat_id: chatId,
                    text_length: txt ? .length || 0,
                    copy_method: "clipboard_api",
                });
            });
        }
    };

    const generateDocx = (id, txt, toolFlags = null) => {
        setLoadingMessage(true);
        setChatMessages((prev) => [...prev, {
            text: "Gerando arquivo.",
            role: "system"
        }]);
        trackDocxRequested({
            chat_id: id,
            text_length: txt ? .length || 0
        });

        const toolFlagsJson = JSON.stringify({
            isContencioso: toolFlags ? .isContencioso || false,
            isRDR: toolFlags ? .isRDR || false,
            isProcon: toolFlags ? .isProcon || false,
        });

        socket.emit("generate_docx_file", id, accessToken, txt, toolFlagsJson);
    };

    const canSend = useMemo(() => (!!text.trim() || selectedFiles.length > 0) && !!socket, [text, selectedFiles, socket]);

    // Efeito para envio automático quando arquivo é selecionado e está aguardando arquivo
    useEffect(() => {
        if (selectedFiles.length > 0 && waitingForFile) {
            const timeoutId = setTimeout(() => {
                // Remove a propriedade isFileRequest da última mensagem
                setChatMessages(prev => {
                    const updatedMessages = [...prev];
                    if (updatedMessages.length > 0 && updatedMessages[updatedMessages.length - 1].isFileRequest) {
                        const lastMessage = { ...updatedMessages[updatedMessages.length - 1]
                        };
                        delete lastMessage.isFileRequest;
                        updatedMessages[updatedMessages.length - 1] = lastMessage;
                    }
                    return updatedMessages;
                });
                // Envia os arquivos automaticamente
                handleSendMessage("Aqui está(ão) o(s) documento(s) para análise.", true, null);
                setWaitingForFile(false);
            }, 100);

            return () => clearTimeout(timeoutId);
        }
    }, [selectedFiles, waitingForFile, handleSendMessage, setChatMessages, setWaitingForFile]);

    return {
        chatMessages,
        text,
        setText,
        selectedFiles,
        previewUrls,
        uploadingFile,
        loadingMessage,
        handleSendMessage,
        handleFileUpload,
        removeFile,
        parseMarkdown,
        copyToClipboard,
        generateDocx,
        fileInputRef,
        canSend,
        chatId,
        setChatId,
        chatRecent,
        setChatRecent,
        setSelectedFiles,
        setPreviewUrls,
        socket,
        setChatMessages,
        setLoadingMessage,
        loadingChat,
        setLoadingChat,
        waitingForFile,
        setWaitingForFile,
        pendingQuickChatType,
        setPendingQuickChatType,
        deletingChatId,
        setDeletingChatId,
        pendingQuickChatTypeRef,
        accessToken,
        cancelPendingMessages,
        createChatInBackend,
        newChat,
        waitForSocket,
        business
    };
}