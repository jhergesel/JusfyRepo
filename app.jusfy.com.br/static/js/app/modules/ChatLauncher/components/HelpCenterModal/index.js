import React, {
    useEffect,
    useRef
} from 'react'
import * as S from './styles'
import CloseIcon from '@mui/icons-material/Close';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HelpIcon from '@mui/icons-material/Help';
import {
    useLocation
} from 'react-router-dom'

const HelpCenterModal = ({
    open,
    onClose,
    onChatWithAssistant,
    onContactSupport,
    onUserManuals,
    hideVirtualAssistant = false,
    hasPromoNotification = false
}) => {
    const location = useLocation()
    const popupRef = useRef(null)

    // Fecha o popup quando clica fora dele
    useEffect(() => {
        if (!open) return

        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [open, onClose])

    // Fecha com ESC
    useEffect(() => {
        if (!open) return

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [open, onClose])

    if (!open) return null

    return ( <
        S.PopupContainer >
        <
        S.Container ref = {
            popupRef
        } >
        <
        S.Header >
        <
        S.Title > {
            location.pathname.includes('/login') ? 'Central de Ajuda' : 'Ajuda com IA da Jusfy'
        } < /S.Title> <
        S.CloseButton onClick = {
            onClose
        } >
        <
        CloseIcon sx = {
            {
                color: '#FFF !important'
            }
        }
        /> <
        /S.CloseButton> <
        /S.Header>

        <
        S.Content > {!hideVirtualAssistant && ( <
                S.Option onClick = {
                    onChatWithAssistant
                }
                style = {
                    {
                        position: 'relative'
                    }
                } >
                <
                S.OptionIcon >
                <
                AutoAwesomeIcon sx = {
                    {
                        color: '#047857 !important'
                    }
                }
                /> <
                /S.OptionIcon> <
                S.OptionContent >
                <
                S.OptionText > Dúvidas ? Fale com nossa Agente de IA < /S.OptionText> <
                S.RecommendedBadge > NOVO < /S.RecommendedBadge> <
                /S.OptionContent>

                { /* Badge de notificação de promoção */ } {
                    hasPromoNotification && ( <
                        S.PromoNotificationBadge / >
                    )
                } <
                /S.Option>
            )
        }

        {
            /* <S.Option onClick={onContactSupport}>
                        <S.OptionIcon>
                          <SupportAgentIcon sx={{ color: '#01AB7D !important'}} />
                        </S.OptionIcon>
                        <S.OptionContent>
                          <S.OptionText>Falar com humano</S.OptionText>
                        </S.OptionContent>
                      </S.Option> */
        }

        <
        S.Option onClick = {
            onUserManuals
        } >
        <
        S.OptionIcon >
        <
        HelpIcon sx = {
            {
                color: '#01AB7D !important'
            }
        }
        /> <
        /S.OptionIcon> <
        S.OptionContent >
        <
        S.OptionText > Manuais de uso < /S.OptionText> <
        /S.OptionContent> <
        /S.Option> <
        /S.Content> <
        /S.Container> <
        /S.PopupContainer>
    )
}

export default HelpCenterModal