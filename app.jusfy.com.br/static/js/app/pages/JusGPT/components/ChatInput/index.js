import ReactLoading from "react-loading";
import {
    IconButton
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import TelegramIcon from '@mui/icons-material/Telegram';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CloseIcon from '@mui/icons-material/Close';
import * as S from "./styles";
import {
    useHistory
} from "react-router-dom";
import {
    EventsSegmentJusGPT
} from "../../helpers/EventsSegmentJusGPT";

import {
    useJusGPTBusiness
} from '../../context/BusinessClientProvider';
import {
    JUSGPT_ACCEPTED_FILE_INPUT_ACCEPT
} from '../../config/upload';
import ToolsMenu from '../ToolsMenu';
import {
    BUSINESS_TOOLS
} from '../QuickChatCards';

const ChatInput = ({
    text,
    setText,
    selectedFiles,
    previewUrls,
    uploadingFile,
    loadingMessage,
    chatMessages,
    fileInputRef,
    handleSendMessage,
    handleFileUpload,
    removeFile,
    isDrawer,
    expandedInput,
    tag,
    business,
    chatId,
    userId,
    activeTools = {},
    onToggleTool,
}) => {
    const {
        trackDrawerRedirect,
        trackWhatsAppSupportOpened
    } = EventsSegmentJusGPT();
    const {
        isBusiness,
        businessLogo,
        businessLogoSmall,
        businessClient
    } = useJusGPTBusiness();
    const primaryColor = businessClient ? .font_color_primary || '#0030B9';

    const history = useHistory();

    const handleRedirect = () => {
        trackDrawerRedirect({
            tag,
        })
        history.push('/gpt')
    }

    const openWhatsApp = () => {
        // Evento de abertura do WhatsApp
        trackWhatsAppSupportOpened();

        window.open(
            `https://api.whatsapp.com/send?phone=+551151233747&text=Olá, gostaria de conversar com o JusGPT!`,
            "_blank",
            "noopener,noreferrer"
        );
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if ((text.trim() || selectedFiles.length > 0) && !uploadingFile && !loadingMessage) {
                handleSendMessage();
            }
        }
    };

    const renderFilePreviews = () => ( <
        div style = {
            {
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
            }
        } > {
            selectedFiles.map((file, index) => ( <
                S.FilePreview key = {
                    index
                }
                uploadingFile = {
                    uploadingFile
                } > {
                    uploadingFile ? ( <
                        ReactLoading type = "spin"
                        color = "#FFC107"
                        width = "20px"
                        height = "20px" / >
                    ) : previewUrls[index] ? ( <
                        img src = {
                            previewUrls[index]
                        }
                        alt = "Preview"
                        style = {
                            {
                                maxHeight: '60px',
                                borderRadius: '4px'
                            }
                        }
                        />
                    ) : ( <
                        span > 📎 < /span>
                    )
                }

                <
                S.FileInfo >
                <
                strong > {
                    uploadingFile ? 'Enviando arquivo:' : 'Arquivo:'
                } < /strong> {file.name} {
                    uploadingFile && ( <
                        S.UploadStatus >
                        Fazendo upload...
                        <
                        /S.UploadStatus>
                    )
                } <
                /S.FileInfo>

                {
                    !uploadingFile && ( <
                        IconButton onClick = {
                            () => removeFile(index)
                        } >
                        <
                        DeleteIcon sx = {
                            {
                                color: "#F64E60 !important"
                            }
                        }
                        /> <
                        /IconButton>
                    )
                } <
                /S.FilePreview>
            ))
        } <
        /div>
    );

    const renderGenerationBanner = () => {
        // Verifica se o business é para o chat atual
        if (!business || !business.content || business.chat_id !== chatId) {

            return null;
        }

        return ( <
            S.GenerationBanner $primaryColor = {
                primaryColor
            } >
            <
            div style = {
                {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }
            } >
            <
            ReactLoading type = "spin"
            color = {
                primaryColor
            }
            width = "20px"
            height = "20px" / >
            <
            S.GenerationText > {
                business.content
            } < /S.GenerationText> <
            /div> {
                (businessLogoSmall || businessLogo) && ( <
                    S.LogoPulsing src = {
                        businessLogoSmall || businessLogo
                    }
                    alt = "Logo Business" / >
                )
            } <
            /S.GenerationBanner>
        );
    };

    return ( <
        S.InputWrapper > {
            renderGenerationBanner()
        } {
            selectedFiles.length > 0 && renderFilePreviews()
        }

        <
        S.InputContainer >
        <
        S.TextareaGPT $expandedInput = {
            expandedInput
        }
        placeholder = {!chatMessages ? .length ? 'Como posso te ajudar?' : 'Escreva sua mensagem...'
        }
        value = {
            text
        }
        onChange = {
            (e) => setText(e.target.value)
        }
        onKeyDown = {
            handleKeyDown
        }
        />

        <
        S.InputBottomSection >
        <
        S.LeftSection > {
            isDrawer ?
            ( <
                S.WhatsAppButton onClick = {
                    handleRedirect
                } >
                <
                AutoAwesomeIcon sx = {
                    {
                        color: 'inherit',
                        fontSize: '16px'
                    }
                }
                /> <
                span style = {
                    {
                        textDecoration: 'underline'
                    }
                } > Ir para JusGPT < /span> <
                /S.WhatsAppButton>
            ) : ( <
                S.WhatsAppButton onClick = {
                    openWhatsApp
                } >
                <
                WhatsAppIcon sx = {
                    {
                        color: 'inherit',
                        fontSize: '16px'
                    }
                }
                /> <
                span style = {
                    {
                        textDecoration: 'underline'
                    }
                } > Usar no Whatsapp < /span> <
                /S.WhatsAppButton>
            )
        }

        { /* Tools Menu para usuários business */ } {
            isBusiness && !isDrawer && ( <
                ToolsMenu activeTools = {
                    activeTools
                }
                onToggleTool = {
                    onToggleTool
                }
                />
            )
        }

        { /* Badges das ferramentas ativas */ } {
            isBusiness && !isDrawer && Object.entries(activeTools).map(([toolId, isActive]) => {
                if (!isActive) return null;
                const tool = BUSINESS_TOOLS[toolId];
                if (!tool) return null;
                const IconComponent = tool.icon;

                return ( <
                    S.ActiveToolBadge key = {
                        toolId
                    }
                    $primaryColor = {
                        primaryColor
                    } >
                    <
                    IconComponent sx = {
                        {
                            color: `${primaryColor} !important`,
                            fontSize: '14px'
                        }
                    }
                    /> <
                    span > {
                        tool.title
                    } < /span> <
                    S.RemoveBadgeButton onClick = {
                        () => onToggleTool(toolId)
                    } >
                    <
                    CloseIcon sx = {
                        {
                            color: `${primaryColor} !important`,
                            fontSize: '14px'
                        }
                    }
                    /> <
                    /S.RemoveBadgeButton> <
                    /S.ActiveToolBadge>
                );
            })
        } <
        /S.LeftSection>

        <
        S.ContainerButtonsGPT >
        <
        IconButton onClick = {
            () => fileInputRef.current.click()
        } >
        <
        AttachFileIcon sx = {
            {
                color: '#7E8299 !important'
            }
        }
        /> <
        /IconButton>

        <
        IconButton disabled = {
            (!text && selectedFiles.length === 0) || uploadingFile || loadingMessage
        }
        onClick = {
            () => handleSendMessage()
        }
        style = {
            {
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        } >
        {
            uploadingFile || loadingMessage ? ( <
                ReactLoading type = "spin"
                color = "#01AB7D"
                width = "20px"
                height = "30px" / >
            ) : ( <
                TelegramIcon sx = {
                    {
                        color: (!text && selectedFiles.length === 0) ? '#E7E8EC !important' : '#01AB7D !important'
                    }
                }
                />
            )
        } <
        /IconButton>

        <
        input type = "file"
        ref = {
            fileInputRef
        }
        style = {
            {
                display: 'none'
            }
        }
        multiple = {
            true
        }
        accept = {
            JUSGPT_ACCEPTED_FILE_INPUT_ACCEPT
        }
        onChange = {
            handleFileUpload
        }
        /> <
        /S.ContainerButtonsGPT> <
        /S.InputBottomSection> <
        /S.InputContainer> <
        /S.InputWrapper>
    );
};

export default ChatInput;