import React, {
    useEffect,
    useState,
    useRef
} from "react";
import InputMask from "react-input-mask";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    COUPON_INPUT_MESSAGES,
    INPUT_COLORS,
    PERIODICITIES,
} from "./constants";

import * as S from "./CompleteProfile.styles";
import {
    cpfMask,
    phoneMask
} from "../../../_metronic/_helpers/MasksHelper";
import {
    toAbsoluteUrl
} from "../../../_metronic/_helpers";

import * as yup from "yup";
import {
    useFormik
} from "formik";
import {
    cpf
} from "cpf-cnpj-validator";
import {
    CreditCardContainer
} from "./CompleteProfile.styles";
import RightInfo from "../Cadastro/components/RightInfo/RightInfo";
import {
    useHistory
} from "react-router-dom";
import pagarme from "pagarme/browser";
import {
    toast
} from "react-toastify";
import * as auth from "../../modules/Auth/_redux/authRedux";
import {
    BlockUi
} from "../../components/BlockUI";

import {
    ReCaptchaProvider,
    ReCaptchaV3
} from "react-recaptcha-x";
import {
    useRecaptchaV3,
    useRecaptchaTokenRefresh,
} from "../../hooks/useRecaptcha";

// 🔹 Novos imports para a refatoração
import useCreditCardFlagSVG from "../../hooks/useCreditCardFlagSVG";
import valid from "card-validator";
import {
    IMAGE_DEFAULT_CREDIT_CARD
} from "../Perfil/components/SubscriptionUpgradeModal/styles";

const plans = [{
        id: "starter",
        internal_id: "starter",
        name: "STARTER",
        amount: "77,00",
        periodicity: "monthly",
    },
    {
        id: "master",
        internal_id: "master",
        name: "MASTER",
        amount: "97,00",
        periodicity: "monthly",
    },
    {
        id: "ultimate",
        internal_id: "ultimate",
        name: "ULTIMATE",
        amount: "117,00",
        periodicity: "monthly",
    },
];

