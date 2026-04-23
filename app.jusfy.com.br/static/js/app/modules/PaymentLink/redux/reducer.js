export const actionTypes = {
    validatePaymentLink: "validatePaymentLink",
    submitPaymentLink: "submitPaymentLink",
};

const initialState = {
    link: undefined,
    allowedPaymentMethods: [],
    cardToken: undefined,
    cardHolder: undefined,
    plan: undefined,
    paid_at: undefined,
    submitted_at: undefined,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.validatePaymentLink:
            {
                const {
                    link,
                    allowedPaymentMethods,
                    plan
                } = action.payload;
                return {
                    ...state,
                    link,
                    allowedPaymentMethods: allowedPaymentMethods || [],
                    plan,
                    paid_at: action.payload.paid_at,
                    submitted_at: action.payload.submitted_at,
                };
            }

        case actionTypes.submitPaymentLink:
            {
                const {
                    cardToken,
                    cardHolder
                } = action.payload;
                return {
                    ...state,
                    cardToken,
                    cardHolder,
                };
            }

        default:
            return state;
    }
};

export const actions = {
    validatePaymentLink: ({
        link,
        allowedPaymentMethods,
        plan,
        paid_at,
        submitted_at
    }) => ({
        type: actionTypes.validatePaymentLink,
        payload: {
            link,
            allowedPaymentMethods,
            plan,
            paid_at,
            submitted_at
        },
    }),
    submitPaymentLink: ({
        cardToken,
        cardHolder
    }) => ({
        type: actionTypes.submitPaymentLink,
        payload: {
            cardToken,
            cardHolder
        },
    }),
};