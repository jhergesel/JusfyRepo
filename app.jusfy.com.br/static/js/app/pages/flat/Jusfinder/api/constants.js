export const baseAPI = process.env.REACT_APP_API_URL;

export const QUERY_REQUEST_CONFIGS = new Map([
    [
        "vehicle_data",
        {
            timeout: 300000,
        },
    ],
]);
export const QUERIES = new Map([
    [
        "trademarks",
        {
            url: `${baseAPI}/trademarks`,
        },
    ],
    [
        "professional_data",
        {
            url: `${baseAPI}/professional_data_finder`,
        },
    ],
    [
        "cpf_registration_status",
        {
            url: `${baseAPI}/cpf_registration_status`,
        },
    ],
    [
        "economic_group",
        {
            url: `${baseAPI}/economic_group`,
        },
    ],
    [
        "queries",
        {
            url: `${baseAPI}/queries/checkout`,
        },
    ],
    [
        "vehicle_tracking",
        {
            url: `${baseAPI}/queries/schedule`,
        },
    ],
]);