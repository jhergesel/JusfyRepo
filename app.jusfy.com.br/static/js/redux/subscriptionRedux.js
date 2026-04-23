import axios from "axios";
import {
    toast
} from "react-toastify";
import {
    put,
    takeLatest
} from "redux-saga/effects";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import traceId from "./traceId";
import {
    tracking
} from "../app/services/tracking";

const INITIAL_STATE = {
    subscription_status: {
        has_jusprocessos: false,
        info: {
            has_error: false,
            current_period_end: new Date(),
            status: 'ok'
        },
        jus_processos_qtd: 0,
        subscription_info: "ok",
    },
    is_subscription_status_loading: true,
    is_cancelling: false,
    subscription_error: null,
    is_reactivating: false,
    reactivation_error: null,
    reactivation_data: null,
    show_reactivation_success_modal: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOAD_SUBSCRIPTION_STATUS_LOADING":
            return {
                ...state,
                is_subscription_status_loading: true,
            };
        case "LOAD_SUBSCRIPTION_STATUS_SUCCESS":
            return {
                ...state,
                subscription_status: action.payload,
                is_subscription_status_loading: false,
            };
        case "LOAD_SUBSCRIPTION_STATUS_FAILED":
            return {
                ...state,
                subscription_status: {
                    ...state.subscription_status,
                    info: {
                        ...state.subscription_status.info,
                        has_error: true,
                    }
                },
                is_subscription_status_loading: false,
            };
        case "LOAD_SUBSCRIPTION_STATUS":
            return {
                ...state,
                is_subscription_status_loading: true,
            };
        case "FORCE_LOAD_SUBSCRIPTION_STATUS_LOADING":
            return {
                ...state,
                is_subscription_status_loading: true,
            };
        case "FORCE_LOAD_SUBSCRIPTION_STATUS_SUCCESS":
            return {
                ...state,
                is_subscription_status_loading: false,
            };
        case "FORCE_LOAD_SUBSCRIPTION_STATUS_FAILED":
            return {
                ...state,
                is_subscription_status_loading: false,
            };
        case "FORCE_LOAD_SUBSCRIPTION_STATUS":
            return {
                ...state,
                is_subscription_status_loading: true,
            };
        case "CANCEL_SUBSCRIPTION":
            return { ...state,
                is_cancelling: true
            };
        case "CANCEL_SUBSCRIPTION_SUCCESS":
            return { ...state,
                is_cancelling: false
            };
        case "CANCEL_SUBSCRIPTION_FAILED":
            return { ...state,
                is_cancelling: false
            };
        case "CREATE_SUBSCRIPTION_FAILED":
            return {
                ...state,
                subscription_error: action.payload,
            };
        case "CLEAR_SUBSCRIPTION_ERROR":
            return {
                ...state,
                subscription_error: null,
            };
        case "REACTIVATE_SUBSCRIPTION":
            return {
                ...state,
                is_reactivating: true,
                reactivation_error: null,
                reactivation_data: null,
            };
        case "REACTIVATE_SUBSCRIPTION_SUCCESS":
            return {
                ...state,
                is_reactivating: false,
                reactivation_data: action.payload,
                show_reactivation_success_modal: true,
            };
        case "REACTIVATE_SUBSCRIPTION_FAILED":
            return {
                ...state,
                is_reactivating: false,
                reactivation_error: action.payload,
                reactivation_data: null,
            };
        case "CLOSE_REACTIVATION_SUCCESS_MODAL":
            return {
                ...state,
                show_reactivation_success_modal: false,
                reactivation_data: null,
                reactivation_error: null,
            };
        default:
            return state;
    }
};

