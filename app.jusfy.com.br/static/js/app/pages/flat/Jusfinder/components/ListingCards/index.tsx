import { Skeleton, Box } from '@mui/material';
import CardContent from '../CardContent';
import SubscriptionReachedJusfinder from '../ModalSubscriptionReached';
import { SKELETONS_AMOUNT } from './constants';
import * as S from './ListingCards.styles';
import { ModalForm } from '../../../components/ModalForm';
import {
  ARRAY_LENGTH_SIZE,
  URL_LINK_FORM,
} from '../../../components/constants';
import { SmartSearch } from 'app/pages/flat/JusfinderShared/components/SmartSearch';
import { EmptyStateFilters } from 'app/pages/flat/JusfinderShared/components/EmptyStateFilters/EmptyStateFilters';
import { MultipleQueryCard } from '../../../components/MultipleQueryCard/MultipleQueries';
import { useCard } from './useCard';
import { FavoriteList } from '../../../JusfinderShared/components/FavoriteList';

const ListingCards = () => {
  const {
    loading,
    filteredData,
    onClick,
    modalCheckout,
    setModalCheckout,
    loadingModalCheckout,
    setLoadingModalCheckout,
    querieSelected,
    openModal,
    modalSuggestion,
    setModalSuggestion,
    ChangePageQuery,
    filteredFavoritesData,
    sensors,
    handleDragEnd,
    handleFavoriteClick,
    isCardFavorited,
    isEmpty,
    search,
    setSearch,
    documents,
    setDocuments,
  } = useCard();

  return (
    <S.Container>
      <SmartSearch
        search={search}
        setSearch={setSearch}
        documents={documents}
        setDocuments={setDocuments}
        loading={loading}
        isUniversalJusfinder={false}
      />

      {loading &&
        SKELETONS_AMOUNT.map((_, i) => (
          <Skeleton
            key={i}
            variant="rounded"
            width={350}
            height={261}
            animation="wave"
            style={{ flexGrow: 1 }}
          />
        ))}
      {isEmpty && <EmptyStateFilters />}
      <FavoriteList
        favoriteCards={filteredFavoritesData}
        sensors={sensors}
        handleDragEnd={handleDragEnd}
        onClickCard={onClick}
        handleFavoriteClick={handleFavoriteClick}
        loading={loading}
      />
      {filteredFavoritesData.length > 0 && !isEmpty && (
        <S.ListTitle>Consultas</S.ListTitle>
      )}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(auto-fill, minmax(250px, 1fr))',
            md: 'repeat(auto-fill, minmax(280px, 1fr))',
            lg: 'repeat(auto-fill, minmax(300px, 1fr))',
          },
          gap: 3,
          width: '100%',
          margin: '0 auto',
          justifyContent: 'center',
        }}
      >
        {!loading && (
          <>
            {filteredData?.length > 0 && (
              <MultipleQueryCard onClick={ChangePageQuery} />
            )}
            {filteredData &&
              filteredData?.map((queryOption) => (
                <CardContent
                  queryOption={queryOption}
                  key={queryOption.id}
                  onClick={(e) => onClick(e, queryOption)}
                  openModal={openModal}
                  onFavoriteClick={handleFavoriteClick(
                    queryOption.identification,
                  )}
                  isCardFavorited={isCardFavorited}
                />
              ))}
          </>
        )}

        {!loading &&
          Array.from({
            length: Math.max(0, ARRAY_LENGTH_SIZE - filteredData.length - 1),
          }).map((_, index) => (
            <Box
              key={`placeholder-${index}`}
              sx={{
                width: '100%',
                height: 0,
                paddingBottom: '100px',
                visibility: 'hidden',
              }}
            />
          ))}
      </Box>

      <SubscriptionReachedJusfinder
        visible={modalCheckout}
        setModalCheckout={setModalCheckout}
        loadingCheckout={loadingModalCheckout}
        setLoadingCheckout={setLoadingModalCheckout}
        identification={querieSelected}
      />
      <ModalForm
        openModal={modalSuggestion}
        setOpenModal={setModalSuggestion}
        url={URL_LINK_FORM}
      />
    </S.Container>
  );
};

export default ListingCards;
