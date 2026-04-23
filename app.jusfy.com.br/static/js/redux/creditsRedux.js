import axios from "axios";
import {
    toast
} from "react-toastify";
import {
    put,
    takeLatest
} from "redux-saga/effects";

import traceId from "./traceId";

const INITIAL_STATE = {
    credits: {
        hasSubscription: false,
        hasPurchase: false,
        hasBonus: false,
    },
    isLoading: true,
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOAD_CREDITS_RESUME_SUCCESS":
            return {
                ...state,
                isLoading: false,
                credits: {
                    hasBonus: action.payload.hasBonus,
                    hasPurchase: action.payload.hasPurchase,
                    hasSubscription: action.payload.hasSubscription,
                },
            };
        case "LOAD_CREDITS_RESUME_FAILED":
            return {
                ...state,
                isLoading: false,
                credits: {
                    hasBonus: INITIAL_STATE.credits.hasBonus,
                    hasPurchase: INITIAL_STATE.credits.hasPurchase,
                    hasSubscription: INITIAL_STATE.credits.hasSubscription,
                },
            };
        default:
            return state;
    }
};

function* loadCreditsResume({
    payload
}) {
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/credits/resume`,
            payload, {
                headers: {
                    "x-trace-id": traceId,
                },
            },
        );


        yield put({
            type: "LOAD_CREDITS_RESUME_SUCCESS",
            payload: response.data,
        });
    } catch (err) {
        yield put({
            type: "LOAD_CREDITS_RESUME_FAILED"
        });
        toast.error("Ocorreu um erro ao carregar o resumo da assinatura.");
    }
}

export function* saga() {
    yield takeLatest("LOAD_CREDITS_RESUME", loadCreditsResume);
}