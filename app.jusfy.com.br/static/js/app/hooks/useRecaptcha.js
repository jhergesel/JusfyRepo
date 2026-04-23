import {
    useState,
    useEffect
} from "react";

export function useRecaptchaV2() {
    const [captchaV2Params, setCaptchaV2Params] = useState({
        v2Token: undefined,
        v2Expired: false,
        v2Error: undefined,
    })

    const recaptchaV2Callback = (token) => {
        if (typeof token === 'string') {
            setCaptchaV2Params({
                ...captchaV2Params,
                v2Token: token,
                v2Expired: false,
                v2Error: undefined,
            })
        } else if (typeof token === 'boolean' && !token) {
            setCaptchaV2Params({
                ...captchaV2Params,
                v2Expired: true
            });
        } else if (token instanceof Error) {
            setCaptchaV2Params({
                ...captchaV2Params,
                v2Error: true
            });
        }
    }

    return [recaptchaV2Callback, captchaV2Params]
}

export function useRecaptchaV3(refreshRef) {

    const [captchaV3Params, setCaptchaV3Params] = useState({
        v3Token: undefined,
        v3Retrieving: false,
    });

    const recaptchaV3Callback = (token, refreshFunction) => {
        if (typeof token === 'string') {
            // retrieved
            setCaptchaV3Params({
                ...captchaV3Params,
                v3Token: token,
                v3Retrieving: false,
            });

            refreshRef.current = refreshFunction;
        } else {
            // retrieval in progress
            setCaptchaV3Params({
                ...captchaV3Params,
                v3Retrieving: true
            });
        }
    }

    return [recaptchaV3Callback, captchaV3Params]
}

export function useRecaptchaTokenRefresh(refreshRef) {
    useEffect(() => {
        // Renovar o token a cada 90 segundos (recomendado, pois o token expira em 2 minutos)
        const refreshInterval = setInterval(() => {
            console.log("Refreshing reCAPTCHA V3 token");
            if (refreshRef.current && typeof refreshRef.current === 'function') {
                refreshRef.current();
            }
        }, 90000);

        return () => clearInterval(refreshInterval);
    }, []);
}