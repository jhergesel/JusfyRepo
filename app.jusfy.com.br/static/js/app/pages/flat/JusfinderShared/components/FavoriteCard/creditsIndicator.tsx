
import Tag from "../../../../../components/flat/ui/Tag";
import { pluralize } from '../../../../flat/components/utils/queryUtils';
import { FavoriteCardProps } from "./type";

export const CreditsIndicator = ({query,unavailable}:Pick<FavoriteCardProps,'query'|'unavailable'>) => {
  if(!unavailable && query.is_unlimited)
    return (<Tag text={"Ilimitados"} height="21px"/>)
  if(query.credit)
    return (<Tag text={`${pluralize("crédito", query.credit, "créditos")}`} height="21px"/>)
  return <Tag
          color="#D71D1D"
          backgroundColor="rgba(255, 229, 229, 0.8)"
          text="Sem créditos"
          height="21px"
        />
}