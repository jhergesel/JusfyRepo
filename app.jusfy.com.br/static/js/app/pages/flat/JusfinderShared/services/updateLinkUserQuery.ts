import axios from "axios";

interface UpdateLinkUserQueryProps {
  id: number;
  customer?: {
    id: number;
    name: string;
  };
}

export const updateLinkUserQuery = ({
  id,
  customer,
}: UpdateLinkUserQueryProps) => {
  return axios.put(process.env.REACT_APP_API_URL + `/queries/${id}/customer`, {
    client_customer_id: customer?.id,
  });
};
