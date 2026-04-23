import React, {
    useState,
    useEffect,
    useRef
} from "react";
import * as S from "./styles.js";
import SVG from "react-inlinesvg";
import {
    toAbsoluteUrl
} from "../../../_metronic/_helpers/AssetsHelpers.js";
import {
    toast
} from "react-toastify";
import {
    getPixTransaction
} from "../../helpers/payment/pixTransaction";
import {
    tracking
} from "../../services/tracking";
import {
    FloatToCurrency
} from "../../../_metronic/_helpers/FloatToCurrency.js";

const ModalCheckoutPixPaymentContent = ({
    pixPaymentData,
    formikValues,
    onAccessPlatform,
    isOpen,
}) => {
    const [copied, setCopied] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState("waiting_payment");
    const pollingIntervalRef = useRef(null);

    const handleCopyCode = async () => {
        const pixCode =
            pixPaymentData ? .charge ? .charges ? .[0] ? .last_transaction ? .qr_code ||
            pixPaymentData ? .pix_code ||
            pixPaymentData ? .charge ? .charges ? .[0] ? .last_transaction ? .additional_information ? .find(
                info => info.name === "qr_code"
            ) ? .value;

        if (pixCode) {
            try {
                await navigator.clipboard.writeText(pixCode);
                setCopied(true);
                toast.success("Código Pix copiado!");
                setTimeout(() => setCopied(false), 2000);
            } catch (error) {
                console.error("Erro ao copiar código Pix:", error);
                toast.error("Erro ao copiar código Pix");
            }
        } else {
            toast.error("Código Pix não disponível");
        }
    };

    const customerName = formikValues ? .name || "Nome Completo";
    const customerEmail = formikValues ? .email || "email@exemplo.com";
    const planName =
        pixPaymentData ? .plan ? .name ||
        formikValues ? .plan ? .name ||
        "Plano Selecionado";
    const planAmount = pixPaymentData ? .charge ? .amount ?
        FloatToCurrency(pixPaymentData ? .charge ? .amount / 100) :
        formikValues ? .plan ? .amount || "0,00";

    const qrCodeImageUrl =
        pixPaymentData ? .charge ? .charges ? .[0] ? .last_transaction ? .qr_code_url;

    useEffect(() => {
        if (!isOpen || !pixPaymentData) {
            if (pollingIntervalRef.current) {
                clearInterval(pollingIntervalRef.current);
                pollingIntervalRef.current = null;
            }
            return;
        }

        if (paymentStatus === "paid") {
            return;
        }

        const checkPaymentStatus = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                const response = await getPixTransaction(
                    pixPaymentData ? .client ? .legacy_id
                );

                const status = response ? .status;

                if (status === "paid") {
                    setPaymentStatus("paid");
                    if (pollingIntervalRef.current) {
                        clearInterval(pollingIntervalRef.current);
                        pollingIntervalRef.current = null;
                    }

                    const userData = {
                        id: formikValues ? .id,
                        email: formikValues ? .email,
                        name: formikValues ? .name,
                        client_id: formikValues ? .client_id || pixPaymentData ? .client ? .legacy_id,
                        document_number: formikValues ? .document_number,
                    };

                    const checkoutData = {
                        plan_id: formikValues ? .plan ? .id || pixPaymentData ? .plan ? .id,
                        plan_name: formikValues ? .plan ? .name || pixPaymentData ? .plan ? .name,
                        plan_amount: formikValues ? .plan ? .amount || pixPaymentData ? .plan ? .amount,
                        plan_type: formikValues ? .plan ? .type ||
                            pixPaymentData ? .plan ? .type ||
                            "monthly",
                        coupon_code: formikValues ? .coupom || "",
                        coupon_valid: false,
                        trial_days: 7,
                        has_compra_garantida: formikValues ? .has_compra_garantida || false,
                    };

                    tracking.checkout.trackPixPaymentPaid(
                        response,
                        userData,
                        checkoutData,
                        "checkout"
                    );
                }
            } catch (error) {
                console.error("Erro ao verificar pagamento:", error);
            }
        };

        checkPaymentStatus();

        pollingIntervalRef.current = setInterval(() => {
            checkPaymentStatus();
        }, 5000);

        return () => {
            if (pollingIntervalRef.current) {
                clearInterval(pollingIntervalRef.current);
                pollingIntervalRef.current = null;
            }
        };
    }, [isOpen, pixPaymentData, paymentStatus, formikValues]);

    const isPaid = paymentStatus === "paid";

    return ( <
        S.ContentModal > {
            isPaid ? ( <
                S.Border >
                <
                S.SuccessSection >
                <
                S.SuccessIconContainer >
                <
                SVG src = {
                    toAbsoluteUrl("/media/checkout/success.svg")
                }
                /> <
                /S.SuccessIconContainer> <
                S.TitleContent >
                <
                S.Title > Pagamento confirmado! < /S.Title> <
                S.SubTitle >
                Seu pagamento via Pix foi realizado, você está pronto para aproveitar todos os benefícios da sua assinatura.Acesse a plataforma, já!
                <
                /S.SubTitle> <
                /S.TitleContent> <
                /S.SuccessSection> <
                /S.Border>
            ) : ( <
                >
                <
                S.HeaderContainer >
                <
                S.TitleContent >
                <
                S.Title > Pagar com Pix < /S.Title> <
                S.SubTitle >
                Copie ou escaneie o código Pix abaixo e cole no app do seu banco.
                Seu pagamento será aprovado em alguns instantes. <
                /S.SubTitle> <
                /S.TitleContent> <
                /S.HeaderContainer>

                <
                S.AlertBanner >
                <
                S.AlertContent >
                <
                S.WarningIcon >
                <
                SVG src = {
                    toAbsoluteUrl("/media/Warning-triangle.svg")
                }
                /> <
                /S.WarningIcon> <
                S.AlertText >
                Um boleto será gerado apenas para viabilizar o pagamento via Pix.Você não precisa pagá - lo. <
                /S.AlertText> <
                /S.AlertContent> <
                /S.AlertBanner>

                <
                S.QRCodeSection >
                <
                S.QRCodeImage src = {
                    qrCodeImageUrl
                }
                alt = "QR Code Pix" / >
                <
                S.CopyCodeButton onClick = {
                    handleCopyCode
                }
                disabled = {!pixPaymentData
                } >
                <
                SVG src = {
                    toAbsoluteUrl(
                        copied ?
                        "/media/flat/check-white.svg" :
                        "/media/flat/copy.svg"
                    )
                }
                /> {
                    copied ? "Copiado!" : "Copiar código"
                } <
                /S.CopyCodeButton> <
                /S.QRCodeSection> <
                />
            )
        }

        <
        S.PaymentDetailsContainer > {
            isPaid && ( <
                >
                <
                S.DetailsHeader > Detalhes do pagamento < /S.DetailsHeader> <
                    S.Divider / >
                    <
                    />
            )
        } <
        S.DetailRow >
        <
        S.DetailLabel > Nome completo < /S.DetailLabel> <
        S.DetailValue > {
            customerName
        } < /S.DetailValue> <
        /S.DetailRow> <
        S.DetailRow >
        <
        S.DetailLabel > E - mail < /S.DetailLabel> <
        S.DetailValue > {
            customerEmail
        } < /S.DetailValue> <
        /S.DetailRow> <
        S.Divider / >
        <
        S.DetailRow >
        <
        S.DetailLabel >
        <
        strong > Plano < /strong> <
        /S.DetailLabel> <
        S.PlanDetailValue > {
            planName
        } < /S.PlanDetailValue> <
        /S.DetailRow> <
        S.DetailRow >
        <
        S.DetailLabel >
        <
        strong > Valor do pagamento < /strong> <
            /S.DetailLabel> <
            S.AmountDetailValue > R$ {
                planAmount
            } < /S.AmountDetailValue> <
            /S.DetailRow> <
            /S.PaymentDetailsContainer>

            <
            S.ButtonsContainer >
            <
            S.ButtonModal onClick = {
                onAccessPlatform
            } >
            Acessar plataforma <
            /S.ButtonModal> <
            /S.ButtonsContainer> <
            /S.ContentModal>
    );
};

export const ModalCheckoutPixPayment = props => {
    return ( <
        S.ModalWrapper open = {
            props.isOpen
        }
        onClose = {
            () => {}
        } >
        <
        ModalCheckoutPixPaymentContent isOpen = {
            props.isOpen
        } { ...props
        }
        /> <
        /S.ModalWrapper>
    );
};