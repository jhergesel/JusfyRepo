import React, {
    useRef,
    useState,
    useMemo,
    useCallback,
    useEffect
} from 'react';
import {
    useSelector,
    useDispatch
} from 'react-redux';
import {
    useHistory
} from 'react-router-dom';
import * as auth from '../../../../modules/Auth/_redux/authRedux';
import axios from 'axios';
import {
    toast
} from 'react-toastify';
import Skeleton from '@mui/material/Skeleton';
import * as S from './styles';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import HistoryIcon from '@mui/icons-material/History';
import {
    toAbsoluteUrl
} from "../../../../../_metronic/_helpers";
import LockIcon from '@mui/icons-material/Lock';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import VerifiedIcon from '@mui/icons-material/Verified';
import Carousel from '../../../../../app/components/Carousel';
import {
    config
} from "../../../../../config/env";
import {
    Tooltip as ReactTooltip
} from 'react-tooltip';
import {
    useUserBenefits,
    useAllBenefits,
    getRenewalLabel
} from '../../hooks/useUserBenefits';
import {
    getConfigEmail
} from '../../../JusSpace/api';
import {
    ROUTES_PATH
} from '../../../../constants/Routes';

// Fallback caso a API não retorne níveis
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

const UserProfile = ({
        userStats,
        levels = [],
        showProgress = true,
        loading = false,
        onAvatarUpdate
    }) => {
        const dispatch = useDispatch();
        const history = useHistory();
        const {
            authToken
        } = useSelector((state) => state.auth);
        const fileInputRef = useRef(null);
        const carouselRef = useRef(null);
        const [uploading, setUploading] = useState(false);
        const [localAvatar, setLocalAvatar] = useState(null);

        const [benefitSlideIndex, setBenefitSlideIndex] = useState(null); // null = not initialized yet

        // JusMail config status
        const [jusmailConfigured, setJusmailConfigured] = useState(null); // null = loading, true/false

        // JusZap config from Redux
        const juszapConfiguration = useSelector((state) => state.app ? .juszap_configuration);
        const juszapConfigured = useMemo(() => {
            if (!juszapConfiguration) return false;
            const status = juszapConfiguration ? .configuration ? .status;
            const whatsappConnected = juszapConfiguration ? .configuration ? .whatsapp_connected;
            return juszapConfiguration ? .hasConfiguration && status === 'COMPLETED' && whatsappConnected === true;
        }, [juszapConfiguration]);

        // Benefícios reais da API
        const {
            benefitsData
        } = useUserBenefits();
        const {
            allBenefitsData,
            allBenefitsRaw
        } = useAllBenefits();

        const handleBenefitSlideChange = useCallback((index) => {
            setBenefitSlideIndex(index);
        }, []);

        const handleLevelClick = useCallback((index) => {
            carouselRef.current ? .scrollTo(index);
            setBenefitSlideIndex(index);
        }, []);

        // Fetch JusMail config status
        useEffect(() => {
            const fetchJusmailConfig = async () => {
                try {
                    const response = await getConfigEmail();
                    const status = response ? .data ? .status;
                    setJusmailConfigured(status === 'READY');
                } catch {
                    setJusmailConfigured(false);
                }
            };
            if (authToken) fetchJusmailConfig();
        }, [authToken]);

        const {
            name = 'Usuário',
                avatar,
                level = 'Iniciante',
                currentXP = 0,
                nextLevelXP = 100
        } = userStats || {};

        const displayAvatar = localAvatar || avatar;

        // Usar níveis da API ou fallback
        const displayLevels = useMemo(() => {
            return levels.length > 0 ? levels : DEFAULT_LEVELS;
        }, [levels]);

        // Buscar índice do nível atual pelo nome ou ID
        const currentLevelIndex = useMemo(() => {
            // Primeiro tenta buscar pelo nome
            let index = displayLevels.findIndex(l => l.name === level);
            // Se não encontrar, tenta pelo ID (caso seja número)
            if (index === -1 && typeof level === 'number') {
                index = displayLevels.findIndex(l => l.id === level);
            }
            // Fallback para primeiro nível
            return index !== -1 ? index : 0;
        }, [displayLevels, level]);

        const currentLevelConfig = displayLevels[currentLevelIndex] || DEFAULT_LEVELS[0];

        // Initialize benefitSlideIndex to current level
        useEffect(() => {
            if (benefitSlideIndex === null) {
                setBenefitSlideIndex(currentLevelIndex);
            }
        }, [currentLevelIndex, benefitSlideIndex]);



        const isMaxLevel = currentLevelIndex === displayLevels.length - 1;
        const progressPercentage = isMaxLevel ? 100 : (currentXP / nextLevelXP) * 100;

        const handleAvatarClick = () => {
            fileInputRef.current ? .click();
        };

        const handleFileChange = async (event) => {
            const file = event.target.files ? .[0];
            if (!file) return;

            // Validar tipo de arquivo
            const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];
            if (!validTypes.includes(file.type)) {
                toast.error('Por favor, selecione um arquivo PNG ou JPG');
                return;
            }

            // Validar tamanho (máximo 5MB)
            if (file.size > 5 * 1024 * 1024) {
                toast.error('O arquivo deve ter no máximo 5MB');
                return;
            }

            // Criar preview local
            const reader = new FileReader();
            reader.onload = (e) => {
                setLocalAvatar(e.target.result);
            };
            reader.readAsDataURL(file);

            // Fazer upload
            setUploading(true);
            try {
                const formData = new FormData();
                formData.append('picture', file);

                const response = await axios.post(
                    `${config.jusfyBackend.apiUrl}/me/picture`,
                    formData, {
                        headers: {
                            'Authorization': `Bearer ${authToken}`,
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                );

                toast.success('Foto atualizada com sucesso!');
                dispatch(auth.actions.requestUser());

                if (onAvatarUpdate && response.data ? .avatar) {
                    onAvatarUpdate(response.data.avatar);
                }
            } catch (error) {
                console.error('Erro ao fazer upload da foto:', error);
                toast.error('Erro ao atualizar foto. Tente novamente.');
                setLocalAvatar(null);
            } finally {
                setUploading(false);
            }

            // Limpar input para permitir selecionar o mesmo arquivo novamente
            event.target.value = '';
        };

        // Skeleton loading
        if (loading && showProgress) {
            return ( <
                S.Container >
                <
                S.ProfileContent >
                <
                S.ProfileHeader >
                <
                Skeleton variant = "circular"
                width = {
                    80
                }
                height = {
                    80
                }
                /> <
                S.UserInfo >
                <
                Skeleton variant = "text"
                width = {
                    150
                }
                height = {
                    28
                }
                /> <
                Skeleton variant = "text"
                width = {
                    100
                }
                height = {
                    20
                }
                /> <
                /S.UserInfo> <
                /S.ProfileHeader> <
                /S.ProfileContent> <
                S.LevelTrack > {
                    DEFAULT_LEVELS.map((lvl) => ( <
                        S.LevelItem key = {
                            lvl.id
                        } >
                        <
                        Skeleton variant = "circular"
                        width = {
                            48
                        }
                        height = {
                            48
                        }
                        /> <
                        Skeleton variant = "text"
                        width = {
                            60
                        }
                        height = {
                            16
                        }
                        /> <
                        /S.LevelItem>
                    ))
                } <
                /S.LevelTrack> <
                /S.Container>
            );
        }

        return ( <
                S.Container >
                <
                S.ProfileContent >
                <
                S.ProfileHeader >
                <
                S.AvatarWrapper onClick = {
                    handleAvatarClick
                } >
                <
                S.AvatarRing progress = {
                    progressPercentage
                } > {
                    displayAvatar ? ( <
                        S.Avatar src = {
                            displayAvatar
                        }
                        alt = {
                            name
                        }
                        />
                    ) : ( <
                        S.AvatarPlaceholder > {
                            name.charAt(0).toUpperCase()
                        } <
                        /S.AvatarPlaceholder>
                    )
                } <
                /S.AvatarRing> <
                >
                <
                S.CameraButton disabled = {
                    uploading
                } >
                <
                CameraAltIcon sx = {
                    {
                        fontSize: 14,
                        color: '#fff !important'
                    }
                }
                /> <
                /S.CameraButton> <
                input ref = {
                    fileInputRef
                }
                type = "file"
                accept = "image/png,image/jpeg,image/jpg"
                onChange = {
                    handleFileChange
                }
                style = {
                    {
                        display: 'none'
                    }
                }
                /> <
                /> <
                /S.AvatarWrapper>

                <
                S.UserInfo >
                <
                S.UserNameRow >
                <
                S.UserBadgeIcon >
                <
                img src = {
                    toAbsoluteUrl(`/media/gamification/${currentLevelConfig.img}.svg`)
                }
                alt = "Level" / >
                <
                /S.UserBadgeIcon> <
                S.UserName > {
                    name
                } < /S.UserName> <
                /S.UserNameRow> <
                S.XPContainer >
                <
                S.XPIcon >
                <
                WorkspacePremiumIcon sx = {
                    {
                        color: '#01563F !important'
                    }
                }
                /> <
                /S.XPIcon> <
                S.XPText > {
                    currentXP
                }
                XP < /S.XPText> {
                    isMaxLevel
                        ?
                        < AllInclusiveIcon sx = {
                            {
                                fontSize: 16,
                                color: '#01563F !important'
                            }
                        }
                    />: < S.XPTotal > de {
                        nextLevelXP
                    } < /S.XPTotal>
                } <
                /S.XPContainer> <
                /S.UserInfo> <
                /S.ProfileHeader>

                {
                    showProgress && ( <
                        div style = {
                            {
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }
                        } >
                        <
                        S.SeasonLogo src = {
                            toAbsoluteUrl('/media/gamification/cup/season-logo.svg')
                        }
                        alt = "Temporada" / >
                        <
                        S.HistoryLink onClick = {
                            () => history.push(ROUTES_PATH.GAMIFICATION.HISTORICO)
                        } >
                        <
                        HistoryIcon sx = {
                            {
                                fontSize: 16
                            }
                        }
                        /> <
                        S.HistoryLabelFull > Histórico de pontos < /S.HistoryLabelFull> <
                        S.HistoryLabelShort > Hist.de pontos < /S.HistoryLabelShort> <
                        /S.HistoryLink> <
                        /div>
                    )
                } <
                /S.ProfileContent>

                {
                    showProgress && displayLevels.length > 0 && ( <
                            S.LevelTrack > {
                                displayLevels.map((lvl, index) => {
                                        const isCurrentLevel = index === currentLevelIndex;
                                        const isLocked = index > currentLevelIndex;
                                        const isCompleted = index < currentLevelIndex;

                                        return ( <
                                                S.LevelItem key = {
                                                    lvl.id
                                                }
                                                $active = {
                                                    benefitSlideIndex === index
                                                }
                                                onClick = {
                                                    () => handleLevelClick(index)
                                                }
                                                data - tooltip - id = "level-benefits-tooltip"
                                                data - tooltip - content = {
                                                    lvl.name
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
                                                S.LevelName > {
                                                    lvl.name
                                                } <
                                                /S.LevelName> {
                                                    isLocked && < LockIcon sx = {
                                                        {
                                                            fontSize: 18,
                                                            color: '#B5B5C3 !important'
                                                        }
                                                    }
                                                    />} {
                                                        isCurrentLevel && < S.LevelName style = {
                                                            {
                                                                color: '#01AB7D',
                                                                fontWeight: 600
                                                            }
                                                        } > Atual < /S.LevelName>} {
                                                            isCompleted && < VerifiedUserIcon sx = {
                                                                {
                                                                    fontSize: 18,
                                                                    color: '#1BC5BD !important'
                                                                }
                                                            }
                                                            />} <
                                                            /S.LevelItem>
                                                        );
                                                    })
                                            } <
                                            /S.LevelTrack>
                                    )
                                }

                                <
                                ReactTooltip
                                id = "level-benefits-tooltip"
                                place = "bottom"
                                style = {
                                    {
                                        maxWidth: '280px',
                                        fontSize: '12px',
                                        lineHeight: '1.6',
                                        whiteSpace: 'pre-line',
                                        zIndex: 9999
                                    }
                                }
                                />

                                {
                                    showProgress && (() => {
                                                const validUntil = benefitsData ? .validUntil || userStats ? .benefitsValidUntil;
                                                const renewalLabel = getRenewalLabel(validUntil);

                                                // Build per-level slides
                                                const slides = displayLevels.map((lvl, index) => {
                                                        const isLocked = index > currentLevelIndex;
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
                                                                /S.BenefitCardTitleRow> {
                                                                    isLocked && < S.BenefitCardBadge style = {
                                                                            {
                                                                                color: '#B5B5C3'
                                                                            }
                                                                        } > Bloqueado < /S.BenefitCardBadge>} <
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
                                                                    /S.BenefitCardTitleRow> {
                                                                        isLocked && < S.BenefitCardBadge style = {
                                                                                {
                                                                                    color: '#B5B5C3'
                                                                                }
                                                                            } > Bloqueado < /S.BenefitCardBadge>} <
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
                                                                    const labelLower = (discount.label || '').toLowerCase();
                                                                    const descLower = (discount.description || '').toLowerCase();
                                                                    const isJusmailDiscount = labelLower.includes('e-mail') || labelLower.includes('email') || descLower.includes('e-mail') || descLower.includes('email');
                                                                    const isJuszapDiscount = labelLower.includes('whatsapp') || labelLower.includes('juszap') || descLower.includes('whatsapp') || descLower.includes('juszap');

                                                                    const showJusmailUpgrade = isJusmailDiscount && jusmailConfigured === false;
                                                                    const showJuszapUpgrade = isJuszapDiscount && !juszapConfigured;
                                                                    const alreadyHasJusmail = isJusmailDiscount && jusmailConfigured === true;
                                                                    const alreadyHasJuszap = isJuszapDiscount && juszapConfigured;

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
                                                                        /S.BenefitCardTitleRow> {
                                                                            !isLocked && < S.BenefitCardBadge > Renovação / compra < /S.BenefitCardBadge>} {
                                                                                isLocked && < S.BenefitCardBadge style = {
                                                                                        {
                                                                                            color: '#B5B5C3'
                                                                                        }
                                                                                    } > Bloqueado < /S.BenefitCardBadge>} <
                                                                                    /S.BenefitCardHeader> <
                                                                                    S.BenefitCardDescription > {
                                                                                        discount.description
                                                                                    } < /S.BenefitCardDescription> {
                                                                                        !isLocked && (alreadyHasJusmail || alreadyHasJuszap) && ( <
                                                                                            S.BenefitCardBadge style = {
                                                                                                {
                                                                                                    color: '#01AB7D',
                                                                                                    marginTop: 4
                                                                                                }
                                                                                            } > Já adquirido < /S.BenefitCardBadge>
                                                                                        )
                                                                                    } {
                                                                                        !isLocked && showJusmailUpgrade && ( <
                                                                                            S.BenefitCardAction onClick = {
                                                                                                () => history.push('/space/domain')
                                                                                            } >
                                                                                            Fazer upgrade com {
                                                                                                discount.value
                                                                                            } % OFF & rsaquo; <
                                                                                            /S.BenefitCardAction>
                                                                                        )
                                                                                    } {
                                                                                        !isLocked && showJuszapUpgrade && ( <
                                                                                            S.BenefitCardAction onClick = {
                                                                                                () => history.push('/assistente-whatsapp')
                                                                                            } >
                                                                                            Fazer upgrade com {
                                                                                                discount.value
                                                                                            } % OFF & rsaquo; <
                                                                                            /S.BenefitCardAction>
                                                                                        )
                                                                                    } <
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

                                                                const activeSlideIndex = benefitSlideIndex ? ? currentLevelIndex;
                                                                const isViewingLocked = activeSlideIndex > currentLevelIndex;

                                                                return ( <
                                                                    div style = {
                                                                        {
                                                                            position: 'relative'
                                                                        }
                                                                    } > {
                                                                        isViewingLocked ? ( <
                                                                            S.RenewalChip style = {
                                                                                {
                                                                                    background: '#F1F1F2',
                                                                                    color: '#838486',
                                                                                    borderColor: '#E7E8EC'
                                                                                }
                                                                            } >
                                                                            <
                                                                            LockIcon sx = {
                                                                                {
                                                                                    fontSize: 14,
                                                                                    color: '#B5B5C3 !important'
                                                                                }
                                                                            }
                                                                            />
                                                                            Bloqueado <
                                                                            /S.RenewalChip>
                                                                        ) : renewalLabel ? ( <
                                                                            S.RenewalChip >
                                                                            <
                                                                            S.RenewalChipIcon src = {
                                                                                toAbsoluteUrl('/media/gamification/cup/canary.svg')
                                                                            }
                                                                            alt = "Renovação" / > {
                                                                                renewalLabel
                                                                            } <
                                                                            /S.RenewalChip>
                                                                        ) : null
                                                                    }

                                                                    <
                                                                    S.BenefitsCarouselWrapper >
                                                                    <
                                                                    Carousel ref = {
                                                                        carouselRef
                                                                    }
                                                                    arrows = {
                                                                        true
                                                                    }
                                                                    showDots = {
                                                                        true
                                                                    }
                                                                    startIndex = {
                                                                        currentLevelIndex
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
                                                                        div style = {
                                                                            {
                                                                                display: 'flex',
                                                                                flexDirection: 'column',
                                                                                gap: '6px'
                                                                            }
                                                                        } >
                                                                        <
                                                                        div style = {
                                                                            {
                                                                                fontFamily: "'Noto Sans', sans-serif",
                                                                                fontSize: '18px',
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
                                                                                'Estes são os benefícios que você já conquistou. Ao subir de nível, novos são liberados.'
                                                                        } <
                                                                        /S.BenefitsSubtitle> <
                                                                        /div>
                                                                    } >
                                                                    {
                                                                        slides
                                                                    } <
                                                                    /Carousel> <
                                                                    /S.BenefitsCarouselWrapper> <
                                                                    /div>
                                                                );
                                                            })()
                                                    } <
                                                    /S.Container>
                                                );
                                            };

                                            export default UserProfile;