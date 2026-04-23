import axios from "axios";

interface LinkUserQueryProps {
  id: number;
  customer_id?: number;
}

export const linkUserQuery = ({ id, customer_id }: LinkUserQueryProps) => {
  return axios.put(process.env.REACT_APP_API_URL + `/queries/${id}/customer`, {
    client_customer_id: customer_id,
  });
};

export const createCustomer = (customer_name: string) => {
  return axios.post(process.env.REACT_APP_API_URL + `/client_customers`, {
    document_type: null,
    document_number: "",
    name: customer_name,
    rg: "",
    profession: "",
    marital_status: "",
    email: "",
    address: "",
    phone_1: "",
    postal_code: "",
    phone_2: "",
    state: null,
    city: null,
    birthday: "",
    observations: "",
  });
};

export const deleteUser = (id: number) => {
  return axios.delete(
    process.env.REACT_APP_API_URL + `/queries/${id}/customer`
  );
};
