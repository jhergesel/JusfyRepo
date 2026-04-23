import React, {
    useMemo,
    useState,
    useEffect,
    useRef,
    useCallback,
} from 'react';
import SVG from 'react-inlinesvg';
import * as S from './styles';
import {
    toAbsoluteUrl
} from '../../../../../_metronic/_helpers';
import ModalDialog from '../../../../components/flat/ui/ModalDialog';
import confetti from 'canvas-confetti';
import {
    getGamificationLevelImageKey
} from 'app/helpers/gamification/getGamificationLevelImageKey';

const CONFETTI_COLORS = [
    '#01AB7D',
    '#FFC700',
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#96CEB4',
    '#FFEAA7',
    '#E94F0E',
];

// Simplifica nome: "WALISSON CARLOS" → "WALISSON C"
const shortenName = (name) => {
    if (!name) return '';
    const parts = name.trim().split(/\s+/);
    if (parts.length <= 1) return parts[0] || '';
    return `${parts[0]} ${parts[parts.length - 1].charAt(0)}`;
};

// Nomes fake para o ranking (anonimizados)
const FAKE_NAMES = [
    'Usuário',
    'Usuário',
    'Usuário',
    'Usuário',
    'Usuário',
    'Usuário',
    'Usuário',
    'Usuário',
    'Usuário',
    'Usuário',
];

const FAKE_STATES = [
    '--',
    '--',
    '--',
    '--',
    '--',
    '--',
    '--',
    '--',
    '--',
    '--',
];

// Gera usuários fake - 7 pessoas: 3 antes, jogador, 3 depois
// Se jogador está no top 3, mostra menos pessoas na frente
const generateFakeRanking = (userFinalPosition, userName, userXP) => {
    const ranking = [];

    // Calcula quantas pessoas antes e depois
    const positionsBefore = Math.min(3, userFinalPosition - 1); // máximo 3, mas menos se estiver no top
    const positionsAfter = 3;

    const startPosition = userFinalPosition - positionsBefore;
    const endPosition = userFinalPosition + positionsAfter;
    const totalItems = endPosition - startPosition + 1;

    for (let pos = startPosition; pos <= endPosition; pos++) {
        const isUserFinalPosition = pos === userFinalPosition;

        if (isUserFinalPosition) {
            ranking.push({
                position: pos,
                name: userName || 'Você',
                xp: userXP || 0,
                isCurrentUser: true,
                level: {
                    name: 'iniciante'
                },
            });
        } else {
            const nameIndex = pos % FAKE_NAMES.length;

            ranking.push({
                position: pos,
                name: FAKE_NAMES[nameIndex],
                state: FAKE_STATES[nameIndex],
                xp: null, // XP oculto para outros usuários
                isCurrentUser: false,
                level: {
                    name: 'iniciante'
                },
            });
        }
    }

    return {
        ranking,
        totalItems,
        startPosition
    };
};

