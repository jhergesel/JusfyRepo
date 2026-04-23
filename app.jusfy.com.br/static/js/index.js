/**
 * Create React App entry point. This and `public/index.html` files can not be
 * changed or moved.
 */
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import {
    BrowserTracing
} from "@sentry/tracing";
import axios from "axios";
import * as _redux from "./redux";
import store, {
    persistor
} from "./redux/store";
import App from "./app/App";
import {
    hydrateNumber
} from "./app/helpers/HydrateNumber";
import "./index.scss"; // Standard version
// import "./sass/style.react.rtl.css"; // RTL version
import "./_metronic/_assets/plugins/keenthemes-icons/font/ki.css";
import "socicon/css/socicon.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./_metronic/_assets/plugins/flaticon/flaticon.css";
import "./_metronic/_assets/plugins/flaticon2/flaticon.css";
// Datepicker
import "react-datepicker/dist/react-datepicker.css";

import {
    MetronicLayoutProvider,
    MetronicSplashScreenProvider,
    MetronicSubheaderProvider,
} from "./_metronic/layout";
import {
    MetronicI18nProvider
} from "./_metronic/i18n";

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const {
    PUBLIC_URL,
    REACT_APP_SENTRY_ENV,
    REACT_APP_SENTRY_DSN,
    REACT_APP_SENTRY_SAMPLE_RATE,
    REACT_APP_SENTRY_ENABLED,
    REACT_APP_SENTRY_SAMPLE_TRACE_RATE,
} = process.env;
/**
 * Inject metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
/**
 * Inject metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */

/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/* const mock = */

_redux.setupAxios(axios, store);

const isEnabled = value => {
    return value === "true" || value === "1" || value === "yes";
};

if (isEnabled(REACT_APP_SENTRY_ENABLED)) {
    Sentry.init({
        dsn: REACT_APP_SENTRY_DSN,
        integrations: [new BrowserTracing()],
        sampleRate: hydrateNumber(REACT_APP_SENTRY_SAMPLE_RATE, 0.1),
        tracesSampleRate: hydrateNumber(REACT_APP_SENTRY_SAMPLE_TRACE_RATE, 0.1),
        environment: REACT_APP_SENTRY_ENV,
        normalizeDepth: 10,
        beforeSend: event => {
            const url = event.request ? .url;
            if (url && /\/pensao(\/|$|\?|#)/.test(url)) {
                return null;
            }
            return event;
        },
    });
}

window.addEventListener('unhandledrejection', event => {
    if (!isEnabled(REACT_APP_SENTRY_ENABLED)) {
        return;
    }

    event.preventDefault();

    if (event.reason === 'Timeout' || typeof event.reason === 'string') {
        Sentry.captureException(new Error('UnhandledPromiseRejection_Timeout'), {
            tags: {
                error_type: 'unhandled_rejection'
            },
            extra: {
                reason: event.reason,
                originalError: event.reason,
            }
        });

        return;
    }

    Sentry.captureException(event.reason);
});

ReactDOM.render( <
    MetronicI18nProvider >
    <
    MetronicLayoutProvider >
    <
    MetronicSubheaderProvider >
    <
    MetronicSplashScreenProvider >
    <
    App store = {
        store
    }
    persistor = {
        persistor
    }
    basename = {
        PUBLIC_URL
    }
    /> <
    /MetronicSplashScreenProvider> <
    /MetronicSubheaderProvider> <
    /MetronicLayoutProvider> <
    /MetronicI18nProvider>,
    document.getElementById("root")
);