import { FavoriteCard } from "../FavoriteCard"
import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { ListTitle } from "./styles";
import { FavoriteListProps } from "./type";

export const FavoriteList=({
  favoriteCards,
  sensors,
  loading,
  handleDragEnd,
  onClickCard,
  handleFavoriteClick
}:FavoriteListProps)=>{
  if(favoriteCards.length===0) return null
  return (
    <>
      <ListTitle>Favoritos</ListTitle>
        {!loading &&
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={favoriteCards.map(card => `${card.id}`)}
              strategy={horizontalListSortingStrategy}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",            
                  justifyContent: "flex-start", 
                  alignItems: "flex-start",
                  gap: "16px",
                  width: "100%",
                  paddingBottom: "16px",
                }}
              >
                {favoriteCards.map(card => (
                  <FavoriteCard
                    key={`${card.id}`}
                    id={`${card.id}`}
                    query={card}
                    onClickFavorite={handleFavoriteClick(card.identification)}
                    onClick={onClickCard}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
       }
    </>
  )
}