import {
    useState
} from "react";

import axios from "axios";
import {
    toast
} from "react-toastify";

const jusfy_api_base_url = process.env.REACT_APP_API_URL;
const jusfy_api_check_splitter_auth_url = new URL(
    `${jusfy_api_base_url}/splitter/checkAuth/`
).toString();
const jusfy_api_perform_split_url = new URL(
    `${jusfy_api_base_url}/splitter/`
).toString();

function useJusfySplitterAuth() {
    const [fetching, setFetching] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const [result, setResult] = useState(null);
    const [usageLimitPassed, setUsageLimitPassed] = useState(false);

    function resetStates() {
        setFetching(false);
        setSuccess(false);
        setFailure(false);
        setResult(null);
        setUsageLimitPassed(false);
    }

    async function doAuthorizationRequest(usedFeature) {
        setSuccess(false);
        setFailure(false);
        setResult(null);

        try {
            //const response = await fetch(jusfy_api_perform_split_url)
            // TODO: construir a URL direito
            const performAuthorizedOperationURL = `${jusfy_api_perform_split_url}${usedFeature}`;
            const response = await axios.get(performAuthorizedOperationURL, {});

            if (response.status === 200) {
                const registeredUsage = response.data.data;
                setResult(registeredUsage);
                setSuccess(true);

                return registeredUsage;
            } else if (response.status === 400) {
                setFailure(true);
                setUsageLimitPassed(true);

                return null;
            }
        } catch (err) {
            setFailure(true);
            setResult(null);
            if (process.env.NODE_ENV === "development") console.log(err);

            resetStates();

            return null;
        }
    }

    async function checkAuthorization(usedFeature) {
        setSuccess(false);
        setFailure(false);
        setResult(null);

        try {
            const response = await axios.post(
                `${jusfy_api_check_splitter_auth_url}${usedFeature}`, {
                    client_id: 123
                }
            );

            if (response.data.success === true) {
                const authorized = response.data;
                setUsageLimitPassed(false);
                setResult(authorized);
                setSuccess(true);

                return true;
            } else {
                setFailure(true);
                setUsageLimitPassed(true);

                return false;
            }
        } catch (err) {
            toast.error(
                "Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde."
            );

            setFailure(true);
            setResult(null);
            if (process.env.NODE_ENV === "development") console.log(err);

            return false;
        }
    }

    return {
        fetching,
        success,
        failure,
        result,
        usageLimitPassed,
        setUsageLimitPassed,
        resetStates,
        doAuthorizationRequest,
        checkAuthorization,
    };
}

export default useJusfySplitterAuth;