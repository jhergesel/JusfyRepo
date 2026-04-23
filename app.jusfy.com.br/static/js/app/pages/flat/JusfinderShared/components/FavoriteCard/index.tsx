import {
  CardWrapper,
  ContentCard,
  TitleWrapper,
  Icon,
  OrderButtonContainer,
  BottomContainer,
} from './FavoriteCard.styles';
import { toAbsoluteUrl } from '../../../../../../_metronic/_helpers';
import { FavoriteButton } from '../FavoriteButton';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FavoriteCardProps } from './type';
import { CreditsIndicator } from './creditsIndicator';
import { PriceIndicator } from './priceIndicator';


export const FavoriteCard = ({
  id,
  query,
  onClick,
  onClickFavorite,
  unavailable,
}: FavoriteCardProps) => {

    const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });
  const hasCredits = query.credit !== undefined 
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <CardWrapper ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ContentCard>
        <TitleWrapper>{query.name}</TitleWrapper>
        <FavoriteButton
          onPointerDown={(e) => e.stopPropagation()}
          onClick={onClickFavorite} 
          favorited
          />
      </ContentCard>
      <BottomContainer hasCredits={hasCredits}>
        {
         hasCredits ? (
            <CreditsIndicator query={query} unavailable={unavailable}/>
          ):(
            <PriceIndicator query={query}/>
          )
        }
        <OrderButtonContainer
          onPointerDown={(e) => e.stopPropagation()}
          onClick={e=>onClick(e,query)}>
          <Icon
            src={toAbsoluteUrl('/media/jusfinderuniversal/arrow.svg')}
            size={'20px'}
          />
        </OrderButtonContainer>
      </BottomContainer>
    </CardWrapper>
  );
};
