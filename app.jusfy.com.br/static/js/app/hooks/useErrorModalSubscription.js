import {
    useDispatch
} from "react-redux";


const useErrorModalSubscription = () => {
    const dispatch = useDispatch();


    const openModalSubscription = calculator_name => {
        dispatch({
            type: "SET_MODAL_SUBSCRIPTION",
            payload: {
                visible: true,
                title: `Você atingiu o limite de cálculos de ${calculator_name}!`,
                subtitle: "Mas você pode continuar utilizando, basta escolher um plano para realizar a assinatura agora mesmo.",
            },
        });
    };

    const openModalSubscriptionGPT = (period_end) => {
        dispatch({
            type: "SET_MODAL_SUBSCRIPTION",
            payload: {
                visible: true,
                title: 'Você atingiu o limite de mensagens do JusGPT!',
                subtitle: `Seu plano renova em ${formatDate(period_end)}. Mas você pode continuar utilizando, basta escolher um plano para realizar a assinatura agora mesmo.`,
            },
        });
    }

    const formatDate = (dateString) => {
        if (!dateString) return "-";

        try {
            const date = new Date(dateString);

            if (isNaN(date.getTime())) return "-";

            return date.toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                timeZone: "UTC",
            });
        } catch (error) {
            return "-";
        }
    };

    return {
        openModalSubscription,
        openModalSubscriptionGPT
    };
};

export {
    useErrorModalSubscription
};