import {
    useEffect
} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";

export const useLoadingCustomersJusfinder = () => {
    const customers = useSelector(state => state ? .app ? .customers);
    const dispatchCustomer = useDispatch();

    useEffect(() => {
        dispatchCustomer({
            type: "LOAD_CUSTOMERS"
        });
    }, []);

    return {
        customers,
    };
};