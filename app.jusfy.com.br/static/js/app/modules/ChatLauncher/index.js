import {
    useEffect,
    useRef,
    useState,
    Suspense
} from 'react'
import {
    useLocation
} from 'react-router-dom'
import {
    toAbsoluteUrl
} from '../../../_metronic/_helpers'
import JusGPTDrawer from '../../pages/flat/JusGPTDrawer'
import {
    EventsSegmentJusGPT
} from '../../pages/JusGPT/helpers/EventsSegmentJusGPT'
import HelpCenterModal from './components/HelpCenterModal'
import {
    usePromoNotification,
    PromoNotificationEvents
} from './hooks/usePromoNotification'
import * as S from './styles'

/**
 * ChatLauncher
 *  - Unifica a abertura/fechamento do Drawer (ESC, troca de rota, foco volta)
 *  - Pode atuar como FAB (flutuante) ou como botão inline normal
 *  - Totalmente customizável por props (cor, borda, texto, ícone, estilos)
 *  - Permite passar tag/context/defaultMessage para o JusGPTDrawer
 *
 * Props principais:
 *  - variant: 'fab' | 'button' (default: 'fab')
 *  - label?: string (texto do botão)
 *  - iconSrc?: string (ícone à esquerda; default: JusGPT svg)
 *  - icon?: React.ReactNode (alternativa ao iconSrc, para usar ícones de libs como lucide-react, material, etc.)
 *  - className?: string
 *  - style?: React.CSSProperties (estilo geral do botão)
 *  - fabOffset?: { bottom?: number|string; right?: number|string; left?: number|string } // apenas para variant='fab'
 *  - buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
 *  - id?: string (id do drawer)
 *  - tag?: string
 *  - context?: string
 *  - defaultMessage?: string
 *  - onOpenChange?: (open:boolean)=>void
 *  - children?: React.ReactNode (conteúdo custom do botão; se passado, ignora label/icon)
 *
 * Uso (FAB padrão):
 *  <ChatLauncher />
 *
 * Uso (Botão inline customizado com texto e cor):
 *  <ChatLauncher
 *    variant="button"
 *    label="Falar com o suporte"
 *    style={{ background:'#01AB7D', border:'1px solid #018F68', color:'#fff', borderRadius:12, padding:'10px 16px' }}
 *    tag="SUPPORT"
 *    context="Ajude o usuário com dúvidas sobre faturamento e integrações."
 *    defaultMessage="Olá! Como posso ajudar?"
 *  />
 *
 * Uso (Botão com ícone React):
 *  <ChatLauncher
 *    variant="button"
 *    icon={<MyCustomIcon size={18} />}
 *    label="Atendimento"
 *  />
 */
