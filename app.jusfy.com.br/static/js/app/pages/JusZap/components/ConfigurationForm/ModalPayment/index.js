import ModalDialog from "../../../../../components/flat/ui/ModalDialog";
import {
    toAbsoluteUrl
} from "../../../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import React, {
    useState,
    useMemo
} from "react";
import NewCardForm from "../../../../JusSpace/components/NewCardForm";
import SelectCardForm from "../../../../JusSpace/components/SelectCardForm";
import * as S from "./styles";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import VerifiedIcon from '@mui/icons-material/Verified';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
    useUserBenefits
} from '../../../../Gamification/hooks/useUserBenefits';

const JUSZAP_FEATURES = [
    "Organização automática das conversas",
    "IA treinada para atendimentos jurídicos",
    "Triagem e qualificação de leads 24hrs por dia"
];

const JUSZAP_PRICE = 49.90;

const ModalContent = ({
    onSubmit,
    isOpen,
    closeModal
}) => {
    const [isNewCard, setIsNewCard] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const {
        benefitsData
    } = useUserBenefits();

    // Detecta desconto de gamificação para JusZap
    const juszapDiscount = useMemo(() => {
        if (!benefitsData ? .benefits) return null;
        return benefitsData.benefits.find(b => {
            if (b.category !== 'discount' || !b.value) return false;
            const labelLower = (b.label || '').toLowerCase();
            const descLower = (b.description || '').toLowerCase();
            return labelLower.includes('whatsapp') || labelLower.includes('juszap') ||
                descLower.includes('whatsapp') || descLower.includes('juszap');
        });
    }, [benefitsData]);

    const discountPercent = juszapDiscount ? .value || 0;
    const discountedPrice = discountPercent > 0 ?
        JUSZAP_PRICE * (1 - discountPercent / 100) :
        JUSZAP_PRICE;

    const handleCloseClick = () => {
        closeModal();
    };

    const handleCancelClose = () => {
        setShowConfirmation(false);
    };

    return ( <
        ModalDialog open = {
            isOpen
        } >
        <
        S.Container >
        <
        S.CloseIcon onClick = {
            handleCloseClick
        } >
        <
        SVG src = {
            toAbsoluteUrl("/media/flat/close.svg")
        }
        /> <
        /S.CloseIcon>

        <
        S.Header >
        <
        S.Subtitle > IA Assistente para WhatsApp < /S.Subtitle> <
        S.Title > Transforme seu WhatsApp em um Assistente Jurídico 24 h com IA < /S.Title> <
        /S.Header>

        <
        S.PlanCard >
        <
        S.PlanType > Plano Mensal < /S.PlanType> {
            discountPercent > 0 && ( <
                S.DiscountBadge > {
                    discountPercent
                } % OFF Gamificação < /S.DiscountBadge>
            )
        } <
        S.PriceContainer > {
            discountPercent > 0 ? ( <
                >
                <
                S.OriginalPrice >
                <
                span > R$ {
                    JUSZAP_PRICE.toFixed(2).replace('.', ',')
                } < /span> <
                /S.OriginalPrice> <
                S.Price > R$ {
                    discountedPrice.toFixed(2).replace('.', ',')
                } < /S.Price> <
                />
            ) : ( <
                S.Price > R$ {
                    JUSZAP_PRICE.toFixed(2).replace('.', ',')
                } < /S.Price>
            )
        } <
        S.PricePerMonth > /mês*</S.PricePerMonth >
        <
        /S.PriceContainer>

        <
        S.FeaturesList > {
            JUSZAP_FEATURES.map((feature, index) => ( <
                S.FeatureItem key = {
                    index
                } >
                <
                VerifiedIcon sx = {
                    {
                        color: '#E94F0E !important'
                    }
                }
                /> <
                span > {
                    feature
                } < /span> <
                /S.FeatureItem>
            ))
        } <
        /S.FeaturesList> <
        /S.PlanCard>

        {
            isNewCard ? ( <
                div style = {
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }
                } >
                <
                div style = {
                    {
                        backgroundColor: "#FAFBFF",
                        border: '1px solid #E7E8EC',
                        borderRadius: "5px",
                        padding: "10px",
                        cursor: "pointer",
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        height: '40px'
                    }
                }
                onClick = {
                    () => setIsNewCard(false)
                } >
                <
                CreditCardIcon sx = {
                    {
                        color: "#01AB7D !important"
                    }
                }
                /> <
                span style = {
                    {
                        color: "#01AB7D",
                        fontSize: '14px',
                        fontWeight: '600'
                    }
                } >
                Utilizar um cartão já cadastrado <
                /span> <
                /div> <
                NewCardForm buttonText = "Finalizar compra"
                onLoading = {
                    () => console.log('loading...')
                }
                onSubmit = {
                    (card) => {
                        onSubmit(card.hash)
                    }
                }
                /> <
                /div>
            ) : ( <
                SelectCardForm buttonText = "Finalizar compra"
                onNewCard = {
                    () => setIsNewCard(true)
                }
                onSubmit = {
                    (card) => {
                        onSubmit(card.hash)
                    }
                }
                />
            )
        }

        <
        S.DisclaimerBox >
        <
        InfoOutlinedIcon sx = {
            {
                color: '#806400 !important'
            }
        }
        /> <
        S.DisclaimerText >
        O valor do Assistente de IA para whatsapp será adicionado como cobrança separada do seu plano. <
            /S.DisclaimerText> <
            /S.DisclaimerBox> <
            /S.Container> <
            /ModalDialog>
    )
};

export default ModalContent;