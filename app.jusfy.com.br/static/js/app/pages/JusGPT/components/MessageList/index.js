import React from "react";
import ReactLoading from "react-loading";
import {
    IconButton,
    Button
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SVG from "react-inlinesvg";
import {
    toAbsoluteUrl
} from "../../../../../_metronic/_helpers";
import {
    EventsSegmentJusGPT
} from "../../helpers/EventsSegmentJusGPT";
import * as S from "./styles";

const MessageList = ({
        chatMessages,
        loadingMessage,
        messagesRef,
        fileInputRef,
        parseMarkdown,
        copyToClipboard,
        generateDocx,
        show = true,
        chatId = null,
    }) => {
        const eventsSegment = EventsSegmentJusGPT();

        // Regex para detectar URLs do manual de uso da Jusfy
        const HELP_URL_REGEX = /(https?:\/\/)?help\.jusfy\.com\.br[^\s)\]"]*/gi;
        // Regex para detectar links de suporte/falar com atendente
        const SUPPORT_URL_REGEX = /(https?:\/\/)?[^\s)\]"]*(?:suporte|support|hubspot|atendente)[^\s)\]"]*/gi;

        // Função para limpar e normalizar URLs
        const cleanUrl = (url) => {
            if (!url) return null;
            let cleaned = url
                // Remove pontuações finais (.!?,;:)
                .replace(/[.!?,;:]+$/, '')
                // Remove colchetes e parênteses no final
                .replace(/[\]\)]+$/, '')
                // Remove padrão de URL duplicada [http://...] no final
                .replace(/\[https?:\/\/[^\]]+\]$/, '')
                // Remove ... no final
                .replace(/\.{2,}$/, '')
                // Remove espaços
                .trim();

            // Garante protocolo https
            if (cleaned && !cleaned.startsWith('http')) {
                cleaned = 'https://' + cleaned;
            }
            return cleaned;
        };

        // Extrai todas as URLs de help do texto
        const extractHelpUrls = (text) => {
            if (!text) return [];
            const matches = text.match(HELP_URL_REGEX) || [];
            return [...new Set(matches.map(cleanUrl).filter(Boolean))];
        };

        // Extrai URLs de suporte do texto
        const extractSupportUrls = (text) => {
            if (!text) return [];
            const matches = text.match(SUPPORT_URL_REGEX) || [];
            return [...new Set(matches.map(cleanUrl).filter(Boolean))];
        };

        // Remove links de help e suporte do texto para exibição
        const stripSpecialLinks = (s) => {
            if (!s) return '';
            return s
                // Remove padrão [texto](url) com URL de help ou suporte
                .replace(/\[([^\]]*)\]\([^)]*(?:help\.jusfy\.com\.br|suporte|support|hubspot)[^)]*\)/gi, '')
                // Remove URLs soltas de help
                .replace(HELP_URL_REGEX, '')
                // Remove URLs soltas de suporte (apenas se parecerem URLs completas)
                .replace(/https?:\/\/[^\s)\]"]*(?:suporte|support|hubspot|atendente)[^\s)\]"]*/gi, '')
                // Remove pontuação órfã após remoção de links
                .replace(/\s+[.!?,;:]+(\s|$)/g, '$1')
                .trim();
        };

        const renderFileAttachment = (file, messageRole) => ( <
            div style = {
                {
                    marginTop: "8px",
                    padding: "12px",
                    backgroundColor: messageRole === "user" ? "#f8f9fa" : "rgba(65, 199, 143, 0.1)",
                    border: "1px solid #e1e3ea",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "14px",
                }
            } >
            <
            AttachFileIcon sx = {
                {
                    color: "#01AB7D",
                    fontSize: "20px"
                }
            }
            /> <
            div style = {
                {
                    flex: 1
                }
            } >
            <
            div style = {
                {
                    fontWeight: "500",
                    color: "#333"
                }
            } > {
                file.name || file.originalName
            } <
            /div> {
                file.size && ( <
                    div style = {
                        {
                            fontSize: "12px",
                            color: "#666"
                        }
                    } > {
                        (file.size / 1024 / 1024).toFixed(2)
                    }
                    MB <
                    /div>
                )
            } <
            /div> <
            /div>
        );

        const renderFileRequest = () => ( <
            div style = {
                {
                    marginTop: "12px",
                    padding: "16px",
                    backgroundColor: "rgba(65, 199, 143, 0.1)",
                    border: "2px dashed #01AB7D",
                    borderRadius: "8px",
                    textAlign: "center",
                    cursor: "pointer",
                }
            }
            onClick = {
                () => fileInputRef.current.click()
            } >
            <
            AttachFileIcon sx = {
                {
                    color: "#01AB7D",
                    fontSize: "32px",
                    marginBottom: "8px"
                }
            }
            /> <
            div style = {
                {
                    color: "#01AB7D",
                    fontWeight: "bold",
                    marginBottom: "4px"
                }
            } >
            Clique aqui para enviar seu arquivo <
            /div> <
            div style = {
                {
                    color: "#666",
                    fontSize: "12px"
                }
            } >
            Ou arraste e solte o arquivo na tela <
            /div> <
            /div>
        );

        const renderMessageButtons = message => ( <
            S.MessageButtons >
            <
            IconButton onClick = {
                () => copyToClipboard(message.text)
            } >
            <
            ContentCopyIcon / >
            <
            /IconButton> {
                show && ( <
                    IconButton onClick = {
                        () => generateDocx(chatId, message.text)
                    } >
                    <
                    SVG src = {
                        toAbsoluteUrl("/media/jusgpt/word.svg")
                    }
                    width = "20"
                    height = "20" /
                    >
                    <
                    /IconButton>
                )
            } <
            /S.MessageButtons>
        );

        // Componente para renderizar botões de ação (manual e suporte)
        const ActionButtons = ({
            text
        }) => {
            const helpUrls = extractHelpUrls(text);
            const supportUrls = extractSupportUrls(text);
            const hasSupport = supportUrls.length > 0 || text ? .toLowerCase().includes('falar com suporte') || text ? .toLowerCase().includes('falar com o suporte');

            const handleHelpClick = (url) => {
                eventsSegment.trackHelpCenterAction({
                    action: 'manual_clicked',
                    source: 'chat_message',
                    url: url,
                    chat_id: chatId
                });
            };

            const handleSupportClick = () => {
                eventsSegment.trackHelpCenterAction({
                    action: 'support_clicked',
                    source: 'chat_message',
                    chat_id: chatId
                });
                // Abre o chat do HubSpot se disponível
                if (window.openHubSpotChat) {
                    window.openHubSpotChat();
                }
            };

            if (helpUrls.length === 0 && !hasSupport) return null;

            return ( <
                S.ActionButtonsContainer > { /* Botão de suporte */ } {
                    hasSupport && ( <
                        Button variant = "contained"
                        onClick = {
                            handleSupportClick
                        }
                        sx = {
                            {
                                textTransform: "none",
                                textDecoration: "none !important",
                                fontWeight: 600,
                                borderRadius: "10px",
                                px: 2.5,
                                boxShadow: "none",
                                backgroundColor: "#01AB7D !important",
                                color: "#fff !important",
                                "&:hover": {
                                    backgroundColor: "#018a64 !important",
                                    boxShadow: "none",
                                },
                            }
                        } >
                        Falar com suporte <
                        /Button>
                    )
                } { /* Botões de manual */ } {
                    helpUrls.map((url, index) => ( <
                                Button key = {
                                    index
                                }
                                variant = "text"
                                startIcon = { < HelpOutlineIcon sx = {
                                        {
                                            color: "#01AB7D !important"
                                        }
                                    }
                                    />}
                                    href = {
                                        url
                                    }
                                    target = "_blank"
                                    rel = "noopener noreferrer"
                                    onClick = {
                                        () => handleHelpClick(url)
                                    }
                                    sx = {
                                        {
                                            textTransform: "none",
                                            textDecoration: "none !important",
                                            fontWeight: 500,
                                            color: "#01AB7D !important",
                                            "&:hover": {
                                                textDecoration: "underline !important",
                                                backgroundColor: "transparent",
                                            },
                                            "& .MuiButton-startIcon": {
                                                color: "#01AB7D !important"
                                            },
                                        }
                                    } >
                                    ver manual <
                                    /Button>
                                ))
                        } <
                        /S.ActionButtonsContainer>
                );
            };

            return ( <
                S.ContainerMessages ref = {
                    messagesRef
                } > {
                    chatMessages.map((item, idx) => {
                        const helpUrls = extractHelpUrls(item ? .text);
                        const hasSpecialLinks = helpUrls.length > 0 ||
                            item ? .text ? .toLowerCase().includes('falar com suporte') ||
                            item ? .text ? .toLowerCase().includes('falar com o suporte');
                        const contentWithoutLinks = stripSpecialLinks(item ? .text);

                        return ( <
                            S.Message key = {
                                idx
                            }
                            type = {
                                item.role
                            } >
                            <
                            S.MessageContent >
                            <
                            S.MessageText type = {
                                item.role
                            }
                            isSlowWarning = {
                                item.isSlowWarning
                            }
                            isTimeoutError = {
                                item.isTimeoutError
                            } >
                            { /* Renderiza o texto (sem os links especiais) */ } {
                                contentWithoutLinks && ( <
                                    div dangerouslySetInnerHTML = {
                                        {
                                            __html: parseMarkdown(contentWithoutLinks),
                                        }
                                    }
                                    />
                                )
                            }

                            { /* Renderiza botões de ação se houver links especiais */ } {
                                hasSpecialLinks && item.role === 'model' && ( <
                                    ActionButtons text = {
                                        item ? .text
                                    }
                                    />
                                )
                            }

                            {
                                item.file && renderFileAttachment(item.file, item.role)
                            }

                            {
                                item.isFileRequest && renderFileRequest()
                            } <
                            /S.MessageText> <
                            /S.MessageContent>

                            {
                                item.role === "model" &&
                                    !item.isFileRequest &&
                                    !item.isSlowWarning &&
                                    !item.isTimeoutError &&
                                    renderMessageButtons(item)
                            } <
                            /S.Message>
                        );
                    })
                }

                {
                    loadingMessage && ( <
                        S.Message type = "bot" >
                        <
                        S.MessageContent >
                        <
                        ReactLoading type = "bubbles"
                        color = "#01AB7D"
                        width = "25px"
                        height = "25px" /
                        >
                        <
                        /S.MessageContent> <
                        /S.Message>
                    )
                } <
                /S.ContainerMessages>
            );
        };

        export default MessageList;