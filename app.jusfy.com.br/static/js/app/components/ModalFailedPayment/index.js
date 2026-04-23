import * as S from "./styles";
import SVG from "react-inlinesvg";
import {
    toAbsoluteUrl
} from "../../../_metronic/_helpers/AssetsHelpers.js";
import useFeatureFlag from "../../hooks/useFeatureFlag";
import {
    FEATURE_FLAGS
} from "../../constants/FeatureFlag";
import {
    URLS
} from "../../constants/urls";
import CircularProgress from "@mui/material/CircularProgress";

const PIX_MIN_AMOUNT = 500;

const getDescription = (subTitle, isPixEnabled, pixGenerationFailed) => {
    if (pixGenerationFailed) {
        return "Tivemos um problema ao gerar o Pix. Por favor, entre em contato com o suporte, iremos te ajudar a finalizar seu pagamento.";
    }

    const baseMessage =
        subTitle ||
        "Pagamento recusado. Verifique os dados inseridos do cartão e tente novamente.";

    if (isPixEnabled) {
        return `${baseMessage} Mas não se preocupe, você ainda pode finalizar seu pagamento de forma rápida e segura com o Pix.`;
    }

    return baseMessage;
};

const getTitle = (title, pixGenerationFailed) => {
    if (pixGenerationFailed) {
        return "Entre em contato com o suporte";
    }

    return title || "Pagamento não autorizado";
};

export const ModalFailedPaymentContent = ({
    title,
    subTitle,
    onClose,
    onPix,
    loading,
    planAmount,
    canCreatePix = true,
    pixGenerationFailed = false,
}) => {
    const {
        isFeatureFlagEnable: isPixPaymentEnabled
    } = useFeatureFlag(
        FEATURE_FLAGS.KILL_SWITCH.ENABLE_PIX_PAYMENT_ON_CHECKOUT_FAILED
    );

    const getPlanAmountValue = amount => {
        if (!amount) return 0;
        const numericValue = parseFloat(
            amount
            .toString()
            .replace(/\./g, "")
            .replace(",", ".")
        );
        return numericValue || 0;
    };

    const planAmountValue = getPlanAmountValue(planAmount);
    const isPixAvailable =
        isPixPaymentEnabled && planAmountValue >= PIX_MIN_AMOUNT && canCreatePix;

    const handleContactSupport = () => {
        window.open(URLS.SUPPORT_CONTACT, "_blank");
    };

    return ( <
        S.ContentModal > {
            loading ? ( <
                S.TextContent >
                <
                S.LoadingContainer >
                <
                CircularProgress size = {
                    40
                }
                sx = {
                    {
                        color: "#01ab7d"
                    }
                }
                /> <
                /S.LoadingContainer> <
                S.Title > Preparando seu pagamento Pix < /S.Title> <
                S.SubTitle >
                Estamos gerando seu código Pix.Em instantes você poderá finalizar seu pagamento de forma rápida e segura. <
                /S.SubTitle> <
                /S.TextContent>
            ) : ( <
                S.TextContent >
                <
                SVG src = {
                    toAbsoluteUrl("/media/checkout/error.svg")
                }
                /> <
                S.Title > {
                    getTitle(title, pixGenerationFailed)
                } < /S.Title> <
                S.SubTitle > {
                    getDescription(subTitle, isPixAvailable, pixGenerationFailed)
                } <
                /S.SubTitle> <
                /S.TextContent>
            )
        } {
            loading ? null : ( <
                S.ButtonsContainer > {
                    pixGenerationFailed ? ( <
                        S.ButtonModal onClick = {
                            handleContactSupport
                        } >
                        Falar com o suporte <
                        /S.ButtonModal>
                    ) : isPixAvailable ? ( <
                        >
                        <
                        S.ButtonModalOutlined onClick = {
                            onClose
                        } >
                        Tentar novamente <
                        /S.ButtonModalOutlined> <
                        S.ButtonModal onClick = {
                            onPix
                        } > Pagar com Pix < /S.ButtonModal> <
                        />
                    ) : ( <
                        >
                        <
                        S.ButtonModalOutlined onClick = {
                            handleContactSupport
                        } >
                        Falar com o suporte <
                        /S.ButtonModalOutlined> <
                        S.ButtonModal onClick = {
                            onClose
                        } > Tentar novamente < /S.ButtonModal> <
                        />
                    )
                } <
                /S.ButtonsContainer>
            )
        } <
        /S.ContentModal>
    );
};

export const ModalFailedPayment = props => {
    return ( <
        S.ModalWrapper open = {
            props.isOpen
        }
        onClose = {
            () => {}
        } >
        <
        ModalFailedPaymentContent { ...props
        }
        /> <
        /S.ModalWrapper>
    );
};