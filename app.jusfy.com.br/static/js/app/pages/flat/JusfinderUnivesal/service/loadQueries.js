import axios from "axios";

export const loadQueriesPage = async url => {
    return await axios.get(url);
};