import React, {
    useEffect,
    useState
} from "react";
import * as S from "./styles";
import {
    Box,
    IconButton,
    Tooltip
} from "@mui/material";
import {
    useSelector
} from "react-redux";
import {
    toast
} from 'react-toastify';
import ReactLoading from "react-loading";
import Select from "react-select";

import MessageList from "../../JusGPT/components/MessageList";
import ChatInput from "../../JusGPT/components/ChatInput";

import {
    useJusGPTCore
} from "../../JusGPT/hooks/useJusGPTCore";
import {
    useScrollToBottom
} from "../../JusGPT/hooks/useScrollToBottom";
import {
    useDragDrop
} from "../../JusGPT/hooks/useDragDrop";
import {
    EventsSegmentJusGPT
} from "../../JusGPT/helpers/EventsSegmentJusGPT";
import {
    getChats
} from "../../JusGPT/api";

import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DragDropOverlay from "../../JusGPT/components/DragDropOverlay";
import {
    toAbsoluteUrl
} from "../../../../_metronic/_helpers";

const historySelectStyles = {
    control: (provided, state) => ({
        ...provided,
        background: '#E6F7F2',
        borderColor: state.isFocused ? '#01AB7D' : '#B3E6D8',
        borderRadius: '8px',
        minHeight: '44px',
        boxShadow: state.isFocused ? '0 0 0 1px #01AB7D' : 'none',
        '&:hover': {
            borderColor: '#01AB7D',
        },
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#E6F7F2' : state.isFocused ? '#F0FAF7' : '#FFF',
        color: '#1F2937',
        padding: '10px 12px',
        cursor: 'pointer',
        '&:active': {
            backgroundColor: '#E6F7F2',
        },
    }),
    placeholder: (provided) => ({
        ...provided,
        color: '#1F2937',
        fontWeight: 500,
    }),
    singleValue: (provided) => ({
        ...provided,
        color: '#1F2937',
        fontWeight: 500,
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: '#6B7280',
        '&:hover': {
            color: '#01AB7D',
        },
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius: '8px',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
        zIndex: 9999,
    }),
    menuList: (provided) => ({
        ...provided,
        padding: '4px',
    }),
};

let lastDrawerChatId = null;

const QUICK_ACTIONS = [{
        label: 'Planos',
        prompt: 'Quais são os planos disponíveis na Jusfy, seus preços e o que cada um inclui?'
    },
    {
        label: 'Pagamentos',
        prompt: 'Quais são as formas de pagamento aceitas na Jusfy e como faço para alterar meu plano ou cancelar?'
    },
    {
        label: 'Calculadoras',
        prompt: 'Quais calculadoras jurídicas estão disponíveis na Jusfy e como usar cada uma delas?'
    },
    {
        label: 'JusFinder',
        prompt: 'O que é o JusFinder, como funciona a busca de processos e quais filtros posso usar?'
    },
    {
        label: 'JusGPT',
        prompt: 'O que é o JusGPT, como funciona e quais são suas principais funcionalidades?'
    },
    {
        label: 'Manual de uso',
        prompt: 'Me mostre um guia rápido de como começar a usar a plataforma Jusfy'
    },
    {
        label: 'Ferramentas',
        prompt: 'Liste todas as ferramentas disponíveis na Jusfy com uma breve descrição de cada uma'
    },
];

