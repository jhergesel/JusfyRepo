import React, {
    useState,
    useEffect
} from "react";
import {
    useSelector
} from "react-redux";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import {
    Tooltip as ReactTooltip
} from 'react-tooltip';
import * as S from "./styles";
import {
    useJusGPTBusiness
} from '../../context/BusinessClientProvider';
import {
    BUSINESS_TOOLS,
    getAvailableBusinessTools
} from '../../config/businessTools';
import BusinessBanner from '../BusinessBanner';
import {
    getBusinessBannerVisibility
} from '../../api';

export {
    BUSINESS_TOOLS
};

// QuickChats para usuários normais
export const quickChats = [{
        title: "Resumo de caso",
        desc: "Crie resumo de documentos, destacando fatos e argumentos",
        prompt: "O usuário selecionou a opção 'Resumo de caso'. Responda de forma breve apresentando que você pode criar resumos jurídicos destacando fatos, argumentos e pontos relevantes. Solicite que ele envie o documento para resumir ou descreva o caso com mais detalhes para começar. Destaque com negrito o que for mais importante. Quando o usuário responder, analise o documento por inteiro e resuma em uma frase do que se trata, com conteúdo/nome do documento e solicite que tipo de resumo específico precisa."
    },
    {
        title: "Geração de documentos",
        desc: "Crie diversos documentos como petições e contratos",
        prompt: "O usuário selecionou a opção 'Geração de documentos'. Responda de forma breve apresentando que você pode gerar documentos jurídicos como petições, contratos, recursos e notificações. Solicite que ele descreva o tipo de documento necessário e o contexto, ou envie uma minuta de referência. Destaque com negrito o que for mais importante"
    },
    {
        title: "Análise de documentos",
        desc: "Envie contratos, petições ou outros arquivos para revisar e gerar insights",
        prompt: "O usuário selecionou a opção 'Análise de documentos'. Responda de forma breve apresentando que você pode analisar documentos jurídicos, revisar cláusulas e identificar riscos. Solicite que ele envie o documento para análise ou descreva que tipo de análise específica precisa. Destaque com negrito o que for mais importante. Quando o usuário responder, analise o documento por inteiro e resuma em uma frase do que se trata, com conteúdo/nome do documento e solicite que tipo de análise específica precisa."
    }
];

