import axios from "axios";
import { toast } from "react-toastify";
import { config } from "../../../../../config/env";

export const addFavoriteQueries = async (feature_name:string) => {
  try {
    return await axios.post(`${config.jusfyBackend.apiUrl}/favorite-queries`, {
      feature_name
    });
  } catch (error) {
    toast.error("Erro ao adicionar query aos favoritos");
    return error
  }
};

export const removeFavoriteQueries = async (feature_name:string) => {
  try {
    return await axios.delete(`${config.jusfyBackend.apiUrl}/favorite-queries/${feature_name}`);
  } catch (error) {
    toast.error("Erro ao remover query dos favoritos");
    return error
  }
};

type ReorderFavoriteQueriesProps = {products:{ feature_name: string, order: number }[]}

export const reorderFavoriteQueries = async (data:ReorderFavoriteQueriesProps) => {
  try {
    return await axios.put(`${config.jusfyBackend.apiUrl}/favorite-queries/reorder`,data);
  } catch (error) {
    toast.error("Erro ao reordenar queries");
    return error
  }
};