export default function JusGPTDrawer({
    open,
    onClose,
    tag = "",
    context = "",
    defaultMessage = "",
    onTalkToHuman
}) {
    const {
        authToken,
        user
    } = useSelector((state) => state.auth);

    const [loadingChats, setLoadingChats] = useState(false);
    const [hasTemporaryChat, setHasTemporaryChat] = useState(false);

    // Inicializar eventos do Segment
    const {
        trackFileUploaded,
        trackFileUploadError,
        trackDrawerConversationChanged,
        trackDrawerLaunched,
        trackDrawerQuickActionClicked,
    } = EventsSegmentJusGPT();

    const {
        chatMessages,
        text,
        setText,
        selectedFiles,
        previewUrls,
        uploadingFile,
        loadingMessage,
        waitingForFile,
        setWaitingForFile,
        setSelectedFiles,
        setPreviewUrls,
        setChatMessages,
        setLoadingChat,
        loadingChat,
        handleSendMessage,
        handleFileUpload,
        removeFile,
        parseMarkdown,
        copyToClipboard,
        generateDocx,
        fileInputRef,
        chatId,
        setChatId,
        socket,
        accessToken,
        chatRecent,
        setChatRecent,
        business,
    } = useJusGPTCore(authToken, {
        isDrawerChat: true,
        manageChatList: true,
        defaultMessage
    });

    const {
        messagesRef,
        showScrollButton,
        scrollToBottom
    } = useScrollToBottom(chatMessages, chatId);

    // Track quando o drawer é aberto (apenas uma vez por abertura)
    useEffect(() => {
        if (open) {
            trackDrawerLaunched({
                tag,
                context
            });
        }
    }, [open, tag, context, trackDrawerLaunched]);

    useEffect(() => {
        if (!open) return;

        const fetchData = async () => {
            setLoadingChats(true);
            try {
                const {
                    chats: fetched = []
                } = await getChats(accessToken, {
                    tag
                });
                setChatRecent(fetched);

                // Se houver um chat "em memória" (mesma sessão), restaura
                if (lastDrawerChatId) {
                    setChatId(lastDrawerChatId);
                    if (socket ? .connected) {
                        socket.emit("get_chat_messages", lastDrawerChatId, accessToken);
                    }
                } else {
                    // Se não há chat em memória, mostra o defaultMessage sem criar conversa
                    if (defaultMessage) {
                        setChatMessages([{
                            text: defaultMessage,
                            role: "assistant"
                        }]);
                        setHasTemporaryChat(true);
                    }
                }
            } catch (err) {
                console.error("Erro ao carregar lista de chats:", err);
                toast.error("Não foi possível carregar a lista de conversas.");
            } finally {
                setLoadingChats(false);
            }
        };

        if (accessToken) fetchData();
    }, [accessToken, open, tag, socket, defaultMessage, setChatMessages, setChatRecent]);

    // Remove o estado temporário quando um chat real é criado
    useEffect(() => {
        if (hasTemporaryChat && chatId) {
            setHasTemporaryChat(false);
        }
    }, [chatId, hasTemporaryChat]);

    // Reset estados quando o drawer é fechado
    useEffect(() => {
        if (!open) {
            setWaitingForFile(false);
            setHasTemporaryChat(false);
        }
    }, [open, setWaitingForFile]);

    const handleSelectChat = (chat) => {
        if (chat && chat.id !== chatId) {
            setChatId(chat.id);
            lastDrawerChatId = chat.id;
            setHasTemporaryChat(false);
            setLoadingChat(true);
            if (socket ? .connected) {
                socket.emit('get_chat_messages', chat.id, accessToken);
            }
            trackDrawerConversationChanged({
                tag,
                chat_id: chat.id
            });
        }
    };

    const handleClose = () => {
        if (chatId) lastDrawerChatId = chatId;
        setWaitingForFile(false);
        onClose();
    };

    const handleTalkToHuman = () => {
        if (onClose) {
            onClose();
        }
        // Abre o chat do HubSpot
        if (window.openHubSpotChat) {
            window.openHubSpotChat();
        }
        if (onTalkToHuman) {
            onTalkToHuman();
        }
    };

    const handleDrawerSendMessage = async (quick_chat_prompt = null, silent = false, file = null) => {
        return handleSendMessage(quick_chat_prompt, silent, file, tag, context);
    };

    const {
        isDragOver
    } = useDragDrop(
        waitingForFile,
        setWaitingForFile,
        setChatMessages,
        handleDrawerSendMessage,
        setSelectedFiles,
        setPreviewUrls, {
            onFileUploaded: trackFileUploaded,
            onFileUploadError: trackFileUploadError
        }
    );

    // Determina se está no estado inicial (sem mensagens ou apenas mensagem temporária)
    const isInitialState = tag === 'HELP' && !chatId && chatMessages.length <= 1;

    // Handler para quick actions
    const handleQuickAction = (action) => {
        trackDrawerQuickActionClicked({
            action_label: action.label,
            action_prompt: action.prompt
        });
        setText(action.prompt);
        handleDrawerSendMessage(action.prompt);
    };

    return ( <
        S.FilterDrawer anchor = "right"
        open = {
            open
        }
        onClose = {
            handleClose
        }
        disableScrollLock = {
            true
        } >
        <
        Box sx = {
            {
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "100%"
            }
        } > { /* Header */ } <
        S.HeaderSection >
        <
        S.HeaderTitle > {
            tag === 'HELP' ? 'Jusfy | Central de atendimento' : 'JusGPT | Acesso rápido'
        } <
        /S.HeaderTitle> <
        Tooltip title = "Suporte com atendente" >
        <
        IconButton size = "small"
        onClick = {
            handleTalkToHuman
        } >
        <
        SupportAgentIcon sx = {
            {
                fontSize: 20,
                color: '#383839 !important'
            }
        }
        /> <
        /IconButton> <
        /Tooltip> <
        IconButton size = "small"
        onClick = {
            handleClose
        } >
        <
        CloseIcon sx = {
            {
                fontSize: 20,
                color: '#383839 !important'
            }
        }
        /> <
        /IconButton> <
        /S.HeaderSection>

        { /* Estado inicial com ilustração e quick actions */ } {
            tag === 'HELP' && isInitialState && ( <
                S.MainCard > { /* Seção de Histórico com toggle */ } {
                    tag === 'HELP' && ( <
                        S.HistorySelectContainer >
                        <
                        Select value = {
                            chatId ? chatRecent.find(c => c.id === chatId) ? {
                                value: chatId,
                                label: chatRecent.find(c => c.id === chatId) ? .title ||
                                    chatRecent.find(c => c.id === chatId) ? .description ||
                                    'Conversa sem título'
                            } : null : null
                        }
                        onChange = {
                            (option) => {
                                if (option) {
                                    const selectedChat = chatRecent.find(chat => chat.id === option.value);
                                    if (selectedChat) {
                                        handleSelectChat(selectedChat);
                                    }
                                }
                            }
                        }
                        options = {
                            chatRecent.map((chat) => ({
                                value: chat.id,
                                label: chat.title || chat.description || 'Conversa sem título'
                            }))
                        }
                        placeholder = "Histórico"
                        isDisabled = {
                            loadingChats
                        }
                        isLoading = {
                            loadingChats
                        }
                        isClearable = {
                            false
                        }
                        isSearchable = {
                            false
                        }
                        styles = {
                            historySelectStyles
                        }
                        noOptionsMessage = {
                            () => "Nenhuma conversa"
                        }
                        /> <
                        /S.HistorySelectContainer>
                    )
                }

                <
                S.WelcomeSection >
                <
                S.WelcomeIllustration src = {
                    toAbsoluteUrl("/media/jusgpt/banner.svg")
                }
                alt = "Assistente Jusfy" / > {
                    /* <S.WelcomeTitle>
                                    Explore a Jusfy no seu ritmo,<br />
                                    com <span>ajuda disponível</span> a<br />
                                    qualquer momento
                                  </S.WelcomeTitle> */
                } <
                S.WelcomeText >
                Olá!👋Sou o assistente da Jusfy.Posso te ajudar a entender melhor nossas ferramentas, planos e funcionalidades. <
                /S.WelcomeText> <
                /S.WelcomeSection>

                <
                S.QuickActionsContainer >
                <
                S.QuickActionsTitle > Principais dúvidas < /S.QuickActionsTitle> {
                    QUICK_ACTIONS.map((action, index) => ( <
                        S.QuickActionChip key = {
                            index
                        }
                        onClick = {
                            () => handleQuickAction(action)
                        } > {
                            action.label
                        } <
                        /S.QuickActionChip>
                    ))
                } <
                S.QuickActionChip onClick = {
                    handleTalkToHuman
                } >
                <
                SupportAgentIcon sx = {
                    {
                        marginRight: '4px',
                        color: '#383839 !important'
                    }
                }
                />
                Continuar com um atendente <
                /S.QuickActionChip> <
                /S.QuickActionsContainer>

                { /* Input dentro do card */ } <
                S.CardInputContainer >
                <
                ChatInput text = {
                    text
                }
                setText = {
                    setText
                }
                selectedFiles = {
                    selectedFiles
                }
                previewUrls = {
                    previewUrls
                }
                uploadingFile = {
                    uploadingFile
                }
                loadingMessage = {
                    loadingMessage
                }
                chatMessages = {
                    chatMessages
                }
                fileInputRef = {
                    fileInputRef
                }
                handleSendMessage = {
                    () => handleDrawerSendMessage()
                }
                handleFileUpload = {
                    handleFileUpload
                }
                removeFile = {
                    removeFile
                }
                isDrawer = {
                    true
                }
                expandedInput = {
                    true
                }
                tag = {
                    tag
                }
                business = {
                    business
                }
                chatId = {
                    chatId
                }
                userId = {
                    user ? .id
                }
                /> <
                /S.CardInputContainer> <
                /S.MainCard>
            )
        }

        { /* Estado com mensagens - quando já há conversa ativa */ } {
            (tag !== 'HELP' || !isInitialState) && ( <
                > { /* Quick actions na tela de conversa */ } {
                    tag === 'HELP' && ( <
                        >
                        <
                        S.HistorySelectContainer >
                        <
                        Select value = {
                            chatId ? chatRecent.find(c => c.id === chatId) ? {
                                value: chatId,
                                label: chatRecent.find(c => c.id === chatId) ? .title ||
                                    chatRecent.find(c => c.id === chatId) ? .description ||
                                    'Conversa sem título'
                            } : null : null
                        }
                        onChange = {
                            (option) => {
                                if (option) {
                                    const selectedChat = chatRecent.find(chat => chat.id === option.value);
                                    if (selectedChat) {
                                        handleSelectChat(selectedChat);
                                    }
                                }
                            }
                        }
                        options = {
                            chatRecent.map((chat) => ({
                                value: chat.id,
                                label: chat.title || chat.description || 'Conversa sem título'
                            }))
                        }
                        placeholder = "Histórico"
                        isDisabled = {
                            loadingChats
                        }
                        isLoading = {
                            loadingChats
                        }
                        isClearable = {
                            false
                        }
                        isSearchable = {
                            false
                        }
                        styles = {
                            historySelectStyles
                        }
                        noOptionsMessage = {
                            () => "Nenhuma conversa"
                        }
                        /> <
                        /S.HistorySelectContainer> <
                        />
                    )
                }

                { /* Lista de mensagens */ } <
                div style = {
                    {
                        flex: 1,
                        overflow: "auto",
                        padding: 16
                    }
                } > {
                    loadingChat ? ( <
                        div style = {
                            {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '8px',
                                height: '100%',
                                padding: '20px'
                            }
                        } >
                        <
                        ReactLoading type = "spin"
                        color = "#34BC97"
                        width = "30px"
                        height = "30px" / >
                        Carregando conversa...
                        <
                        /div>
                    ) : (chatId || hasTemporaryChat) && ( <
                        MessageList chatMessages = {
                            chatMessages
                        }
                        messagesRef = {
                            messagesRef
                        }
                        loadingMessage = {
                            loadingMessage
                        }
                        fileInputRef = {
                            fileInputRef
                        }
                        parseMarkdown = {
                            parseMarkdown
                        }
                        copyToClipboard = {
                            copyToClipboard
                        }
                        generateDocx = {
                            generateDocx
                        }
                        show = {
                            false
                        }
                        chatId = {
                            chatId
                        }
                        />
                    )
                } <
                /div>

                { /* Botão flutuante para scroll para baixo */ } {
                    showScrollButton && (chatId || hasTemporaryChat) && ( <
                        IconButton onClick = {
                            () => scrollToBottom()
                        }
                        sx = {
                            {
                                position: 'absolute',
                                bottom: '140px',
                                right: '35px',
                                backgroundColor: '#01AB7D',
                                zIndex: 1000,
                                '&:hover': {
                                    backgroundColor: '#019968',
                                },
                                width: '32px',
                                height: '32px',
                            }
                        } >
                        <
                        KeyboardArrowDownIcon sx = {
                            {
                                color: '#fff !important'
                            }
                        }
                        /> <
                        /IconButton>
                    )
                }

                { /* Input - sempre visível na tela de conversa */ } <
                div style = {
                    {
                        padding: 12
                    }
                } >
                <
                ChatInput text = {
                    text
                }
                setText = {
                    setText
                }
                selectedFiles = {
                    selectedFiles
                }
                previewUrls = {
                    previewUrls
                }
                uploadingFile = {
                    uploadingFile
                }
                loadingMessage = {
                    loadingMessage
                }
                chatMessages = {
                    chatMessages
                }
                fileInputRef = {
                    fileInputRef
                }
                handleSendMessage = {
                    () => handleDrawerSendMessage()
                }
                handleFileUpload = {
                    handleFileUpload
                }
                removeFile = {
                    removeFile
                }
                isDrawer = {
                    true
                }
                tag = {
                    tag
                }
                business = {
                    business
                }
                chatId = {
                    chatId
                }
                userId = {
                    user ? .id
                }
                /> <
                /div> <
                />
            )
        }

        { /* Drag Drop Overlay Component */ } <
        DragDropOverlay isDragOver = {
            isDragOver
        }
        /> <
        /Box> <
        /S.FilterDrawer>
    );
}