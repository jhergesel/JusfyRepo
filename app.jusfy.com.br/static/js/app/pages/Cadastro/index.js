import axios from "axios";
import {
    cpf
} from "cpf-cnpj-validator";
import * as EmailValidator from "email-validator";
import {
    useFormik
} from "formik";
import pagarme from "pagarme/browser";
import queryString from "query-string";
import React, {
    useEffect,
    useRef,
    useState
} from "react";
import {
    FEATURE_FLAGS
} from "../../../app/constants/FeatureFlag";
import useFeatureFlag from "../../../app/hooks/useFeatureFlag";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    useHistory,
    useLocation
} from "react-router-dom";
import {
    toast
} from "react-toastify";
import * as yup from "yup";
import * as Sentry from "@sentry/react";

import {
    toAbsoluteUrl
} from "../../../_metronic/_helpers";
import {
    passwordValidationSchema
} from "../../components/Password/schema";

import getCookie from "../../helpers/Cookies";

import {
    useRecaptchaV2,
    useRecaptchaV3
} from "../../hooks/useRecaptcha";
import {
    validateCpf,
    validateEmail
} from "./api";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import traceId from "../../../redux/traceId";
import {
    ModalFailedPayment
} from "../../components/ModalFailedPayment";
import {
    tracking
} from "../../services/tracking";
import {
    ModalProcessingPayment
} from "../../components/ModalProcessingPayment";
import {
    ModalPaymentSuccess
} from "../../components/ModalPaymentSuccess";
import {
    ModalCheckoutPixPayment
} from "../../components/ModalCheckoutPixPayment";

