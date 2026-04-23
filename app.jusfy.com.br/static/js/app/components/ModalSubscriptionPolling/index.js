import axios from "axios";
import React, {
    useState
} from "react";
import {
    Modal
} from "react-bootstrap";
import styled from "styled-components";
import Checkout from "./components/Checkout";
import Success from "./components/Success";
import PollingStatus from "./components/PollingStatus";
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
import Failed from "./components/Failed";
import {
    tracking
} from "../../services/tracking";
import * as Sentry from "@sentry/react";
import {
    createClientCardPagarmeV5
} from '../../helpers/payment/createClientCard';

const ButtonClose = styled.div `
  background: #41c78f;
  display: inline-block;
  padding: 10px 17px;
  position: absolute;
  top: 15px;
  right: 15px;
  color: #fff;
  font-weight: bold;
  border-radius: 50px;

  :hover {
    cursor: pointer;
    background: #3ab380;
  }
`;

const ResponsiveModal = styled(Modal)
`
  z-index: 1300;
  .modal-body {
    width: 100%;
    height: 100%;
  }

  .modal-content {
    max-height: 100%;
    border-radius: 10px !important;
    max-height: 99vh;
    overflow: hidden;
  }

  .modal-dialog {
    max-width: 800px !important;
    margin-top: 15px !important;
  }

  @media screen and (max-width: 767px) {
    .modal-content {
      width: 90% !important;
      margin: 0 auto !important;
    }
  }
`;