function* cancelSubscription({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/subscription/cancel`,
            payload, {
                headers: {
                    'x-trace-id': traceId,
                }
            }
        );
        if (!response.data.success) {
            yield put({
                type: "CANCEL_SUBSCRIPTION_FAILED"
            });
            payload.callback(response)
            return;
        }


        yield put({
            type: "CANCEL_SUBSCRIPTION_SUCCESS",
            payload: response.data.data,
        });
        payload.callback(response)
        yield put({
            type: "LOAD_SUBSCRIPTION_STATUS"
        });
        toast.success("Seu plano foi cancelado com sucesso.");
        return;
    } catch (error) {
        payload.callback(error);
        yield put({
            type: "CANCEL_SUBSCRIPTION_FAILED"
        });
        toast.error(
            "Ocorreu um erro ao cancelar o seu plano, por favor, tente novamente mais tarde."
        );
    }
    payload.callback();
}

function* forceLoadSubscriptionStatus({
    payload
}) {
    try {
        const {
            subscription_id
        } = payload.values;

        if (!subscription_id) {
            yield put({
                type: "FORCE_LOAD_SUBSCRIPTION_STATUS_FAILED"
            });
            toast.error("Não foi possível sincronizar os dados do seu plano.");
            return;
        }

        yield put({
            type: "FORCE_LOAD_SUBSCRIPTION_STATUS_LOADING"
        });

        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/subscription/sync/${subscription_id}`, {}, {
                headers: {
                    'x-trace-id': traceId,
                }
            }
        );

        if (response.status !== 200) {
            yield put({
                type: "FORCE_LOAD_SUBSCRIPTION_STATUS_FAILED"
            });
            return;
        }

        yield put({
            type: "FORCE_LOAD_SUBSCRIPTION_STATUS_SUCCESS"
        });

        yield put({
            type: "LOAD_SUBSCRIPTION_STATUS",
            payload
        });
    } catch (err) {
        yield put({
            type: "FORCE_LOAD_SUBSCRIPTION_STATUS_FAILED"
        });
        toast.error("Ocorreu uma falha ao sincronizar os dados do seu plano.");
    }
}