const CompleteProfile = () => {
    const dispatch = useDispatch();
    const {
        provider
    } = useSelector(state => state.auth) || {};

    const [initialValues] = useState({
        user_cpf: "",
        plan: plans ? .find(plan => plan.id === "starter"),
        cardholder_name: "",
        card_number: "",
        card_cvv: "",
        card_expiration: "",
        recaptchaToken: "",
    });

    const [periodicity, setPeriodicity] = useState("monthly");

    const disabledCreditCard = useSelector(state =>
        Object.keys(state.app.coupom).length > 0 && state.app.coupom ? .is_valid ?
        !state ? .app ? .coupom ? .upfront_credit_card_required :
        false
    );

    // 🔹 Validação com card-validator (sem Mercado Pago)
    const validationShape = {
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
                    .required("O número do cartão é obrigatório.")
                    .test("isValidCardNumber", "Número do cartão inválido.", value => {
                        const digits = String(value ? ? "").replace(/\D/g, "");
                        const res = valid.number(digits);
                        return !!res ? .isValid;
                    }),
                card_expiration: yup
                    .string()
                    .required("O mês/ano de expiração do cartão é obrigatório.")
                    .test("isValidExpiration", "O vencimento é inválido.", value => {
                        const raw = String(value ? ? "").replace(/\s/g, "");
                        const normalized = raw.replace(/(\d{2})[^\d]?(\d{2})/, "$1/$2"); // "MM/YY"
                        const res = valid.expirationDate(normalized);
                        return !!res ? .isValid;
                    }),
                card_cvv: yup
                    .string()
                    .required("O código de segurança (CVV) do cartão é obrigatório.")
                    .test("isValidCVV", "Número do CVV inválido.", function(value) {
                        const numberDigits = String(
                            this.parent.card_number ? ? ""
                        ).replace(/\D/g, "");
                        const {
                            card
                        } = valid.number(numberDigits);
                        const expected = card ? .code ? .size; // 3 (visa/mastercard/...) ou 4 (amex)
                        const v = String(value ? ? "").replace(/\D/g, "");
                        if (expected) {
                            const res = valid.cvv(v, expected);
                            return !!res ? .isValid;
                        }
                        const res = valid.cvv(v); // fallback: aceita 3 ou 4
                        return !!res ? .isValid;
                    }),
            } :
            {}),
        user_cpf: yup
            .string()
            .required("O campo CPF é obrigatório!")
            .test("isValidDocument", "O CPF é inválido.", value =>
                cpf.isValid(value)
            ),
    };
    const validationSchema = yup.object().shape(validationShape);
    const history = useHistory();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: initialValues,
        onSubmit: async (values, {
            setSubmitting
        }) => {
            const card = {
                card_holder_name: values.cardholder_name,
                card_expiration_date: values.card_expiration.substr(0, 2) +
                    "/" +
                    values.card_expiration.substr(values.card_expiration.length - 2),
                card_number: values.card_number,
                card_cvv: values.card_cvv,
            };

            // (Opcional) Mantida a validação do pagarme para transição segura
            const cardValidations = pagarme.validate({
                card
            });
            if (!cardValidations.card.card_holder_name) {
                setSubmitting(false);
                toast.error("Verifique o nome impresso no cartão.");
                return;
            }
            if (!cardValidations.card.card_number) {
                setSubmitting(false);
                toast.error("Verifique o número do cartão.");
                return;
            }
            if (!cardValidations.card.card_expiration_date) {
                setSubmitting(false);
                toast.error("Verifique a data de expiração do cartão.");
                return;
            }
            if (!cardValidations.card.card_cvv) {
                setSubmitting(false);
                toast.error("Verifique o código de segurança (CVV) do cartão.");
                return;
            }

            const handleSubscription = card_hash => {
                dispatch({
                    type: "CREATE_SUBSCRIPTION",
                    payload: {
                        values: {
                            ...values,
                            card_hash,
                        },
                        callback: response => {
                            dispatch({
                                type: auth.actionTypes.UserRequested
                            });
                            history.push("/dashboard");
                        },
                        setSubmitting,
                    },
                });
            };

            try {
                if (provider === "pagarme_v5") {
                    const resp = await fetch(
                        `https://api.pagar.me/core/v5/tokens?appId=${process.env.REACT_APP_PAGARME_V5_ENCRYPTION_KEY}`, {
                            method: "POST",
                            headers: {
                                accept: "application/json",
                                "content-type": "application/json",
                            },
                            body: JSON.stringify({
                                type: "card",
                                card: {
                                    number: card.card_number.replace(/\s/g, ""),
                                    holder_name: card.card_holder_name,
                                    exp_month: parseInt(
                                        card.card_expiration_date.substr(0, 2),
                                        10
                                    ),
                                    exp_year: parseInt(
                                        card.card_expiration_date.substr(3, 2),
                                        10
                                    ),
                                    cvv: card.card_cvv,
                                },
                            }),
                        }
                    );
                    if (!resp.ok) throw new Error("Erro ao gerar token do cartão.");
                    const json = await resp.json();
                    handleSubscription(json.id);
                } else {
                    const client = await pagarme.client.connect({
                        encryption_key: process.env.REACT_APP_PAGARME_ENCRYPTION_KEY,
                    });
                    const card_hash = await client.security.encrypt(card);
                    handleSubscription(card_hash);
                }
            } catch (error) {
                setSubmitting(false);
                toast.error("Erro ao gerar token do cartão, tente novamente.");
                console.error("Erro ao gerar token do cartão:", error);
            }
        },
        validationSchema,
    });

    const [coupomInputFeedback, setCoupomInputFeedback] = useState(null);

    const coupom = useSelector(state => state.app.coupom);
    const defaultTrialDays = useSelector(state => state.app.default_trial_days);

    const isCoupomEmpty = formik.values.coupom === "";
    const isCoupomValid = coupom.is_valid && !coupom.invalid_reason;
    const hasCoupomError = !coupom.is_valid && coupom.invalid_reason;

    useEffect(() => {
        if (isCoupomValid) setCoupomInputFeedback("SUCCESS");
        if (hasCoupomError) setCoupomInputFeedback("ERROR");
    }, [coupom]);

    const getCoupomPeriodicity = periodicity =>
        PERIODICITIES[periodicity] || "/mensal";

    const getCoupomInputMessage = invalidReason => {
        if (coupomInputFeedback === "WARNING")
            return COUPON_INPUT_MESSAGES.get("EMPTY");
        return isCoupomValid ?
            COUPON_INPUT_MESSAGES.get("SUCCESS") :
            COUPON_INPUT_MESSAGES.get(invalidReason);
    };

    const getCoupomMessageColor = () =>
        coupomInputFeedback ?
        INPUT_COLORS.get(coupomInputFeedback) :
        INPUT_COLORS.get("SUCCESS");

    const handleCoupomApply = () => {
        dispatch({
            type: "LOAD_COUPOM",
            payload: {
                coupom: formik.values.coupom
            },
        });
        if (isCoupomEmpty) setCoupomInputFeedback("WARNING");
    };

    const search = new URLSearchParams(document.location.search);
    const hasCompraGarantida = search.get("compra_garantida") === "true";

    const {
        svg
    } = useCreditCardFlagSVG({
        cardNumber: formik.values.card_number,
    });

    const submitHandleClick = () => {
        window.analytics.track("Sign Up Create Account Button Clicked", {
            name: formik.values ? .name,
            email: formik.values ? .email,
            profession: formik.values ? .profession,
            coupom: formik.values ? .coupom,
            user_cpf: formik.values ? .user_cpf,
            phone: formik.values ? .phone,
            plan: formik.values ? .plan,
            cardholder_name: formik.values ? .cardholder_name,
            card_number_length: formik.values ? .card_number ? .length || 0,
            // removido card_payment_method (não existe mais)
            card_cvv_length: formik.values ? .card_cvv ? .length || 0,
            card_expiration_length: formik.values ? .card_expiration ? .length || 0,
        });

        formik.handleSubmit();
    };

    const refreshRecaptchaV3Ref = useRef();
    const [handleRecaptchaV3Callback, captchaV3Params] = useRecaptchaV3(
        refreshRecaptchaV3Ref
    );
    useRecaptchaTokenRefresh(refreshRecaptchaV3Ref);

    useEffect(() => {
        formik.setFieldValue("recaptchaToken", captchaV3Params.v3Token);
    }, [captchaV3Params.v3Token]);

    return ( <
        BlockUi blocking = {
            formik.isSubmitting
        } >
        <
        div className = "row no-gutters mb-20" >
        <
        div className = "col-xl-8" >
        <
        div className = "border-radius-only-left"
        style = {
            {
                backgroundColor: "#fff",
                padding: "40px",
                height: "100%"
            }
        } >
        <
        div className = "blocksPrice mt-6" >
        <
        div className = "row" > {
            plans
            .filter(plan => plan.periodicity === periodicity)
            .map((plan, index) => ( <
                div className = {
                    "col-sm-3 mb-4 mr-5 ml-5 " +
                    (formik.values.plan.id === plan.id ? "active" : "")
                }
                onClick = {
                    () => formik.setFieldValue("plan", plan)
                }
                key = {
                    index
                } >
                <
                span > {
                    plan.name
                } < /span> <
                h3 >
                R$ {
                    plan.amount
                } <
                small className = "month" >
                /{plan.periodicity === "monthly" ? "mensal" : "anual"} <
                /small> <
                /h3> <
                /div>
            ))
        } <
        /div> <
        /div>

        <
        div className = "row my-5" >
        <
        S.CoupomWrapper >
        <
        label className = "form-label" >
        Compra garantida: cancele sem burocracias em até sete dias com reembolso integral do valor pago. <
            /label> <
            /S.CoupomWrapper> <
            /div> <
            div className = "hr mb-10" > < /div>

        { /* 🔹 Exibe/omite os campos de cartão usando a flag correta */ } {
            disabledCreditCard &&
                Object.keys(coupom).length !== 0 &&
                coupom.is_valid ? ( <
                    > < />
                ) : ( <
                    >
                    <
                    div className = "row mb-10" >
                    <
                    div className = "col-xl-12" >
                    <
                    label >
                    Nome impresso no cartão {
                        " "
                    } <
                    span className = "text-danger" > Obrigatório & nbsp;* < /span> <
                    /label> <
                    input name = "cardholder_name"
                    type = "text"
                    className = {
                        "form-control " +
                        (formik.errors.cardholder_name &&
                            formik.touched.cardholder_name ?
                            "is-invalid" :
                            "")
                    }
                    onChange = {
                        formik.handleChange
                    }
                    value = {
                        formik.values.cardholder_name
                    }
                    /> {
                        formik.errors.cardholder_name &&
                            formik.touched.cardholder_name && ( <
                                label className = "invalid-feedback" > {
                                    formik.errors.cardholder_name
                                } <
                                /label>
                            )
                    } <
                    /div> <
                    /div>

                    <
                    div className = "row mb-10" >
                    <
                    div className = "col-xl-12" >
                    <
                    label >
                    Número do cartão {
                            " "
                        } <
                        span className = "text-danger" > Obrigatório & nbsp;* < /span> <
                    /label> <
                    CreditCardContainer >
                    <
                    InputMask name = "card_number"
                    placeholder = "0000 0000 0000 0000"
                    mask = "9999 9999 9999 9999"
                    maskChar = {
                        null
                    }
                    className = {
                        "form-control " +
                        (formik.errors.card_number &&
                            formik.touched.card_number ?
                            "is-invalid" :
                            "")
                    }
                    type = "tel"
                    onChange = {
                        formik.handleChange
                    }
                    value = {
                        formik.values.card_number
                    }
                    /> <
                    img src = {
                        svg ? toAbsoluteUrl(svg) : IMAGE_DEFAULT_CREDIT_CARD
                    }
                    alt = "Bandeira do cartão" /
                    > {
                        formik.errors.card_number &&
                        formik.touched.card_number && ( <
                            label className = "invalid-feedback" > {
                                formik.errors.card_number
                            } <
                            /label>
                        )
                    } <
                    /CreditCardContainer> <
                    /div> <
                    /div>

                    <
                    div className = "row mb-10" >
                    <
                    div className = "col-lg-6 col-6" >
                    <
                    label >
                    Vencimento(MM / AA) {
                        " "
                    } <
                    span className = "text-danger" > Obrigatório & nbsp;* < /span> <
                    /label> <
                    InputMask name = "card_expiration"
                    placeholder = "MM / AA"
                    mask = "99 / 99"
                    maskChar = {
                        null
                    }
                    className = {
                        "form-control " +
                        (formik.errors.card_expiration &&
                            formik.touched.card_expiration ?
                            "is-invalid" :
                            "")
                    }
                    type = "tel"
                    onChange = {
                        formik.handleChange
                    }
                    value = {
                        formik.values.card_expiration
                    }
                    /> {
                        formik.errors.card_expiration &&
                            formik.touched.card_expiration && ( <
                                label className = "invalid-feedback" > {
                                    formik.errors.card_expiration
                                } <
                                /label>
                            )
                    } <
                    /div>

                    <
                    div className = "col-lg-6 col-6" >
                    <
                    label >
                    CVV {
                        " "
                    } <
                    span className = "text-danger" > Obrigatório & nbsp;* < /span> <
                    /label> <
                    InputMask name = "card_cvv"
                    placeholder = "000"
                    mask = "9999" // aceita 3 ou 4; validado no Yup
                    maskChar = {
                        null
                    }
                    className = {
                        "form-control " +
                        (formik.errors.card_cvv && formik.touched.card_cvv ?
                            "is-invalid" :
                            "")
                    }
                    type = "tel"
                    onChange = {
                        formik.handleChange
                    }
                    value = {
                        formik.values.card_cvv
                    }
                    /> {
                        formik.errors.card_cvv && formik.touched.card_cvv && ( <
                            label className = "invalid-feedback" > {
                                formik.errors.card_cvv
                            } <
                            /label>
                        )
                    } <
                    /div> <
                    /div> <
                    />
                )
        }

        <
        div className = "row mb-10" >
        <
        div className = "col-xl-6" >
        <
        label >
        CPF < span className = "text-danger" > & nbsp;* < /span> <
        /label> <
        input type = "text"
        name = "user_cpf"
        className = {
            "form-control " +
            (formik.errors.user_cpf && formik.touched.user_cpf ?
                "is-invalid" :
                "")
        }
        value = {
            formik.values.user_cpf
        }
        onChange = {
            evt =>
            formik.setFieldValue("user_cpf", cpfMask(evt.target.value))
        }
        /> {
            formik.errors.user_cpf && formik.touched.user_cpf && ( <
                label className = "invalid-feedback" > {
                    formik.errors.user_cpf
                } <
                /label>
            )
        } <
        /div> <
        div className = "col-xl-6" >
        <
        label >
        Telefone < span className = "text-danger" > & nbsp;* < /span> <
        /label> <
        input type = "text"
        name = "phone"
        className = {
            "form-control " +
            (formik.errors.phone && formik.touched.phone ?
                "is-invalid" :
                "")
        }
        value = {
            formik.values.phone
        }
        onChange = {
            evt =>
            formik.setFieldValue("phone", phoneMask(evt.target.value))
        }
        /> {
            formik.errors.phone && formik.touched.phone && ( <
                label className = "invalid-feedback" > {
                    formik.errors.phone
                } <
                /label>
            )
        } <
        /div> <
        /div>

        <
        ReCaptchaProvider siteKeyV3 = {
            process.env.REACT_APP_RECAPTCHA_V3_SITEKEY
        } >
        <
        ReCaptchaV3 callback = {
            handleRecaptchaV3Callback
        }
        /> <
        /ReCaptchaProvider>

        <
        div className = "row mb-5" >
        <
        div className = "col-xl-12" >
        <
        button type = "button"
        className = "btn btn-primary"
        style = {
            {
                width: "100%",
                height: "50px"
            }
        }
        onClick = {
            submitHandleClick
        } >
        Finalizar compra <
        /button> <
        /div> <
        /div>

        <
        div className = "row" >
        <
        div className = "col-xl-12" > {
            (!coupom ||
                !coupom.is_valid ||
                (coupom.is_valid &&
                    coupom.trial_days > 0 &&
                    coupom.upfront_credit_card_required)) && ( <
                p className = "preto-cabecalho font-size-sm"
                style = {
                    {
                        opacity: 0.45
                    }
                } >
                Compra garantida: cancele sem burocracias em até sete dias com reembolso integral do valor pago. <
                    /p>
            )
        } <
        p className = "azul-cabecalho font-size-sm"
        style = {
            {
                opacity: 0.45
            }
        } >
        Ao clicar no botão acima, você concorda com nossos & nbsp; <
        a href = "https://jusfy.com.br/client/assets/termos.pdf"
        target = "_BLANK"
        rel = "noreferrer" >
        <
        span className = "font-weight-bolder" > Termos de Uso < /span> <
        /a>, {
            " "
        } <
        a href = "https://jusfy.com.br/client/assets/politica.pdf"
        target = "_BLANK"
        rel = "noreferrer" >
        <
        span className = "font-weight-bolder" >
        Política de Privacidade <
        /span> <
        /a> &
        nbsp; e & nbsp; <
        a href = "https://jusfy.com.br/client/assets/politica-de-pagamento.pdf"
        target = "_BLANK"
        rel = "noreferrer" >
        <
        span className = "font-weight-bolder" >
        Política de Pagamento <
        /span> <
        /a> <
        /p> <
        /div> <
        /div> <
        /div> <
        /div>

        <
        RightInfo formik = {
            formik
        }
        disabledCreditCard = {
            disabledCreditCard
        }
        /> <
        /div> <
        /BlockUi>
    );
};

export default CompleteProfile;