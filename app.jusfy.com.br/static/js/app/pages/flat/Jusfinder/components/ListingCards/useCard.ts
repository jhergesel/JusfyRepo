import { DocumentFilter } from './../../../JusfinderShared/components/SmartSearch/types';
import { QUERIES } from './../../../JusfinderShared/constants/listingCards';
import { useSmartSearch } from 'app/pages/flat/JusfinderShared/components/SmartSearch/useSmartSearch';
import { loadProducts } from './../../../JusfinderShared/services/loadProducts';
import { useContext, useEffect, useMemo, useState } from 'react';
import { jusfinderContext } from '../../context';
import { EventsSegment } from '../../../../../helpers/EventsSegmentsCalculators';
import { handleModal, sortList } from '../../utils/utils.jusfinder';
import { URL_SCHEDULE } from 'app/pages/flat/JusfinderShared/constants/listingCards';
import { useFavorites } from 'app/pages/flat/JusfinderShared/hooks/useFavorites';
import { useQuery } from '@tanstack/react-query';
import { JusfinderContextValue } from '../../context/type';
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
    shouldReload,
    setShouldReload,
    openModal,
    fillQueries,
    modalCheckout,
    setModalCheckout,
    loadingModalCheckout,
    setLoadingModalCheckout,
    modal,
    modalSuggestion,
    setModalSuggestion,
    setPage,
    data,
    setData,
  } = useContext(jusfinderContext) as JusfinderContextValue;

  const { HandleEvent } = EventsSegment();

  const { isLoading, refetch } = useQuery({
    queryFn: async () => {
      const response = await loadProducts();
      return {
        data: sortList(response.data.data),
        availableCredits: response.data.availableCredits,
      };
    },
    onSuccess: (data) => {
      setData(data.data);
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
    dataQueries: data,
    refetchQueries: refetch,
  });

  const favoriteIds = useMemo(() => {
    return new Set(favoriteCards.map((card) => card.identification));
  }, [favoriteCards]);

  const filteredData = useMemo(() => {
    const baseData =
      search.trim().length > 0 || documents.length > 0
        ? data?.filter((item) => matchedIds.has(item.identification))
        : data;

    return baseData?.filter((item) => !favoriteIds.has(item.identification));
  }, [search, documents, data, matchedIds, favoriteIds]);

  const filteredFavoritesData = useMemo(() => {
    return search.trim().length > 0 || documents.length > 0
      ? favoriteCards?.filter((item) => matchedIds.has(item.identification))
      : favoriteCards;
  }, [search, documents, favoriteCards, matchedIds]);

  const isEmpty = useMemo(
    () => !isLoading && data?.length > 0 && filteredData?.length === 0,
    [isLoading, data, filteredData],
  );

  useEffect(() => {
    if (shouldReload) {
      setShouldReload(false);
      refetch();
    }
  }, [shouldReload, setShouldReload, refetch]);

  const onClick = (event, queryOption) => {
    if (event) {
      event.stopPropagation();
    }

    fillQueries();

    setQuerySelected(queryOption?.identification);

    HandleEvent('Query Type Selected', {
      query_type: queryOption.identification,
    });

    handleModal(queryOption, openModal);
  };

  const openSchedule = () => {
    HandleEvent('Jusfinder - CTA Múltiplas Consultas', {
      action: 'open_schedule',
    });
    const win = window.open(URL_SCHEDULE, '_blank', 'noopener,noreferrer');
    if (win) win.opener = null;
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
        isUniversal: false,
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
    loading: isLoading,
    data,
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
    openSchedule,
    modalSuggestion,
    setModalSuggestion,
    ChangePageQuery,
    favoriteCards,
    handleDragEnd,
    handleFavoriteClick,
    initFavoritesFromQueries,
    isCardFavorited,
    sensors,
    filteredFavoritesData,
    filteredData,
    isEmpty,
    search,
    setSearch,
    documents,
    setDocuments,
  };
};

export { useCard };
