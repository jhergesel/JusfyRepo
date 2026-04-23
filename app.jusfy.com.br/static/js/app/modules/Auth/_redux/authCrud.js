import axios from "axios";
import {
    getDeviceInfo
} from "../../../helpers/getDeviceInfo";
import {
    config
} from "../../../../config/env";
import traceId from "../../../../redux/traceId";

export const LOGIN_URL = `${config.jusfyBackend.apiUrl}/auth/login`;
export const REGISTER_URL = `${config.jusfyBackend.apiUrl}/auth/register`;
export const REQUEST_PASSWORD_URL = `${config.jusfyBackend.apiUrl}/auth/forgot-password`;
export const LOGOUT_URL = `${config.jusfyBackend.apiUrl}/auth/logout`;
export const VERIFY_2FA_URL = `${config.jusfyBackend.apiUrl}/auth/2fa/verify`;
export const RESEND_2FA_URL = `${config.jusfyBackend.apiUrl}/auth/2fa/resend-code`;

export const REDIRECT_TO_COMMUNITY = `${config.jusfyBackend.apiUrl}/auth/redirect`;
export const REGISTER_EXTERNAL_URL = `${config.jusfyBackend.apiUrl}/auth/register/external`;

export const ME_URL = `${config.jusfyBackend.apiUrl}/me`;

export async function login(email, password, recaptchaToken, recaptchaVersion) {
    const deviceInfo = getDeviceInfo();

    const payload = {
        email,
        password,
        recaptchaToken,
        recaptchaVersion,
        ...deviceInfo,
    };

    const headers = {
        "x-device-id": deviceInfo.deviceFingerprint,
        "x-request-id": deviceInfo.requestId,
    };

    delete payload.deviceFingerprint;

    const response = await axios.post(LOGIN_URL, payload, {
        headers
    });

    return response;
}

export function register(email, fullname, username, password) {
    return axios.post(REGISTER_URL, {
        email,
        fullname,
        username,
        password
    });
}

export function requestPassword(email) {
    return axios.post(REQUEST_PASSWORD_URL, {
        email
    });
}

export function logout(loginId) {
    return axios.post(LOGOUT_URL, {
        loginId
    });
}

export function verifyTwoFactor(code, token) {
    const deviceInfo = getDeviceInfo();
    return axios.post(
        VERIFY_2FA_URL, {
            code
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                "x-trace-id": traceId,
                "x-device-id": deviceInfo.deviceFingerprint,
            },
        }
    );
}

export function getUserByToken() {
    // Authorization head should be fulfilled in interceptor.
    return axios.get(ME_URL);
}

export function redirectToCommunity(queryParams) {
    return axios.get(`${REDIRECT_TO_COMMUNITY}${queryParams}`);
}

export function registerExternal(name, email, password, confirmation_password) {
    return axios.post(REGISTER_EXTERNAL_URL, {
        name,
        email,
        password,
        confirmation_password,
    });
}

export function resendTwoFactorCode(token) {
    return axios.post(
        RESEND_2FA_URL, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
}