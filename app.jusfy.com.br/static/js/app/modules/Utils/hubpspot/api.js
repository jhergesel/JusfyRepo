import axios from "axios";

export const createHubspotContact = async (props, hutk, source) => {
    return axios.post(
        `${process.env.REACT_APP_API_URL}/hubspot/create_contacts`, {
            name: props.formik.values.name,
            email: props.formik.values.email,
            hutk: hutk,
            source: source
        }
    );
};