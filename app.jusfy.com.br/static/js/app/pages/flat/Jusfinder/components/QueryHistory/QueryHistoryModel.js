import {
    QueryHistoryItems
} from "./components/HistoryItems";
import {
    EmptyState
} from "./components/EmptyState";
import * as S from "./QueryHistory.styles";
import SubscriptionReachedJusfinder from "../ModalSubscriptionReached";
import {
    FiltersProvider
} from "./context/FiltersContext";
import FilterCard from "./components/FilterCard/FilterCard";
import {
    Loading
} from "./components/Loading";
import {
    Card
} from "./components/Card";
import {
    ModalQueryHistory
} from "./components/ModalHistory";
import {
    ModalForm
} from "../../../components/ModalForm";
import {
    URL_LINK_FORM
} from "../../../components/constants";
import {
    ModalLink
} from "../../../JusfinderShared/components/ModalLInkUserQuery/Modal";

export const QueryHistoryModel = ({
    data,
    loading,
    setShouldReload,
    featureTypesUrl,
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
    modalConfirmed,
    closeModal,
    deleteQuery,
    queriesToDelete,
    modalSuggestion,
    setModalSuggestion,
    hasParams,
    setPage,
    expandedIndex,
    toggleExpand,
    state,
    closeModalCusTomer,
    onChangeCustomer,
    linkUser,
    updateCustomer,
    customers,
    changeInputType,
    unlinkUser,
    setOpenIndexMenu,
}) => {
    const handleHistory = () => {
        const showLoading = loading && (!data ? .data || data ? .data);

        return ( <
            FiltersProvider > {
                showLoading ? ( <
                    Card >
                    <
                    Loading / >
                    <
                    /Card>
                ) : data ? .data ? .length > 0 || hasParams ? ( <
                    >
                    <
                    FilterCard loading = {
                        loading
                    }
                    />

                    <
                    QueryHistoryItems data = {
                        data
                    }
                    changePage = {
                        changePage
                    }
                    currPage = {
                        currPage
                    }
                    featureTypesUrl = {
                        featureTypesUrl
                    }
                    itemCard = {
                        itemCard
                    }
                    loading = {
                        loading
                    }
                    setShouldReload = {
                        setShouldReload
                    }
                    reloadPage = {
                        reloadPage
                    }
                    hasQueryPending = {
                        hasQueryPending
                    }
                    setQueryParams = {
                        setQueryParams
                    }
                    hasParams = {
                        hasParams
                    }
                    expandedIndex = {
                        expandedIndex
                    }
                    toggleExpand = {
                        toggleExpand
                    }
                    setOpenIndexMenu = {
                        setOpenIndexMenu
                    }
                    /> <
                    />
                ) : ( <
                    EmptyState setQueryParams = {
                        setQueryParams
                    }
                    setPage = {
                        setPage
                    }
                    />
                )
            } <
            /FiltersProvider>
        );
    };

    return ( <
        S.Container > {
            handleHistory()
        }

        <
        SubscriptionReachedJusfinder visible = {
            modalCheckout
        }
        setModalCheckout = {
            setModalCheckout
        }
        loadingCheckout = {
            loadingModalCheckout
        }
        setLoadingCheckout = {
            setLoadingModalCheckout
        }
        identification = {
            querieSelected
        }
        />

        <
        ModalQueryHistory open = {
            modalConfirmed
        }
        closeModal = {
            closeModal
        }
        modalConfirmed = {
            () => deleteQuery(queriesToDelete)
        }
        /> <
        ModalForm openModal = {
            modalSuggestion
        }
        setOpenModal = {
            setModalSuggestion
        }
        url = {
            URL_LINK_FORM
        }
        />

        <
        ModalLink open = {
            state.modalCustomer
        }
        closeModal = {
            closeModalCusTomer
        }
        value = {
            state.customer
        }
        onChange = {
            onChangeCustomer
        }
        submit = {
            state.inputType === "text" ? linkUser : updateCustomer
        }
        inputType = {
            state.inputType
        }
        error = {
            state.error
        }
        customers = {
            customers
        }
        setInputType = {
            changeInputType
        }
        unlinkUser = {
            unlinkUser
        }
        /> <
        /S.Container>
    );
};