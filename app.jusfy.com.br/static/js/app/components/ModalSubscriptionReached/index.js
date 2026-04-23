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
import * as auth from "../../modules/Auth/_redux/authRedux";

import {
    EventsSegment
} from "../../helpers/EventsSegmentsCalculators";
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
    max-width: 1200px !important;
  }

  @media screen and (max-width: 767px) {
    .modal-content {
      width: 90% !important;
      margin: 0 auto !important;
    }
  }
`;

export default function ModalSubscriptionReached(props) {
    const [screen, setScreen] = useState("choose_plan");
    const modalInfo = useSelector(state => state.app.modal_subscription);
    const subscription = useSelector(state => state.subscription);
    const {
        provider
    } = subscription ? .subscription_status.info || {};
    const [infoPlan, setInfoPlan] = useState(
        subscription.subscription_status.info ? .has_error ?
        subscription.subscription_status ? .subscription_info :
        subscription.subscription_status ? .info ? .plan
    );

    const [urlState, setUrlState] = useState("");
    const {
        LimitReachModal
    } = EventsSegment();
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
            if (!values.product_selected || !values.product_selected.id || !values.product_selected.gateway_id) {
                setSubmitting(false);
                toast.error("Plano não encontrado. Por favor, selecione um plano válido.");
                return;
            }

            const currentPlan = subscription ? .subscription_status ? .plan_details;
            const newPlan = values.product_selected;
            const userData = {
                id: subscription ? .subscription_status ? .info ? .client_id,
                email: subscription ? .subscription_status ? .info ? .email,
                name: subscription ? .subscription_status ? .info ? .name,
                client_id: subscription ? .subscription_status ? .info ? .client_id,
            };

            tracking.upgrade.trackUpgradeUpgraded(userData, subscription ? .subscription_status, newPlan, {
                type: 'card',
                card_number: values.card_number,
                card_brand: values.card_brand
            }, urlState);

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

                                // Tracking: Sucesso no upgrade
                                if (currentPlan && newPlan) {
                                    tracking.upgrade.trackUpgradePaymentSuccess(userData, subscription ? .subscription_status, newPlan, {
                                        status: 'success',
                                        card_number: values ? .card_number,
                                        card_brand: values ? .card_brand
                                    }, {
                                        type: 'card'
                                    }, urlState);
                                }

                                LimitReachModal("Plan Upgraded", {
                                    current_plan: infoPlan || "STARTER",
                                    new_plan: values.product_selected ? .id,
                                    context: urlState,
                                    current_plan_id: currentPlan ? .gateway_id,
                                    new_plan_id: values.product_selected ? .gateway_id,
                                    new_plan_name: values.product_selected ? .name,
                                    new_plan_price: values.product_selected ? .price,
                                    current_plan_price: currentPlan ? .amount,
                                });
                                dispatch({
                                    type: auth.actionTypes.UserRequested
                                });
                            },
                            setSubmitting,
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
                                        number: card.card_number.replace(/\s/g, ""),
                                        holder_name: card.card_holder_name,
                                        exp_month: parseInt(card.card_expiration_date.substr(0, 2), 10),
                                        exp_year: parseInt(card.card_expiration_date.substr(3, 2), 10),
                                        cvv: card.card_cvv,
                                    },
                                }),
                            }
                        )
                        .then(response => response.json())
                        .then(data => {
                            // Tracking: Sucesso na tokenização do cartão (pagarme-v5)
                            if (currentPlan && newPlan && data.success) {
                                tracking.upgrade.trackCardTokenizationSuccess(userData, subscription ? .subscription_status, newPlan, data, {
                                    card_number: card.card_number,
                                    card_holder_name: card.card_holder_name,
                                    card_expiration_date: card.card_expiration_date,
                                }, urlState);
                            }
                            handleSubscription(data ? .id);
                        })
                        .catch(error => {
                            setSubmitting(false);
                            // Tracking: Erro na tokenização do cartão (pagarme-v5)
                            if (currentPlan && newPlan) {
                                tracking.upgrade.trackCardTokenizationError(userData, subscription ? .subscription_status, newPlan, {
                                    message: "Erro ao processar o cartão",
                                    code: "TOKENIZATION_ERROR",
                                    type: "tokenization_error"
                                }, {
                                    card_number: card.card_number,
                                    card_holder_name: card.card_holder_name,
                                    card_expiration_date: card.card_expiration_date,
                                    card_cvv: card.card_cvv,
                                }, urlState);
                            }
                            toast.error("Erro ao processar o cartão.");
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
                                tracking.upgrade.trackCardTokenizationSuccess(userData, subscription ? .subscription_status, newPlan, {
                                    id: card_hash
                                }, {
                                    card_number: card.card_number,
                                    card_holder_name: card.card_holder_name,
                                    card_expiration_date: card.card_expiration_date,
                                    card_cvv: card.card_cvv,
                                }, urlState);
                            }
                            handleSubscription(card_hash);
                        })
                        .catch(error => {
                            setSubmitting(false);
                            // Tracking: Erro na tokenização do cartão (pagarme-v4)
                            if (currentPlan && newPlan) {
                                tracking.upgrade.trackCardTokenizationError(userData, subscription ? .subscription_status, newPlan, {
                                    message: "Erro ao processar o cartão",
                                    code: "TOKENIZATION_ERROR",
                                    type: "tokenization_error"
                                }, {
                                    card_number: card.card_number,
                                    card_holder_name: card.card_holder_name,
                                    card_expiration_date: card.card_expiration_date,
                                    card_cvv: card.card_cvv,
                                }, urlState);
                            }
                            toast.error("Erro ao processar o cartão.");
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
                            // const currentPlan =
                            //   subscription?.subscription_status?.plan_details;
                            // LimitReachModal("Plan Upgraded", {
                            //   current_plan: infoPlan || "STARTER",
                            //   new_plan: values.product_selected?.id,
                            //   context: urlState,
                            //   current_plan_id: currentPlan?.gateway_id,
                            //   new_plan_id: values.product_selected?.gateway_id,
                            //   new_plan_name: values.product_selected?.name,
                            //   new_plan_price: values.product_selected?.price,
                            //   current_plan_price: currentPlan?.amount,
                            // });
                            const status = response ? .data ? .status;
                            if (response.status === "active") {
                                toast.success("Assinatura realizada com sucesso!");

                                // Tracking: Sucesso no upgrade
                                const currentPlan = values ? .current_plan;
                                const newPlan = values ? .product_selected;
                                const userData = {
                                    id: values ? .client_id,
                                    email: values ? .email,
                                    name: values ? .name,
                                    client_id: values ? .client_id,
                                };

                                tracking.upgrade.trackUpgradePaymentSuccess(userData, currentPlan, newPlan, {
                                    status: 'success',
                                    id: response.data ? .data ? .id
                                }, {
                                    type: 'card',
                                    card_number: values.card_selected,
                                    card_brand: values.card_brand
                                }, urlState);
                            } else if (status === "failed" || !response.success) {
                                toast.error("Falha ao realizar pagamento!");

                                // Tracking: Falha no upgrade
                                const currentPlan = values ? .current_plan;
                                const newPlan = values ? .product_selected;
                                const userData = {
                                    id: values ? .client_id,
                                    email: values ? .email,
                                    name: values ? .name,
                                    client_id: values ? .client_id,
                                };
                                if (currentPlan && newPlan) {
                                    tracking.upgrade.trackUpgradePaymentFailed(userData, currentPlan, newPlan, response, {
                                        type: 'card',
                                        card_number: values.card_number,
                                        card_brand: values.card_brand
                                    }, urlState);
                                }
                            }
                            dispatch({
                                type: auth.actionTypes.UserRequested,
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

    useEffect(() => {
        if (modalInfo.visible) {
            dispatch({
                type: "LOAD_CARDS"
            });
        }
    }, []);

    useEffect(() => {
        const path = window.location.pathname;
        const pathParts = path.split("/");
        const url = pathParts[1];

        if (modalInfo.visible) {
            dispatch({
                type: "LOAD_CARDS"
            });
            setUrlState(url);
            LimitReachModal("Limit Reach Modal Triggered", {
                context: url,
            });
        }
    }, [modalInfo.visible]);

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
            type: "CLOSE_MODAL_SUBSCRIPTION"
        });
    };

    return ( <
        ResponsiveModal show = {
            modalInfo.visible
        }
        onHide = {
            closeModal
        }
        centered backdrop = "static"
        keyboard = {
            false
        } >
        {!modalInfo ? .hide_button ? ( <
                ButtonClose onClick = {
                    closeModal
                } > X < /ButtonClose>
            ) : null
        }

        <
        Modal.Body > {
            screen == "choose_plan" && ( <
                ChoosePlan screen = {
                    screen
                }
                setScreen = {
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
                isOffer = {
                    modalInfo ? .hide_button
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