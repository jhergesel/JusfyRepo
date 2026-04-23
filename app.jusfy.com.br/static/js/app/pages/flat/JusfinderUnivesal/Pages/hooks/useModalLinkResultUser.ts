import { useHistory, useParams } from "react-router-dom";
import {
  createCustomer,
  deleteUser,
} from "app/pages/flat/JusfinderShared/services/linkUserQuery";
import { updateLinkUserQuery } from "app/pages/flat/JusfinderShared/services/updateLinkUserQuery";
import {
  initialState,
  reducerJusfinderShared,
} from "app/pages/flat/JusfinderShared/store";
import { useCallback, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import { useLoadingCustomersJusfinder } from "../../../JusfinderShared/hooks/useLoadingCustomers";
import { EventsSegment } from "../../../../../helpers/EventsSegmentsCalculators";

export const useModalLinkUser = setShouldReload => {
  const { feature_type_name } = useParams();
  const [state, dispatch] = useReducer(reducerJusfinderShared, initialState);
  const { customers } = useLoadingCustomersJusfinder();

  const history = useHistory();

  const { HandleEvent } = EventsSegment();

  const closeModalCusTomer = useCallback(() => {
    dispatch({ type: "CLOSE_MODAL_CUSTOMER" });
    setShouldReload(true);
  }, [setShouldReload]);

  const onChangeCustomer = useCallback(
    customer => {
      dispatch({
        type: "SET_CUSTOMER",
        payload: {
          customer: customer,
        },
      });
      setShouldReload(true);
    },
    [dispatch, setShouldReload]
  );

  const openModalCustomer = (inputType: string, customer, id) => {
    HandleEvent("Link User", {
      query_type: feature_type_name,
      context: "page-result",
    });
    dispatch({
      type: "OPEN_MODAL_CUSTOMER",
      payload: {
        id: id,
        customer: customer,
        edit: true,
        inputType: inputType,
        feature_type_name: feature_type_name,
      },
    });
  };

  const validationCustomer = useCallback(
    customer => {
      if (state.inputType === "text") {
        if (!customer || customer?.trim() === "") {
          dispatch({
            type: "SET_ERROR",
            payload: { error: "Preencha o nome do cliente" },
          });

          return true;
        }
      }

      if (state.inputType === "select") {
        if (!customer?.name) {
          dispatch({
            type: "SET_ERROR",
            payload: { error: "Selecione um cliente" },
          });
          return true;
        }
      }

      return false;
    },
    [dispatch, state.inputType]
  );

  const linkUser = useCallback(async () => {
    if (validationCustomer(state.customer)) return;

    try {
      const response = await createCustomer(state.customer);
      toast.success("Cliente criado com sucesso!");
      onChangeCustomer(response.data);
      changeInputType("select");
      HandleEvent("Create User LinkUser", {
        feature_type_name: feature_type_name,
        context: "page-result",
      });
    } catch (error) {
      toast.error("Erro ao criar cliente. Tente novamente.");
    }
  }, [
    state.customer,
    validationCustomer,
    state.feature_type_name,
    HandleEvent,
  ]);

  const unlinkUser = useCallback(async () => {
    if (validationCustomer(state.customer)) return;

    try {
      await deleteUser(state.id);
      toast.success("Cliente desvinculado com sucesso!");
      closeModalCusTomer();
      HandleEvent("Unlik User", {
        feature_type_name: feature_type_name,
        context: "page-result",
      });
    } catch (error) {
      toast.error("Erro ao desvincular cliente. Tente novamente.");
    }
  }, [
    state.customer,
    validationCustomer,
    closeModalCusTomer,
    state.id,
    state.feature_type_name,
    HandleEvent,
  ]);

  const updateCustomer = useCallback(async () => {
    if (validationCustomer(state.customer)) return;

    try {
      await updateLinkUserQuery(state);
      toast.success("Cliente atualizado com sucesso!");
      setShouldReload(true);
      closeModalCusTomer();
      HandleEvent("Update Link User", {
        feature_type_name: feature_type_name,
        context: "page-result",
      });
    } catch (error) {
      toast.error("Erro ao atualizar cliente. Tente novamente.");
    }
  }, [
    setShouldReload,
    state,
    validationCustomer,
    closeModalCusTomer,
    HandleEvent,
  ]);

  const changeInputType = inputType => {
    dispatch({
      type: "SET_INPUT_TYPE",
      payload: { inputType: inputType },
    });
  };

  useEffect(() => {
    dispatch({
      type: "SET_ERROR",
      payload: { error: "" },
    });
  }, [state.customer, state.inputType]);

  const viewClient = (id: number) => {
    HandleEvent("View Client", {
      query_type: feature_type_name,
      context: "page-result",
    });
    history.push(`/clientes/form/${id}`);
  };

  return {
    state,
    dispatch,
    closeModalCusTomer,
    onChangeCustomer,
    linkUser,
    updateCustomer,
    customers,
    changeInputType,
    unlinkUser,
    openModalCustomer,
    viewClient,
  };
};
