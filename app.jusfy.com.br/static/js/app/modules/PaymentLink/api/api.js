import axios from "axios";
import * as Sentry from "@sentry/react";

export const BASE_PATH = process.env.REACT_APP_API_URL + "/payment-link";
export const VALIDATE_PAYMENT_LINK_URL = `${BASE_PATH}/validate`;
export const SUBMIT_PAYMENT_LINK_URL = `${BASE_PATH}/submit`;

export const validatePaymentLink = async link => {
    return axios.post(`${VALIDATE_PAYMENT_LINK_URL}/${link}`);
};

export const submitPaymentLink = async (
    link,
    paymentMethod,
    cardToken,
    cardHolder,
    planId,
    expirationDate,
    lastDigits
) => {
    return axios.post(`${SUBMIT_PAYMENT_LINK_URL}/${link}`, {
        payment_method: paymentMethod,
        card: {
            token: cardToken,
            holder_name: cardHolder,
            expiration_date: expirationDate,
            last_digits: lastDigits,
        },
        planId,
    });
};

export const createToken = async values => {
    const encryptionKey = process.env.REACT_APP_PAGARME_V5_ENCRYPTION_KEY;

    const cardPayload = {
        type: "card",
        card: {
            number: values.card_number.replace(/\s/g, ""),
            holder_name: values.cardholder_name,
            exp_month: parseInt(values.card_expiration.split("/")[0]),
            exp_year: parseInt(values.card_expiration.split("/")[1]),
            cvv: values.card_cvv,
            label: "Cartão do Cliente",
        },
    };
    try {
        const {
            data
        } = await axios.post(
            `https://api.pagar.me/core/v5/tokens?appId=${encryptionKey}`,
            cardPayload
        );
        return data;
    } catch (error) {
        Sentry.withScope(scope => {
            scope.setTag("area", "payment_link");
            scope.setTag("flow", "create_token");
            scope.setExtra("endpoint", "/api.pagar.me/core/v5/tokens");
            scope.setExtra("status", error ? .response ? .status || "unknown");
            scope.setExtra("code", error ? .code);
            const sanitized = new Error(error.message || "Axios Error");
            Sentry.captureException(sanitized);
        });
        throw new Error("Erro ao criar o token do cartão");
    }
};

export const getSubscriptionInfo = async subscriptionId => {
    try {
        const {
            data: subscription
        } = await axios.get(
            `${process.env.REACT_APP_API_URL}/subscription/polling/${subscriptionId}`
        );
        return subscription;
    } catch (error) {
        Sentry.withScope(scope => {
            scope.setTag("area", "payment_link");
            scope.setTag("flow", "subscription_polling");
            scope.setExtra("endpoint", "/subscription/polling/id");
            scope.setExtra("status", error ? .response ? .status || "unknown");
            scope.setExtra("code", error ? .code);
            const sanitized = new Error(error.message || "Axios Error");
            Sentry.captureException(sanitized);
        });
        throw new Error("Erro inesperado ao obter informações da assinatura");
    }
};