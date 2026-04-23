import React, {
    useState
} from 'react';
import Skeleton from '@mui/material/Skeleton';
import {
    useHistory
} from 'react-router-dom';
import * as S from './styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
    toAbsoluteUrl
} from "../../../../../_metronic/_helpers";
import ChallengeModal from '../ChallengeModal';
import InviteModal from '../InviteModal';
import EventsSegmentGamification from '../../helpers/EventsSegmentGamification';
import {
    formatNextAvailableDate
} from '../../helpers/dateHelpers';
import {
    isJuspaySpecialEvent,
    sortGamificationChallenges,
} from 'app/helpers/gamification/challengePresentation';
import {
    GamificationChallengeEvent
} from 'app/helpers/gamification/challengeDomain';
import {
    isChallengeBlockedForAction,
    resolveChallengeStartDestination,
    shouldOpenInviteModal,
} from 'app/helpers/gamification/challengeActions';

const ChallengesList = ({
    challenges = [],
    loading = false,
    compact = false,
    onChallengeClick,
    disableInternalFlow = false,
    onChallengeSelect,
    hideLeadingIcon = false,
}) => {
    const [selectedChallenge, setSelectedChallenge] = useState(null);
    const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
    const [isChallengeModalOpen, setIsChallengeModalOpen] = useState(false);
    const history = useHistory();
    const {
        trackInviteModalOpened,
        trackJusfyPayRedirect
    } = EventsSegmentGamification();

    // Combinar desafios reais com mocks temporários
    const allChallenges = [...challenges];

    const displayChallenges = compact ?
        sortGamificationChallenges(allChallenges).slice(0, 3) :
        sortGamificationChallenges(allChallenges);

    // Função para verificar se o desafio é highlight (pontos >= 100)
    const isHighlight = (challenge) => challenge.points >= 100;

    // Função para verificar se deve mostrar o ícone coffee
    const shouldShowCoffee = (event) => ['plan_renewed', 'subuser_created', 'login'].includes(event);

    // Função para verificar se deve mostrar o ícone hand (member_get_member)
    const shouldShowHand = (event) =>
        event === GamificationChallengeEvent.MEMBER_GET_MEMBER;

    // Função para verificar se é um desafio JusPay especial
    const isJuspaySpecial = (event) => isJuspaySpecialEvent(event);

    const handleChallengeClick = (challenge) => {
        if (isChallengeBlockedForAction(challenge)) {
            return;
        }

        if (onChallengeClick) {
            onChallengeClick();
        }

        if (onChallengeSelect) {
            onChallengeSelect(challenge);
        }

        if (disableInternalFlow) {
            return;
        }

        setSelectedChallenge(challenge);
        if (shouldOpenInviteModal(challenge)) {
            trackInviteModalOpened({
                challenge_id: challenge.id,
                challenge_name: challenge.name,
                challenge_points: challenge.points,
            });
            setIsInviteModalOpen(true);
        } else {
            setIsChallengeModalOpen(true);
        }
    };

    const handleCloseModals = () => {
        setSelectedChallenge(null);
        setIsInviteModalOpen(false);
        setIsChallengeModalOpen(false);
    };

    const handleStartChallenge = () => {
        if (!selectedChallenge) return;
        const destination = resolveChallengeStartDestination(selectedChallenge.event);

        if (isJuspaySpecialEvent(selectedChallenge.event)) {
            trackJusfyPayRedirect({
                challenge_id: selectedChallenge.id,
                challenge_name: selectedChallenge.name,
                challenge_event: selectedChallenge.event,
            });
        }

        if (destination.type === 'external') {
            window.open(destination.url, '_blank');
        } else if (destination.type === 'internal') {
            history.push(destination.path);
        }

        handleCloseModals();
    };

    // Skeleton para loading
    const renderSkeleton = () => ( <
        S.Container > {
            [1, 2, 3, 4].slice(0, compact ? 4 : 6).map((i) => ( <
                S.ChallengeItem key = {
                    i
                }
                style = {
                    {
                        cursor: 'default'
                    }
                } >
                <
                S.ChallengeInfo >
                <
                Skeleton variant = "text"
                width = "70%"
                height = {
                    20
                }
                /> <
                /S.ChallengeInfo> <
                S.ChallengeXPContainer >
                <
                Skeleton variant = "rounded"
                width = {
                    80
                }
                height = {
                    36
                }
                /> <
                Skeleton variant = "rounded"
                width = {
                    36
                }
                height = {
                    36
                }
                /> <
                /S.ChallengeXPContainer> <
                /S.ChallengeItem>
            ))
        } <
        /S.Container>
    );

    if (loading) {
        return renderSkeleton();
    }

    return ( <
        >
        <
        S.Container > {
            displayChallenges.map((challenge) => {
                const highlight = isHighlight(challenge);
                const isDone = challenge.user_status === 'finished';
                const isInfinite =
                    challenge.event === GamificationChallengeEvent.MEMBER_GET_MEMBER;
                const juspaySpecial = isJuspaySpecial(challenge.event);
                const showCoffee = !hideLeadingIcon &&
                    shouldShowCoffee(challenge.event) &&
                    challenge.points >= 100;
                const showHand = !hideLeadingIcon && shouldShowHand(challenge.event);
                const showGift = !hideLeadingIcon && juspaySpecial;
                const doneHighlight = highlight && isDone && !isInfinite;

                // Formatar data de renovação se o desafio estiver concluído
                const renewalText = isDone && !isInfinite && challenge.user_progress ? .next_available_at ?
                    formatNextAvailableDate(challenge.user_progress.next_available_at) :
                    '';

                return ( <
                    S.ChallengeItem key = {
                        challenge.id
                    }
                    highlight = {
                        highlight
                    }
                    doneHighlight = {
                        doneHighlight
                    }
                    juspaySpecial = {
                        juspaySpecial
                    }
                    hideLeadingIcon = {
                        hideLeadingIcon
                    }
                    onClick = {
                        () => handleChallengeClick(challenge)
                    }
                    done = {
                        isDone && !isInfinite
                    }
                    showLines = {
                        showCoffee
                    } >
                    { /* Ícone taça para JusPay special */ } {
                        showGift && ( <
                            S.ChallengeIcon src = {
                                toAbsoluteUrl('/media/gamification/cup/taca.svg')
                            }
                            float = {
                                false
                            }
                            alt = "Taça Icon" /
                            >
                        )
                    }

                    { /* Ícone coffee para plan_renewed e subuser_created */ } {
                        /* {showCoffee && (
                                        <S.ChallengeIcon
                                          src={toAbsoluteUrl('/media/gamification/coffee.svg')}
                                          float={true}
                                          alt="Coffee Icon"
                                        />
                                      )} */
                    }

                    { /* Ícone hands para member_get_member */ } {
                        showHand && ( <
                            S.ChallengeIcon src = {
                                toAbsoluteUrl('/media/gamification/cup/hands.svg')
                            }
                            float = {
                                false
                            }
                            alt = "Hands Icon" /
                            >
                        )
                    }

                    <
                    S.ChallengeInfo >
                    <
                    S.ChallengeTitle done = {
                        isDone && !isInfinite
                    }
                    isMemberGetMember = {
                        isInfinite
                    }
                    doneHighlight = {
                        doneHighlight
                    } >
                    {
                        challenge.name
                    } <
                    /S.ChallengeTitle> <
                    /S.ChallengeInfo>

                    {
                        isDone && !isInfinite ? ( <
                            > {
                                renewalText ? ( <
                                    S.RenewalBadge doneHighlight = {
                                        doneHighlight
                                    } >
                                    <
                                    S.IconDone src = {
                                        toAbsoluteUrl(doneHighlight ? '/media/gamification/cup/canary.svg' : '/media/gamification/done.svg')
                                    }
                                    alt = "Done" /
                                    >
                                    Renova {
                                        renewalText
                                    } <
                                    /S.RenewalBadge>
                                ) : ( <
                                    S.ChallengeDone doneHighlight = {
                                        doneHighlight
                                    } >
                                    <
                                    S.XPValueDone doneHighlight = {
                                        doneHighlight
                                    } > Concluído < /S.XPValueDone> <
                                    S.IconDone src = {
                                        toAbsoluteUrl(doneHighlight ? '/media/gamification/cup/canary.svg' : '/media/gamification/done.svg')
                                    }
                                    alt = "Done" /
                                    >
                                    <
                                    /S.ChallengeDone>
                                )
                            } <
                            />
                        ) : ( <
                            S.ChallengeXPContainer >
                            <
                            S.ChallengeXP highlight = {
                                highlight
                            }
                            juspaySpecial = {
                                juspaySpecial
                            } > {
                                highlight && !juspaySpecial && < S.XPIcon src = {
                                    toAbsoluteUrl('/media/gamification/cup/flag.svg')
                                }
                                alt = "Flag" / >
                            } <
                            S.XPValue highlight = {
                                highlight
                            }
                            juspaySpecial = {
                                juspaySpecial
                            } > +{
                                challenge.points
                            }
                            XP < /S.XPValue> <
                            /S.ChallengeXP> {
                                !juspaySpecial && (
                                    challenge.user_status === 'in_progress' && challenge.target_value ? ( <
                                        S.ProgressBadge highlight = {
                                            highlight
                                        } > {
                                            challenge.user_progress.current_value || 0
                                        }
                                        /{challenge.target_value} <
                                        /S.ProgressBadge>
                                    ) : ( <
                                        S.ButtonGo highlight = {
                                            highlight
                                        } >
                                        <
                                        ChevronRightIcon sx = {
                                            {
                                                color: highlight ? '#009739 !important' : '#01AB7D !important'
                                            }
                                        }
                                        /> <
                                        /S.ButtonGo>
                                    )
                                )
                            } <
                            /S.ChallengeXPContainer>
                        )
                    } <
                    /S.ChallengeItem>
                );
            })
        } <
        /S.Container>

        {
            !disableInternalFlow && ( <
                >
                <
                ChallengeModal isOpen = {
                    isChallengeModalOpen
                }
                challenge = {
                    selectedChallenge
                }
                onClose = {
                    handleCloseModals
                }
                onStart = {
                    handleStartChallenge
                }
                />

                <
                InviteModal isOpen = {
                    isInviteModalOpen
                }
                challenge = {
                    selectedChallenge
                }
                onClose = {
                    handleCloseModals
                }
                /> <
                />
            )
        } <
        />
    );
};

export default ChallengesList;