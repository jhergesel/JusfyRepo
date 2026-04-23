import {
    configureStore,
    getDefaultMiddleware
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {
    reduxBatch
} from "@manaflair/redux-batch";
import {
    persistStore
} from "redux-persist";
import {
    rootReducer,
    rootSaga
} from "./rootReducer";
import * as Sentry from "@sentry/react";

const sagaMiddleware = createSagaMiddleware();
const middleware = [
    ...getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
        thunk: true,
    }),
    sagaMiddleware,
];
const sentryReduxEnhancer = Sentry.createReduxEnhancer({
    stateTransformer: (state) => {
        const sanitizedSubscription = state.subscription ? {
            ...state.subscription,
            subscription_status: state.subscription.subscription_status ? {
                ...state.subscription.subscription_status,
                client_id: undefined,
                info: state.subscription.subscription_status.info ? {
                    ...state.subscription.subscription_status.info,
                    subscription_id: undefined,
                } : undefined,
                plan_details: state.subscription.subscription_status.plan_details ? {
                    ...state.subscription.subscription_status.plan_details,
                    gateway_id: undefined,
                } : undefined,
            } : undefined,
        } : undefined;

        return {
            subscription: sanitizedSubscription,
        };
    },
});

const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV !== "production",
    enhancers: [reduxBatch, sentryReduxEnhancer],
});

/**
 * @see https://github.com/rt2zz/redux-persist#persiststorestore-config-callback
 * @see https://github.com/rt2zz/redux-persist#persistor-object
 */
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;