import axios from "axios";

const baseAPI = process.env.REACT_APP_JUSPAGE_API_URL || "https://api.juspage.jusfy.dev/api";

export const domainSuggestions = async (name) => {
    const response = await axios.get(`${baseAPI}/jusmail/domain-suggestions`, {
        params: {
            name
        }
    });
    return response.data;
};

export const checkDomainAvailability = async (domain) => {
    const response = await axios.get(`${baseAPI}/jusmail/check-availability`, {
        params: {
            domain
        }
    });
    return response.data;
};

export const getConfigEmail = async () => {
    const response = await axios.get(`${baseAPI}/jusmail/config`);
    return response.data;
};

export const registerDomain = async (domain, email) => {
    const response = await axios.post(`${baseAPI}/jusmail`, {
        domain,
        email
    });
    return response.data;
};

export const getCheckoutDomain = async () => {
    const response = await axios.get(`${baseAPI}/checkout/jusmail`);
    return response.data;
};

export const checkoutDomain = async (params) => {
    const response = await axios.post(`${baseAPI}/checkout/jusmail`, params);
    return response.data;
};

export const getNextCharge = async () => {
    const response = await axios.get(`${baseAPI}/checkout/next-charge`);
    return response.data;
};

export const getRemainingDomains = async () => {
    const response = await axios.get(`${baseAPI}/jusmail/remaining-slots`);
    return response.data;
};