const XPModal = ({
        isOpen,
        notification,
        onClose,
        userStats = {},
        fetchPartialRanking,
    }) => {
        const [animationStarted, setAnimationStarted] = useState(false);
        const [currentUserVisualIndex, setCurrentUserVisualIndex] = useState(null);
        const [rankingData, setRankingData] = useState(null);
        const [rankingLoading, setRankingLoading] = useState(false);
        const [rocketLoaded, setRocketLoaded] = useState(false);
        const canvasRef = useRef(null);
        const confettiInstanceRef = useRef(null);
        const intervalRef = useRef(null);

        // Preload do SVG do rocket
        useEffect(() => {
            const img = new Image();
            img.src = toAbsoluteUrl('/media/gamification/rocket.svg');
            img.onload = () => setRocketLoaded(true);
        }, []);

        const {
            data
        } = notification || {};
        const {
            pointsAwarded,
            newRank,
            challengeName
        } = data || {};

        // Posição final do usuário no ranking
        const userFinalPosition = newRank || userStats ? .ranking || 14;

        // Buscar ranking parcial quando o modal abre
        useEffect(() => {
            if (isOpen && fetchPartialRanking) {
                setRankingLoading(true);
                setRankingData(null); // Limpa dados anteriores
                fetchPartialRanking()
                    .then((data) => {
                        if (data) {
                            setRankingData(data);
                        }
                        setRankingLoading(false);
                    })
                    .catch(() => {
                        setRankingLoading(false);
                    });
            }
        }, [isOpen, fetchPartialRanking]);

        // Usar ranking real se disponível, senão gera fake
        const finalRankingData = useMemo(() => {
            if (rankingData && rankingData.partialRanking) {
                // Usar ranking real do endpoint
                const partialList = rankingData.partialRanking;

                // Encontrar a posição do usuário no array
                const userPosition = partialList.findIndex(
                    (item) => Number(rankingData.rank) === Number(item.position),
                );

                return {
                    ranking: partialList.map((item) => {
                        const isCurrentUser =
                            Number(rankingData.rank) === Number(item.position);

                        return {
                            position: item.position,
                            name: item.name,
                            avatar: item.picture,
                            xp: item.points,
                            isCurrentUser: isCurrentUser,
                            level: {
                                ...item.level,
                                img: getGamificationLevelImageKey(item.level ? .name),
                            },
                        };
                    }),
                    totalItems: partialList.length,
                    startPosition: partialList[0] ? .position || 1,
                    userFinalIndex: userPosition >= 0 ? userPosition : partialList.length - 1,
                };
            }

            // Fallback: gera ranking fake
            const fakeData = generateFakeRanking(
                userFinalPosition,
                userStats ? .name,
                userStats ? .totalXP + (pointsAwarded || 0),
            );

            return {
                ranking: fakeData.ranking,
                totalItems: fakeData.totalItems,
                startPosition: fakeData.startPosition,
                userFinalIndex: userFinalPosition - fakeData.startPosition,
            };
        }, [
            rankingData,
            userFinalPosition,
            userStats ? .name,
            userStats ? .totalXP,
            pointsAwarded,
        ]);

        const {
            ranking: displayRanking,
            totalItems,
            startPosition,
            userFinalIndex,
        } = finalRankingData;

        // Confetti via canvas quando o modal abre
        const startConfetti = useCallback(() => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            // Delay para garantir que o canvas já tem dimensões após animação do modal
            setTimeout(() => {
                if (!canvasRef.current) return;

                // Setar dimensões reais do canvas baseado no container
                const rect = canvas.getBoundingClientRect();
                canvas.width = rect.width * window.devicePixelRatio;
                canvas.height = rect.height * window.devicePixelRatio;

                const myConfetti = confetti.create(canvas, {
                    resize: true
                });
                confettiInstanceRef.current = myConfetti;

                // Burst inicial celebratório (origin relativo ao LeftPanel)
                myConfetti({
                    particleCount: 100,
                    angle: 90,
                    spread: 70,
                    startVelocity: 20,
                    decay: 0.94,
                    gravity: 0.6,
                    ticks: 300,
                    origin: {
                        x: 0.5,
                        y: 0.2
                    },
                    colors: CONFETTI_COLORS,
                    shapes: ['square', 'circle'],
                    scalar: 1,
                });

                // Chuva contínua
                const fire = () => {
                    // Não disparar confetti se a aba estiver em background
                    if (document.hidden) return;

                    myConfetti({
                        particleCount: 6,
                        angle: 90,
                        spread: 130,
                        startVelocity: 20,
                        decay: 0.94,
                        gravity: 0.5,
                        ticks: 250,
                        origin: {
                            x: Math.random(),
                            y: -0.05
                        },
                        colors: CONFETTI_COLORS,
                        shapes: ['square', 'circle'],
                        scalar: 1,
                    });
                };

                intervalRef.current = setInterval(fire, 200);
            }, 300);
        }, []);

        const stopConfetti = useCallback(() => {
            clearInterval(intervalRef.current);
            if (confettiInstanceRef.current) {
                confettiInstanceRef.current.reset();
            }
        }, []);

        // Inicia animação quando o modal abre E o ranking terminou de carregar
        useEffect(() => {
            if (isOpen && !rankingLoading) {
                setAnimationStarted(false);
                // Começa na última posição da lista
                setCurrentUserVisualIndex(totalItems - 1);

                const timer = setTimeout(() => {
                    setAnimationStarted(true);
                    startConfetti();
                }, 800);

                return () => {
                    clearTimeout(timer);
                    stopConfetti();
                };
            } else if (!isOpen) {
                stopConfetti();
            }
        }, [isOpen, rankingLoading, totalItems, startConfetti, stopConfetti]);

        // Animação de subir posição a posição - mais rápida e suave
        useEffect(() => {
            if (!animationStarted || currentUserVisualIndex === null) return;

            if (currentUserVisualIndex > userFinalIndex) {
                const timer = setTimeout(() => {
                    setCurrentUserVisualIndex((prev) => prev - 1);
                }, 400); // Reduzido de 600ms para 400ms para ser mais dinâmico
                return () => clearTimeout(timer);
            }
        }, [animationStarted, currentUserVisualIndex, userFinalIndex]);

        if (!isOpen || !notification) return null;

        const handleContinue = () => {
            onClose();
        };

        return ( <
                ModalDialog open = {
                    isOpen
                }
                width = "auto"
                onClose = {
                    onClose
                } >
                <
                S.ModalContainer >
                <
                S.CloseIcon onClick = {
                    onClose
                } >
                <
                SVG src = {
                    toAbsoluteUrl('/media/flat/close.svg')
                }
                /> <
                /S.CloseIcon>

                <
                S.ModalContent > { /* Painel Esquerdo - Foguete e Mensagem */ } <
                S.LeftPanel >
                <
                S.ConfettiCanvas ref = {
                    canvasRef
                }
                />

                {
                    !rocketLoaded && < S.RocketPlaceholder / >
                } <
                S.RocketImage src = {
                    toAbsoluteUrl('/media/gamification/rocket.svg')
                }
                alt = "Foguete"
                style = {
                    {
                        display: rocketLoaded ? 'block' : 'none'
                    }
                }
                />

                <
                S.XPBadgeInline >
                <
                S.XPLabel > Você ganhou < /S.XPLabel> <
                S.XPValueInline > {
                    pointsAwarded || 0
                }
                XP < /S.XPValueInline> <
                /S.XPBadgeInline>

                <
                S.Title >
                Parabéns!Mais um desafio <
                br / >
                finalizado na sua jornada🚀 <
                /S.Title>

                <
                S.Subtitle > {
                    challengeName || 'Desafio finalizado'
                } < /S.Subtitle>

                <
                S.ContinueButton onClick = {
                    handleContinue
                } >
                Continuar jogando <
                /S.ContinueButton> <
                /S.LeftPanel>

                { /* Painel Direito - Ranking */ } <
                S.RightPanel >
                <
                S.RankingHeader >
                <
                S.RankingTitle > Ranking < /S.RankingTitle> <
                /S.RankingHeader>

                <
                S.RankingList > {
                    (() => {
                            // Posição visual atual do usuário
                            const visualIndex = currentUserVisualIndex ? ? totalItems - 1;

                            // Separa o usuário dos outros
                            const userItem = displayRanking.find((u) => u.isCurrentUser);
                            const otherItems = displayRanking.filter(
                                (u) => !u.isCurrentUser,
                            );

                            // Cria lista de exibição inserindo usuário na posição visual
                            const displayList = [];
                            let otherIdx = 0;

                            for (let i = 0; i < totalItems; i++) {
                                if (i === visualIndex) {
                                    displayList.push({
                                        ...userItem,
                                        displayPosition: startPosition + i,
                                    });
                                } else {
                                    if (otherIdx < otherItems.length) {
                                        displayList.push({
                                            ...otherItems[otherIdx],
                                            displayPosition: startPosition + i,
                                        });
                                        otherIdx++;
                                    }
                                }
                            }

                            return displayList.map((user) => {
                                const isMoving =
                                    user.isCurrentUser &&
                                    currentUserVisualIndex > userFinalIndex;

                                return ( <
                                    S.RankingItem key = {
                                        user.isCurrentUser ?
                                        'current-user' :
                                            `pos-${user.displayPosition}`
                                    }
                                    $isCurrentUser = {
                                        user.isCurrentUser
                                    } >
                                    <
                                    S.Position > {
                                        user.displayPosition
                                    }
                                    º < /S.Position> <
                                    S.UserAvatar $isCurrentUser = {
                                        user.isCurrentUser
                                    } > {
                                        user.avatar ? ( <
                                            img src = {
                                                user.avatar
                                            }
                                            alt = {
                                                user.name
                                            }
                                            />
                                        ) : ( <
                                            S.AvatarPlaceholder > {
                                                user.name ? .charAt(0)
                                            } <
                                            /S.AvatarPlaceholder>
                                        )
                                    } <
                                    /S.UserAvatar> <
                                    S.UserInfo >
                                    <
                                    S.UserName >
                                    <
                                    S.UserBadge >
                                    <
                                    img src = {
                                        toAbsoluteUrl(
                                            `/media/gamification/${user?.level?.img || 'iniciante'}.svg`,
                                        )
                                    }
                                    alt = "Level" /
                                    >
                                    <
                                    /S.UserBadge> {
                                        shortenName(user.name)
                                    } {
                                        isMoving && < S.UpArrow > ↑ < /S.UpArrow>} <
                                            /S.UserName> {
                                                user.isCurrentUser && < S.UserState > Você < /S.UserState>} <
                                                    /S.UserInfo> <
                                                    S.UserXP $isHidden = {!user ? .isCurrentUser
                                                    } > {
                                                        user.xp ? .toLocaleString()
                                                    }
                                                XP
                                                    <
                                                    /S.UserXP> <
                                                    /S.RankingItem>
                                            );
                                    });
                            })()
                        } <
                        /S.RankingList> <
                        /S.RightPanel> <
                        /S.ModalContent> <
                        /S.ModalContainer> <
                        /ModalDialog>
                    );
                };

                export default XPModal;