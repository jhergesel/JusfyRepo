import axios from "axios";
import { toast } from "react-toastify";
import { LoadProductsResponseData } from "./types";
import { config } from "../../../../../config/env";

export const loadProducts = async () => {
  try {
    return await axios.get<LoadProductsResponseData>(`${config.jusfyBackend.apiUrl}/products`);
  } catch (error) {
    toast.error("Erro ao carregar produtos");
    return error
  }
};
