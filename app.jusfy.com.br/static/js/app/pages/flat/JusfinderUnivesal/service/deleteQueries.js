import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const deleteQueries = async id => {
    return await axios.delete(`${API_URL}/queries/${id}`);
};