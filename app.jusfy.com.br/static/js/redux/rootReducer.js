import {
    combineReducers
} from "redux";
import {
    persistReducer
} from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import {
    all
} from "redux-saga/effects";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import {
    layoutReducer
} from "../app/redux/layout/layoutSlice";
import * as app from "./appRedux";
import * as calculation from "./calculationRedux";
import * as resetPassword from "./resetPasswordRedux";
import * as subscription from "./subscriptionRedux";
import * as credits from "./creditsRedux";
import * as paymentLink from "../app/modules/PaymentLink/redux/reducer"

const subscriptionPersistConfig = {
    key: "subscription",
    storage: storageSession,
};

export const rootReducer = combineReducers({
    app: app.reducer,
    subscription: persistReducer(subscriptionPersistConfig, subscription.reducer),
    resetPassword: resetPassword.reducer,
    credits: credits.reducer,
    calculation: calculation.reducer,
    auth: auth.reducer,
    paymentLink: paymentLink.reducer,
    layout: layoutReducer,
});

export function* rootSaga() {
    yield all([
        auth.saga(),
        app.saga(),
        credits.saga(),
        subscription.saga(),
        calculation.saga(),
        resetPassword.saga(),
    ]);
}