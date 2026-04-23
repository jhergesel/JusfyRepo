import React, {
    useState,
    useEffect,
    useCallback
} from 'react';
import {
    useSelector
} from 'react-redux';
import {
    useQueryClient
} from '@tanstack/react-query';
import {
    useSocket
} from '../../modules/SocketProvider';
import XPModal from '../../pages/Gamification/components/XPModal';
import LevelUpModal from '../../pages/Gamification/components/LevelUpModal';
import {
    getUserPartialRanking
} from '../../pages/Gamification/api';
import {
    useGamificationQuery,
    GAMIFICATION_KEYS
} from '../../pages/Gamification/hooks/useGamificationQuery';
import useFeatureFlagWithContext from '../../hooks/useFeatureFlagWithContext';
import {
    FEATURE_FLAGS
} from '../../constants/FeatureFlag';

/**
 * Componente global que escuta eventos de gamificação via WebSocket
 * e exibe o modal de XP quando o usuário completa um desafio
 */
const GamificationListener = () => {
    const socketContext = useSocket();
    const socket = socketContext ? .socket;
    const {
        user,
        authToken
    } = useSelector((state) => state.auth);
    const queryClient = useQueryClient();

    const {
        isFeatureFlagEnable: isGamificationEnabled
    } = useFeatureFlagWithContext(
        FEATURE_FLAGS.RELEASE.GAMIFICATION, {
            clientId: user ? .client_id
        }
    );

    const {
        userStats,
        levels
    } = useGamificationQuery();

    const [xpNotification, setXpNotification] = useState(null);
    const [levelUpNotification, setLevelUpNotification] = useState(null);

    // Listener para eventos de notificação do WebSocket
    useEffect(() => {
        if (!socket || !isGamificationEnabled) return;

        const handleNotification = (notification) => {
            // Verificar se é um evento de desafio completado
            if (notification.type === 'challenge_completed') {
                const {
                    data
                } = notification;

                // Atualizar XP do usuário no cache do TanStack Query (atualização otimista)
                queryClient.setQueryData(GAMIFICATION_KEYS.userStats, (prev) => {
                    if (!prev) return prev;
                    return {
                        ...prev,
                        currentXP: prev.currentXP + (data.pointsAwarded || 0),
                        totalXP: prev.totalXP + (data.pointsAwarded || 0),
                    };
                });

                // Mostrar modal de XP
                setXpNotification(notification);
            }

            // Verificar se é um evento de level up
            if (notification.type === 'level_up') {
                // Invalidar cache para buscar dados frescos
                queryClient.invalidateQueries({
                    queryKey: GAMIFICATION_KEYS.userStats
                });

                // Mostrar modal de Level Up
                setLevelUpNotification(notification);
            }
        };

        socket.on('notification', handleNotification);

        return () => {
            socket.off('notification', handleNotification);
        };
    }, [socket, queryClient, isGamificationEnabled]);

    const closeXPModal = useCallback(() => {
        setXpNotification(null);
        // Invalidar cache para buscar dados frescos do backend ao fechar o modal
        queryClient.invalidateQueries({
            queryKey: GAMIFICATION_KEYS.userStats
        });
    }, [queryClient]);

    const closeLevelUpModal = useCallback(() => {
        setLevelUpNotification(null);
        queryClient.invalidateQueries({
            queryKey: GAMIFICATION_KEYS.userStats
        });
    }, [queryClient]);

    const fetchPartialRanking = useCallback(async () => {
        if (!authToken) return null;

        try {
            const clientId = user ? .client_id;
            if (!clientId) return null;

            const partialRankingResponse = await getUserPartialRanking(authToken, clientId);
            const partialRankingData = partialRankingResponse ? .data;

            if (partialRankingData && partialRankingData.partialRanking) {
                return partialRankingData;
            }

            return null;
        } catch (err) {
            console.error('Erro ao buscar ranking parcial:', err);
            return null;
        }
    }, [authToken, user ? .client_id]);

    if (!isGamificationEnabled) return null;

    return ( <
        >
        <
        XPModal isOpen = {
            xpNotification !== null
        }
        notification = {
            xpNotification
        }
        onClose = {
            closeXPModal
        }
        userStats = {
            userStats
        }
        fetchPartialRanking = {
            fetchPartialRanking
        }
        /> <
        LevelUpModal isOpen = {
            levelUpNotification !== null
        }
        notification = {
            levelUpNotification
        }
        onClose = {
            closeLevelUpModal
        }
        userStats = {
            userStats
        }
        levels = {
            levels
        }
        /> <
        />
    );
};

export default GamificationListener;