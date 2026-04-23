import {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useReducer,
    useState,
} from 'react';
import {
    toast
} from 'react-toastify';
import {
    EventsSegment
} from '../../../../../helpers/EventsSegmentsCalculators';
import {
    jusfinderContext
} from '../../context';
import {
    deleteQueries
} from '../../service/deleteQueries';
import {
    loadQueriesPage
} from '../../service/loadQueries';
import {
    reprocessQueryData
} from '../../service/reprocessQuery';
import {
    ActionButtons
} from './context/components/ActionButton';
import {
    QUERIES_HISTORY,
    STATUS_COMPONENTS
} from './constants';

import {
    reducerJusfinderShared,
    initialState,
} from '../../../JusfinderShared/store';

import {
    createCustomer,
    deleteUser,
} from '../../../JusfinderShared/services/linkUserQuery';
import {
    updateLinkUserQuery
} from '../../../JusfinderShared/services/updateLinkUserQuery';

import {
    useLoadingCustomersJusfinder
} from '../../../JusfinderShared/hooks/useLoadingCustomers';
import {
    STATUS
} from '../MultipleQueries/constants';
import {
    STATUS_ENUM
} from '../../../components/constants';

const URL_MAPPINGS = {
    relationship_tree: (row) => `/relation_query/${row.document_type}/${row.id}`,
    professional_data: (row) => `/resultado/${row.feature_type_name}/${row.id}`,
    lawsuit: (row) => `/processual_query/${row.document_type}/${row.id}`,
    personal_data: (row) => `/resultado/${row.feature_type_name}/${row.id}`,
    list_vehicles: (row) => `/resultado/${row.feature_type_name}/${row.id}`,
    credit_restriction: (row) => `/resultado/${row.feature_type_name}/${row.id}`,
    company_information: (row) => `/resultado/${row.feature_type_name}/${row.id}`,
    company_partnership: (row) => `/resultado/${row.feature_type_name}/${row.id}`,
    vehicle_data: (row) => `/resultado/${row.feature_type_name}/${row.id}`,
    trademarks: (row) => `/resultado/${row.feature_type_name}/${row.id}`,
    cpf_registration_status: (row) =>
        `/resultado/${row.feature_type_name}/${row.id}`,
    economic_group: (row) => `/resultado/${row.feature_type_name}/${row.id}`,
    vehicle_tracking: (row) => `/resultado/${row.feature_type_name}/${row.id}`,
};

const getUrlsRedirects = (row) => {
    const urlGenerator = URL_MAPPINGS[row.feature_type_name];
    return urlGenerator ? urlGenerator(row) : null;
};

const getTypeQuery = (type, query_subtype) => {
    if (type === 'Grupo Econômico de CNPJ') {
        return QUERIES_HISTORY.get(query_subtype);
    }
    return type;
};

const getDate = (data) => {
    const isPending = data ? .status === STATUS_ENUM.PEnDING;
    const dateStr = data ? .date ? ? '';
    return isPending ? dateStr.split(' ')[0] : dateStr;
};

