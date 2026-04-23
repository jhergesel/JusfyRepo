import LockIcon from "@mui/icons-material/Lock";
import {
    useFormik
} from "formik";
import {
    useCallback,
    useEffect,
    useRef,
    useState
} from "react";
import SVG from "react-inlinesvg";
import InputMask from "react-input-mask";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    useHistory,
    useParams
} from "react-router-dom";

import {
    toast
} from "react-toastify";
import {
    toAbsoluteUrl
} from "../../../_metronic/_helpers";
import {
    tracking
} from "../../services/tracking";
import {
    createToken,
    getSubscriptionInfo,
    submitPaymentLink,
    validatePaymentLink,
} from "./api/api";
import {
    PaymentLinkExpired
} from "./components";
import {
    ModalPaymentLinkActivating
} from "./components/Modals/ModalPaymentLinkActivating";
import {
    ModalPaymentLinkFailed
} from "./components/Modals/ModalPaymentLinkFailed";
import {
    ModalPaymentLinkSubmitted
} from "./components/Modals/ModalPaymentLinkSubmitted";
import {
    PaymentLinkAlreadyPaid
} from "./components/PaymentLinkAlreadyPaid";
import {
    actions
} from "./redux/reducer";
import {
    paymentLinkSchema
} from "./schema";
import * as Sentry from "@sentry/react";
import {
    CreditCardForm,
    FormRow,
    GlobalStyles,
    HeaderContent,
    Logo,
    PaymentContainer,
    PaymentDetails,
    PaymentHeader,
    PaymentMethodCard,
    PaymentMethodSection,
    PaymentPage,
    PurchaseDetails,
    SectionHeader,
    SecurityNotice,
    SubmitSection,
    TermsSection,
} from "./styles";

const initialValues = {
    cardHolderName: "",
    cardNumber: "",
    cardExpiration: "",
    cardCvv: "",
};

