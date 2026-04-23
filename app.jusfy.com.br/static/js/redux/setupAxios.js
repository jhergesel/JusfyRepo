export default function setupAxios(axios, store) {
    const ONE_MINUTE = 60000;

    axios.defaults.timeout = ONE_MINUTE;

    axios.interceptors.request.use(
        config => {
            const {
                auth: {
                    authToken
                },
            } = store.getState();

            if (authToken && !config.url.includes("api.pagar.me/core/v5/tokens")) {
                config.headers.Authorization = `Bearer ${authToken}`;
            }

            return config;
        },
        err => Promise.reject(err)
    );

    axios.interceptors.response.use(
        response => response,
        async function(error) {
            if (
                error ? .response ? .status !== 401 ||
                error ? .config ? .url ? .endsWith("/auth/login") ||
                error ? .config ? .url ? .endsWith("/auth/2fa/verify") ||
                window.location.pathname === "/logout"
            ) {
                return Promise.reject(error);
            }

            window.location.href = "/logout";
            return Promise.reject(error);
        }
    );
}