import { useCallback, useMemo, useState } from "react";
import {
  useSensors,
  useSensor,
  PointerSensor,
  KeyboardSensor,
  DragEndEvent,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates, arrayMove } from "@dnd-kit/sortable";
import type { AxiosResponse } from "axios";
import { EventsSegment } from "../../../../helpers/EventsSegmentsCalculators";
import {
  addFavoriteQueries,
  removeFavoriteQueries,
  reorderFavoriteQueries,
} from "../services/favoriteQueries";
import type { LoadProductsResponseData } from "../services/types";
import { toast } from "react-toastify";
import { HttpStatus } from "app/utils/httpStatus";

const extractFavoritedCards = (
  data: LoadProductsResponseData["data"]
): LoadProductsResponseData["data"] => {
  return data
    .filter((product) => product.is_favorite)
    .sort((a, b) => a.favorite_order - b.favorite_order);
};

type Params = {
  dataQueries: LoadProductsResponseData["data"];
  refetchQueries: () => Promise<unknown> | void;
};

export const useFavorites = ({ dataQueries, refetchQueries }: Params) => {
  const { HandleEvent } = EventsSegment();
  const [favoriteCards, setFavoriteCards] = useState<
    LoadProductsResponseData["data"]
  >([]);

  const favoriteIds = useMemo(() => {
    return new Set(favoriteCards.map((c) => c.identification));
  }, [favoriteCards]);

  const isCardFavorited = useCallback(
    (identification: string) => favoriteIds.has(identification),
    [favoriteIds]
  );

  const initFavoritesFromQueries = useCallback(
    (queries: LoadProductsResponseData["data"]) => {
      setFavoriteCards(extractFavoritedCards(queries));
    },
    []
  );

  const handleFavoriteClick = useCallback(
    (identification: string) => async () => {
      let res: AxiosResponse;

      if (isCardFavorited(identification)) {
        setFavoriteCards((prev) =>
          prev.filter((card) => card.identification !== identification)
        );
        res = await removeFavoriteQueries(identification);
        if(res.status===HttpStatus.OK){
          toast.success("Consulta removida dos favoritos");
          HandleEvent(`Removed Favorite Query: ${identification}`);
        }
        else
          toast.error("Falha ao remover consultas dos favoritos");
      } else {
        const card = dataQueries.find((card) => card.identification === identification);
        if (!card) return;
        setFavoriteCards((prev) => [...prev, card]);
        res = await addFavoriteQueries(identification);
        if(res.status===HttpStatus.CREATED){
          toast.success("Consulta adicionada aos favoritos");
          HandleEvent(`Added Favorite Query: ${identification}`);
        }
        else
          toast.error("Falha ao adicionar consultas dos favoritos");
      }
      await refetchQueries();
    },
    [dataQueries, isCardFavorited, refetchQueries]
  );

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = useCallback(
    async (event: DragEndEvent) => {
      const { active, over } = event;
      if (!over || active.id === over.id) return;
      const oldIndex = favoriteCards.findIndex((card) => `${card.id}` === active.id);
      const newIndex = favoriteCards.findIndex((card) => `${card.id}` === over.id);
      if (oldIndex < 0 || newIndex < 0) return;
      const updated = arrayMove(favoriteCards, oldIndex, newIndex);
      setFavoriteCards(updated);
      await reorderFavoriteQueries({
        products: updated.map((fav, index) => ({
          feature_name: fav.identification,
          order: index,
        })),
      });
    },
    [favoriteCards]
  );

  return {
    favoriteCards,
    setFavoriteCards,
    initFavoritesFromQueries,
    isCardFavorited,
    handleFavoriteClick,
    sensors,
    handleDragEnd,
  };
};
