import {
    useContext,
    useEffect,
    useMemo,
    useState
} from "react";
import {
    jusfinderContext
} from "../../context";

import {
    EventsSegment
} from "../../../../../helpers/EventsSegmentsCalculators";
import {
    ITEMS_PER_PAGE,
    NAME_EVENTS
} from "./constants";
import {
    loadQueriesPage
} from "../../service/loadQueries";
import {
    toast
} from "react-toastify";

export const UseQueryHistory = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState();

    const [pagination, setPagination] = useState(0);

    const {
        setPage,
        shouldReload,
        setShouldReload
    } = useContext(
        jusfinderContext
    );

    const paginatedData = useMemo(() => {
        const startIndex = pagination * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return data.slice(startIndex, endIndex);
    }, [pagination, data]);

    const {
        HandleEvent
    } = EventsSegment();

    const loadQueries = async () => {
        try {
            setLoading(true);
            const response = await loadQueriesPage(
                `${process.env.REACT_APP_API_URL}/bulk-queries`
            );

            setData(response.data.queries);
        } catch (err) {
            toast.error("Erro ao carregar dados de consulta");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        loadQueries();
    }, []);

    useEffect(() => {
        loadQueries();
    }, [pagination]);

    useEffect(() => {
        if (shouldReload) {
            loadQueries();
            setShouldReload(false);
        }
    }, [shouldReload]);

    const openInNewTab = url => window.open(url, "_blank", "noopener,noreferrer");

    const getUrlsRedirects = useMemo(
        () => row => {
            const urls = `/resultado/${row.featureTypeName}/${row.id}/${row.type}`;

            return urls;
        }, []
    );

    const featureTypesUrl = row => {
        HandleEvent(NAME_EVENTS[row.featureTypeName], {
            context: "performed_queries_list",
        });
        const urlRedirect = getUrlsRedirects(row);

        openInNewTab(urlRedirect);
    };

    return {
        data,
        loading,
        pagination,
        setData,
        setLoading,
        setPagination,
        setPage,
        shouldReload,
        setShouldReload,
        featureTypesUrl,
        openInNewTab,
        getUrlsRedirects,
        paginatedData,
    };
};