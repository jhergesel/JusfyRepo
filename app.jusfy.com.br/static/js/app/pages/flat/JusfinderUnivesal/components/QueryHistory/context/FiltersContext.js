import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from 'react';
import {
    format
} from 'date-fns';
import {
    useDispatch,
    useSelector
} from 'react-redux';

const FiltersContext = createContext();

export const useFilters = () => {
    const context = useContext(FiltersContext);
    if (!context) {
        throw new Error('useFilters deve ser usado dentro de FiltersProvider');
    }
    return context;
};

export const FiltersProvider = ({
    children
}) => {
    const [statuses, setStatuses] = useState([]);
    const [features, setFeatures] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [applyFilters, setApplyFilters] = useState(false);
    const [filtersApplied, setFiltersApplied] = useState(null);
    const [params, setParams] = useState(null);
    const [client, setClient] = useState([]);

    const customers = useSelector((state) => state.app.customers);
    const dispatch = useDispatch();
    const parseDate = (dateStr) => {
        const [year, month, day] = dateStr.split('-');
        return new Date(Number(year), Number(month) - 1, Number(day));
    };

    const formatFilters = () => {
        if (!applyFilters) return;

        const statusStr = statuses.map((s) => s.label || s).join('; ');
        const featureStr = features.map((f) => f.name || f).join('; ');
        const customers = client.map((c) => c.name || c).join('; ');

        let dateStr = '';
        if (startDate && endDate) {
            dateStr = `${format(parseDate(startDate), 'dd/MM/yyyy')} a ${format(
        parseDate(endDate),
        'dd/MM/yyyy',
      )}`;
        } else if (startDate) {
            dateStr = `Início ${format(parseDate(startDate), 'dd/MM/yyyy')}`;
        } else if (endDate) {
            dateStr = `Fim ${format(parseDate(endDate), 'dd/MM/yyyy')}`;
        }

        setFiltersApplied({
            statuses: statusStr,
            features: featureStr,
            date: dateStr,
            client: customers,
        });
    };

    const formatQueryParams = () => {
        const formattedParams = {};

        if (statuses ? .length) {
            formattedParams.status = statuses.map((s) => s.status).join(',');
        }

        if (features ? .length) {
            formattedParams.types = features.map((f) => f.feature).join(',');
        }

        if (startDate) {
            formattedParams.start_date = startDate;
        }

        if (endDate) {
            formattedParams.end_date = endDate;
        }

        if (client.length) {
            const customerIds = client.map((c) => c.id).join(',');
            formattedParams.client_customer_id = customerIds;
        }

        if (debouncedSearch ? .trim()) {
            const cleanSearch = debouncedSearch
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-zA-Z0-9]/g, '');

            if (cleanSearch) {
                formattedParams.search = cleanSearch;
            }
        }
        setParams(formattedParams);
    };

    useEffect(() => {
        formatFilters();
        formatQueryParams();
        setApplyFilters(false);
    }, [applyFilters, debouncedSearch]);

    useEffect(() => {
        dispatch({
            type: 'LOAD_CUSTOMERS'
        });
    }, []);

    const handleClearFilters = () => {
        setFeatures([]);
        setStartDate('');
        setEndDate('');
        setStatuses([]);
        formatFilters();
        setFiltersApplied({
            statuses: '',
            features: '',
            date: '',
        });
        setParams({});
        setClient([]);
    };
    return ( <
        FiltersContext.Provider value = {
            {
                statuses,
                setStatuses,
                features,
                setFeatures,
                startDate,
                setStartDate,
                endDate,
                setEndDate,
                search,
                setSearch,
                debouncedSearch,
                setDebouncedSearch,
                applyFilters,
                setApplyFilters,
                filtersApplied,
                params,
                handleClearFilters,
                client,
                customers,
                setClient,
            }
        } >
        {
            children
        } <
        /FiltersContext.Provider>
    );
};