export const initialState = {
  modalCustomer: false,
  customer: null,
  id: null,
  edit: false,
  error: null,
  inputType: "select",
  feature_type_name: "",
};

export const reducerJusfinderShared = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL_CUSTOMER":
      return {
        ...state,
        modalCustomer: true,
        id: action.payload.id,
        edit: action.payload.edit || false,
        customer: action.payload.customer || null,
        inputType: action.payload.inputType || "select",
        feature_type_name: action.payload.feature_type_name || "",
      };
    case "CLOSE_MODAL_CUSTOMER":
      return {
        ...initialState,
      };

    case "SET_CUSTOMER":
      return {
        ...state,
        customer: action.payload?.customer,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload?.error,
      };
    case "SET_INPUT_TYPE":
      return {
        ...state,
        inputType: action.payload?.inputType || "select",
        customer: action.payload?.inputType === "text" ? "" : state.customer,
      };
    default:
      return state;
  }
};
