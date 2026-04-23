import axios from "axios";

const baseAPI = "https://api.juspage.jusfy.dev/api";

export const getJusMailRedirect = async () => {
    const response = await axios.get(`${baseAPI}/jusmail/sso/login`, {
        responseType: 'text'
    });
    return response.data;
};