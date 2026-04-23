import {
    useState,
    useEffect
} from 'react'

/**
 * Hook para gerenciar notificações de promoção
 * Usa eventos customizados do DOM para comunicação entre componentes
 */
export const usePromoNotification = (tag = 'HELP') => {
    const [hasPromoNotification, setHasPromoNotification] = useState(false)

    useEffect(() => {
        // Só escuta eventos para tag HELP
        if (tag !== 'HELP') return

        const handlePromoReceived = (event) => {
            const {
                drawerOpen
            } = event.detail

            // Se o drawer estiver fechado, mostra notificação
            if (!drawerOpen) {
                setHasPromoNotification(true)
            }
        }

        const handleDrawerOpened = () => {
            // Limpa notificação quando drawer abre
            setHasPromoNotification(false)
        }

        // Escuta eventos customizados
        window.addEventListener('promo-message-received', handlePromoReceived)
        window.addEventListener('help-drawer-opened', handleDrawerOpened)

        return () => {
            window.removeEventListener('promo-message-received', handlePromoReceived)
            window.removeEventListener('help-drawer-opened', handleDrawerOpened)
        }
    }, [tag])

    const clearNotification = () => {
        setHasPromoNotification(false)
    }

    return {
        hasPromoNotification,
        clearNotification
    }
}

/**
 * Funções utilitárias para disparar eventos
 */
export const PromoNotificationEvents = {
    // Dispara quando uma mensagem de promoção é recebida
    notifyPromoReceived: () => {
        // Verifica se o drawer HELP está aberto consultando o estado global
        const isHelpDrawerOpen = window.helpDrawerOpen || false

        const event = new CustomEvent('promo-message-received', {
            detail: {
                drawerOpen: isHelpDrawerOpen
            }
        })
        window.dispatchEvent(event)
    },

    // Dispara quando o drawer HELP é aberto
    notifyDrawerOpened: () => {
        const event = new CustomEvent('help-drawer-opened')
        window.dispatchEvent(event)
    },

    // Define o estado global do drawer HELP
    setHelpDrawerState: (isOpen) => {
        window.helpDrawerOpen = isOpen
    }
}