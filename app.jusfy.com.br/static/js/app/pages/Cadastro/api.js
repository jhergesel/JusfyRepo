import axios from "axios";

export const validateEmail = (email) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/validate/email`, {
        email
    })
}

export const validateCpf = (cpf) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/validate/document`, {
        document: cpf
    })
}