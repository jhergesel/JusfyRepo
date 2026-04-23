import { CreditQuantityCard,Icon } from "./FavoriteCard.styles";
import { FavoriteCardProps } from "./type";
import { toAbsoluteUrl } from '../../../../../../_metronic/_helpers';

export const PriceIndicator = ({query}:Pick<FavoriteCardProps,'query'>) => (
 <CreditQuantityCard>
    <Icon
      src={toAbsoluteUrl('/media/jusfinderuniversal/credit-dolar.svg')}
    />
    {query.universal_price}
  </CreditQuantityCard>
)