export const PaymentLink = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        link
    } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [tokenCardData, setTokenCardData] = useState();
    const [paymentMethodSelected, setPaymentMethodSelected] = useState(null);
    const [isExpired, setIsExpired] = useState(false);
    const [isValidating, setIsValidating] = useState(true);
    const [paymentSubmitted, setPaymentSubmitted] = useState(false);
    const [paymentFailed, setPaymentFailed] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const hasSetDefaultPaymentMethod = useRef(false);

    const paymentState = useSelector(state => state.paymentLink);

    const formatCurrency = value => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value / 100);
    };

    const getInstallmentText = plan => {
        if (!plan || !plan.installments || plan.installments <= 1) {
            return formatCurrency(plan ? .amount || 0);
        }

        const installmentValue = plan.amount / plan.installments;
        return `${plan.installments}x de ${formatCurrency(installmentValue)}`;
    };

    const hasCreditCard = paymentState ? .allowedPaymentMethods ? .includes(
        "credit_card"
    );

    const form = useFormik({
        initialValues,
        validationSchema: paymentLinkSchema,
        context: {
            paymentMethod: paymentMethodSelected
        },
        onSubmit: async values => {
            setIsLoading(true);
            // Tracking: Início do processo de pagamento via link
            tracking.paymentLink.trackPaymentLinkStarted(
                paymentState,
                paymentState.plan,
                paymentMethodSelected
            );

            const response = await handleSubmitPaymentLink(values);

            if (response && response.status >= 200 && response.status < 300) {
                await handlePollingSubscription(response.data.subscriptionId);
                setIsLoading(false);
            }
        },
    });

    const handleCreateCardToken = async formValues => {
        try {
            const token = await createToken({
                card_number: formValues.cardNumber,
                cardholder_name: formValues.cardHolderName,
                card_expiration: formValues.cardExpiration,
                card_cvv: formValues.cardCvv,
            });
            // Tracking: Sucesso na tokenização do cartão
            tracking.paymentLink.trackCardTokenizationSuccess(
                paymentState,
                paymentState.plan,
                token, {
                    card_brand: "unknown",
                    card_number_masked: formValues.cardNumber
                        .replace(/\s/g, "")
                        .slice(-4)
                        .padStart(4, "*"),
                    card_holder_name: formValues.cardHolderName,
                }
            );

            setTokenCardData(token);

            return token;
        } catch (error) {
            setIsLoading(false);
            // Tracking: Erro na tokenização do cartão
            tracking.paymentLink.trackCardTokenizationError(
                paymentState,
                paymentState.plan, {
                    error_type: "tokenization_error",
                    error_message: error.message || "Erro ao criar o token do cartão",
                    error_code: "unknown",
                }, {
                    card_brand: "unknown",
                    card_number_masked: "****",
                    card_holder_name: formValues.cardHolderName,
                }
            );
            throw new Error("Erro ao criar o token do cartão");
        }
    };

    const handleSubmitPaymentLink = async formValues => {
        try {
            const token = await handleCreateCardToken(formValues);
            tracking.paymentLink.trackPaymentLinkSubmitted(
                paymentState,
                paymentState ? .plan,
                token
            );
            const response = await submitPaymentLink(
                link,
                "credit_card",
                token.id,
                formValues.cardHolderName,
                paymentState ? .plan ? .provider_id,
                formValues.cardExpiration,
                formValues.cardNumber.replace(/\s/g, "").slice(-4)
            );
            return response;
        } catch (error) {
            tracking.paymentLink.trackPaymentSubmissionFailed(
                paymentState,
                paymentState ? .plan,
                paymentMethodSelected,
                error
            );
            Sentry.withScope(scope => {
                scope.setTag("area", "payment_link");
                scope.setTag("flow", "submit_link");
                scope.setExtra("endpoint", "/payment-link/submit/link");
                scope.setExtra("status", error ? .response ? .status || "unknown");
                scope.setExtra("code", error ? .code);
                const sanitized = new Error(error.message || "Axios Error");
                Sentry.captureException(sanitized);
            });
            setPaymentFailed(true);
            setIsLoading(false);
            return error;
            // throw new Error('Erro ao processar o pagamento');
        }
    };

    const handleValidatePaymentLink = useCallback(async () => {
        try {
            const {
                data
            } = await validatePaymentLink(link);

            if (data.response.expired) {
                tracking.paymentLink.trackPaymentLinkExpired({
                    link
                });

                setIsExpired(true);
                setIsValidating(false);
                return;
            }

            const linkData = {
                link,
                paid_at: data.response.paid_at,
                submitted_at: data.response.submitted_at,
                allowedPaymentMethods: data.response.allowed_payment_methods,
                plan: data.response.plan,
            };

            // TODO Tracking: Link de pagamento validado com sucesso
            tracking.paymentLink.trackPaymentLinkValidated(
                linkData,
                data.response.plan
            );

            dispatch(actions.validatePaymentLink(linkData));
            setIsValidating(false);
        } catch (error) {
            tracking.paymentLink.trackPaymentLinkExpired(
                paymentState,
                paymentState.plan,
                paymentMethodSelected
            );
            Sentry.withScope(scope => {
                scope.setTag("area", "payment_link");
                scope.setTag("flow", "validate_link");
                scope.setExtra("endpoint", "/payment-link/validate/link");
                scope.setExtra("status", error ? .response ? .status || "unknown");
                scope.setExtra("code", error ? .code);
                const sanitized = new Error(error.message || "Axios Error");
                Sentry.captureException(sanitized);
            });
            setIsExpired(true);
            setIsValidating(false);
        }
    }, [link, dispatch]);

    const handlePollingSubscription = async subscriptionId => {
        try {
            // Tracking: Início do polling da assinatura
            tracking.paymentLink.trackPaymentLinkPollingStarted(
                paymentState,
                paymentState.plan,
                subscriptionId,
                tokenCardData
            );

            const MAX_POLLING_TIME = 300 * 1000; // 5 minutos
            const startTime = Date.now();

            const getPollingInterval = elapsedTimeInSeconds => {
                if (elapsedTimeInSeconds <= 60) {
                    return 5000;
                } else if (elapsedTimeInSeconds <= 120) {
                    return 10000;
                } else {
                    return 20000;
                }
            };

            while (Date.now() - startTime < MAX_POLLING_TIME) {
                const subscription = await getSubscriptionInfo(subscriptionId);

                if (subscription.reason ? .message) {
                    setPaymentFailed(true);
                    toast.error(subscription.reason.message);
                }

                if (subscription.status === "failed") {
                    // Tracking: Falha no polling da assinatura
                    tracking.paymentLink.trackPaymentLinkPollingFailed(
                        paymentState,
                        paymentState.plan, {
                            subscriptionId,
                            status: subscription.status
                        }, {
                            error_type: "subscription_failed",
                            error_message: subscription.reason ? .message || "Assinatura falhou",
                            error_code: subscription.reason ? .code || "subscription_failed",
                        }
                    );

                    setPaymentFailed(true);
                    return true;
                }

                if (
                    subscription.status === "active" ||
                    subscription.status === "paid" ||
                    subscription.status === "trialing"
                ) {
                    // Tracking: Sucesso no polling da assinatura
                    tracking.paymentLink.trackPaymentLinkPollingSuccess(
                        paymentState,
                        paymentState.plan, {
                            subscriptionId,
                            status: subscription.status
                        },
                        tokenCardData
                    );
                    setPaymentSubmitted(true);
                    return true;
                }

                const elapsedTimeInSeconds = Math.floor(
                    (Date.now() - startTime) / 1000
                );
                const pollingInterval = getPollingInterval(elapsedTimeInSeconds);
                const nextCheckInSeconds = pollingInterval / 1000;

                let message = `Assinatura com status ${subscription.status}.
                Será verificado novamente em ${nextCheckInSeconds} segundos. Tempo total: ${elapsedTimeInSeconds} segundos`;

                console.log(message);
                await new Promise(resolve => setTimeout(resolve, pollingInterval));
            }

            // Tracking: Timeout no polling da assinatura
            const elapsedTimeInSeconds = Math.floor((Date.now() - startTime) / 1000);
            tracking.paymentLink.trackPaymentLinkPollingTimeout(
                paymentState,
                paymentState.plan,
                subscriptionId,
                elapsedTimeInSeconds
            );

            console.log("Numero máximo de tentativas de polling atingido");
            return false;
        } catch (error) {
            console.error("ERROR pollingSubscription", JSON.stringify(error));

            tracking.paymentLink.trackPaymentLinkPollingFailed(
                paymentState,
                paymentState.plan, {
                    subscriptionId,
                    status: "error"
                }, {
                    error_type: "polling_error",
                    error_message: error.message || "Erro no polling da assinatura",
                    error_code: "polling_error",
                }
            );

            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!link) {
            history.push("/");
            return;
        }
        handleValidatePaymentLink();
    }, [handleValidatePaymentLink, history, link]);

    useEffect(() => {
        if (
            paymentState ? .allowedPaymentMethods &&
            paymentState.allowedPaymentMethods.length > 0 &&
            !hasSetDefaultPaymentMethod.current
        ) {
            hasSetDefaultPaymentMethod.current = true;
            setPaymentMethodSelected("credit_card");
        }
    }, [paymentState ? .allowedPaymentMethods]);

    if (isValidating) {
        return < > < />;
    }

    if (isExpired) {
        return <PaymentLinkExpired / > ;
    }

    if (paymentState.link && paymentState.paid_at && paymentState.submitted_at) {
        // Tracking: Link de pagamento já foi pago
        tracking.paymentLink.trackPaymentLinkAlreadyPaid(paymentState);
        return <PaymentLinkAlreadyPaid / > ;
    }

    return ( <
        >
        <
        GlobalStyles / >
        <
        PaymentPage >
        <
        PaymentHeader >
        <
        HeaderContent >
        <
        Logo src = {
            toAbsoluteUrl("/media/svg/logos/logo-jusfy.svg")
        }
        alt = "Jusfy" /
        >
        <
        /HeaderContent> <
        /PaymentHeader>

        <
        PaymentContainer >
        <
        SectionHeader >
        <
        h1 > Detalhes do pagamento < /h1> <
            p > Insira as informações solicitadas para concluir o pagamento. < /p> <
            /SectionHeader>

            <
            PaymentDetails >
            <
            PaymentMethodSection >
            <
            h3 > Adicione um método de pagamento < /h3>

        {
            hasCreditCard && ( <
                PaymentMethodCard >
                <
                div className = "method-info" >
                <
                div className = "method-icon" >
                <
                SVG src = {
                    toAbsoluteUrl("/media/svg/card-draw.svg")
                }
                alt = "Ícone do cartão de crédito" /
                >
                <
                /div> <
                span > Cartão de Crédito < /span> <
                /div> <
                div className = "method-badge" >
                <
                span className = "recommended" > Recomendado < /span> <
                input type = "radio"
                name = "paymentMethod"
                checked = {
                    paymentMethodSelected === "credit_card"
                }
                onChange = {
                    e => setPaymentMethodSelected("credit_card")
                }
                /> <
                /div> <
                /PaymentMethodCard>
            )
        } <
        /PaymentMethodSection>

        {
            paymentMethodSelected === "credit_card" && hasCreditCard && ( <
                CreditCardForm >
                <
                FormRow className = "full-width" >
                <
                div className = "form-group" >
                <
                label > Nome impresso no cartão < /label> <
                input name = "cardHolderName"
                type = "text"
                className = {
                    "form-control " +
                    (form.errors.cardHolderName &&
                        form.touched.cardHolderName ?
                        "is-invalid" :
                        "")
                }
                onChange = {
                    form.handleChange
                }
                value = {
                    form.values.cardHolderName
                }
                /> {
                    form.errors.cardHolderName &&
                        form.touched.cardHolderName && ( <
                            label className = "invalid-feedback" > {
                                form.errors.cardHolderName
                            } <
                            /label>
                        )
                } <
                /div> <
                /FormRow> <
                FormRow className = "full-width" >
                <
                div className = "form-group" >
                <
                label >
                Número do cartão < span className = "text-danger" > * < /span> <
                    /label> <
                    InputMask
                name = "cardNumber"
                placeholder = "0000 0000 0000 0000"
                mask = "9999 9999 9999 9999"
                maskChar = {
                    null
                }
                className = {
                    "form-control " +
                    (form.errors.cardNumber && form.touched.cardNumber ?
                        "is-invalid" :
                        "")
                }
                type = "tel"
                onChange = {
                    form.handleChange
                }
                value = {
                    form.values.cardNumber
                }
                /> {
                    form.errors.cardNumber && form.touched.cardNumber && ( <
                        label className = "invalid-feedback" > {
                            form.errors.cardNumber
                        } <
                        /label>
                    )
                } <
                /div> <
                /FormRow> <
                FormRow className = "two-columns" >
                <
                div className = "form-group" >
                <
                label >
                Vencimento(MM / AA) < span className = "text-danger" > * < /span> <
                /label> <
                InputMask name = "cardExpiration"
                placeholder = "MM / AA"
                mask = "99 / 99"
                maskChar = {
                    null
                }
                className = {
                    "form-control " +
                    (form.errors.cardExpiration &&
                        form.touched.cardExpiration ?
                        "is-invalid" :
                        "")
                }
                type = "tel"
                onChange = {
                    form.handleChange
                }
                value = {
                    form.values.cardExpiration
                }
                /> {
                    form.errors.cardExpiration &&
                        form.touched.cardExpiration && ( <
                            label className = "text-danger" > {
                                form.errors.cardExpiration
                            } <
                            /label>
                        )
                } <
                /div> <
                div className = "form-group" >
                <
                label >
                CVV < span className = "text-danger" > * < /span> <
                /label> <
                InputMask name = "cardCvv"
                placeholder = "000"
                mask = "9999"
                maskChar = {
                    null
                }
                className = {
                    "form-control " +
                    (form.errors.cardCvv && form.touched.cardCvv ?
                        "is-invalid" :
                        "")
                }
                type = "tel"
                onChange = {
                    form.handleChange
                }
                value = {
                    form.values.cardCvv
                }
                /> {
                    form.errors.cardCvv && form.touched.cardCvv && ( <
                        label className = "invalid-feedback" > {
                            form.errors.cardCvv
                        } <
                        /label>
                    )
                } <
                /div> <
                /FormRow> <
                /CreditCardForm>
            )
        } <
        /PaymentDetails>

        <
        PurchaseDetails >
        <
        div className = "selected-plan" >
        <
        div className = "plan-info" >
        <
        div className = "plan-icon" >
        <
        SVG src = {
            toAbsoluteUrl("/media/svg/notepad-block.svg")
        }
        alt = "Ícone para plano selecionado" /
        >
        <
        /div> <
        div className = "plan-texts" >
        <
        span className = "title" > Plano selecionado < /span> <
        span className = "plan-name" > {
            paymentState ? .plan ? .name || ""
        } <
        /span> <
        /div> <
        /div> <
        /div>

        <
        div className = "purchase-summary" >
        <
        h3 > Detalhes da compra < /h3> <
        div className = "price-details" > {
            paymentMethodSelected === "credit_card" && hasCreditCard && ( <
                >
                <
                div className = "price-row" >
                <
                span > Valor do plano < /span> <
                    div className = "price-values" >
                    <
                    div > {
                        getInstallmentText(paymentState ? .plan)
                    } < /div> <
                    div className = "total-amount" > {
                        formatCurrency(paymentState ? .plan ? .amount || 0)
                    } <
                    /div> <
                    /div> <
                    /div>

                    <
                    div className = "price-row" >
                    <
                    span > Periodicidade < /span> <
                    span > {
                        paymentState ? .plan ? .days === 30 ?
                        "Mensal" :
                        paymentState ? .plan ? .days === 365 ?
                        "Anual" :
                        `${paymentState?.plan?.days} dias`
                    } <
                    /span> <
                    /div>

                    <
                    hr
                style = {
                    {
                        margin: "1.5rem 0",
                        border: "none",
                        borderTop: "1px solid #E5E5E5",
                    }
                }
                /> <
                />
            )
        }

        <
        div className = "price-row total" >
        <
        span > Valor Total < /span> <
        div className = "price-values" >
        <
        div className = "total-amount" > {
            formatCurrency(paymentState ? .plan ? .amount || 0)
        } <
        /div> <
        div > {
            getInstallmentText(paymentState ? .plan)
        } < /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        SecurityNotice >
        <
        div className = "lock-icon" >
        <
        LockIcon sx = {
            {
                color: "#838486 !important"
            }
        }
        /> <
        /div> <
        span > Compra segura | Jusfy 2025 < /span> <
        /SecurityNotice> <
        /PurchaseDetails>

        <
        SubmitSection >
        <
        TermsSection >
        <
        label className = "checkbox-container" >
        <
        input type = "checkbox"
        checked = {
            termsAccepted
        }
        onChange = {
            e => setTermsAccepted(e.target.checked)
        }
        /> <
        span className = "checkmark" > < /span> <
        span className = "terms-text" >
        Ao clicar no botão acima, você concorda com nossos {
            " "
        } <
        a href = "https://jusfy.com.br/client/assets/termos.pdf"
        target = "_BLANK"
        rel = "noreferrer" >
        Termos de Uso <
        /a>{" "} |
        {
            " "
        } <
        a href = "https://jusfy.com.br/client/assets/politica.pdf"
        target = "_BLANK"
        rel = "noreferrer" >
        Política de Privacidade <
        /a>{" "} |
        {
            " "
        } <
        a href = "https://jusfy.com.br/client/assets/politica-de-pagamento.pdf"
        target = "_BLANK"
        rel = "noreferrer" >
        Política de Pagamento <
        /a>
        . <
        /span> <
        /label> <
        /TermsSection> <
        button type = "button"
        className = "btn btn-primary"
        style = {
            {
                width: "100%",
                height: "50px"
            }
        }
        onClick = {
            () => form.handleSubmit()
        }
        disabled = {
            isLoading || !termsAccepted
        } >
        {
            isLoading ? "Processando..." : "Confirmar e pagar"
        } <
        /button> <
        /SubmitSection> <
        /PaymentContainer> <
        /PaymentPage> <
        ModalPaymentLinkFailed open = {
            paymentFailed
        }
        onTryAgain = {
            () => setPaymentFailed(false)
        }
        /> <
        ModalPaymentLinkSubmitted open = {
            paymentSubmitted
        }
        title = {
            "Pagamento confirmado"
        }
        description = {
            "Seu pagamento foi processado com sucesso e sua assinatura está ativa. Aproveite os recursos da Jusfy!"
        }
        actionText = {
            "Acessar plataforma"
        }
        onAccessPlatform = {
            () => {
                history.push("/auth/login");
            }
        }
        /> <
        ModalPaymentLinkActivating open = {
            isLoading
        }
        /> <
        />
    );
};