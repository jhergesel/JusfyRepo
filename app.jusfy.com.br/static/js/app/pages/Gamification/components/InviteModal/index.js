import React, {
    useState
} from 'react';
import {
    useSelector
} from 'react-redux';
import SVG from "react-inlinesvg";
import * as S from './styles';
import {
    toAbsoluteUrl
} from "../../../../../_metronic/_helpers";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ModalDialog from "../../../../components/flat/ui/ModalDialog";

const InviteModal = ({
    isOpen,
    challenge,
    onClose
}) => {
    const [copied, setCopied] = useState(false);
    const {
        user
    } = useSelector((state) => state.auth);

    if (!challenge) return null;

    // URL de indicação com client_id
    const clientId = user ? .client_id || 'seu-codigo';
    const referralLink = `${process.env.REACT_APP_GAMIFICATION_INVITE_URL}?utm_source=referral&utm_medium=mgm&utm_campaign=${clientId}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(referralLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleWhatsApp = () => {
        const message = encodeURIComponent(`Conheça a Jusfy! Use meu link de indicação: ${referralLink}`);
        window.open(`https://wa.me/?text=${message}`, '_blank');
    };

    const handleEmail = () => {
        const subject = encodeURIComponent('Convite para conhecer a Jusfy');
        const body = encodeURIComponent(`Olá!\n\nGostaria de te convidar para conhecer a Jusfy, uma plataforma incrível para advogados.\n\nUse meu link de indicação: ${referralLink}\n\nAbraços!`);
        window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
    };

    return ( <
        ModalDialog open = {
            isOpen
        }
        width = "440px"
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
        /S.CloseIcon> <
        S.Header >
        <
        S.HeaderIcon src = {
            toAbsoluteUrl('/media/gamification/cup/hands.svg')
        }
        alt = "Invite" / >
        <
        S.ChallengeTitle > {
            challenge.name
        } < /S.ChallengeTitle> <
        S.XPBadge >
        <
        S.XPIcon src = {
            toAbsoluteUrl('/media/gamification/cup/flag.svg')
        }
        alt = "Flag" / >
        +{
            challenge.points
        }
        XP <
        /S.XPBadge> <
        /S.Header>

        <
        S.ImageContainer >
        <
        S.InviteImage src = {
            toAbsoluteUrl('/media/gamification/invite.svg')
        }
        alt = "Convite" /
        >
        <
        /S.ImageContainer>

        <
        S.Content >
        <
        S.MainTitle >
        Compartilhe seu link e ganhe XP indicando novos advogados <
        /S.MainTitle> <
        S.Description >
        Indique colegas para conhecer a Jusfy e < S.HighlightText > receba 300 XP < /S.HighlightText> sempre que alguém entrar pela sua indicação. <
        /S.Description>

        <
        S.ShareSection >
        <
        S.ShareLabel > Compartilhe seu link pessoal < /S.ShareLabel> <
        S.LinkContainer >
        <
        S.LinkInput value = {
            referralLink
        }
        readOnly / >
        <
        S.CopyButton onClick = {
            handleCopy
        } >
        <
        ContentCopyIcon sx = {
            {
                fontSize: 18
            }
        }
        /> {
            copied ? 'Copiado!' : 'Copiar'
        } <
        /S.CopyButton> <
        /S.LinkContainer>

        <
        S.ShareLabel > Compartilhe seu link pessoal < /S.ShareLabel> <
        S.SocialButtons >
        <
        S.SocialButton onClick = {
            handleWhatsApp
        }
        type = "whatsapp" >
        <
        WhatsAppIcon sx = {
            {
                fontSize: 20
            }
        }
        /> <
        /S.SocialButton> <
        S.SocialButton onClick = {
            handleEmail
        }
        type = "email" >
        <
        EmailIcon sx = {
            {
                fontSize: 20
            }
        }
        /> <
        /S.SocialButton> <
        /S.SocialButtons> <
        /S.ShareSection> <
        /S.Content> <
        /S.ModalContent> <
        /ModalDialog>
    );
};

export default InviteModal;