import React from "react";
import styled from "styled-components";
import {
    calculateRemainingValue
} from "../../../helpers/Refound";
import {
    Divider
} from "@material-ui/core";
import FloatToCurrency from "../../../helpers/FloatToCurrency";
import useSubscriptionStatus from "../../../hooks/useSubscriptionStatus";
import {
    Warning
} from "@material-ui/icons";

const Container = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 0;
`;

const WarningContainer = styled.div `
  display: flex;
  padding: 1rem 1.5rem;
  align-items: center;
  gap: 1rem;
  align-self: stretch;

  border-radius: var(--radius-large, 0.5rem);
  border: 1px solid var(--feedback-warning-warning-light, #ffeeb3);
  background: var(--feedback-warning-warning-lighter, #fff9e6);

  .MuiSvgIcon-root {
    font-size: 2rem;
  }

  .MuiSvgIcon-root path {
    fill: var(--feedback-warning-warning-dark, #ffb822);
  }

  span {
    color: var(--neutral-text-text-dark, #383839);
    font-weight: 400;
    font-size: 1rem; /* Reset from parent */
    line-height: 1.25rem;
  }

  strong {
    font-weight: 600;
  }
`;

const DescItem = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  span {
    color: var(--neutral-text-text-dark, #383839);
    font-weight: 400;
    font-size: 1rem; /* Reset from parent */
    line-height: 1.25rem;
  }

  strong {
    font-weight: 600;
  }
`;

const RefundInfo = ({
    newPlanAmount
}) => {
    const {
        expirationDate,
        startDate,
        planAmount,
        isExpired,
    } = useSubscriptionStatus();

    const {
        amount
    } = calculateRemainingValue(
        expirationDate,
        startDate,
        planAmount
    );

    if (!isExpired && planAmount) {
        const parsedAmount = `R$ ${FloatToCurrency(amount)}`;

        return ( <
            Container >
            <
            WarningContainer >
            <
            Warning / >
            <
            span >
            Será realizado um estorno no valor de {
                " "
            } <
            strong > {
                parsedAmount
            } < /strong> e uma nova cobrança será efetuada
            com o valor do novo plano e forma de pagamento escolhidos. <
                /span> <
                /WarningContainer>

                <
                DescItem >
                <
                span > Estorno < /span> <
                span >
                <
                strong > {
                    parsedAmount
                } < /strong> <
                /span> <
                /DescItem>

                <
                DescItem >
                <
                span > Nova cobrança < /span> <
                span >
                <
                strong > R$ {
                    FloatToCurrency(newPlanAmount)
                } < /strong> <
                /span> <
                /DescItem>

                <
                Divider component = "div" / >
                <
                /Container>
        );
    }

    return < > < />;
};

export default RefundInfo;