export default function ChatLauncher({
    variant = 'fab',
    label = 'Pergunte para a IA',
    iconSrc = toAbsoluteUrl('/media/Jusgpt.svg'),
    icon,
    className,
    style,
    fabOffset,
    buttonProps,
    id = 'jusgpt-drawer',
    tag = 'HELP',
    context = 'Seu objetivo é ajudar o usuário com dúvidas sobre a plataforma da Jusfy, como ferramentas, planos, etc. fornecendo informações claras e precisas.',
    defaultMessage = "",
    onOpenChange,
    children,
    disabled,
    hideVirtualAssistant = false,
    isHidden = false
}) {
    const [open, setOpen] = useState(false)
    const [canRenderDrawer, setCanRenderDrawer] = useState(false)
    const [showHelpCenter, setShowHelpCenter] = useState(false)
    const [hubspotActive, setHubspotActive] = useState(() => {
        // Sincroniza com o estado global na inicialização
        return typeof window !== 'undefined' && window.hubspotActive === true
    })

    const btnRef = useRef(null)
    const location = useLocation()

    // Listener para o estado do HubSpot
    useEffect(() => {
        const handleHubspotActiveChange = (event) => {
            setHubspotActive(event.detail.active === true)
        }

        window.addEventListener('hubspotActiveChange', handleHubspotActiveChange)

        // Sincroniza o estado atual
        if (typeof window !== 'undefined') {
            setHubspotActive(window.hubspotActive === true)
        }

        return () => {
            window.removeEventListener('hubspotActiveChange', handleHubspotActiveChange)
        }
    }, [])

    // Hook para gerenciar notificações de promoção
    const {
        hasPromoNotification
    } = usePromoNotification(tag)

    const {
        trackDrawerLaunched,
        trackHelpCenterAction,
        trackWhatsAppSupportOpened
    } = EventsSegmentJusGPT();

    // Fecha ao trocar de rota
    useEffect(() => {
        setOpen(false)
    }, [location && location.pathname])

    // Bloqueia scroll do body quando aberto
    useEffect(() => {
        const prev = document.body.style.overflow
        if (open) document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = prev
        }
    }, [open])

    // ESC fecha
    useEffect(() => {
        if (!open) return
        const onKey = (e) => {
            if (e.key === 'Escape') setOpen(false)
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [open])

    // Foco volta pro botão ao fechar
    useEffect(() => {
        if (!open && btnRef.current) {
            const t = setTimeout(() => btnRef.current ? .focus(), 0)
            return () => clearTimeout(t)
        }
    }, [open])

    // Dispara callback externo quando mudar
    useEffect(() => {
        onOpenChange ? .(open)
    }, [open, onOpenChange])

    useEffect(() => {
        if (tag === 'HELP') {
            // Define o estado global do drawer HELP
            PromoNotificationEvents.setHelpDrawerState(open)

            // Se abriu, notifica para limpar notificações
            if (open) {
                PromoNotificationEvents.notifyDrawerOpened()
            }
        }
    }, [open, tag])

    const handleOpen = () => {
        if (disabled) return

        // Se a tag for HELP, mostra primeiro o modal de Central de Ajuda
        if (tag === 'HELP') {
            // setShowHelpCenter(true)
            trackHelpCenterAction({
                action: 'opened',
                source: 'chat_launcher'
            })
            // return
        }

        // Para outras tags, abre diretamente o drawer
        setCanRenderDrawer(true)
        setOpen(true)
        trackDrawerLaunched({
            tag,
            context
        })
    }

    const handleClose = () => setOpen(false)

    const handleHelpCenterClose = () => setShowHelpCenter(false)

    const handleChatWithAssistant = () => {
        trackHelpCenterAction({
            action: 'assistant_clicked',
            source: 'help_center_modal'
        })
        setShowHelpCenter(false)
        setCanRenderDrawer(true)
        setOpen(true)
        trackDrawerLaunched({
            tag,
            context
        })
    }

    const handleContactSupport = () => {
        trackHelpCenterAction({
            action: 'support_clicked',
            source: 'help_center_modal'
        })
        trackWhatsAppSupportOpened()
        setShowHelpCenter(false)
        // Abre o chat do HubSpot (automaticamente marca como ativo)
        if (window.openHubSpotChat) {
            window.openHubSpotChat()
        }
    }

    const handleUserManuals = () => {
        trackHelpCenterAction({
            action: 'manuals_clicked',
            source: 'help_center_modal'
        })
        setShowHelpCenter(false)
        window.open("https://help.jusfy.com.br", "_blank")
    }

    // Estilos base compartilhados
    const baseBtnStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        fontSize: 14,
        fontWeight: 600,
        cursor: disabled ? 'not-allowed' : 'pointer',
        border: 'none',
        outline: 0,
        ...(variant === 'fab' ?
            {
                minWidth: 56,
                height: 56,
                padding: '0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                background: '#01AB7D', //'linear-gradient(90deg, #D1B4FD -122.17%, #4F05BE 100%)',
                color: '#fff',
                boxShadow: '0 10px 30px rgba(0,0,0,.25)',
            } :
            {
                // Padrão botão inline
                padding: '10px 14px',
                borderRadius: 10,
                background: '#F5F5F7',
                color: '#111',
                border: '1px solid rgba(0,0,0,0.08)',
            }),
        ...style,
    }

    // Não renderiza se estiver escondido ou se o HubSpot foi ativado
    if (isHidden || hubspotActive) {
        return null
    }

    // Função para lidar com o clique no FAB
    const handleFabClick = () => {
        if (showHelpCenter) {
            // Se o modal está aberto, fecha ele
            handleHelpCenterClose()
        } else {
            // Se não, abre normalmente
            handleOpen()
        }
    }

    return ( <
        >
        <
        S.ChatLauncherContainer variant = {
            variant
        }
        fabOffset = {
            fabOffset
        } >
        <
        button ref = {
            btnRef
        }
        type = "button"
        onClick = {
            handleFabClick
        }
        aria - haspopup = "dialog"
        aria - expanded = {
            open || showHelpCenter
        }
        aria - controls = {
            id
        }
        aria - label = {
            label || 'Abrir assistente JusGPT'
        }
        data - testid = {
            variant === 'fab' ? 'chatlauncher-fab' : 'chatlauncher-button'
        }
        className = {
            className
        }
        style = {
            baseBtnStyle
        }
        onMouseDown = {
            (e) => e.currentTarget.blur()
        }
        disabled = {
            disabled
        } { ...buttonProps
        } >
        {
            children ? (
                children
            ) : ( <
                > {
                    icon ?
                    icon :
                        iconSrc && ( <
                        img src = {
                            iconSrc
                        }
                        alt = ""
                        aria - hidden = "true"
                        width = {
                            variant === 'fab' ? 20 : 18
                        }
                        height = {
                            variant === 'fab' ? 20 : 18
                        }
                        style = {
                            {
                                display: 'block'
                            }
                        }
                        />
                    )
                } {
                    label && ( <
                        span style = {
                            {
                                whiteSpace: 'nowrap',
                                color: 'inherit'
                            }
                        } > {
                            label
                        } <
                        /span>
                    )
                } <
                />
            )
        } <
        /button>

        { /* Indicador de notificação de promoção */ } {
            hasPromoNotification && tag === 'HELP' && !showHelpCenter && ( <
                S.NotificationBadge aria - label = "Nova promoção disponível" /
                >
            )
        } <
        /S.ChatLauncherContainer>

        {
            canRenderDrawer && ( <
                Suspense fallback = {
                    null
                } >
                <
                JusGPTDrawer id = {
                    id
                }
                open = {
                    open
                }
                onClose = {
                    handleClose
                }
                tag = {
                    tag
                }
                context = {
                    context
                }
                defaultMessage = {
                    defaultMessage
                }
                /> <
                /Suspense>
            )
        }

        <
        HelpCenterModal open = {
            showHelpCenter
        }
        onClose = {
            handleHelpCenterClose
        }
        onChatWithAssistant = {
            handleChatWithAssistant
        }
        onContactSupport = {
            handleContactSupport
        }
        onUserManuals = {
            handleUserManuals
        }
        hideVirtualAssistant = {
            hideVirtualAssistant
        }
        hasPromoNotification = {
            hasPromoNotification
        }
        /> <
        />
    )
}