const ModalSubscriptionPolling = ({
        isOpen,
        close,
        productSelected,
        back,
        isQuery,
        disableClose,
        migrationData,
    }) => {
        const [screen, setScreen] = useState("checkout");
        const [pollingStatus, setPollingStatus] = useState(null);
        const [failedReason, setFailedReason] = useState({
            message: "",
            details: "",
        });
        const [subStatus, setSubStatus] = useState(null);
        const authToken = useSelector(state => state.auth.authToken);
        const user = useSelector(state => state.auth.user);
        const {
            provider
        } = useSelector(state => state.auth) || {};
        const subscription = useSelector(state => state.subscription);
        const dispatch = useDispatch();

        const migrationFlow = migrationData ? .enableOrganicMigration && migrationData ? .currentProvider === "pagarme" && provider !== "pagarme_v5";
        const path = window.location.pathname;
        const pathParts = path.split("/");
        const url = pathParts[1];

        const formik = useFormik({
            initialValues: {
                product_selected: productSelected || null,
                cardholder_name: "",
                card_number: "",
                card_payment_method: null,
                card_cvv: "",
                card_expiration: "",
                user_cpf: "",
                totalPrice: productSelected.totalPrice || 0,
            },
            onSubmit: (values, {
                setSubmitting
            }) => {
                // Tracking: Início do upgrade
                const currentPlan = subscription ? .subscription_status;
                const newPlan = values.product_selected;

                if (currentPlan && newPlan) {
                    tracking.upgrade.trackUpgradeUpgraded(user, currentPlan, newPlan, {
                        type: 'card',
                        card_number: values ? .card_number
                    }, url);
                }

                const pollingSubscription = async subscription_id => {
                    const MAX_POLLING_TIME = 300 * 1000; // 5 minutos
                    const startTime = Date.now();

                    setPollingStatus("processing");

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
                                `${process.env.REACT_APP_API_URL}/subscription/polling/${subscription_id}`, {
                                    headers: {
                                        Authorization: `Bearer ${authToken}`,
                                    },
                                }
                            );
                            const {
                                data: subscription
                            } = response;

                            if (subscription ? .reason ? .message) {
                                setFailedReason(subscription.reason)
                            }

                            if (subscription ? .status === 'failed') {
                                setSubStatus("failed");
                                setScreen('failed');

                                // Tracking: Falha no upgrade (com reason)
                                if (currentPlan && newPlan) {
                                    tracking.upgrade.trackUpgradePaymentFailed(user, currentPlan, newPlan, response, {
                                        type: 'card',
                                        card_number: values ? .card_number
                                    }, url);
                                    Sentry.withScope(scope => {
                                        scope.setTag("area", "upgrade_subscription");
                                        scope.setTag("flow", "subscription_polling");
                                        scope.setTag("provider", "pagarme_v5");
                                        scope.setTag("reason", subscription ? .reason ? .message || "unknown");
                                        scope.setExtra("endpoint", "/subscription/create");
                                        const sanitized = new Error("Create subscription failed");
                                        sanitized.name = "Error";
                                        Sentry.captureException(sanitized);
                                    });
                                }

                                return true;
                            }

                            if (subscription.status === "trialing") {
                                setSubStatus("trialSuccess");
                                // Tracking: Sucesso no upgrade (trial)
                                if (currentPlan && newPlan) {
                                    tracking.upgrade.trackUpgradePaymentSuccess(
                                        user,
                                        currentPlan,
                                        newPlan,
                                        subscription, {
                                            status: 'trialing',
                                            id: subscription_id
                                        }, {
                                            type: 'card',
                                            card_number: values ? .card_number
                                        },
                                        url
                                    );
                                }

                                setTimeout(() => {
                                    setScreen("success");
                                }, 1000);
                                return true;
                            }

                            if (
                                subscription.status === "active" ||
                                subscription.status === "paid"
                            ) {
                                // Tracking: Sucesso no upgrade (active/paid)
                                if (currentPlan && newPlan) {
                                    tracking.upgrade.trackUpgradePaymentSuccess(
                                        user,
                                        currentPlan,
                                        newPlan,
                                        subscription, {
                                            status: subscription.status,
                                            id: subscription_id
                                        }, {
                                            type: 'card',
                                            card_number: values ? .card_number
                                        },
                                        url
                                    );
                                }

                                setTimeout(() => {
                                    setScreen("success");
                                }, 1000);
                                return true;
                            }

                            const elapsedTimeInSeconds = Math.floor(
                                (Date.now() - startTime) / 1000
                            );
                            const pollingInterval = getPollingInterval(elapsedTimeInSeconds);
                            const nextCheckInSeconds = pollingInterval / 1000;

                            setPollingStatus(subscription.status || "pending");

                            let message = `Assinatura com status ${subscription.status}.
                Será verificado novamente em ${nextCheckInSeconds} segundos. Tempo total: ${elapsedTimeInSeconds} segundos`;

                            await new Promise(resolve => setTimeout(resolve, pollingInterval));
                        } catch (error) {
                            tracking.upgrade.trackUpgradePaymentFailed(user, currentPlan, newPlan, error, {
                                type: 'card',
                                card_number: values ? .card_number
                            }, url);
                            Sentry.withScope(scope => {
                                scope.setTag("area", "upgrade_subscription");
                                scope.setTag("flow", "subscription_polling");
                                scope.setTag("provider", "pagarme_v5");
                                scope.setExtra("endpoint", "/subscription/polling/id");
                                scope.setExtra("status", error ? .response ? .status || "unknown");
                                scope.setExtra("code", error ? .code);
                                const sanitized = new Error(
                                    (error && error.message) || "Subscription polling failed"
                                );
                                sanitized.name = (error && error.name) || "AxiosError";
                                Sentry.captureException(sanitized);
                            });
                            setPollingStatus("failed");
                            return false;
                        }
                    }

                    console.log("Numero maximo de tentativas de polling atingido");
                    setPollingStatus("timeout");
                    return false;
                };

                const handleSubscription = async card_hash => {
                    if (provider === "pagarme_v5" || migrationFlow) {
                        dispatch({
                            type: "CREATE_SUBSCRIPTION",
                            payload: {
                                values: {
                                    ...values,
                                    card_hash,
                                    previous_subscription_id: migrationData ? .currentSubscriptionId,
                                    migrationFlow,
                                    ignoreAdminCheckout: true,
                                },
                                callback: response => {
                                    if (response.status !== "failed") {
                                        if (response.status === "active") tracking.upgrade.trackUpgradePaymentSuccess(user, currentPlan, newPlan, {
                                            status: 'trialing',
                                            id: response.data.id
                                        }, {
                                            type: 'card',
                                            card_number: values ? .card_number
                                        }, url);
                                        if (!response ? .data ? .id) {
                                            tracking.upgrade.trackUpgradePaymentFailed(user, currentPlan, newPlan, response, {
                                                type: 'card',
                                                card_number: values ? .card_number
                                            }, url);
                                            Sentry.withScope(scope => {
                                                scope.setTag("area", "upgrade_subscription");
                                                scope.setTag("flow", "create_subscription_new_card");
                                                scope.setTag("provider", "pagarme_v5");
                                                scope.setTag("reason", "missing_subscription_id");
                                                scope.setExtra("endpoint", "/subscription/create");
                                                const sanitized = new Error("Create subscription returned without ID");
                                                sanitized.name = "Error";
                                                Sentry.captureException(sanitized);
                                            });
                                            setPollingStatus("failed");
                                            toast.error(
                                                "Não foi possível iniciar o monitoramento da assinatura."
                                            );
                                            return;
                                        }
                                        setScreen("polling");
                                        pollingSubscription(response.data.id);
                                    } else if (!response.success) {
                                        setPollingStatus("failed");
                                        toast.error(
                                            "Não foi possível iniciar o monitoramento da assinatura."
                                        );
                                        tracking.upgrade.trackUpgradePaymentFailed(user, currentPlan, newPlan, response, {
                                            type: 'card',
                                            card_number: values ? .card_number
                                        }, url);
                                        Sentry.withScope(scope => {
                                            scope.setTag("area", "upgrade_subscription");
                                            scope.setTag("flow", "create_subscription_new_card");
                                            scope.setTag("provider", "pagarme_v5");
                                            scope.setExtra("endpoint", "/subscription/create");
                                            const sanitized = new Error("Create subscription failed");
                                            sanitized.name = "Error";
                                            Sentry.captureException(sanitized);
                                        });
                                    }
                                },
                                setSubmitting,
                            },
                        });
                    }
                };

                if (values.card_selected === null) {
                    var card = {};
                    card.card_holder_name = values.cardholder_name;
                    card.card_expiration_date =
                        values.card_expiration.substr(0, 2) +
                        "/" +
                        values.card_expiration.substr(values.card_expiration.length - 2);
                    card.card_number = values.card_number;
                    card.card_cvv = values.card_cvv;
                    const cardValidations = pagarme.validate({
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

                    if (provider === "pagarme_v5" || migrationFlow) {
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
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error(`Erro ao criar o cartão: ${response.status}`);
                                }
                                return response.json();
                            })
                            .then(async data => {
                                // Tracking: Sucesso na tokenização do cartão (pagarme-v5)
                                if (currentPlan && newPlan) {
                                    tracking.upgrade.trackCardTokenizationSuccess(user, currentPlan, newPlan, data, {
                                        card_number: card.card_number,
                                        card_holder_name: card.card_holder_name,
                                        card_expiration_date: card.card_expiration_date,
                                        card_cvv: card.card_cvv,
                                    }, url);
                                }

                                let card_hash = data.id
                                if (migrationFlow) {
                                    const createdCard = await createClientCardPagarmeV5({
                                        user,
                                        card: { ...card,
                                            token: card_hash
                                        }
                                    })
                                    card_hash = createdCard ? .token ? ? data.id
                                }

                                handleSubscription(card_hash);
                            })
                            .catch(error => {
                                setSubmitting(false);

                                // Tracking: Erro na tokenização do cartão (pagarme-v5)
                                if (currentPlan && newPlan) {
                                    tracking.upgrade.trackCardTokenizationError(user, currentPlan, newPlan, {
                                        message: "Erro ao processar o cartão",
                                        code: "TOKENIZATION_ERROR",
                                        type: "tokenization_error"
                                    }, {
                                        card_number: card.card_number,
                                        card_holder_name: card.card_holder_name,
                                        card_expiration_date: card.card_expiration_date,
                                        card_cvv: card.card_cvv,
                                    }, url);
                                    Sentry.withScope(scope => {
                                        scope.setTag("area", "upgrade_subscription");
                                        scope.setTag("flow", "create_token");
                                        scope.setTag("provider", "pagarme_v5");
                                        scope.setExtra("endpoint", "//api.pagar.me/core/v5/tokens");
                                        scope.setExtra("status", error ? .response ? .status || "unknown");
                                        scope.setExtra("code", error ? .code);
                                        const sanitized = new Error(
                                            (error && error.message) || "Card tokenization failed"
                                        );
                                        sanitized.name = (error && error.name) || "AxiosError";
                                        Sentry.captureException(sanitized);
                                    });
                                }

                                toast.error("Erro ao processar o cartão. Tente novamente");
                                console.error("Erro ao processar o cartão:", error);
                            });
                    }
                } else {
                    try {
                        dispatch({
                            type: "CREATE_SUBSCRIPTION",
                            payload: {
                                values: {
                                    ...values,
                                    card_hash: values ? .card_selected ? .hash,
                                    previous_subscription_id: migrationData ? .currentSubscriptionId,
                                    migrationFlow,
                                    ignoreAdminCheckout: true,
                                },
                                callback: response => {
                                    if (response.status !== "failed") {
                                        if (!response ? .data ? .id) {
                                            tracking.upgrade.trackUpgradePaymentFailed(user, currentPlan, newPlan, response, {
                                                type: 'card'
                                            }, url);
                                            Sentry.withScope(scope => {
                                                scope.setTag("area", "upgrade_subscription");
                                                scope.setTag("flow", "create_subscription_existing_card");
                                                scope.setTag("provider", provider || "pagarme_v5");
                                                scope.setTag("reason", "missing_subscription_id");
                                                scope.setExtra("endpoint", "/subscription/create");
                                                const sanitized = new Error("Create subscription returned without ID");
                                                sanitized.name = "Error";
                                                Sentry.captureException(sanitized);
                                            });
                                            setPollingStatus("failed");
                                            toast.error(
                                                "Não foi possível iniciar o monitoramento da assinatura."
                                            );
                                            return;
                                        }
                                        setScreen("polling");
                                        pollingSubscription(response.data.id);
                                    } else {
                                        setPollingStatus("failed");
                                        toast.error(
                                            "Não foi possível iniciar o monitoramento da assinatura."
                                        );
                                    }
                                },
                                setSubmitting,
                            },
                        });
                    } catch (error) {
                        setSubmitting(false);
                        setPollingStatus("failed");

                        // Tracking: Falha no upgrade (erro de dispatch)
                        if (currentPlan && newPlan) {
                            tracking.upgrade.trackUpgradePaymentFailed(user, currentPlan, newPlan, error, {
                                type: 'card'
                            }, url);
                            Sentry.withScope(scope => {
                                scope.setTag("area", "upgrade_subscription");
                                scope.setTag("flow", "create_subscription_existing_card");
                                scope.setTag("provider", "pagarme_v5");
                                scope.setExtra("endpoint", "/subscription/create");
                                scope.setExtra("status", error ? .response ? .status || "unknown");
                                scope.setExtra("code", error ? .code);
                                const sanitized = new Error(
                                    (error && error.message) || "Create subscription failed"
                                );
                                sanitized.name = (error && error.name) || "AxiosError";
                                Sentry.captureException(sanitized);
                            });
                        }

                        toast.error("Erro inesperado ao criar assinatura. Tente novamente.");
                        console.error("Erro no dispatch CREATE_SUBSCRIPTION:", error);
                    }
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
                    then: yup.string().required("O número do cartão é obrigatório."),
                }),
                card_expiration: yup.string().when("card_selected", {
                    is: null,
                    then: yup
                        .string()
                        .required("O mês/ano de expiração do cartão é obrigatório.")
                        .test("isValidExpiration", "O vencimento é inválido.", function(
                            value
                        ) {
                            if (!value) return false;

                            const cleanedExpirationDate = value.replace(/\s/g, "");
                            if (!cleanedExpirationDate ||
                                !/^(0[1-9]|1[012])[/]\d{2}$/.test(cleanedExpirationDate)
                            ) {
                                return false;
                            }

                            const currentDate = new Date();
                            const currentMonth = String(currentDate.getMonth() + 1).padStart(
                                2,
                                "0"
                            );
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

        return ( <
            ResponsiveModal show = {
                isOpen
            }
            onHide = {
                () => {
                    if (screen !== "polling" || pollingStatus === "failed") {
                        close();
                    }
                }
            }
            centered backdrop = {
                false
            }
            keyboard = {
                false
            } >
            {!disableClose && (screen !== "polling" || pollingStatus === "failed") && ( <
                    ButtonClose onClick = {
                        close
                    }
                    style = {
                        {
                            zIndex: 99
                        }
                    } >
                    X <
                    /ButtonClose>
                )
            }

            <
            Modal.Body > {
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
                        back
                    }
                    isQuery = {
                        isQuery
                    }
                    migrationData = {
                        migrationData
                    }
                    />
                )
            } {
                screen === "polling" && < PollingStatus status = {
                    pollingStatus
                }
                />} {
                    screen === "success" && ( <
                        Success screen = {
                            screen
                        }
                        setScreen = {
                            setScreen
                        }
                        close = {
                            close
                        }
                        status = {
                            subStatus
                        }
                        />
                    )
                } {
                    screen === "failed" && ( <
                        Failed onClose = {
                            close
                        }
                        title = {
                            failedReason.message
                        }
                        subTitle = {
                            failedReason.details
                        }
                        />
                    )
                } <
                /Modal.Body> <
                /ResponsiveModal>
            );
        };

        export default ModalSubscriptionPolling;