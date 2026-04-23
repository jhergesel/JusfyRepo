import * as S from "./NewCardForm.styles";
import InputText from "../../../../components/flat/ui/Inputs/InputText";
import Button from "../../../../components/flat/ui/Button";
import useCreditCardFlagSVG from "../../../../hooks/useCreditCardFlagSVG";
import {
    useFormik
} from "formik";
import * as yup from "yup";
import {
    cardMask
} from "../../../../../_metronic/_helpers/MasksHelper";
import {
    toast
} from "react-toastify";
import pagarme from "pagarme/browser/pagarme";
import {
    toAbsoluteUrl
} from "../../../../../_metronic/_helpers";
import {
    useState,
    useEffect
} from "react";
import ReactLoading from "react-loading";
import {
    useDispatch,
    useSelector
} from "react-redux";
import axios from "axios";
import {
    EventsSegment
} from "../../../JusPage/helpers/EventsSegmentJusPage";

const CARD_VALIDATIONS = [{
        field: "card_holder_name",
        errorMessage: "Verifique o nome impresso no cartão.",
    },
    {
        field: "card_number",
        errorMessage: "Verifique o número do cartão."
    },
    {
        field: "card_expiration_date",
        errorMessage: "Verifique a data de expiração do cartão.",
    },
    {
        field: "card_cvv",
        errorMessage: "Verifique o código de segurança (CVV) do cartão.",
    },
];

const VALIDATION_SCHEMA = yup.object().shape({
    cardholder_name: yup
        .string()
        .required("O nome do titular do cartão é obrigatório."),
    card_number: yup.string().required("O número do cartão é obrigatório."),
    card_expiration: yup
        .string()
        .required("O mês/ano de expiração do cartão é obrigatório.")
        .test("isValidExpiration", "O vencimento é inválido.", function(value) {
            const cleanedExpirationDate = value ? .replace(/\s/g, "");
            if (!cleanedExpirationDate ||
                !/^(0[1-9]|1[012])[/]\d{2}$/.test(cleanedExpirationDate)
            ) {
                return false;
            }

            const currentDate = new Date();
            const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
            const currentYear = String(currentDate.getFullYear()).substr(-2);

            const [expMonth, expYear] = cleanedExpirationDate.split("/");

            if (
                expYear < currentYear ||
                (expYear === currentYear && expMonth < currentMonth)
            ) {
                return false;
            }

            return true;
        }),
    card_cvv: yup
        .string()
        .required("O código de segurança (CVV) do cartão é obrigatório.")
        .test("isValidCVV", "Número do CVV inválido.", function(value) {
            return value && /^[0-9]{3,4}$/.test(value);
        }),
});

const INITIAL_VALUES = {
    cardholder_name: "",
    card_number: "",
    card_cvv: "",
    card_expiration: "",
};

