import { QUERIES } from './../../../JusfinderShared/constants/listingCards';
import { DocumentFilter } from './../../../JusfinderShared/components/SmartSearch/types';
import { useFavorites } from './../../../JusfinderShared/hooks/useFavorites';
import { useContext, useMemo, useState } from 'react';
import { jusfinderContext } from '../../context';
import { loadProducts } from '../../../JusfinderShared/services/loadProducts';
import { EventsSegment } from '../../../../../helpers/EventsSegmentsCalculators';
import { handleModal, sortList } from '../../utils/utils.jusfinder';
import { useQuery } from '@tanstack/react-query';
import { JusfinderContextType } from '../../context/type';
import { useSmartSearch } from 'app/pages/flat/JusfinderShared/components/SmartSearch/useSmartSearch';
import { eventTracker } from 'app/modules/Segment';

const useCard = () => {
  const [querieSelected, setQuerySelected] = useState(null);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const [documents, setDocuments] = useState<DocumentFilter[]>([]);
  const { search, setSearch, results } = useSmartSearch(QUERIES, documents);
  const matchedIds = useMemo(
    () => new Set(results.map((result) => result.id)),
    [results],
  );

  const {
    setShouldReload,
    openModal,
    fillQueries,
    modalCheckout,
    setModalCheckout,
    loadingModalCheckout,
    setLoadingModalCheckout,
    modal,
    setIsLoading,
    setCreditAvailable,
    modalSuggestion,
    setModalSuggestion,
    setPage,
    dataQueries,
    setDataQueries,
  } = useContext(jusfinderContext) as JusfinderContextType;
  const { HandleEvent } = EventsSegment();

  const { data, isLoading: loading, refetch } = useQuery({
    queryFn: async () => {
      const response = await loadProducts();
      return {
        data: sortList(response.data.data),
        availableCredits: response.data.availableCredits,
      };
    },
    onSuccess: (data) => {
      setCreditAvailable(data.availableCredits);
      setDataQueries(data.data);
      initFavoritesFromQueries(data.data);
    },
    queryKey: ['queries'],
    refetchOnMount: true,
  });

  const {
    favoriteCards,
    handleDragEnd,
    handleFavoriteClick,
    initFavoritesFromQueries,
    isCardFavorited,
    sensors,
  } = useFavorites({
    dataQueries,
    refetchQueries: refetch,
  });

  const favoriteIds = useMemo(() => {
    return new Set(favoriteCards.map((card) => card.identification));
  }, [favoriteCards]);

  const filteredData = useMemo(() => {
    const baseData =
      search.trim().length > 0 || documents.length > 0
        ? dataQueries?.filter((item) => matchedIds.has(item.identification))
        : dataQueries;

    return baseData?.filter((item) => !favoriteIds.has(item.identification));
  }, [search, documents, dataQueries, matchedIds, favoriteIds]);

  const filteredFavoritesData = useMemo(() => {
    return search.trim().length > 0 || documents.length > 0
      ? favoriteCards?.filter((item) => matchedIds.has(item.identification))
      : favoriteCards;
  }, [search, documents, favoriteCards, matchedIds]);

  const isEmpty = useMemo(
    () => !loading && dataQueries?.length > 0 && filteredData?.length === 0,
    [loading, dataQueries, filteredData],
  );

  const onClick = (event, queryOption) => {
    if (event) {
      event.stopPropagation();
    }

    fillQueries();

    setQuerySelected(queryOption?.identification);

    HandleEvent('Query Type Selected (Universal)', {
      query_type: queryOption.identification,
      isUniversal: true,
    });

    handleModal(queryOption, openModal, data.availableCredits);
  };

  const ChangePageQuery = () => {
    setPage('MultipleQueriesPage');
    eventTracker.track({
      event: 'Card MultipleQueries Clicked',
      properties: {
        category: 'core_usage',
        owner: 'Jusfinder',
        relevant_user_activity: true,
        event_meaning:
          'Usuário clicou no card de Múltiplas Consultas para ir para a página de Múltiplas Consultas',
        isUniversal: true,
      },
      context: {
        groupId: 'jusfinder-group',
        library: {
          name: 'jusfinder-library',
          componente: 'card-multiple-queries',
        },
      },
    });
  };

  return {
    loading: loading,
    setIsLoading,
    queries: dataQueries || [],
    creditAvailable: data?.availableCredits || 0,
    isSubscriptionModalOpen,
    setIsSubscriptionModalOpen,
    onClick,
    setShouldReload,
    modalCheckout,
    setModalCheckout,
    loadingModalCheckout,
    setLoadingModalCheckout,
    modal,
    querieSelected,
    setQuerySelected,
    openModal,
    modalSuggestion,
    setModalSuggestion,
    ChangePageQuery,
    handleDragEnd,
    sensors,
    handleFavoriteClick,
    favoriteCards,
    isCardFavorited,
    filteredData,
    filteredFavoritesData,
    isEmpty,
    search,
    setSearch,
    documents,
    setDocuments,
  };
};

export { useCard };
