import axios from "axios";

interface IProcessQueries {
  documentType: string;
  document: string;
  queries: string[];
}

export const processQueries = ({
  documentType,
  document,
  queries,
}: IProcessQueries) => {
  const response = axios.post(
    `${process.env.REACT_APP_API_URL}/multiple-queries`,
    {
      documentType,
      document,
      queries,
    }
  );
  return response;
};
