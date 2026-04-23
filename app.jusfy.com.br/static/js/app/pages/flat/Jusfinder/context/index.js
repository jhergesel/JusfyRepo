import {
    createContext,
    useState
} from "react";
import {
    QUERIES
} from "../components/ModalContent/QueryFormModal/constants";

export const jusfinderContext = createContext({});

const INITIAL_MODAL_STATE = {
    open: false,
    type: null,
    config: {},
};

const JusfinderProvider = ({
    children
}) => {
    const [modal, setModal] = useState(INITIAL_MODAL_STATE);
    const [page, setPage] = useState("query");
    const [shouldReload, setShouldReload] = useState(false);
    const [queries, setQueries] = useState([]);
    const [modalCheckout, setModalCheckout] = useState(false);
    const [loadingModalCheckout, setLoadingModalCheckout] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [modalSuggestion, setModalSuggestion] = useState(false);
    const [data, setData] = useState([]);

    const openModal = (type, config) => {
        setModal({
            open: true,
            type,
            config,
        });
    };

    const fillQueries = () => {
        setQueries(QUERIES.map(query => query.value));
    };

    const closeModal = () => {
        setModal(INITIAL_MODAL_STATE);
    };

    return ( <
        jusfinderContext.Provider value = {
            {
                modal,
                page,
                setPage,
                openModal,
                closeModal,
                shouldReload,
                setShouldReload,
                fillQueries,
                queries,
                setQueries,
                isLoading,
                setIsLoading,
                modalCheckout,
                setModalCheckout,
                loadingModalCheckout,
                setLoadingModalCheckout,
                modalSuggestion,
                setModalSuggestion,
                data,
                setData,
            }
        } >
        {
            children
        } <
        /jusfinderContext.Provider>
    );
};

export default JusfinderProvider;