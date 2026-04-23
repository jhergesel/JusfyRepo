import axios from "axios";

export function handleAxiosErrorMessage(error) {
    const isAxiosError =
        typeof axios.isAxiosError === "function" ?
        axios.isAxiosError(error) :
        error ? .isAxiosError === true;
    if (!isAxiosError) {
        return {
            message: error ? .message ||
                error ? .msg ||
                error ? .response ? .data ? .msg ||
                error ? .response ? .statusText ||
                error ? .response ? .message ||
                error ? .response ? .data ? .message ||
                "unknown"
        };
    }

    return {
        message: error.response ? .data ? .msg ||
            error.response ? .statusText ||
            error.response ? .message ||
            error.response ? .data ? .message ||
            "unknown",
        data: error.response ? .data,
        status: error.status,
    };
}