import React, {
    useMemo,
    useState,
    useEffect,
    useRef,
    useCallback
} from 'react';
import SVG from "react-inlinesvg";
import * as S from './styles';
import {
    toAbsoluteUrl
} from "../../../../../_metronic/_helpers";
import ModalDialog from "../../../../components/flat/ui/ModalDialog";
import Carousel from '../../../../components/Carousel';
import confetti from 'canvas-confetti';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import VerifiedIcon from '@mui/icons-material/Verified';
import {
    useAllBenefits
} from '../../hooks/useUserBenefits';

const CONFETTI_COLORS = ['#01AB7D', '#FFC700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#E94F0E'];

const DEFAULT_LEVELS = [{
        id: 1,
        name: 'Iniciante',
        img: 'iniciante'
    },
    {
        id: 2,
        name: 'Aprendiz',
        img: 'aprendiz'
    },
    {
        id: 3,
        name: 'Praticante',
        img: 'praticante'
    },
    {
        id: 4,
        name: 'Avançado',
        img: 'avancado'
    },
    {
        id: 5,
        name: 'Especialista',
        img: 'especialista'
    },
    {
        id: 6,
        name: 'Mestre',
        img: 'mestre'
    },
];

const LevelUpModal = ({
        isOpen,
        notification,
        onClose,
        userStats = {},
        levels = []
    }) => {
        const [imageLoaded, setImageLoaded] = useState(false);
        const [benefitSlideIndex, setBenefitSlideIndex] = useState(null);
        const canvasRef = useRef(null);
        const confettiInstanceRef = useRef(null);
        const intervalRef = useRef(null);
        const carouselRef = useRef(null);

        const {
            allBenefitsRaw
        } = useAllBenefits();

        const {
            data
        } = notification || {};
        const {
            newLevel,
            newLevelName
        } = data || {};

        // Preload level-up SVG
        useEffect(() => {
            const img = new Image();
            img.src = toAbsoluteUrl('/media/gamification/cup/level-up.svg');
            img.onload = () => setImageLoaded(true);
        }, []);

        const displayLevels = useMemo(() => {
            return levels.length > 0 ? levels : DEFAULT_LEVELS;
        }, [levels]);

        // Find new level index
        const newLevelIndex = useMemo(() => {
            if (newLevelName) {
                const idx = displayLevels.findIndex(l => l.name === newLevelName);
                if (idx !== -1) return idx;
            }
            if (newLevel && typeof newLevel === 'number') {
                const idx = displayLevels.findIndex(l => l.id === newLevel);
                if (idx !== -1) return idx;
            }
            // Fallback: use userStats level
            const idx = displayLevels.findIndex(l => l.name === userStats ? .level);
            return idx !== -1 ? idx : 0;
        }, [displayLevels, newLevel, newLevelName, userStats ? .level]);

        // Initialize carousel to new level
        useEffect(() => {
            if (isOpen && benefitSlideIndex === null) {
                setBenefitSlideIndex(newLevelIndex);
            }
        }, [isOpen, newLevelIndex, benefitSlideIndex]);

        // Reset state when modal closes
        useEffect(() => {
            if (!isOpen) {
                setBenefitSlideIndex(null);
            }
        }, [isOpen]);

        const handleBenefitSlideChange = useCallback((index) => {
            setBenefitSlideIndex(index);
        }, []);

        const handleLevelClick = useCallback((index) => {
            carouselRef.current ? .scrollTo(index);
            setBenefitSlideIndex(index);
        }, []);

        // Confetti
        const startConfetti = useCallback(() => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            setTimeout(() => {
                if (!canvasRef.current) return;

                const rect = canvas.getBoundingClientRect();
                canvas.width = rect.width * window.devicePixelRatio;
                canvas.height = rect.height * window.devicePixelRatio;

                const myConfetti = confetti.create(canvas, {
                    resize: true
                });
                confettiInstanceRef.current = myConfetti;

                myConfetti({
                    particleCount: 120,
                    angle: 90,
                    spread: 80,
                    startVelocity: 25,
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

                const fire = () => {
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

        useEffect(() => {
            if (isOpen) {
                const timer = setTimeout(() => {
                    startConfetti();
                }, 400);
                return () => {
                    clearTimeout(timer);
                    stopConfetti();
                };
            } else {
                stopConfetti();
            }
        }, [isOpen, startConfetti, stopConfetti]);

        if (!isOpen || !notification) return null;

        const currentLevelConfig = displayLevels[newLevelIndex] || DEFAULT_LEVELS[0];
        const levelDisplayName = newLevelName || currentLevelConfig ? .name || 'Novo nível';

        // Build benefit slides
        const slides = displayLevels.map((lvl, index) => {
            const isLocked = index > newLevelIndex;
            const levelNumber = index + 1;
            const levelBenefits = (allBenefitsRaw[levelNumber] || []).filter(b => b.value > 0);

            const cashbackBenefits = levelBenefits.filter(b => b.category === 'cashback');
            const creditBenefits = levelBenefits.filter(b => b.category === 'monthly_credits');
            const discountBenefits = levelBenefits.filter(b => b.category === 'discount');

            const hasBenefits = levelBenefits.length > 0;
            const cards = [];

            if (cashbackBenefits.length > 0) {
                const cb = cashbackBenefits[0];
                cards.push( <
                    S.BenefitCard key = "cashback" >
                    <
                    S.BenefitCardHeader >
                    <
                    S.BenefitCardTitleRow >
                    <
                    VerifiedIcon sx = {
                        {
                            fontSize: 16,
                            color: isLocked ? '#B5B5C3 !important' : '#01AB7D !important'
                        }
                    }
                    /> <
                    S.BenefitCardTitle > {
                        cb.label
                    } < /S.BenefitCardTitle> <
                    /S.BenefitCardTitleRow> <
                    /S.BenefitCardHeader> <
                    S.BenefitCardDescription > {
                        cb.description
                    } < /S.BenefitCardDescription> <
                    /S.BenefitCard>
                );
            }

            if (creditBenefits.length > 0) {
                cards.push( <
                    S.BenefitCard key = "credits" >
                    <
                    S.BenefitCardHeader >
                    <
                    S.BenefitCardTitleRow >
                    <
                    VerifiedIcon sx = {
                        {
                            fontSize: 16,
                            color: isLocked ? '#B5B5C3 !important' : '#01AB7D !important'
                        }
                    }
                    /> <
                    S.BenefitCardTitle > Créditos Mensais < /S.BenefitCardTitle> <
                    /S.BenefitCardTitleRow> <
                    /S.BenefitCardHeader> <
                    S.BenefitCardDescription > {
                        creditBenefits.map((cr, ci) => ( <
                            span key = {
                                ci
                            } > +{
                                cr.value
                            } {
                                cr.description
                            } < /span>
                        ))
                    } <
                    /S.BenefitCardDescription> <
                    /S.BenefitCard>
                );
            }

            discountBenefits.forEach((discount, i) => {
                cards.push( <
                    S.BenefitCard key = {
                        `discount-${i}`
                    } >
                    <
                    S.BenefitCardHeader >
                    <
                    S.BenefitCardTitleRow >
                    <
                    VerifiedIcon sx = {
                        {
                            fontSize: 16,
                            color: isLocked ? '#B5B5C3 !important' : '#01AB7D !important'
                        }
                    }
                    /> <
                    S.BenefitCardTitle > {
                        discount.label
                    } < /S.BenefitCardTitle> <
                    /S.BenefitCardTitleRow> <
                    /S.BenefitCardHeader> <
                    S.BenefitCardDescription > {
                        discount.description
                    } < /S.BenefitCardDescription> <
                    /S.BenefitCard>
                );
            });

            return ( <
                S.BenefitLevelSlide key = {
                    lvl.id
                } > {
                    hasBenefits ? cards : ( <
                        S.BenefitCard >
                        <
                        S.BenefitCardDescription style = {
                            {
                                textAlign: 'center',
                                padding: '16px 0',
                                color: '#B5B5C3'
                            }
                        } >
                        Sem benefícios neste nível <
                        /S.BenefitCardDescription> <
                        /S.BenefitCard>
                    )
                } <
                /S.BenefitLevelSlide>
            );
        });

        const activeSlideIndex = benefitSlideIndex ? ? newLevelIndex;
        const isViewingLocked = activeSlideIndex > newLevelIndex;

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
                    toAbsoluteUrl("/media/flat/close.svg")
                }
                /> <
                /S.CloseIcon>

                <
                S.ModalContent > { /* Left Panel - Image + Message */ } <
                S.LeftPanel >
                <
                S.ConfettiCanvas ref = {
                    canvasRef
                }
                />

                {
                    !imageLoaded && < S.LevelUpImagePlaceholder / >
                } <
                S.LevelUpImage src = {
                    toAbsoluteUrl('/media/gamification/cup/level-up.svg')
                }
                alt = "Level Up"
                style = {
                    {
                        display: imageLoaded ? 'block' : 'none'
                    }
                }
                />

                <
                S.EmojiLabel >
                Bola na rede!Continue assim⚽ <
                /S.EmojiLabel>

                <
                S.Title >
                Você marcou mais um < br / >
                e < span > avançou de nível < /span> <
                /S.Title>

                <
                S.Subtitle >
                Continue avançando para desbloquear novos benefícios e aproveitar ainda mais o que a plataforma oferece <
                /S.Subtitle>

                <
                S.ContinueButton onClick = {
                    onClose
                } >
                Continuar jogando <
                /S.ContinueButton> <
                /S.LeftPanel>

                { /* Right Panel - Levels + Benefits */ } <
                S.RightPanel >
                <
                S.LevelTrack > {
                    displayLevels.map((lvl, index) => {
                            const isCurrentLevel = index === newLevelIndex;
                            const isLocked = index > newLevelIndex;
                            const isCompleted = index < newLevelIndex;

                            return ( <
                                    S.LevelItem key = {
                                        lvl.id
                                    }
                                    $active = {
                                        activeSlideIndex === index
                                    }
                                    onClick = {
                                        () => handleLevelClick(index)
                                    } >
                                    <
                                    S.LevelIcon src = {
                                        toAbsoluteUrl(`/media/gamification/${lvl.img}.svg`)
                                    }
                                    alt = {
                                        lvl.name
                                    }
                                    $blocked = {
                                        isLocked
                                    }
                                    $scale = {
                                        isCurrentLevel
                                    }
                                    /> <
                                    S.LevelName $active = {
                                        isCurrentLevel
                                    } > {
                                        lvl.name
                                    } <
                                    /S.LevelName> {
                                        isLocked && < LockIcon sx = {
                                            {
                                                fontSize: 16,
                                                color: '#B5B5C3 !important'
                                            }
                                        }
                                        />} {
                                            isCurrentLevel && < S.LevelName $active > Atual < /S.LevelName>} {
                                                isCompleted && < VerifiedUserIcon sx = {
                                                    {
                                                        fontSize: 16,
                                                        color: '#1BC5BD !important'
                                                    }
                                                }
                                                />} <
                                                /S.LevelItem>
                                            );
                                        })
                                } <
                                /S.LevelTrack>

                                <
                                S.BenefitsCarouselWrapper >
                                <
                                Carousel
                            ref = {
                                carouselRef
                            }
                            arrows = {
                                true
                            }
                            showDots = {
                                true
                            }
                            startIndex = {
                                newLevelIndex
                            }
                            adaptiveHeight = {
                                true
                            }
                            onSlideChange = {
                                handleBenefitSlideChange
                            }
                            responsive = {
                                {
                                    all: {
                                        breakpoint: {
                                            max: 5000,
                                            min: 0
                                        },
                                        items: 1,
                                        slidesToSlide: 1
                                    }
                                }
                            }
                            title = { <
                                    div >
                                    <
                                    div style = {
                                        {
                                            fontFamily: "'Noto Sans', sans-serif",
                                            fontSize: '16px',
                                            fontWeight: 400,
                                            color: '#1E1E20'
                                        }
                                    } >
                                    Veja o que você & nbsp; <
                                    span style = {
                                        {
                                            fontWeight: 700
                                        }
                                    } > {
                                        isViewingLocked ? 'pode desbloquear' : 'já desbloqueou'
                                    } < /span> <
                                    /div> <
                                    S.BenefitsSubtitle > {
                                        isViewingLocked ?
                                        'Estes benefícios serão liberados quando você atingir este nível.' :
                                            'Estes são os benefícios que você já conquistou ao subir de nível.'
                                    } <
                                    /S.BenefitsSubtitle> <
                                    /div>
                                } >
                                {
                                    slides
                                } <
                                /Carousel> <
                                /S.BenefitsCarouselWrapper> <
                                /S.RightPanel> <
                                /S.ModalContent> <
                                /S.ModalContainer> <
                                /ModalDialog>
                        );
                    };

                    export default LevelUpModal;