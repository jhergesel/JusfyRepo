import { CreditQuantityCard, Icon } from "../MultipleQueriesPage.styles";
import React from "react";

import { toAbsoluteUrl } from "../../../../../../../_metronic/_helpers";
export const QuantityCredit = ({ credit }: { credit: number }) => {
  return (
    <CreditQuantityCard>
      <Icon src={toAbsoluteUrl("/media/jusfinderuniversal/credit-dolar.svg")} />
      {credit}
    </CreditQuantityCard>
  );
};
