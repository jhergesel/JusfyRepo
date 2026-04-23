import React, {
    useEffect,
    useState
} from "react";
import {
    Modal
} from "react-bootstrap";

import ChoosePlan from "./components/ChoosePlan";
import Checkout from "./components/Checkout";
import Success from "./components/Success";
import * as yup from "yup";
import {
    useFormik
} from "formik";
import pagarme from "pagarme/browser";
import {
    toast
} from "react-toastify";
import {
    useDispatch,
    useSelector
} from "react-redux";
import * as S from "./styles";
import {
    ResponsiveModal
} from "./styles";
import ModalSubscriptionPolling from "../../../../../components/ModalSubscriptionPolling";
import {
    EventsSegment
} from "../../../../../helpers/EventsSegmentsCalculators";
import * as auth from "../../../../..//modules/Auth";

export default function SubscriptionReachedJusfinder(props) {
    const [screen, setScreen] = useState("choose_plan");
    const modalInfo = useSelector(state => state.app.modal_subscription);
    const subscription = useSelector(state => state.subscription);

    const {
        provider
    } = useSelector(state => state.auth) || {};
    const [infoPlan, setInfoPlan] = useState(
        subscription.subscription_status.info ? .has_error ?
        subscription.subscription_status ? .subscription_info :
        subscription.subscription_status ? .info ? .plan
    );
    const [modalV5, setModalV5] = useState(false);
    const path = window.location.pathname;
    const pathParts = path.split("/");
    const url = pathParts[1];

    const [urlState, _] = useState(url);
    const {
        LimitReachModal
    } = EventsSegment();
    const dispatch = useDispatch();

    const getDateToday = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, "0");
        const month = String(today.getMonth() + 1).padStart(2, "0"); // Janeiro é 0
        const year = today.getFullYear();
        return `${day}/${month}/${year}`;
    };
    const formik = useFormik({
        initialValues: {
            product_selected: null,
            cardholder_name: "",
            card_number: "",
            card_payment_method: null,
            card_cvv: "",
            card_expiration: "",
            card_selected: null,
            recaptchaToken: "",
        },
        onSubmit: (values, {
            setSubmitting
        }) => {
            if (values.card_selected === null) {
                var card = {};
                card.card_holder_name = values.cardholder_name;
                card.card_expiration_date =
                    values.card_expiration.substr(0, 2) +
                    "/" +
                    values.card_expiration.substr(values.card_expiration.length - 2);
                card.card_number = values.card_number;
                card.card_cvv = values.card_cvv;
                var cardValidations = pagarme.validate({
                    card: card
                });

                if (!cardValidations.card.card_holder_name) {
                    setSubmitting(false);
                    toast.error("Verifique o nome impresso no cartão.");
                    return false;
                }
                if (!cardValidations.card.card_number) {
                    setSubmitting(false);
                    toast.error("Verifique o número do cartão.");
                    return false;
                }
                if (!cardValidations.card.card_expiration_date) {
                    setSubmitting(false);
                    toast.error("Verifique a data de expiração do cartão.");
                    return false;
                }
                if (!cardValidations.card.card_cvv) {
                    setSubmitting(false);
                    toast.error("Verifique o código de segurança (CVV) do cartão.");
                    return false;
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
                                setScreen("success");
                                LimitReachModal("Plan Upgraded", {
                                    current_plan: infoPlan || "STARTER",
                                    new_plan: values.product_selected ? .id,
                                    context: urlState,
                                    current_plan_id: subscription ? .subscription_status ? .plan_details ? .gateway_id,
                                    new_plan_name: values.product_selected ? .name,
                                    new_plan_id: values.product_selected ? .gateway_id,
                                    new_plan_price: values.product_selected ? .price,
                                    current_plan_price: subscription ? .subscription_status ? .plan_details ? .amount,
                                    querie: props ? .identification,
                                    dateUpgrade: getDateToday(),
                                });
                            },
                            setSubmitting,
                        },
                    });
                };

                if (provider === "pagarme_v5") {
                    const options = {
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
                                exp_month: parseInt(card.card_expiration_date.substr(0, 2), 10),
                                exp_year: parseInt(card.card_expiration_date.substr(3, 2), 10),
                                cvv: card.card_cvv,
                            },
                        }),
                    };
                    fetch(
                            `https://api.pagar.me/core/v5/tokens?appId=${process.env.REACT_APP_PAGARME_V5_ENCRYPTION_KEY}`,
                            options
                        )
                        .then(res => res.json())
                        .then(card => handleSubscription(card.id))
                        .catch(error => {
                            setSubmitting(false);
                            toast.error("Erro ao processar o cartão. Tente novamente.");
                            console.error("Erro na tokenização:", error);
                        });
                } else {
                    pagarme.client
                        .connect({
                            encryption_key: process.env.REACT_APP_PAGARME_ENCRYPTION_KEY,
                        })
                        .then(client => client.security.encrypt(card))
                        .then(card_hash => handleSubscription(card_hash))
                        .catch(() => {
                            setSubmitting(false);
                            toast.error("Erro ao processar o cartão. Tente novamente.");
                        });
                }
            } else {
                dispatch({
                    type: "CREATE_SUBSCRIPTION",
                    payload: {
                        values: {
                            ...values,
                        },
                        callback: () => {
                            setScreen("success");
                            LimitReachModal("Plan Upgraded", {
                                current_plan: infoPlan || "STARTER",
                                new_plan: values.product_selected ? .id,
                                context: urlState,
                                current_plan_id: subscription ? .subscription_status ? .plan_details ? .gateway_id,
                                new_plan_id: values.product_selected ? .gateway_id,
                                new_plan_name: values.product_selected ? .name,
                                new_plan_price: values.product_selected ? .price,
                                current_plan_price: subscription ? .subscription_status ? .plan_details ? .amount,
                                querie: props ? .identification,
                                dateUpgrade: getDateToday(),
                            });
                        },
                        setSubmitting,
                    },
                });
            }
        },
        validationSchema: yup.object().shape({
            cardholder_name: yup.string().when("card_selected", {
                is: null,
                then: yup
                    .string()
                    .required("O nome do titular do cartão é obrigatório."),
            }),
            card_number: yup.string().when("card_selected", {
                is: null,
                then: yup
                    .string()
                    .required("O número do cartão é obrigatório.")
                    .test("isValidCardNumber", "Número do cartão inválido.", function(
                        value
                    ) {
                        return value && value.length === 19;
                    }),
            }),
            card_expiration: yup.string().when("card_selected", {
                is: null,
                then: yup
                    .string()
                    .required("O mês/ano de expiração do cartão é obrigatório.")
                    .test("isValidExpiration", "O vencimento é inválido.", function(
                        value
                    ) {
                        return value && /^(0[1-9]|1[012]) [/] \d{2}/.test(value);
                    }),
            }),
            card_cvv: yup.string().when("card_selected", {
                is: null,
                then: yup
                    .string()
                    .required("O código de segurança (CVV) do cartão é obrigatório.")
                    .test("isValidCVV", "Número do CVV inválido.", function(value) {
                        return value && /^[0-9]{3,4}$/.test(value);
                    }),
            }),
        }),
    });

    useEffect(() => {
        if (formik.values.product_selected !== null) {
            setScreen("checkout");
        }
    }, [formik.values.product_selected]);

    const closeModal = () => {
        dispatch({
            type: "LOAD_SUBSCRIPTION_STATUS",
            payload: {
                callback: provider => {
                    dispatch(auth ? .actions ? .updateUserProvider(provider));
                },
            },
        });
        dispatch({
            type: "CLOSE_MODAL_SUBSCRIPTION"
        });

        props.setModalCheckout(false);
        props.setLoadingCheckout(true);
    };

    return ( <
        > {
            modalV5 ? ( <
                ModalSubscriptionPolling isOpen close = {
                    closeModal
                }
                back = {
                    closeModal
                }
                productSelected = {
                    {
                        id: formik.values.product_selected ? .id,
                        name: formik.values.product_selected ? .name,
                        description: "",
                        periodicity: formik.values.product_selected ? .periodicity,
                        price: formik.values.product_selected ? .price,
                        gateway_id: formik.values.product_selected ? .gateway_id,
                    }
                }
                />
            ) : ( <
                ResponsiveModal show = {
                    props.visible
                }
                onHide = {
                    closeModal
                }
                centered backdrop = "static"
                keyboard = {
                    false
                } >
                <
                S.ButtonClose onClick = {
                    closeModal
                } > X < /S.ButtonClose> <
                Modal.Body > {
                    screen === "choose_plan" && ( <
                        ChoosePlan screen = {
                            screen
                        }
                        setScreen = {
                            setScreen
                        }
                        visible = {
                            true
                        }
                        setModalCheckout = {
                            setScreen
                        }
                        url = {
                            urlState
                        }
                        formik = {
                            formik
                        }
                        title = {
                            modalInfo.title
                        }
                        subtitle = {
                            modalInfo.subtitle
                        }
                        modalV5 = {
                            modalV5
                        }
                        setModalV5 = {
                            setModalV5
                        }
                        isPagarmeV5 = {
                            provider === "pagarme_v5"
                        }
                        />
                    )
                } {
                    screen === "checkout" && ( <
                        Checkout screen = {
                            screen
                        }
                        setScreen = {
                            setScreen
                        }
                        formik = {
                            formik
                        }
                        back = {
                            () => setScreen("choose_plan")
                        }
                        loading = {
                            props.loadingCheckout
                        }
                        setLoading = {
                            props.setLoadingCheckout
                        }
                        />
                    )
                } {
                    screen === "success" && ( <
                        Success screen = {
                            screen
                        }
                        setScreen = {
                            setScreen
                        }
                        loading = {
                            props.loadingCheckout
                        }
                        setLoading = {
                            props.setLoadingCheckout
                        }
                        closeModal = {
                            closeModal
                        }
                        />
                    )
                } <
                /Modal.Body> <
                /ResponsiveModal>
            )
        } <
        />
    );
}