const NewCardForm = ({
        buttonText,
        onLoading,
        onSubmit
    }) => {
        const dispatch = useDispatch();
        const {
            provider
        } = useSelector(state => state.auth) || {};
        const {
            EventDashboardSegment
        } = EventsSegment();

        const [isSubmitting, setIsSubmitting] = useState(false);

        // Reset do estado quando o componente for desmontado
        useEffect(() => {
            return () => {
                setIsSubmitting(false);
            };
        }, []);

        const form = useFormik({
            enableReinitialize: true,
            initialValues: INITIAL_VALUES,
            onSubmit: (values, {
                setSubmitting
            }) => {
                if (isSubmitting) return;

                setIsSubmitting(true);
                onLoading();

                const {
                    cardholder_name,
                    card_expiration,
                    card_number,
                    card_cvv,
                } = values;

                const card = {
                    card_holder_name: cardholder_name,
                    card_expiration_date: `${card_expiration.substring(
          0,
          2
        )}/${card_expiration.substring(card_expiration.length - 2)}`,
                    card_number: card_number.trim(),
                    card_cvv,
                };

                const cardValidations = pagarme.validate({
                    card
                });

                const isCardValid = CARD_VALIDATIONS.every(
                    validation => cardValidations.card[validation.field]
                );

                if (!isCardValid) {
                    setSubmitting(false);
                    setIsSubmitting(false);
                    const errorMessage = CARD_VALIDATIONS.find(
                        validation => !cardValidations.card[validation.field]
                    ).errorMessage;

                    // Evento de falha na validação do cartão
                    EventDashboardSegment("JusMail Card Validation Failed", {
                        error_type: "validation_error",
                        error_message: errorMessage,
                        provider: provider || "unknown"
                    });

                    toast.error(errorMessage);
                    return false;
                }

                const handleCardSave = cardHash => {
                    dispatch({
                        type: "SAVE_CARD",
                        payload: {
                            cardHash,
                            toast: false,
                            setSubmitting,
                            callback: () => {
                                axios
                                    .get(`${process.env.REACT_APP_API_URL}/subscription/cards`)
                                    .then(response => {
                                        onSubmit(response.data.data[response.data.data.length - 1])
                                    })
                                    .catch(error => {
                                        console.error('Erro ao buscar cartões salvos:', error);

                                        // Evento de falha ao buscar cartões após salvar
                                        EventDashboardSegment("JusMail Save Card Callback Failed", {
                                            error_type: "api_error",
                                            error_message: error.message || "Erro ao buscar cartões salvos",
                                            provider: provider || "unknown"
                                        });

                                        toast.error('Erro ao finalizar cadastro do cartão. Tente novamente.');
                                        setSubmitting(false);
                                        setIsSubmitting(false);
                                    });
                            },
                        },
                    });
                };

                if (provider === "pagarme_v5") {
                    fetch(
                            `https://api.pagar.me/core/v5/tokens?appId=${process.env.REACT_APP_PAGARME_V5_ENCRYPTION_KEY}`, {
                                method: "POST",
                                headers: {
                                    accept: "application/json",
                                    "content-type": "application/json",
                                },
                                body: JSON.stringify({
                                    type: "card",
                                    card: {
                                        holder_name: cardholder_name,
                                        number: card_number.replace(/\s/g, ""),
                                        exp_month: card_expiration.substring(0, 2),
                                        exp_year: card_expiration.substring(3, 5),
                                        cvv: card_cvv,
                                    }
                                }),
                            }
                        )
                        .then(res => {
                            if (!res.ok) {
                                throw new Error(`Erro ao processar o cartão: ${res.status}`);
                            }
                            return res.json();
                        })
                        .then(data => handleCardSave(data.id))
                        .catch(error => {
                            setSubmitting(false);
                            setIsSubmitting(false);

                            // Evento de falha no processamento do cartão (Pagar.me V5)
                            EventDashboardSegment("JusMail Card Processing Failed", {
                                error_type: "pagarme_v5_error",
                                error_message: error.message || "Erro ao processar o cartão",
                                provider: "pagarme_v5"
                            });

                            toast.error(`Erro ao processar o cartão, tente novamente.`);
                            console.error("Erro ao processar o cartão:", error);
                        });
                } else if (provider === "pagarme") {
                    pagarme.client
                        .connect({
                            encryption_key: process.env.REACT_APP_PAGARME_ENCRYPTION_KEY,
                        })
                        .then(client => client.security.encrypt(card))
                        .then(card_hash => handleCardSave(card_hash))
                        .catch(error => {
                            console.error('Erro ao processar pagamento:', error);

                            // Evento de falha no processamento do cartão (Pagar.me V4)
                            EventDashboardSegment("JusMail Card Processing Failed", {
                                error_type: "pagarme_v4_error",
                                error_message: error.message || "Erro ao processar pagamento",
                                provider: "pagarme_v4"
                            });

                            toast.error('Erro ao processar pagamento. Tente novamente.');
                            setIsSubmitting(false);
                            setSubmitting(false);
                        });
                } else {
                    toast.error("Provedor de pagamento não localizado. Recarregue a página e tente novamente.");
                    EventDashboardSegment("JusMail Card Processing Failed", {
                        error_type: "tokenization_error",
                        error_message: "Provedor de pagamento não localizado.",
                        provider: provider || "unknown"
                    });
                }
            },
            validationSchema: VALIDATION_SCHEMA,
        });

        const expirationMask = value => {
            return value.length === 3 && value.substring(2) !== "/" ?
                `${value.substring(0, 2)}/${value.substring(2)}` :
                value;
        };

        const {
            svg
        } = useCreditCardFlagSVG({
            cardNumber: form.values.card_number,
        });

        return ( <
                >
                <
                S.Container >
                <
                div >
                <
                InputText label = { < S.InputLabel > Nome impresso no cartão < /S.InputLabel>}
                    name = "cardholder_name"
                    onChange = {
                        form.handleChange
                    }
                    value = {
                        form.values.cardholder_name
                    }
                    /> {
                        form.errors.cardholder_name && form.touched.cardholder_name && ( <
                            S.Error > {
                                form.errors.cardholder_name
                            } < /S.Error>
                        )
                    } <
                    /div> <
                    S.InputCardNumberWrapper >
                    <
                    InputText
                    placeholder = "0000 0000 0000 0000"
                    label = { < S.InputLabel > Número do cartão < /S.InputLabel>}
                        name = "card_number"
                        onChange = {
                            form.handleChange
                        }
                        value = {
                            cardMask(form.values.card_number)
                        }
                        maxLength = "19"
                        padding = "0 0 0 36px " /
                        >
                        <
                        S.CardFlag width = "22"
                        height = "14"
                        src = {
                            toAbsoluteUrl(svg)
                        }
                        /> {
                            form.errors.card_number && form.touched.card_number && ( <
                                S.Error > {
                                    form.errors.card_number
                                } < /S.Error>
                            )
                        } <
                        /S.InputCardNumberWrapper> <
                        S.InputWrapper >
                        <
                        div >
                        <
                        InputText
                        placeholder = "MM/AA"
                        label = { < S.InputLabel > Vencimento < /S.InputLabel>}
                            name = "card_expiration"
                            onChange = {
                                form.handleChange
                            }
                            value = {
                                expirationMask(form.values.card_expiration)
                            }
                            maxLength = "5" /
                            > {
                                form.errors.card_expiration && form.touched.card_expiration && ( <
                                    S.Error > {
                                        form.errors.card_expiration
                                    } < /S.Error>
                                )
                            } <
                            /div> <
                            div >
                            <
                            InputText
                            placeholder = "000"
                            label = { < S.InputLabel > CVV < /S.InputLabel>}
                                name = "card_cvv"
                                onChange = {
                                    form.handleChange
                                }
                                value = {
                                    form.values.card_cvv
                                }
                                maxLength = "4" /
                                > {
                                    form.errors.card_cvv && form.touched.card_cvv && ( <
                                        S.Error > {
                                            form.errors.card_cvv
                                        } < /S.Error>
                                    )
                                } <
                                /div> <
                                /S.InputWrapper> <
                                /S.Container> <
                                Button
                                padding = "10px"
                                borderRadius = "5px"
                                width = "100%"
                                disabled = {
                                    isSubmitting
                                }
                                onClick = {
                                    form.handleSubmit
                                } >
                                <
                                S.ButtonText > {
                                    isSubmitting ? ( <
                                        ReactLoading type = "spin"
                                        color = "#fff"
                                        width = "20px"
                                        height = "20px" / >
                                    ) : (
                                        buttonText
                                    )
                                } <
                                /S.ButtonText> <
                                /Button> <
                                />
                            );
                        };

                        export default NewCardForm;