export default function Register(props) {
    const history = useHistory();
    const {
        isFeatureFlagEnable: enableAddCardSentry,
        flagsReady,
    } = useFeatureFlag(FEATURE_FLAGS.KILL_SWITCH.ENABLE_ADD_CARD_SENTRY);
    const [disableButton, setDisableButton] = useState(false);
    const [formErrors, setFormErrors] = useState([]);
    const [failedReason, setFailedReason] = useState({
        message: "",
        details: "",
    });

    const [submitting, setSubmitting] = useState(false);
    const [result, setResult] = useState("idle"); // 'idle' | 'success' | 'error'
    const [pixPaymentData, setPixPaymentData] = useState(null);
    const [pixGenerationFailed, setPixGenerationFailed] = useState(false);

    const [step, setStep] = useState(0);
    const [shouldValidateDocument, setShouldValidateDocument] = useState(true);
    const recaptchaRef = React.createRef();
    const recaptchaValue = recaptchaRef ? .current ? .getValue();
    const subscription_error = useSelector(
        state => state.subscription.subscription_error
    );
    const [showCupomReferenceInputs, setShowCupomReferenceInputs] = useState(
        false
    );

    const dispatch = useDispatch();
    const [uniqueEmail, setUniqueEmail] = useState(false);

    useEffect(() => {
        if (subscription_error) {
            setResult("error");
            setSubmitting(false);
        }
    }, [subscription_error]);

    const plans = [{
            id: "starter",
            internal_id: "starter",
            name: "STARTER",
            amount: "77,00",
            type: "monthly",
        },
        {
            id: "master",
            internal_id: "master",
            name: "MASTER",
            amount: "97,00",
            type: "monthly",
        },
        {
            id: "ultimate",
            internal_id: "ultimate",
            name: "ULTIMATE",
            amount: "117,00",
            type: "monthly",
        },
        {
            id: "starter-anual",
            internal_id: "starter",
            name: "STARTER",
            amount: "739,20",
            type: "annually",
        },
        {
            id: "master-anual",
            internal_id: "master",
            name: "MASTER",
            amount: "931,20",
            type: "annually",
        },
        {
            id: "ultimate-anual",
            internal_id: "ultimate",
            name: "ULTIMATE",
            amount: "1.123,20",
            type: "annually",
        },
    ];
    const location = useLocation();
    const [periodicity, setPeriodicity] = useState("monthly");

    const [initialValues] = useState({
        createdCustomerId: "",
        name: "",
        email: "",
        confirmation_email: "",
        profession: null,
        password: "",
        confirmation_password: "",
        coupom: "",
        document_number: "",
        phone: "",
        postal_code: "",
        city: "",
        state: "",
        address: "",
        address_number: "",
        address_complement: "",
        district: "",
        plan: plans.find(plan => plan.id === "starter"),
        cardholder_name: "",
        card_number: "",
        card_payment_method: null,
        card_cvv: "",
        card_expiration: "",
        recaptchaToken: "",
        recaptchaVersion: "",
        reference_name: null,
        reference_city: null,
        has_compra_garantida: false,
    });

    const disabledCreditCard = useSelector(state =>
        Object.keys(state.app.coupom).length > 0 && state.app.coupom ? .is_valid ?
        !state ? .app ? .coupom ? .upfront_credit_card_required :
        false
    );
    const verifyCoupon = useSelector(state => {
        if (Object.keys(state.app.coupom).length !== 0) {
            if (state.app.coupom.is_valid) {
                return true;
            }
            return false;
        }
    });
    const coupom = useSelector(state => state.app.coupom);
    const defaultTrialDays = useSelector(state => state.app.default_trial_days);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const step1Validation = yup.object().shape({
        name: yup.string().required("O campo nome é obrigatório!"),
        email: yup
            .string()
            .trim()
            .email("O email é inválido!")
            .required("O campo e-mail é obrigatório!")
            .test("unique-email", "Email já cadastrado", async function(email) {
                const {
                    confirmation_email,
                    password,
                    confirmation_password,
                    name,
                } = this.parent;
                if (
                    emailRegex.test(email) &&
                    confirmation_email === email &&
                    password === confirmation_password &&
                    password &&
                    confirmation_password &&
                    name
                ) {
                    if (EmailValidator.validate(email)) {
                        try {
                            await validateEmail(email);
                            return true;
                        } catch (error) {
                            if (error ? .response ? .status === 409) {
                                setUniqueEmail(true);
                                return false;
                            }
                            setUniqueEmail(false);
                            throw new Error("Erro ao validar o email");
                        }
                    }
                }
                setUniqueEmail(false);
                return true;
            }),
        confirmation_email: yup
            .string()
            .trim()
            .required("O campo confirmação é obrigatório!")
            .email("O email é inválido!")
            .test("valid-confirmation-regex", "Formato de email inválido", value => {
                return emailRegex.test(value ? ? "");
            })
            .test("emails-match", "Os emails não coincidem!", function(value) {
                const {
                    email
                } = this.parent;
                return value === email;
            }),
        profession: yup.object().nullable(),
        password: passwordValidationSchema.required("A senha é obrigatória!"),
        confirmation_password: yup
            .string()
            .oneOf([yup.ref("password"), null], "As senhas não coincidem!")
            .required("O campo confirmação é obrigatório!"),
    });

    let step2Object = {
        plan: yup
            .object()
            .nullable()
            .required("Escolha o plano!"),
        ...(!disabledCreditCard ?
            {
                cardholder_name: yup
                    .string()
                    .required("O nome do titular do cartão é obrigatório."),
                card_number: yup
                    .string()
                    .required("O número do cartão é obrigatório."),
                card_expiration: yup
                    .string()
                    .required("O mês/ano de expiração do cartão é obrigatório."),
                card_cvv: yup
                    .string()
                    .required("O código de segurança (CVV) do cartão é obrigatório."),
            } :
            {}),
        document_number: yup
            .string()
            .required("O campo CPF é obrigatório!")
            .test("isValidDocument", "O CPF é inválido.", value => cpf.isValid(value))
            .test(
                "isUniqueDocument",
                "Já existe um usuário com este CPF.",
                async function(value) {
                    if (value ? .length < 14) {
                        setShouldValidateDocument(true);
                    }
                    if (value ? .length === 14 && shouldValidateDocument) {
                        try {
                            await validateCpf(value);
                            setShouldValidateDocument(false);
                            return true;
                        } catch (error) {
                            if (error ? .response ? .status === 409) {
                                setShouldValidateDocument(true);
                            }
                            return false;
                        }
                    }
                    return true;
                }
            ),
        phone: yup
            .string()
            .required("O campo telefone é obrigatório!")
            .matches(
                /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
                "Telefone inválido."
            ),
        ...(showCupomReferenceInputs ?
            {
                reference_name: yup
                    .string()
                    .nullable()
                    .required("O responsável pelo cupom é obrigatório"),
                reference_city: yup
                    .string()
                    .nullable()
                    .required("A região responsável pelo cupom é obrigatória"),
            } :
            {}),
        state: yup.object().required("O campo estado é obrigatório!"),
        city: yup.object().required("O campo cidade é obrigatório!"),
        district: yup.string().required("O campo bairro é obrigatório!"),
        postal_code: yup
            .string()
            .required("O campo CEP é obrigatório!")
            .test(
                "is-valid-cep",
                "CEP inválido. Por favor, insira um CEP válido.",
                function(value) {
                    if (!value) {
                        setValidCep(true);
                        return false;
                    }
                    if (!isCepValid) return false;
                    if (value ? .length <= 9) return true;

                    return true;
                }
            ),
        address: yup.string().required("O campo endereço é obrigatório!"),
        address_number: yup.string().required("O campo número é obrigatório!"),
        address_complement: yup.string(),
    };
    const step2Validation = yup.object().shape(step2Object);

    const schemaArray = [step1Validation, step2Validation];

    const refreshRecaptchaV3Ref = useRef();

    const [enableRecaptchaV2, setEnableRecaptchaV2] = useState(false);
    const [handleRecaptchaV2Callback, captchaV2Params] = useRecaptchaV2();
    const [handleRecaptchaV3Callback, captchaV3Params] = useRecaptchaV3(
        refreshRecaptchaV3Ref
    );

    const updateFormWithRecaptchaToken = (token, version) => {
        formik.setFieldValue("recaptchaVersion", version);
        formik.setFieldValue("recaptchaToken", token);
    };

    useEffect(() => {
        updateFormWithRecaptchaToken(captchaV3Params.v3Token, "3");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [captchaV3Params.v3Token]);

    useEffect(() => {
        updateFormWithRecaptchaToken(captchaV2Params.v2Token, "2");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [captchaV2Params.v2Token]);

    useEffect(() => {
        captchaV3Params.v3Retrieving ?
            setDisableButton(true) :
            setDisableButton(false);
    }, [captchaV3Params.v3Retrieving]);

    useEffect(() => {
        enableRecaptchaV2 && captchaV2Params.v2Token ?
            setDisableButton(false) :
            setDisableButton(true);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [captchaV2Params.v2Token]);

    const [isCepValid, setValidCep] = useState(true);

    const searchAddressByAddressCode = async code => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_CEP_API_BASE_URL}/${code}/json/`, {
                    timeout: 5000
                }
            );
            const data = await response.data;
            if (data.erro === "true") {
                setValidCep(false);
                return {
                    success: false,
                    error: "Não foi possível localizar o CEP",
                };
            } else {
                setValidCep(true);
            }

            return {
                success: true,
                data: {
                    address: data.logradouro || "",
                    district: data.bairro || "",
                    city: data.localidade || "",
                    state: data.uf || "",
                },
            };
        } catch (error) {
            if (error.request.timeout === 5000 || error.request.status === 502) {
                setValidCep(true);
                toast.error(
                    "Estamos com problemas para localizar o CEP, por favor, insira manualmente."
                );
                return {
                    success: true,
                };
            }
            setValidCep(false);
            console.error("Não foi possível localizar o CEP:", error);
            return {
                success: false,
                error: "Não foi possível localizar o CEP",
            };
        }
    };

    const handleSubmitForm = async () => {
        const validation = await formik.validateForm();
        formik.setTouched(validation);

        if (Object.keys(validation).length === 0) {
            setSubmitting(true);
            setResult("idle");
            formik.handleSubmit();
            return;
        }

        const firstErrorKey = Object.keys(formik.errors)[0];
        const firstErrorMessage = formik.errors[firstErrorKey];
        const currentErrors = Object.entries(validation).map(([field, error]) => ({
            field,
            error,
            step: step,
            timestamp: new Date().toISOString(),
        }));
        setFormErrors(prev => [...prev, ...currentErrors]);
        setFormErrors(prev => [...prev, currentErrors]);
        window.analytics.track("Sign Up Account Creation Failed", {
            error: "FORM_VALUES_INVALID",
            message: firstErrorMessage,
            validation,
        });
    };

    function getCardBrand(cardNumber) {
        const number = cardNumber.replace(/\D/g, "");
        const bin = number.slice(0, 6);

        if (/^4/.test(bin)) return "visa";
        if (/^5[1-5]/.test(bin)) return "mastercard";
        if (/^3[47]/.test(bin)) return "amex";
        if (/^3(?:0[0-5]|[68])/.test(bin)) return "diners";
        if (/^6(?:011|5)/.test(bin)) return "discover";
        if (/^35(2[89]|[3-8][0-9])/.test(bin)) return "jcb";
        if (
            /^(50|60|65|4011|4312|4389|4514|4576|5041|5066|5067|509|6277|6362|6363)/.test(
                bin
            )
        )
            return "elo";
        if (/^606282|3841/.test(bin)) return "hipercard";
        if (/^637095|637568|637599|637609|637612/.test(bin)) return "banescard";

        return "unknown";
    }

    /**
     * Função para criar o token na pagarme
     */
    const createToken = async values => {
        const encryptionKey = process.env.REACT_APP_PAGARME_V5_ENCRYPTION_KEY;

        const cardPayload = {
            type: "card",
            card: {
                number: values.card_number.replace(/\s/g, ""),
                holder_name: values.cardholder_name,
                exp_month: parseInt(values.card_expiration.split("/")[0]),
                exp_year: parseInt(values.card_expiration.split("/")[1]),
                cvv: values.card_cvv,
                label: "Cartão do Cliente",
            },
        };

        try {
            const {
                data
            } = await axios.post(
                `https://api.pagar.me/core/v5/tokens?appId=${encryptionKey}`,
                cardPayload
            );

            const tokenData = {
                id: data.id,
                card_hash: data.id,
            };

            tracking.checkout.trackCardTokenizationSuccess(
                values,
                tokenData,
                coupom,
                defaultTrialDays
            );

            return data;
        } catch (error) {
            const isCorsError = !error.response &&
                (error.message ? .includes("CORS") ||
                    error.message ? .includes("cors") ||
                    error.message ? .includes("Cross-Origin") ||
                    error.message ? .includes("cross-origin") ||
                    error.code === "ERR_NETWORK" ||
                    error.name === "NetworkError");

            if (isCorsError) {
                tracking.checkout.trackCardTokenizationError(
                    values, {
                        error_type: "cors_error",
                        error_message: "Erro de CORS ao gerar token do cartão",
                        error_code: "CORS_ERROR",
                        cors_details: {
                            message: error.message,
                            code: error.code,
                            name: error.name,
                        },
                    },
                    coupom,
                    defaultTrialDays
                );
            } else {
                tracking.checkout.trackCardTokenizationError(
                    values, {
                        error_type: "pagarme_v5_tokenization_error",
                        error_message: error.response ? .data ? .message ||
                            error.response ? .data ? .msg ||
                            error.message ||
                            "Erro ao criar o token do cartão",
                        error_code: error.response ? .status || "unknown",
                    },
                    coupom,
                    defaultTrialDays
                );
            }
            if (enableAddCardSentry && flagsReady) {
                Sentry.withScope(scope => {
                    scope.setTag("area", "cadastro");
                    scope.setTag("flow", "create_token");
                    scope.setTag("provider", "pagarme_v5");
                    scope.setTag("trace_id", traceId);
                    scope.setExtra("endpoint", "//api.pagar.me/core/v5/tokens");
                    scope.setExtra("status", error ? .response ? .status || "unknown");
                    scope.setExtra("code", error ? .code);
                    scope.setExtra("errors_history", formErrors.slice(-50));
                    const sanitized = new Error(
                        (error && error.message) || "Card tokenization failed"
                    );
                    sanitized.name = (error && error.name) || "AxiosError";
                    Sentry.captureException(sanitized);
                });
            }
            toast.error(
                "Falha ao prosseguir com o pagamento, por favor, tente novamente."
            );
            setSubmitting(false);
            setDisableButton(false);
            throw new Error("Erro ao criar o token do cartão");
        }
    };

    const createSubscription = async (values, cardData) => {
        try {
            const {
                card_number: _,
                card_cvv: __,
                card_expiration: ___,
                card_hash,
                urlParams,
                version,
                ...registerValues
            } = values;
            const phonePayload = values.phone
                .replaceAll("(", "")
                .replaceAll(")", "")
                .replaceAll("-", "")
                .replaceAll(" ", "");
            const payload = {
                plan_id: coupom ? .is_valid ? coupom.plan_id : values.plan.id,
                postback_url: null,
                coupom: values.coupom,
                customer: {
                    email: values.email,
                    name: values.name,
                    document_number: values.document_number,
                    address: {
                        street: values.postal_code,
                        street_number: values.address_number,
                        neighborhood: values.district,
                        zipcode: values.postal_code,
                    },
                    phone: {
                        ddd: phonePayload.slice(0, 2),
                        number: phonePayload.slice(2),
                    },
                },
                payment_method: "credit_card",
                card_id: cardData.id,
                provider: "pagarme_v5",
                register: {
                    ...registerValues,
                    card_hash,
                    urlParams,
                    version,
                },
            };

            return await axios.post(
                `${process.env.REACT_APP_JUSBILL_URL}/subscriptions`,
                payload, {
                    headers: {
                        "x-trace-id": traceId
                    }
                }
            );
        } catch (error) {
            const errorCopy = { ...error
            };
            if (errorCopy ? .config ? .data ? .register ? .password !== undefined) {
                errorCopy.config = { ...errorCopy.config
                };
                errorCopy.config.data = { ...errorCopy.config.data
                };
                errorCopy.config.data.register = { ...errorCopy.config.data.register
                };
                errorCopy.config.data.register.password = "****";
                errorCopy.config.data.register.confirmation_password = "****";
            }
            console.error("Subscription creation failed:", {
                error: errorCopy
            });
            if (enableAddCardSentry && flagsReady) {
                Sentry.withScope(scope => {
                    scope.setTag("area", "cadastro");
                    scope.setTag("flow", "create_subscription");
                    scope.setTag("provider", "pagarme_v5");
                    scope.setTag("trace_id", traceId);
                    scope.setExtra("endpoint", "/subscriptions");
                    scope.setExtra("status", error ? .response ? .status || "unknown");
                    scope.setExtra("code", error ? .code);
                    scope.setExtra("errors_history", formErrors.slice(-50));
                    const sanitized = new Error(
                        (error && error.message) || "Subscription creation failed"
                    );
                    sanitized.name = (error && error.name) || "AxiosError";
                    Sentry.captureException(sanitized);
                });
            }
            tracking.checkout.trackPaymentFailed(
                values, {
                    error_type: "subscription_creation_error",
                    error_message: error.response ? .data ? .message ||
                        error.response ? .data ? .msg ||
                        error.message ||
                        "Erro ao criar a assinatura",
                    error_code: error.response ? .status || "unknown",
                },
                coupom,
                defaultTrialDays
            );

            setSubmitting(false);
            setDisableButton(false);
            throw new Error("Erro ao criar a assinatura");
        }
    };

    const getClientIp = async () => {
        try {
            const res = await fetch("https://api.ipify.org?format=json");
            const data = await res.json();
            return data.ip;
        } catch {
            return "unknown";
        }
    };

    const saveCardToBackend = async (token, values) => {
        try {
            const ip = await getClientIp();
            return await axios.post(
                `${process.env.REACT_APP_JUSBILL_URL}/client-cards/pagarme-v5`, {
                    customerId: values.createdCustomerId,
                    email: values.email,
                    name: values.name,
                    document: values.document_number.replace(/[^0-9]/g, ""),
                    phone: values.phone,
                    address: {
                        zipCode: values.postal_code,
                        state: values.state.state,
                        address: values.address,
                        number: values.address_number,
                        neighborhood: values.district,
                        city: values.city.name,
                        complement: values.address_complement,
                    },
                    card: {
                        token,
                        holderName: values.cardholder_name,
                        lastDigits: values.card_number.replace(/\s/g, "").slice(-4),
                        firstDigits: values.card_number.replace(/\s/g, "").slice(0, 6),
                        expirationMonth: values.card_expiration.split("/")[0],
                        expirationYear: values.card_expiration.split("/")[1],
                        brand: getCardBrand(values.card_number.replace(/\s/g, "")),
                    },
                    metadata: {
                        id: ip ? ? 'unknown',
                        userAgent: navigator.userAgent,
                        language: navigator.language,
                        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    }
                }, {
                    headers: {
                        "x-trace-id": traceId
                    }
                }
            );
        } catch (error) {
            tracking.checkout.trackPaymentFailed(
                values, {
                    error_type: "card_save_error",
                    error_message: error.response ? .data ? .message ||
                        error.response ? .data ? .msg ||
                        error.message ||
                        "Erro ao registrar o cartão",
                    error_code: error.response ? .status || "unknown",
                },
                coupom,
                defaultTrialDays
            );
            if (enableAddCardSentry && flagsReady) {
                Sentry.withScope(scope => {
                    scope.setTag("area", "cadastro");
                    scope.setTag("flow", "save_card_to_backend");
                    scope.setTag("provider", "pagarme_v5");
                    scope.setTag("trace_id", traceId);
                    scope.setExtra("endpoint", "/client-cards/pagarme-v5");
                    scope.setExtra("status", error ? .response ? .status || "unknown");
                    scope.setExtra("code", error ? .code);
                    scope.setExtra(
                        "card_brand",
                        getCardBrand(values.card_number.replace(/\s/g, ""))
                    );
                    scope.setExtra(
                        "card_number",
                        `${values.card_number
              .replace(/\s/g, "")
              .slice(0, 6)}***${values.card_number
              .replace(/\s/g, "")
              .slice(-4)}`
                    );
                    scope.setExtra("errors_history", formErrors.slice(-50));
                    const sanitized = new Error(
                        (error && error.message) || "Card save failed"
                    );
                    sanitized.name = (error && error.name) || "AxiosError";
                    Sentry.captureException(sanitized);
                });
            }
            setSubmitting(false);
            setDisableButton(false);
            throw new Error("Erro ao registrar o cartão");
        }
    };

    const pullingSubscription = async subscription_id => {
        const MAX_POLLING_TIME = 300 * 1000; // 5 minutos
        const startTime = Date.now();

        const getPollingInterval = elapsedTimeInSeconds => {
            if (elapsedTimeInSeconds <= 60) {
                return 5000; // 5 segundos
            } else if (elapsedTimeInSeconds <= 120) {
                return 10000; // 10 segundos
            } else {
                // restante do tempo (3-5 minutos)
                return 20000; // 20 segundos
            }
        };

        while (Date.now() - startTime < MAX_POLLING_TIME) {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_JUSBILL_URL}/subscriptions/${subscription_id}`, {
                        headers: {
                            "x-trace-id": traceId
                        }
                    }
                );

                if (response.data.reason) {
                    setFailedReason(response.data.reason);

                    tracking.checkout.trackPaymentFailed(
                        formik.values,
                        response.data.reason,
                        coupom,
                        defaultTrialDays
                    );
                }

                if (response.data.status === "active") {
                    return true;
                }

                if (response.data.status === "failed") {
                    setResult("error");
                    setSubmitting(false);
                    return false;
                }

                const elapsedTimeInSeconds = Math.floor(
                    (Date.now() - startTime) / 1000
                );
                const pollingInterval = getPollingInterval(elapsedTimeInSeconds);

                await new Promise(resolve => setTimeout(resolve, pollingInterval));
            } catch (error) {
                console.error("ERROR pullingSubscription", JSON.stringify(error));
                if (enableAddCardSentry && flagsReady) {
                    Sentry.withScope(scope => {
                        scope.setTag("area", "cadastro");
                        scope.setTag("flow", "polling_subscription");
                        scope.setTag("provider", "pagarme_v5");
                        scope.setTag("trace_id", traceId);
                        scope.setExtra("endpoint", `/subscriptions/id`);
                        scope.setExtra("status", error ? .response ? .status || "unknown");
                        scope.setExtra("code", error ? .code);
                        scope.setExtra("errors_history", formErrors.slice(-50));
                        const sanitized = new Error(
                            (error && error.message) || "Subscription polling failed"
                        );
                        sanitized.name = (error && error.name) || "AxiosError";
                        Sentry.captureException(sanitized);
                    });
                }
                tracking.checkout.trackPaymentFailed(
                    formik.values, {
                        error_type: "polling_error",
                        error_message: error.message || "Erro no polling da assinatura",
                        error_code: error.response ? .status || "unknown",
                    },
                    coupom,
                    defaultTrialDays
                );

                return false;
            }
        }

        setResult("error");
        setSubmitting(false);
        return false;
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: initialValues,
        onSubmit: async (values, {
            setSubmitting
        }) => {
            Sentry.setExtra("errors_history", formErrors);
            window.analytics.track("Sign Up Account Creation Submit", {
                token: values ? .recaptchaToken,
            });

            setDisableButton(true);
            setEnableRecaptchaV2(false);

            var card = {};
            card.card_holder_name = values.cardholder_name;
            card.card_expiration_date =
                values.card_expiration &&
                values.card_expiration.substr(0, 2) +
                "/" +
                values.card_expiration.substr(values.card_expiration.length - 2);
            card.card_number = values.card_number;
            card.card_cvv = values.card_cvv;

            if (
                card.card_holder_name ||
                card.card_expiration_date ||
                card.card_number ||
                card.card_cvv
            ) {
                var cardValidations = pagarme.validate({
                    card: card
                });
                if (!cardValidations.card.card_holder_name) {
                    window.analytics.track("Sign Up Account Creation Failed", {
                        error: "PROVIDER_CREDIT_CARD_CHECK_FAILED",
                        message: "Verifique o nome impresso no cartão.",
                    });
                    setSubmitting(false);
                    setDisableButton(false);
                    toast.error("Verifique o nome impresso no cartão.");
                    return false;
                }
                if (!cardValidations.card.card_number) {
                    window.analytics.track("Sign Up Account Creation Failed", {
                        error: "PROVIDER_CREDIT_CARD_CHECK_FAILED",
                        message: "Verifique o número do cartão.",
                    });
                    setSubmitting(false);
                    setDisableButton(false);
                    toast.error("Verifique o número do cartão.");
                    return false;
                }
                if (!cardValidations.card.card_expiration_date) {
                    window.analytics.track("Sign Up Account Creation Failed", {
                        error: "PROVIDER_CREDIT_CARD_CHECK_FAILED",
                        message: "Verifique a data de expiração do cartão.",
                    });
                    setSubmitting(false);
                    setDisableButton(false);
                    toast.error("Verifique a data de expiração do cartão.");
                    return false;
                }
                if (!cardValidations.card.card_cvv) {
                    window.analytics.track("Sign Up Account Creation Failed", {
                        error: "PROVIDER_CREDIT_CARD_CHECK_FAILED",
                        message: "Verifique o código de segurança (CVV) do cartão.",
                    });
                    setSubmitting(false);
                    setDisableButton(false);
                    toast.error("Verifique o código de segurança (CVV) do cartão.");
                    return false;
                }
            }

            let createCard = {};
            try {
                setSubmitting(true);
                setResult("idle");
                const cardToken = await createToken(values);
                createCard = await saveCardToBackend(cardToken.id, values);

                values.card_hash = card.card_number ? createCard.data.token : "";

                let urlParams = queryString.parse(props.location.search);

                const utm_source = getCookie("utm_source");
                const utm_medium = getCookie("utm_medium");
                const utm_campaign = getCookie("utm_campaign");
                const utm_term = getCookie("utm_term");
                const utm_content = getCookie("utm_content");
                const gclid = getCookie("gclid");

                if (utm_source) urlParams.utm_source = utm_source;
                if (utm_medium) urlParams.utm_medium = utm_medium;
                if (utm_campaign) urlParams.utm_campaign = utm_campaign;
                if (utm_term) urlParams.utm_term = utm_term;
                if (utm_content) urlParams.utm_content = utm_content;
                if (gclid) urlParams.gclid = gclid;

                values.urlParams = urlParams;
                values.version = "pagarme-v5";

                if (values.recaptchaVersion === "3") refreshRecaptchaV3Ref.current();

                const subscriptionCreate = await createSubscription(
                    values,
                    createCard.data
                );
                let pollingResult;
                if (subscriptionCreate.data.status !== "active") {
                    pollingResult = await pullingSubscription(subscriptionCreate.data.id);
                    if (!pollingResult) {
                        setResult("error");
                        setSubmitting(false);
                        return false;
                    }
                }
                if (subscriptionCreate.request.status === 201 || pollingResult) {
                    setResult("success");
                    setSubmitting(false);
                    handleCheckoutMarketingData();

                    tracking.checkout.trackCheckoutSignUpAttempt(
                        values,
                        coupom,
                        defaultTrialDays
                    );

                    window.analytics.track("Sign Up Account Created");
                }
            } catch (error) {
                if (enableAddCardSentry && flagsReady) {
                    Sentry.withScope(scope => {
                        scope.setTag("area", "cadastro");
                        scope.setTag("flow", "checkout");
                        scope.setTag("provider", "pagarme_v5");
                        scope.setTag("trace_id", traceId);
                        scope.setExtra("stage", "onSubmit");
                        scope.setExtra("errors_history", formErrors.slice(-50));
                        const sanitized = new Error(
                            (error && error.message) || "General checkout error"
                        );
                        scope.setExtra(
                            "card_brand",
                            getCardBrand(values.card_number.replace(/\s/g, ""))
                        );
                        scope.setExtra(
                            "card_number",
                            `${values.card_number
                .replace(/\s/g, "")
                .slice(0, 6)}***${values.card_number
                .replace(/\s/g, "")
                .slice(-4)}`
                        );
                        sanitized.name = (error && error.name) || "Error";
                        Sentry.captureException(sanitized);
                    });
                }
                tracking.checkout.trackPaymentFailed(
                    values, {
                        error_type: "general_checkout_error",
                        error_message: error.message || "Erro durante o processo de checkout",
                        error_code: "unknown",
                    },
                    coupom,
                    defaultTrialDays
                );

                setResult("error");
                return false;
            } finally {
                setSubmitting(false);
            }
        },
        validationSchema: schemaArray[step],
    });

    useEffect(() => {
        dispatch({
            type: "LOAD_STATES"
        });
        dispatch({
            type: "LOAD_PROFESSIONS"
        });

        const plan = new URLSearchParams(location.search).get("plan");

        if (plan) {
            const plan_choosed = plans.find(planRow => planRow.id === plan);
            if (plan_choosed) {
                formik.setFieldValue("plan", plan_choosed);
                setPeriodicity(plan_choosed.type);
            }
        }

        const couponInRedirect = props.match.params.redirect ? .toUpperCase();

        if (couponInRedirect) {
            formik.setFieldValue("coupom", couponInRedirect);
            dispatch({
                type: "LOAD_COUPOM",
                payload: {
                    coupom: couponInRedirect
                },
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getCoupom = () => {
        dispatch({
            type: "LOAD_COUPOM",
            payload: {
                coupom: formik.values.coupom
            },
        });
    };

    const switchMonthly = () => {
        formik.setFieldValue(
            "plan",
            plans.find(
                plan =>
                plan.internal_id === formik.values.plan.internal_id &&
                plan.type === "monthly"
            )
        );
    };

    const switchAnnual = () => {
        formik.setFieldValue(
            "plan",
            plans.find(
                plan =>
                plan.internal_id === formik.values.plan.internal_id &&
                plan.type === "annually"
            )
        );
    };

    const handleCheckoutMarketingData = () => {
        const isPrdEnv = process.env.NODE_ENV === "production";

        if (isPrdEnv) {
            const plan = formik ? .values ? .plan;
            let amountConversion = 77.0;
            if (plan && plan.amount) {
                amountConversion = parseFloat(
                    plan.amount.replace(".", "").replace(",", ".")
                );
            }

            window.gtag("event", "conversion", {
                send_to: "AW-380889985/PZWiCIe1-soDEIHXz7UB",
                value: amountConversion,
                currency: "BRL",
                transaction_id: "",
            });
        }
    };

    const reset = () => {
        setSubmitting(false);
        setResult("idle");
        setFailedReason({
            message: "",
            details: ""
        });
        setPixGenerationFailed(false);
        dispatch({
            type: "CLEAR_SUBSCRIPTION_ERROR"
        });
    };

    const onTryAgain = () => {
        tracking.checkout.trackTryAgainClicked(
            formik.values,
            coupom,
            defaultTrialDays
        );
        reset();
    };

    const onAccessPlatform = () => {
        tracking.checkout.trackAccessPlatformClicked(
            formik.values,
            coupom,
            defaultTrialDays,
            pixGenerationFailed ?
            "pix-generation-failed-modal-checkout" :
            result === "pix-success" ?
            "pix-success-modal-checkout" :
            "failed-modal-checkout"
        );
        reset();
        history.push("/auth/login");
    };

    const createPixSubscription = async values => {
        try {
            const {
                urlParams,
                version,
                ...registerValues
            } = values;
            const phonePayload = values.phone.replace(/\D/g, "");

            const payload = {
                coupom: values.coupom,
                plan_id: values.plan.id,
                postback_url: null,
                customer: {
                    email: values.email,
                    name: values.name,
                    document_number: values.document_number,
                    address: {
                        street: values.postal_code,
                        street_number: values.address_number,
                        neighborhood: values.district,
                        zipcode: values.postal_code,
                    },
                    phone: {
                        ddd: phonePayload.slice(0, 2),
                        number: phonePayload.slice(2),
                    },
                },
                payment_method: "pix",
                provider: "pagarme_v5",
                register: {
                    ...registerValues,
                    urlParams,
                    version: version || "pagarme-v5",
                },
            };

            const response = await axios.post(
                `${process.env.REACT_APP_JUSBILL_URL}/subscriptions/pix`,
                payload, {
                    headers: {
                        "x-trace-id": traceId
                    }
                }
            );

            return response;
        } catch (error) {
            throw error;
        }
    };

    const planAmountNumber = Number(
        String(coupom ? .amount || formik.values.plan ? .amount || "0").replace(
            /[^0-9]/g,
            ""
        )
    );
    const onPix = async () => {
        tracking.checkout.trackPixPaymentClicked(
            formik.values,
            coupom,
            defaultTrialDays
        );

        try {
            setSubmitting(true);

            let urlParams = queryString.parse(props.location.search);

            const utm_source = getCookie("utm_source");
            const utm_medium = getCookie("utm_medium");
            const utm_campaign = getCookie("utm_campaign");
            const utm_term = getCookie("utm_term");
            const utm_content = getCookie("utm_content");
            const gclid = getCookie("gclid");

            if (utm_source) urlParams.utm_source = utm_source;
            if (utm_medium) urlParams.utm_medium = utm_medium;
            if (utm_campaign) urlParams.utm_campaign = utm_campaign;
            if (utm_term) urlParams.utm_term = utm_term;
            if (utm_content) urlParams.utm_content = utm_content;
            if (gclid) urlParams.gclid = gclid;

            formik.setFieldValue("urlParams", urlParams);
            formik.setFieldValue("version", "pagarme-v5");

            const pixResponse = await createPixSubscription(formik.values);
            setPixPaymentData(pixResponse.data);
            setResult("pix-success");
        } catch (error) {
            setResult("error");
            setPixGenerationFailed(true);
            tracking.checkout.trackPixPaymentFailed(
                formik.values,
                error,
                coupom,
                defaultTrialDays
            );
            setFailedReason({
                message: "Erro ao continuar com o Pix",
                details: "Por favor, entre em contato com o suporte.",
            });
        } finally {
            setSubmitting(false);
        }
    };

    return ( <
        >
        <
        div className = "register pt-15" >
        <
        div className = "container" >
        <
        div className = "row mb-10" >
        <
        div className = "col-xl-12 d-flex align-items-center" >
        <
        div className = "logo flex-grow-1" >
        <
        img src = {
            toAbsoluteUrl("/media/svg/logos/logo-jusfy.svg")
        }
        alt = "Jusfy" /
        >
        <
        /div> <
        /div> <
        /div> {
            step === 0 && ( <
                Step1 step = {
                    step
                }
                setStep = {
                    setStep
                }
                formik = {
                    formik
                }
                disabledCreditCard = {
                    disabledCreditCard
                }
                isUniqueEmail = {
                    uniqueEmail
                }
                />
            )
        } {
            step === 1 && ( <
                Step2 plans = {
                    plans
                }
                switchMonthly = {
                    switchMonthly
                }
                switchAnnual = {
                    switchAnnual
                }
                periodicity = {
                    periodicity
                }
                setPeriodicity = {
                    setPeriodicity
                }
                step = {
                    step
                }
                setStep = {
                    setStep
                }
                formik = {
                    formik
                }
                disabledCreditCard = {
                    disabledCreditCard
                }
                recaptchaV3HandleChange = {
                    handleRecaptchaV3Callback
                }
                recaptchaV2HandleChange = {
                    handleRecaptchaV2Callback
                }
                enableRecaptchaV2 = {
                    enableRecaptchaV2
                }
                getCoupom = {
                    getCoupom
                }
                verifyCoupon = {
                    verifyCoupon
                }
                showCupomReferenceInputs = {
                    showCupomReferenceInputs
                }
                setShowCupomReferenceInputs = {
                    setShowCupomReferenceInputs
                }
                searchAddress = {
                    code => searchAddressByAddressCode(code)
                }
                handleSubmitForm = {
                    handleSubmitForm
                }
                disableButton = {
                    disableButton
                }
                />
            )
        } <
        /div> <
        /div> <
        ModalProcessingPayment isOpen = {
            submitting && result !== "error"
        }
        /> <
        ModalPaymentSuccess isOpen = {
            result === "success"
        }
        email = {
            formik.values.email
        }
        onAccessPlatform = {
            onAccessPlatform
        }
        /> <
        ModalFailedPayment isOpen = {
            result === "error"
        }
        title = {
            failedReason.message
        }
        subTitle = {
            failedReason.details
        }
        loading = {
            submitting
        }
        onPix = {
            onPix
        }
        onClose = {
            onTryAgain
        }
        planAmount = {
            planAmountNumber
        }
        pixGenerationFailed = {
            pixGenerationFailed
        }
        /> <
        ModalCheckoutPixPayment isOpen = {
            result === "pix-success"
        }
        pixPaymentData = {
            pixPaymentData
        }
        formikValues = {
            formik.values
        }
        onAccessPlatform = {
            onAccessPlatform
        }
        /> <
        />
    );
}