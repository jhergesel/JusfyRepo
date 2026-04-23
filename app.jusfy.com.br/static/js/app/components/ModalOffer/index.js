import React, {
    useState,
    useEffect
} from "react";
import {
    Modal
} from "react-bootstrap";
import styled from "styled-components";
import ChoosePlan from "./components/ChoosePlan";
import Checkout from "./components/Checkout";
import Success from "./components/Success";
import * as auth from "../../modules/Auth/_redux/authRedux";
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
import {
    tracking
} from "../../services/tracking";

const ButtonClose = styled.div `
  background: #41c78f;
  display: inline-block;
  padding: 10px 17px;
  position: absolute;
  top: -15px;
  right: -15px;
  color: #fff;
  font-weight: bold;
  border-radius: 50px;
  z-index: 9999;
  :hover {
    cursor: pointer;
    background: #3ab380;
  }
`;

const ResponsiveModal = styled(Modal)
`
  .modal-body {
    padding: 40px !important;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .modal-content {
    border-radius: 10px !important;
    max-height: 90vh;
  }

  .modal-dialog {
    max-width: 700px !important;
  }

  @media screen and (max-width: 767px) {
    .modal-content {
      width: 90% !important;
      margin: 0 auto !important;
    }
  }
`;

export default function ModalOffer(props) {
    const [screen, setScreen] = useState("choose_plan");
    const {
        provider
    } = useSelector(state => state.auth) || {};
    const user = useSelector((state) => state.auth.user);
    const modalInfo = useSelector(state => state.app.is_modal_offer_open);
    const modalOfferContent = useSelector(state => state.app.modal_offer_payload)
    const subscription = useSelector(state => state.subscription);

    const path = window.location.pathname;
    const pathParts = path.split("/");
    const url = pathParts[1];

    const dispatch = useDispatch();
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
            // Tracking: Início do upgrade
            const currentPlan = subscription ? .subscription_status;
            const newPlan = values.product_selected;

            if (currentPlan && newPlan) {
                tracking.upgrade.trackUpgradeStarted(user, currentPlan, newPlan, {
                    type: 'card'
                }, url);
            }

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

                const handleCreateSubscription = card_hash => {
                    dispatch({
                        type: "CREATE_SUBSCRIPTION",
                        payload: {
                            values: {
                                ...values,
                                card_hash,
                            },
                            callback: response => {
                                setScreen("success");

                                // Tracking: Sucesso no upgrade
                                if (response.success && response.data.status !== 'failed') {
                                    if (currentPlan && newPlan) {
                                        tracking.upgrade.trackUpgradePaymentSuccess(user, currentPlan, newPlan, {
                                                status: 'success',
                                                type: 'card',
                                                amount: newPlan.fullPrice
                                            }, {
                                                card_number: card.card_number,
                                                card_holder_name: card.card_holder_name,
                                                card_expiration_date: card.card_expiration_date,
                                                card_cvv: card.card_cvv,
                                            },
                                            url);
                                    }
                                } else {
                                    // Tracking: Erro no upgrade
                                    if (currentPlan && newPlan) {
                                        tracking.upgrade.trackUpgradePaymentFailed(user, currentPlan, newPlan, {
                                                card_number: card.card_number,
                                                card_holder_name: card.card_holder_name,
                                                card_expiration_date: card.card_expiration_date,
                                                card_cvv: card.card_cvv,
                                            },
                                            url);
                                    }
                                }
                            },
                            setSubmitting,
                        },
                    });
                };

                if (provider === "pagarme_v5") {
                    const options = {
                        method: 'POST',
                        headers: {
                            accept: 'application/json',
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            type: 'card',
                            card: {
                                number: card.card_number.replace(/\s/g, ""),
                                holder_name: card.card_holder_name,
                                exp_month: parseInt(card.card_expiration_date.substr(0, 2), 10),
                                exp_year: parseInt(card.card_expiration_date.substr(3, 2), 10),
                                cvv: card.card_cvv,
                            }
                        })
                    };

                    fetch(`https://api.pagar.me/core/v5/tokens?appId=${process.env.REACT_APP_PAGARME_V5_ENCRYPTION_KEY}`, options)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error("Erro ao gerar token do cartão.");
                            }
                            return response.json();
                        })
                        .then(data => {
                            // Tracking: Sucesso na tokenização do cartão (pagarme-v5)
                            if (currentPlan && newPlan) {
                                tracking.upgrade.trackCardTokenizationSuccess(user, currentPlan, newPlan, data, {
                                    card_number: card.card_number,
                                    card_holder_name: card.card_holder_name,
                                    card_expiration_date: card.card_expiration_date,
                                    card_cvv: card.card_cvv,
                                }, url);
                            }

                            handleCreateSubscription(data ? .id);
                        })
                        .catch(error => {
                            setSubmitting(false);

                            // Tracking: Erro na tokenização do cartão (pagarme-v5)
                            if (currentPlan && newPlan) {
                                tracking.upgrade.trackCardTokenizationError(user, currentPlan, newPlan, {
                                    message: "Erro ao gerar token do cartão",
                                    code: "TOKENIZATION_ERROR",
                                    type: "tokenization_error"
                                }, {
                                    card_number: card.card_number,
                                    card_holder_name: card.card_holder_name,
                                    card_expiration_date: card.card_expiration_date,
                                    card_cvv: card.card_cvv,
                                }, url);
                            }

                            toast.error("Erro ao gerar token do cartão.");
                        });
                } else {
                    pagarme.client
                        .connect({
                            encryption_key: process.env.REACT_APP_PAGARME_ENCRYPTION_KEY,
                        })
                        .then(client => client.security.encrypt(card))
                        .then(card_hash => {
                            // Tracking: Sucesso na tokenização do cartão (pagarme-v4)
                            if (currentPlan && newPlan) {
                                tracking.upgrade.trackCardTokenizationSuccess(user, currentPlan, newPlan, {
                                    id: card_hash
                                }, {
                                    card_number: card.card_number,
                                    card_holder_name: card.card_holder_name,
                                    card_expiration_date: card.card_expiration_date,
                                    card_cvv: card.card_cvv,
                                }, url);
                            }

                            handleCreateSubscription(card_hash);
                        })
                        .catch(error => {
                            setSubmitting(false);

                            // Tracking: Erro na tokenização do cartão (pagarme-v4)
                            if (currentPlan && newPlan) {
                                tracking.upgrade.trackCardTokenizationError(user, currentPlan, newPlan, {
                                    message: "Erro ao gerar hash do cartão",
                                    code: "TOKENIZATION_ERROR",
                                    type: "tokenization_error"
                                }, {
                                    card_number: card.card_number,
                                    card_holder_name: card.card_holder_name,
                                    card_expiration_date: card.card_expiration_date,
                                    card_cvv: card.card_cvv,
                                }, url);
                            }

                            toast.error("Erro ao gerar hash do cartão.");
                        });
                }
            } else {
                dispatch({
                    type: "CREATE_SUBSCRIPTION",
                    payload: {
                        values: {
                            ...values,
                        },
                        callback: (response) => {
                            setScreen("success");
                            if (response.success && response.data.status !== 'failed') {
                                // Tracking: Sucesso no upgrade
                                if (currentPlan && newPlan) {
                                    tracking.upgrade.trackUpgradePaymentSuccess(user, currentPlan, newPlan, {
                                            status: 'success',
                                            type: 'card',
                                            amount: newPlan.fullPrice
                                        }, {
                                            card_number: values.card_selected.card_number,
                                            card_holder_name: values.card_selected.cardholder_name,
                                            card_expiration_date: values.card_selected.card_expiration,
                                        },
                                        url);
                                }
                            } else {
                                // Tracking: Erro no upgrade
                                if (currentPlan && newPlan) {
                                    tracking.upgrade.trackUpgradePaymentFailed(user, currentPlan, newPlan, {
                                            card_number: values.card_selected.card_number,
                                            card_holder_name: values.card_selected.cardholder_name,
                                            card_expiration_date: values.card_selected.card_expiration,
                                        },
                                        url);
                                }
                            }
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

    useEffect(() => {
        if (modalInfo) {
            dispatch({
                type: "LOAD_CARDS"
            });
        }
    }, []);

    useEffect(() => {
        if (modalInfo) {
            dispatch({
                type: "LOAD_CARDS"
            });
        }
    }, [modalInfo]);

    const closeModal = () => {
        setScreen("choose_plan");
        dispatch({
            type: "LOAD_SUBSCRIPTION_STATUS",
            payload: {
                callback: (provider) => {
                    dispatch(auth.actions.updateUserProvider(provider));
                }
            }
        });
        dispatch({
            type: "CLOSE_MODAL_OFFER"
        });
    };

    return ( <
        ResponsiveModal show = {
            modalInfo
        }
        onHide = {
            closeModal
        }
        centered backdrop = "static"
        keyboard = {
            false
        } >
        <
        ButtonClose onClick = {
            closeModal
        } > X < /ButtonClose>

        <
        Modal.Body > {
            screen == "choose_plan" && ( <
                ChoosePlan screen = {
                    screen
                }
                offer = {
                    modalOfferContent ? .offer ? ? 'mes_advogado'
                }
                setScreen = {
                    setScreen
                }
                formik = {
                    formik
                }
                />
            )
        } {
            screen == "checkout" && ( <
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
                />
            )
        } {
            screen == "success" && ( <
                Success screen = {
                    screen
                }
                setScreen = {
                    setScreen
                }
                />
            )
        } <
        /Modal.Body> <
        /ResponsiveModal>
    );
}