const QuickChatCards = ({
    isMobile,
    handleClickQuickChat,
    onBusinessToolSelected
}) => {
    const {
        isBusiness,
        b2bTools,
        businessClient
    } = useJusGPTBusiness();
    const primaryColor = businessClient ? .font_color_primary || '#0030B9';
    const authToken = useSelector((state) => state.auth.authToken);
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        if (!authToken || isBusiness) return;

        getBusinessBannerVisibility(authToken)
            .then(({
                visible
            }) => setShowBanner(Boolean(visible)))
            .catch(() => setShowBanner(false));
    }, [authToken, isBusiness]);

    // Handler para clique em ferramenta business
    const handleBusinessToolClick = (tool) => {
        if (tool.disabled) return;

        // Notifica o pai que uma ferramenta foi selecionada
        // Isso vai: ativar o toggle, esconder os cards e mostrar a mensagem inicial
        if (onBusinessToolSelected) {
            onBusinessToolSelected(tool);
        }
    };

    const renderBusinessCards = () => {
        const tools = getAvailableBusinessTools(b2bTools);
        // Preenche até 3 cards com quickchats padrão quando há menos de 3 tools
        const FILL_ORDER = ['Análise de documentos', 'Resumo de caso', 'Geração de documentos'];
        const fillCount = Math.max(0, 3 - tools.length);
        const fillCards = fillCount > 0 ?
            FILL_ORDER.map(title => quickChats.find(q => q.title === title)).filter(Boolean).slice(0, fillCount) :
            [];

        const totalCount = tools.length + fillCards.length;
        // fix #5: isLarge só quando há 2 tools sem fill cards (todos ficam do mesmo tamanho)
        const isLarge = tools.length === 2 && fillCards.length === 0;

        const renderFillCard = (item, idx) => ( <
            S.BusinessCardWrapper key = {
                `fill-${idx}`
            } >
            <
            S.CardQuickChat onClick = {
                () => handleClickQuickChat(item)
            } >
            <
            S.CardTopRow >
            <
            S.CardQuickChatTitle > {
                item ? .title
            } <
            /S.CardQuickChatTitle> <
            S.InfoIconWrapper data - tooltip - id = "business-tool-tooltip"
            data - tooltip - content = {
                item.desc
            }
            onClick = {
                e => e.stopPropagation()
            } >
            <
            InfoOutlinedIcon sx = {
                {
                    fontSize: '16px !important',
                    color: 'inherit !important'
                }
            }
            /> <
            /S.InfoIconWrapper> <
            /S.CardTopRow> <
            S.CardBottomRow >
            <
            S.CardShortDesc > {
                item.desc
            } < /S.CardShortDesc> <
            S.ArrowButton style = {
                {
                    color: primaryColor
                }
            } >
            <
            ArrowForwardIosIcon sx = {
                {
                    color: `${primaryColor} !important`,
                    fontSize: '13px !important'
                }
            }
            /> <
            /S.ArrowButton> <
            /S.CardBottomRow> <
            /S.CardQuickChat> <
            /S.BusinessCardWrapper>
        );

        const renderCardLarge = (tool) => {
            const IconComponent = tool.icon;
            return ( <
                S.BusinessCardWrapper key = {
                    tool.id
                } >
                <
                S.BusinessBadge >
                <
                StarRoundedIcon sx = {
                    {
                        fontSize: '12px !important',
                        color: `${primaryColor} !important`
                    }
                }
                />
                Personalizado <
                /S.BusinessBadge> <
                S.CardQuickChat large onClick = {
                    () => handleBusinessToolClick(tool)
                }
                disabled = {
                    tool.disabled
                }
                style = {
                    {
                        opacity: tool.disabled ? 0.6 : 1,
                        cursor: tool.disabled ? 'not-allowed' : 'pointer',
                        border: `2px solid ${primaryColor}`,
                    }
                } >
                <
                S.CardLargeTitleRow >
                <
                IconComponent sx = {
                    {
                        color: `${primaryColor} !important`,
                        fontSize: '22px',
                        flexShrink: 0
                    }
                }
                /> <
                S.CardQuickChatTitle style = {
                    {
                        fontSize: '14px'
                    }
                } > {
                    tool.title
                } <
                /S.CardQuickChatTitle> <
                /S.CardLargeTitleRow> <
                S.CardQuickChatDesc style = {
                    {
                        margin: 0
                    }
                } > {
                    tool.desc
                } < /S.CardQuickChatDesc> <
                S.CardBottomRow style = {
                    {
                        justifyContent: 'flex-end'
                    }
                } > {
                    tool.comingSoon ?
                    < S.ComingSoonBadge > Em breve < /S.ComingSoonBadge> :
                        ( <
                        S.ArrowButton style = {
                            {
                                color: primaryColor
                            }
                        } >
                        <
                        ArrowForwardIosIcon sx = {
                            {
                                color: `${primaryColor} !important`,
                                fontSize: '13px !important'
                            }
                        }
                        /> <
                        /S.ArrowButton>
                    )
                } <
                /S.CardBottomRow> <
                /S.CardQuickChat> <
                /S.BusinessCardWrapper>
            );
        };

        const renderCardCompact = (tool) => {
            const IconComponent = tool.icon;
            return ( <
                S.BusinessCardWrapper key = {
                    tool.id
                } >
                <
                S.BusinessBadge color = {
                    primaryColor
                } >
                <
                StarRoundedIcon sx = {
                    {
                        fontSize: '12px !important',
                        color: `${primaryColor} !important`
                    }
                }
                />
                Personalizado <
                /S.BusinessBadge> <
                S.CardQuickChat onClick = {
                    () => handleBusinessToolClick(tool)
                }
                disabled = {
                    tool.disabled
                }
                style = {
                    {
                        opacity: tool.disabled ? 0.6 : 1,
                        cursor: tool.disabled ? 'not-allowed' : 'pointer',
                        border: `1px solid ${primaryColor}`,
                    }
                } >
                <
                S.CardTopRow >
                <
                IconComponent sx = {
                    {
                        color: `${primaryColor} !important`,
                        fontSize: '18px',
                        flexShrink: 0
                    }
                }
                /> <
                S.CardQuickChatTitle > {
                    tool.title
                } <
                /S.CardQuickChatTitle> <
                S.InfoIconWrapper data - tooltip - id = "business-tool-tooltip"
                data - tooltip - content = {
                    tool.desc
                }
                onClick = {
                    e => e.stopPropagation()
                } >
                <
                InfoOutlinedIcon sx = {
                    {
                        fontSize: '16px !important',
                        color: 'inherit !important'
                    }
                }
                /> <
                /S.InfoIconWrapper> <
                /S.CardTopRow> <
                S.CardBottomRow > {
                    tool.shortDesc && ( <
                        S.CardShortDesc > {
                            tool.shortDesc
                        } < /S.CardShortDesc>
                    )
                } {
                    tool.comingSoon ?
                        < S.ComingSoonBadge > Em breve < /S.ComingSoonBadge> :
                        ( <
                            S.ArrowButton style = {
                                {
                                    color: primaryColor
                                }
                            } >
                            <
                            ArrowForwardIosIcon sx = {
                                {
                                    color: `${primaryColor} !important`,
                                    fontSize: '13px !important'
                                }
                            }
                            /> <
                            /S.ArrowButton>
                        )
                } <
                /S.CardBottomRow> <
                /S.CardQuickChat> <
                /S.BusinessCardWrapper>
            );
        };

        return ( <
            >
            <
            S.ContainerQuickChat isMobile = {
                isMobile
            }
            count = {
                totalCount
            } > {
                tools.map((tool) => isLarge ? renderCardLarge(tool) : renderCardCompact(tool))
            } {
                fillCards.map((item, idx) => renderFillCard(item, idx))
            } <
            /S.ContainerQuickChat> <
            ReactTooltip id = "business-tool-tooltip"
            place = "top"
            className = "sidebar-custom-tooltip"
            style = {
                {
                    maxWidth: '220px',
                    fontSize: '13px',
                    lineHeight: '1.5'
                }
            }
            /> <
            />
        );
    };

    return ( <
        S.QuickChatWrapper > {
            isBusiness ? (
                renderBusinessCards()
            ) : ( <
                > {
                    showBanner && < BusinessBanner / >
                } <
                S.ContainerQuickChat isMobile = {
                    isMobile
                }
                count = {
                    quickChats.length
                } > {
                    quickChats.map((item, idx) => ( <
                        S.CardQuickChat key = {
                            idx
                        }
                        onClick = {
                            () => handleClickQuickChat(item)
                        } >
                        <
                        div >
                        <
                        S.CardQuickChatTitle > {
                            item ? .title
                        } < /S.CardQuickChatTitle> <
                        S.CardQuickChatDesc > {
                            item.desc
                        } < /S.CardQuickChatDesc> <
                        /div> <
                        S.StartButton >
                        Começar <
                        ArrowForwardIcon / >
                        <
                        /S.StartButton> <
                        /S.CardQuickChat>
                    ))
                } <
                /S.ContainerQuickChat> <
                />
            )
        }

        <
        S.Separator >
        <
        span > Ou gere você mesmo < /span> <
        /S.Separator> <
        /S.QuickChatWrapper>
    );
};

export default QuickChatCards;