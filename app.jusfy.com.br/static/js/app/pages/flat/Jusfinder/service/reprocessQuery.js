import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const reprocessQueryData = async id => {
    return await axios.put(`${API_URL}/queries/${id}`);
};