export const UseQueryHistory = () => {
    const [data, setData] = useState({});
    const [pagination, setPagination] = useState(0);
    const [queryParams, setQueryParams] = useState({});
    const [reprocessLoadingId, setReprocessLoadingId] = useState(false);
    const [openIndexMenu, setOpenIndexMenu] = useState(null);
    const [modalConfirmed, setModalConfirmed] = useState(false);
    const [queriesToDelete, setQueriesToDelete] = useState({});
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [state, dispatch] = useReducer(reducerJusfinderShared, initialState);

    const {
        customers
    } = useLoadingCustomersJusfinder();

    const {
        setPage,
        shouldReload,
        setShouldReload,
        setIsLoading,
        isLoading,
        openModal,
        modalCheckout,
        setModalCheckout,
        loadingModalCheckout,
        setLoadingModalCheckout,
        querieSelected,
        modalSuggestion,
        setModalSuggestion,
    } = useContext(jusfinderContext);

    const {
        HandleEvent
    } = EventsSegment();

    const closeModal = () => {
        setModalConfirmed(false);
    };
    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    const openModalConfirmed = () => {
        setModalConfirmed(true);
    };

    const closeModalCusTomer = useCallback(() => {
        dispatch({
            type: 'CLOSE_MODAL_CUSTOMER'
        });
    }, []);

    const onChangeCustomer = (customer) => {
        dispatch({
            type: 'SET_CUSTOMER',
            payload: {
                customer: customer,
            },
        });
    };

    const hasParams = queryParams ?
        Object.values(queryParams).some(
            (value) => value !== null && value !== undefined && value !== '',
        ) :
        false;

    const baseUrl = useMemo(
        () => `${process.env.REACT_APP_API_URL}/queries/list_queries`, [],
    );

    const baseParams = useMemo(
        () => ({
            items_per_page: 10,
        }), [],
    );

    const hasQueryPending = useMemo(() => {
        if (!data ? .data) return false;
        if (Array.isArray(data.data[0])) {
            return data.data.some((group) =>
                group.some((query) => query.status === 'pending'),
            );
        }
        return data.data.some((query) => query.status === 'pending');
    }, [data ? .data]);

    const reprocessQuery = useCallback(
        async (queryReprocess) => {
            setReprocessLoadingId(queryReprocess ? .id);
            try {
                await reprocessQueryData(queryReprocess ? .id);
                HandleEvent('Universal Repeat Query Clicked', {
                    query_type: queryReprocess ? .feature_type_name,
                });
                setShouldReload(true);
                setOpenIndexMenu(null);
            } catch (err) {
                if (err ? .response ? .status === 403) {
                    toast.error(
                        'Você não tem créditos suficientes para refazer esta consulta.',
                    );
                    setOpenIndexMenu(null);
                    const queryOption = {
                        identification: queryReprocess ? .feature_type_name,
                        name: queryReprocess ? .type,
                        price: queryReprocess ? .universal_price,
                    };

                    openModal('BUY_CREDITS_MODAL', {
                        queryOption,
                    });
                }
            } finally {
                setReprocessLoadingId(null);
            }
        }, [HandleEvent, setShouldReload, openModal],
    );

    const deleteQuery = useCallback(
        async (data) => {
            try {
                await deleteQueries(data ? .id);
                HandleEvent('Universal Query Performed Deleted', {
                    query_type: data ? .feature_type_name,
                    status: data ? .status,
                });
                setShouldReload(true);
                setOpenIndexMenu(null);
                setQueriesToDelete({});
                closeModal();
            } catch (error) {
                toast.error(
                    'Erro ao deletar consulta. Por favor, tente novamente mais tarde.',
                );
            }
        }, [HandleEvent, setShouldReload],
    );

    const openInNewTab = useCallback(
        (data) => {
            HandleEvent('Universal Query Report Downloaded', {
                query_type: data ? .feature_type_name,
                where: 'history',
            });
            window.open(data ? .pdf, '_blank');
        }, [HandleEvent],
    );

    const featureTypesUrl = useCallback(
        (row, context = '') => {
            if (!row ? .status || STATUS.includes(row ? .status)) {
                return;
            }

            HandleEvent('Universal Query Performed Opened', {
                where: context,
                query_type: row ? .feature_type_name,
            });

            const urlRedirect = getUrlsRedirects(row);
            if (urlRedirect) {
                window.open(urlRedirect, '_blank');
            }
        }, [HandleEvent],
    );
    const validationCustomer = useCallback(
        (customer) => {
            if (state.inputType === 'text') {
                if (!customer || customer ? .trim() === '') {
                    dispatch({
                        type: 'SET_ERROR',
                        payload: {
                            error: 'Preencha o nome do cliente'
                        },
                    });

                    return true;
                }
            }

            if (state.inputType === 'select') {
                if (!customer ? .name) {
                    dispatch({
                        type: 'SET_ERROR',
                        payload: {
                            error: 'Selecione um cliente'
                        },
                    });
                    return true;
                }
            }

            return false;
        }, [dispatch, state.inputType],
    );

    const linkUser = useCallback(async () => {
        if (validationCustomer(state.customer)) return;

        try {
            const response = await createCustomer(state.customer);
            toast.success('Cliente criado com sucesso!');
            onChangeCustomer(response.data);
            changeInputType('select');
            HandleEvent('Create User LinkUser', {
                is_universal: true,
                feature_type_name: state.feature_type_name,
                context: 'history',
            });
        } catch (error) {
            toast.error('Erro ao criar cliente. Tente novamente.');
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
            toast.success('Cliente desvinculado com sucesso!');
            closeModalCusTomer();
            setShouldReload(true);
            HandleEvent('Unlik User', {
                is_universal: true,
                feature_type_name: state.feature_type_name,
                context: 'history',
            });
        } catch (error) {
            toast.error('Erro ao desvincular cliente. Tente novamente.');
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
            toast.success('Cliente atualizado com sucesso!');
            setShouldReload(true);
            closeModalCusTomer();
            HandleEvent('Update Link User', {
                is_universal: true,
                feature_type_name: state.feature_type_name,
                context: 'history',
            });
        } catch (error) {
            toast.error('Erro ao atualizar cliente. Tente novamente.');
        }
    }, [
        setShouldReload,
        state,
        validationCustomer,
        closeModalCusTomer,
        HandleEvent,
    ]);

    const changeInputType = (inputType) => {
        dispatch({
            type: 'SET_INPUT_TYPE',
            payload: {
                inputType: inputType
            },
        });
    };

    useEffect(() => {
        dispatch({
            type: 'SET_ERROR',
            payload: {
                error: ''
            },
        });
    }, [state.customer, state.inputType]);

    const createMenuItems = useCallback(
        (data) => {
            const shouldShowDownloadButton = data ? .feature_type_name !== 'lawsuit';
            const hasCustomer = !!data ? .client_customer ? .name;

            const items = {
                success: [{
                        text: 'Abrir',
                        action: (e) => {
                            e.stopPropagation();
                            featureTypesUrl(data, 'button');
                        },
                    },
                    {
                        text: hasCustomer ? 'Editar cliente' : 'Vincular cliente',
                        action: (e) => {
                            e.stopPropagation();
                            HandleEvent(hasCustomer ? 'Edit Link User' : 'Click Link User', {
                                query_type: data ? .feature_type_name,
                                is_universal: true,
                                context: 'history',
                            });
                            dispatch({
                                type: 'OPEN_MODAL_CUSTOMER',
                                payload: {
                                    id: data.id,
                                    customer: data ? .client_customer,
                                    edit: hasCustomer,
                                    inputType: hasCustomer ? 'update' : 'select',
                                    feature_type_name: data ? .feature_type_name,
                                },
                            });
                        },
                    },
                    shouldShowDownloadButton && {
                        text: 'Baixar relatório',
                        action: (e) => {
                            e.stopPropagation();
                            openInNewTab(data);
                        },
                    },
                    {
                        text: 'Excluir',
                        action: (e) => {
                            e.stopPropagation();
                            setQueriesToDelete(data);
                            openModalConfirmed();
                        },
                    },
                ],
                error: [{
                        text: 'Refazer consulta',
                        action: (e) => {
                            e.stopPropagation();
                            reprocessQuery(data);
                        },
                    },
                    {
                        text: 'Excluir',
                        action: (e) => {
                            e.stopPropagation();
                            deleteQuery(data);
                        },
                    },
                ],
                pending: [{
                    text: hasCustomer ? 'Editar cliente' : 'Vincular cliente',
                    action: (e) => {
                        e.stopPropagation();
                        HandleEvent(hasCustomer ? 'Edit Link User' : 'Click Link User', {
                            query_type: data ? .feature_type_name,
                            is_universal: true,
                            context: 'history',
                        });
                        dispatch({
                            type: 'OPEN_MODAL_CUSTOMER',
                            payload: {
                                id: data.id,
                                customer: data ? .client_customer,
                                edit: hasCustomer,
                                inputType: hasCustomer ? 'update' : 'select',
                                feature_type_name: data ? .feature_type_name,
                            },
                        });
                    },
                }, ],
                error_global: [{
                    text: 'Excluir',
                    action: (e) => {
                        e.stopPropagation();
                        deleteQuery(data);
                    },
                }, ],
            };

            return items[data.status] || items.error_global;
        }, [
            featureTypesUrl,
            openInNewTab,
            deleteQuery,
            reprocessQuery,
            openModalConfirmed,
        ],
    );

    const openMenu = useCallback(
        (e, index, data) => {
            e.stopPropagation();
            if (openIndexMenu !== index) {
                HandleEvent('Universal Query Performed Opened', {
                    where: 'button',
                    query_type: data ? .feature_type_name,
                });
            }
            setOpenIndexMenu((prev) => (prev === index ? null : index));
            setQueriesToDelete({});
        }, [openIndexMenu, HandleEvent],
    );

    const loadQueries = useCallback(async () => {
        const params = new URLSearchParams({
            ...baseParams,
            page: pagination + 1,
            ...queryParams,
        }).toString();

        setIsLoading(true);
        try {
            const response = await loadQueriesPage(`${baseUrl}?${params}`);
            setData(response.data);
        } catch (error) {
            toast.error('Erro ao carregar consultas. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    }, [baseUrl, baseParams, pagination, queryParams, setIsLoading]);

    const itemCard = useMemo(() => {
        const cards = [];

        data ? .data ? .forEach((group, groupIndex) => {
            const isMultipleQuery = group.length > 1;

            if (isMultipleQuery) {
                const firstItem = group[0];
                const successCount = group.filter((item) => item.status === 'success')
                    .length;
                const pendingCount = group.filter((item) => item.status === 'pending')
                    .length;

                const errorCount = group.filter((item) => item.status === 'error')
                    .length;

                cards.push({
                    type: 'group',
                    document: firstItem.document,
                    client: firstItem ? .client_customer ? .name || '',
                    document_type: firstItem.document_type,
                    date: firstItem.date,
                    successCount,
                    pendingCount,
                    errorCount,
                    items: group.map((item, itemIndex) => {
                        const typeQuery = getTypeQuery(item ? .type, item ? .query_subtype);
                        return {
                            id: item ? .id,
                            typeQuery,
                            date: getDate(item),
                            status: item.status,
                            client: item ? .client_customer ? .name || '',
                            document_type: item.document_type,
                            feature_type_name: item.feature_type_name,
                            query_subtype: item.query_subtype,
                            statusComponent: STATUS_COMPONENTS[item ? .status] ||
                                STATUS_COMPONENTS.error_global,
                            actions: ( <
                                ActionButtons key = {
                                    `action-${item.id}-${groupIndex}-${itemIndex}`
                                }
                                onClick = {
                                    (e) =>
                                    openMenu(e, `${groupIndex}-${itemIndex}`, item)
                                }
                                type = {
                                    typeQuery
                                }
                                query_subtype = {
                                    item ? .query_subtype
                                }
                                menuOpen = {
                                    openIndexMenu === `${groupIndex}-${itemIndex}`
                                }
                                itemsMenu = {
                                    createMenuItems(item)
                                }
                                status = {
                                    item ? .status
                                }
                                reprocessLoading = {
                                    reprocessLoadingId === item ? .id
                                }
                                />
                            ),
                        };
                    }),
                });
            } else {
                const item = group[0];
                const typeQuery = getTypeQuery(item ? .type, item ? .query_subtype);

                cards.push({
                    type: 'single',
                    id: item.id,
                    document: item.document,
                    document_type: item.document_type,
                    client: item ? .client_customer ? .name || '',
                    feature_type_name: item.feature_type_name,
                    typeQuery,
                    date: getDate(item),
                    status: item.status,
                    statusComponent: STATUS_COMPONENTS[item ? .status] || STATUS_COMPONENTS.error_global,
                    actions: ( <
                        ActionButtons key = {
                            `action-${item.id}-${groupIndex}`
                        }
                        onClick = {
                            (e) => openMenu(e, groupIndex, item)
                        }
                        type = {
                            typeQuery
                        }
                        query_subtype = {
                            item ? .query_subtype
                        }
                        menuOpen = {
                            openIndexMenu === groupIndex
                        }
                        itemsMenu = {
                            createMenuItems(item)
                        }
                        status = {
                            item ? .status
                        }
                        reprocessLoading = {
                            reprocessLoadingId === item ? .id
                        }
                        />
                    ),
                });
            }
        });

        return cards;
    }, [
        data ? .data,
        openIndexMenu,
        openMenu,
        createMenuItems,
        reprocessLoadingId,
        data ? .client_customer ? .name,
    ]);

    const currPage = useMemo(() => pagination + 1, [pagination]);

    const changePage = useCallback(
        (page) => {
            if (page < 1 || page > data ? .totalPages || page === currPage) return;
            setPagination(page - 1);
            setOpenIndexMenu(null);
        }, [data ? .totalPages, currPage],
    );

    const reloadPage = useCallback(() => {
        setShouldReload(true);
        HandleEvent('Universal Query Refresh Button Clicked');
    }, [setShouldReload, HandleEvent]);

    useEffect(() => {
        setPagination(0);
    }, [queryParams]);

    useEffect(() => {
        if (shouldReload) {
            loadQueries();
            setShouldReload(false);
            if (reprocessLoadingId) {
                setPagination(0);
            }
        }
    }, [shouldReload, loadQueries, setShouldReload, reprocessLoadingId]);

    useEffect(() => {
        loadQueries();
    }, [loadQueries]);

    return {
        data,
        loading: isLoading,
        pagination,
        setData,
        setLoading: setIsLoading,
        setPagination,
        setPage,
        shouldReload,
        setShouldReload,
        featureTypesUrl,
        openInNewTab,
        getUrlsRedirects,
        itemCard,
        changePage,
        currPage,
        reloadPage,
        modalCheckout,
        setModalCheckout,
        loadingModalCheckout,
        setLoadingModalCheckout,
        querieSelected,
        hasQueryPending,
        setQueryParams,
        queryParams,
        modalConfirmed,
        closeModal,
        deleteQuery,
        queriesToDelete,
        hasParams,
        modalSuggestion,
        setModalSuggestion,
        expandedIndex,
        toggleExpand,
        state,
        dispatch,
        closeModalCusTomer,
        onChangeCustomer,
        linkUser,
        updateCustomer,
        customers,
        changeInputType,
        unlinkUser,
        setOpenIndexMenu,
    };
};