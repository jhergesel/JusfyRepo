import React, {
    useMemo
} from 'react';
import SVG from "react-inlinesvg";
import * as S from './styles';
import {
    toAbsoluteUrl
} from "../../../../../_metronic/_helpers";
import ModalDialog from "../../../../components/flat/ui/ModalDialog";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const AVATAR_COLORS = [{
        bg: '#E8F5E9',
        text: '#2E7D32'
    },
    {
        bg: '#E3F2FD',
        text: '#1565C0'
    },
    {
        bg: '#FFF3E0',
        text: '#E65100'
    },
    {
        bg: '#FCE4EC',
        text: '#C2185B'
    },
    {
        bg: '#F3E5F5',
        text: '#7B1FA2'
    },
    {
        bg: '#E0F7FA',
        text: '#00838F'
    },
];

const INITIALS_POOL = ['SH', 'LV', 'MS', 'GN', 'AR', 'JP', 'CF', 'RB', 'TM', 'KL'];

const getRandomInitials = () => {
    const shuffled = [...INITIALS_POOL].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
};

const ChallengeModal = ({
    isOpen,
    challenge,
    onClose,
    onStart
}) => {
    const avatars = useMemo(() => {
        const initials = getRandomInitials();
        return initials.map((initial, index) => ({
            initial,
            color: AVATAR_COLORS[index % AVATAR_COLORS.length],
        }));
    }, []);

    if (!challenge) return null;

    return ( <
        ModalDialog open = {
            isOpen
        }
        width = "480px"
        onClose = {
            onClose
        } >
        <
        S.ModalContent >
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
        S.SocialProofRow >
        <
        S.AvatarsGroup > {
            avatars.map((avatar, index) => ( <
                S.InitialAvatar key = {
                    index
                }
                bgColor = {
                    avatar.color.bg
                }
                textColor = {
                    avatar.color.text
                } > {
                    avatar.initial
                } <
                /S.InitialAvatar>
            ))
        } <
        /S.AvatarsGroup> <
        S.SocialProofText > O ranking já está em movimento < /S.SocialProofText> <
        /S.SocialProofRow>

        <
        S.ContentSection >
        <
        S.MainTitle >
        Agora, sua atividade na < br / > Jusfy gera pontos <
        /S.MainTitle> <
        S.Subtitle >
        Conclua para ganhar XP e subir no ranking <
        /S.Subtitle>

        <
        S.StackedCardsWrapper >
        <
        S.DecorativeCardBack className = "card-back-1" / >
        <
        S.DecorativeCardBack className = "card-back-2" / >
        <
        S.BenefitsCard >
        <
        S.BenefitsContent >
        <
        S.Header >
        <
        S.ChallengeTitle > {
            challenge.name
        } < /S.ChallengeTitle> <
        S.XPBadge > +{
            challenge.points
        }
        XP < /S.XPBadge> <
        /S.Header> <
        S.BenefitsDescription > {
            challenge.description || 'O topo está sendo disputado quem avança no ranking fica mais perto dos prêmios'
        } <
        /S.BenefitsDescription> <
        /S.BenefitsContent> <
        /S.BenefitsCard> <
        /S.StackedCardsWrapper> <
        /S.ContentSection> <
        S.StartButton onClick = {
            onStart
        } >
        <
        WorkspacePremiumIcon sx = {
            {
                color: '#fff !important',
                marginRight: '8px'
            }
        }
        />
        Começar desafio <
        /S.StartButton> <
        /S.ModalContent> <
        /ModalDialog>
    );
};

export default ChallengeModal;