function* loadSubscriptionStatus({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/subscription`,
            payload, {
                headers: {
                    'x-trace-id': traceId,
                }
            }
        );

        if (!response.data.success || response.data.data ? .info ? .has_error) {
            yield put({
                type: "LOAD_SUBSCRIPTION_STATUS_FAILED"
            });
            return;
        }

        yield put({
            type: "LOAD_SUBSCRIPTION_STATUS_SUCCESS",
            payload: response.data.data,
        });

        if (payload ? .callback) {
            const provider = response.data.data.info.provider;
            payload.callback(provider);

            if (provider) {
                yield put(auth.actions.updateUserProvider(provider));
            }
        }
    } catch (err) {
        console.log('err: ', err);
        yield put({
            type: "LOAD_SUBSCRIPTION_STATUS_FAILED"
        });
        toast.error("Ocorreu um erro ao carregar os seus dados.");
    }
}

function* createSubscription({
    payload
}) {
    let response = {};
    try {
        const route =
            process.env.REACT_APP_API_URL +
            (payload ? .values ? .migrationFlow ?
                `/subscription/migrate-organic` :
                `/subscription/create`);

        const payloadValues = payload ? .values ? .migrationFlow ? {
            ...payload.values,
            previous_subscription_id: payload.values ? .previous_subscription_id,
            card_id: payload.values ? .card_hash,
        } : payload.values;

        if (payload ? .values ? .migrationFlow && !payloadValues.card_id) {
            toast.error("Necessário informar cartão");
            if (payload.setSubmitting) {
                payload.setSubmitting(false);
            }
            return;
        }

        response = yield axios.post(
            route,
            payloadValues, {
                headers: {
                    'x-trace-id': traceId,
                }
            }
        );

        if (payload ? .values ? .migrationFlow) {
            response = {
                data: {
                    success: true,
                    data: response.data,
                    status: 'pending_payment',
                }
            }
        }

        if (!response.data.success) {
            toast.error(response.data.msg);
            if (payload.setSubmitting) {
                payload.setSubmitting(false);
            }
            payload.callback(response.data);
            return;
        }

        // const status = response.data?.data?.status;
        // const path = window.location.pathname;
        // const pathParts = path.split("/");
        // const url = pathParts[1];
        // if (status === "active") {
        //   toast.success("Assinatura realizada com sucesso!");

        //   // Tracking: Sucesso no upgrade
        //   const currentPlan = payload.values?.current_plan;
        //   const newPlan = payload.values?.product_selected;
        //   const userData = {
        //     id: payload.values?.client_id,
        //     email: payload.values?.email,
        //     name: payload.values?.name,
        //     client_id: payload.values?.client_id,
        //   };

        //   if (currentPlan && newPlan) {
        //     tracking.upgrade.trackUpgradePaymentSuccess(userData, currentPlan, newPlan, {
        //       status: 'success',
        //       id: response.data?.data?.id
        //     }, {
        //       type: 'card'
        //     }, url);
        //   }
        // } else if (status === "failed") {
        //   toast.error("Falha ao realizar pagamento!");

        //   // Tracking: Falha no upgrade
        //   const currentPlan = payload.values?.current_plan;
        //   const newPlan = payload.values?.product_selected;
        //   const userData = {
        //     id: payload.values?.client_id,
        //     email: payload.values?.email,
        //     name: payload.values?.name,
        //     client_id: payload.values?.client_id,
        //   };

        //   if (currentPlan && newPlan) {
        //     tracking.upgrade.trackUpgradePaymentFailed(userData, currentPlan, newPlan, response, {
        //       type: 'card'
        //     }, url);
        //   }
        // }

        payload.callback(response.data);

        if (payload.setSubmitting) {
            payload.setSubmitting(false);
        }
    } catch (e) {
        yield put({
            type: "CREATE_SUBSCRIPTION_FAILED",
            payload: e.message
        });


        if (e.response ? .data ? .error === "INVALID_RECAPTCHA") {
            toast.error(e.response.data.message);
        } else {
            toast.error("Ocorreu um erro, por favor, tente novamente.");
        }
        if (payload ? .callback) {
            payload.callback(response);
        }

        if (payload.setSubmitting) {
            payload.setSubmitting(false);
        }
    }
}

function* reactivateSubscription({
    payload
}) {
    try {
        yield put({
            type: "REACTIVATE_SUBSCRIPTION_LOADING"
        });

        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/subscription/reactivate`,
            payload, {
                timeout: 30000,
                headers: {
                    'x-trace-id': traceId
                }
            }
        );

        if (!response.data.success) {
            yield put({
                type: "REACTIVATE_SUBSCRIPTION_FAILED",
                payload: response.data.message
            });

            if (payload ? .callback) {
                payload.callback(false, response.data.message);
            }
            return;
        }

        yield put({
            type: "REACTIVATE_SUBSCRIPTION_SUCCESS",
            payload: response.data.reactivated_plan
        });


        yield put({
            type: "LOAD_SUBSCRIPTION_STATUS",
            payload: {
                callback: (provider) => {
                    if (payload ? .userId && provider) {
                        console.log('🔄 Provider recebido para atualização:', provider);
                    }
                }
            }
        });

        if (payload ? .callback) {
            payload.callback(true, response.data.message, response.data.reactivated_plan);
        }

    } catch (e) {
        const errorMessage = e.response ? .data ? .message || e.message || "Erro desconhecido";

        yield put({
            type: "REACTIVATE_SUBSCRIPTION_FAILED",
            payload: errorMessage
        });

        if (payload ? .callback) {
            payload.callback(false, errorMessage);
        }
    }
}

export function* saga() {
    yield takeLatest("FORCE_LOAD_SUBSCRIPTION_STATUS", forceLoadSubscriptionStatus);
    yield takeLatest("LOAD_SUBSCRIPTION_STATUS", loadSubscriptionStatus);
    yield takeLatest("CREATE_SUBSCRIPTION", createSubscription);
    yield takeLatest("CANCEL_SUBSCRIPTION", cancelSubscription);
    yield takeLatest("REACTIVATE_SUBSCRIPTION", reactivateSubscription);
}