import {
  CardQuery,
  ContentCard,
  ContentCardDescription,
  ContentCardTitle,
  ContentCheckbox,
  CreditQuantityCard,
  Description,
  Icon,
} from "./CardOption.styles";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import React from "react";

import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import Tag from "../../../../components/flat/ui/Tag";
import { ICardOption } from "./types.CardOption";
import { Tooltip } from "../Tooltip/Tooltip";
import { INFO_QUERIES_MODAL } from "../../JusfinderUnivesal/components/ModalContent/QueryFormModal/constants";

export const CardOption = ({
  checked,
  feature_type_name,
  text_info_credit,
  credits,
  universal_price,
  description,
  onChange,
  isUniversal,
  name_query,
  valueCredits,
}: ICardOption) => {
  return (
    <CardQuery onClick={onChange}>
      <ContentCard>
        <ContentCheckbox checked={checked}>
          <FormControlLabel
            className="flex"
            control={<Checkbox checked={checked} onChange={onChange} />}
            label={""}
          />
        </ContentCheckbox>

        <ContentCardDescription>
          <ContentCardTitle>
            <span>
              {name_query}{" "}
              <Tooltip
                title={name_query}
                description={INFO_QUERIES_MODAL[feature_type_name] || ""}
              />
            </span>
            {isUniversal && (
              <CreditQuantityCard>
                <Icon
                  src={toAbsoluteUrl(
                    "/media/jusfinderuniversal/credit-dolar.svg"
                  )}
                />
                {universal_price}
              </CreditQuantityCard>
            )}
          </ContentCardTitle>
          <Description>{description}</Description>

          {!isUniversal ? (
            valueCredits > 0 ? (
              <Tag text={text_info_credit} />
            ) : (
              <Tag
                text={"Você não possui créditos"}
                backgroundColor={"#FBEAEC"}
                color={"#D83143"}
              />
            )
          ) : null}
        </ContentCardDescription>
      </ContentCard>
    </CardQuery>
  );
};
