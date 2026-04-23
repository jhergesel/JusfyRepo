import {
  ButtonOpenBuyCredits,
  ContentInfo,
  IconInfoCredits,
  WrapperInfoCredits,
} from "../MultipleQueriesPage.styles";
import React from "react";
import { toAbsoluteUrl } from "../../../../../../../_metronic/_helpers";
import { InfoCredits } from "./types.InfoCredits";

export const InfoCredit = ({
  isVisible,
  qtdCredits,
  credits,
  openModal,
}: InfoCredits) => {
  return (
    <WrapperInfoCredits isVisible={isVisible}>
      <IconInfoCredits
        src={toAbsoluteUrl("/media/jusfinder/info-circle-down.svg")}
      />
      <ContentInfo>
        {" "}
        <span>
          Você possui apenas {credits} dos {qtdCredits} créditos necessários
          para a consulta, compre mais para conseguir realizá-la ou contrate um
          plano com mais créditos
        </span>
        <ButtonOpenBuyCredits onClick={() => openModal("BUY_CREDITS_MODAL")}>
          Comprar créditos
        </ButtonOpenBuyCredits>
      </ContentInfo>
    </WrapperInfoCredits>
  );
};
