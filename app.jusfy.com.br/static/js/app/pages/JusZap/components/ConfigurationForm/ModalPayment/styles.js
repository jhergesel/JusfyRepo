import styled from "styled-components";
import {
    Button
} from "@mui/material";

export const Container = styled.div `
  position: relative;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 500px;
  width: 90vw;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 95vw;
    padding: 1.5rem;
    border-radius: 8px;
    max-height: 95vh;
  }

  @media (max-width: 480px) {
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
    padding: 1rem;
  }
`;

export const CloseIcon = styled.div `
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  z-index: 1;

  &:hover {
    background-color: #F8F9FA;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Subtitle = styled.p `
  font-size: 0.875rem;
  color: #7E8299;
  margin: 0 0 0.5rem 0;
  font-weight: 500;
`;

export const Title = styled.h2 `
  font-size: 1.5rem;
  font-weight: 700;
  color: #181C32;
  margin: 0 0 1.5rem 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.125rem;
  }
`;

export const PlanCard = styled.div `
  background: linear-gradient(82deg, #FDEDE7 21.85%, #F8CAB7 295.44%);
  border: 1px solid #F8CAB7;
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
`;

export const PlanType = styled.span `
  font-size: 0.875rem;
  font-weight: 600;
  color: #7E8299;
  display: block;
  margin-bottom: 0.5rem;
`;

export const PriceContainer = styled.div `
  display: flex;
  align-items: baseline;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

export const Price = styled.span `
  font-size: 2rem;
  font-weight: 700;
  color: #181C32;
`;

export const DiscountBadge = styled.span `
  display: inline-block;
  background-color: #01AB7D;
  color: white;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 6px;
  margin-bottom: 0.5rem;
`;

export const PricePerMonth = styled.span `
  font-size: 1rem;
  color: #7E8299;
  margin-left: 0.25rem;
`;

export const FeaturesList = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FeatureItem = styled.div `
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-size: 0.875rem;
    color: #181C32;
    font-weight: 400;
  }
`;

export const CheckIcon = styled.div `
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(1, 171, 125, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 12px;
    height: 12px;
    color: #01AB7D;
  }
`;

export const Header = styled.div `
  margin-bottom: 1.5rem;
`;

export const DisclaimerBox = styled.div `
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  background-color: #FFF9F5;
  border: 1px solid #FFE4D9;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
`;

export const DisclaimerIcon = styled.div `
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #E94F0E;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 12px;
    height: 12px;
    color: white;
  }
`;

export const DisclaimerText = styled.p `
  font-size: 0.8125rem;
  color: #7E8299;
  margin: 0;
  line-height: 1.5;
`;

// Mantidos para compatibilidade
export const SelectedPlan = styled.p `
  font-size: 0.875rem;
  color: #7E8299;
  margin: 0 0 1.5rem 0;
  font-weight: 600;
`;

export const ListItems = styled.ul `
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
`;

export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const OriginalPrice = styled.span `
  font-size: 0.875rem;
  color: #7E8299;

  span:first-child {
    text-decoration: line-through;
    margin-right: 0.25rem;
  }
`;

export const FinalPrice = styled.span `
  font-size: 1.5rem;
  font-weight: 700;
  color: #181C32;
  margin-left: 0.25rem;
`;

export const Warning = styled.div `
  font-size: 0.75rem;
  color: #7E8299;
  font-style: italic;
`;

export const PaymentForm = styled.div `
  margin-top: 1.5rem;
`;

export const PaymentMethodSelector = styled.div `
  margin-bottom: 1rem;
`;



export const PaymentButton = styled(Button)
`
  && {
    width: 100%;
    padding: 16px;
    background-color: #E94F0E;
    color: white;
    border-radius: 8px;
    font-weight: 600;
    text-transform: none;
    font-size: 1rem;

    &:hover {
      background-color: #D63E00;
    }

    &:disabled {
      background-color: #E7E8EC;
      color: #7E8299;
    }
  }
`;

// Confirmation Modal Styles
export const ConfirmationOverlay = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

export const ConfirmationModal = styled.div `
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 400px;
  width: 90vw;
  text-align: center;
`;

export const ConfirmationHeader = styled.div `
  margin-bottom: 1rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #181C32;
    margin: 0;
  }
`;

export const ConfirmationContent = styled.div `
  margin-bottom: 2rem;

  p {
    font-size: 0.875rem;
    color: #7E8299;
    line-height: 1.5;
    margin: 0 0 1rem 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const ConfirmationButtons = styled.div `
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const ConfirmButton = styled(Button)
`
  && {
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    text-transform: none;
    border: 1px solid #E7E8EC;
    color: #7E8299;
    background: white;

    &:hover {
      border-color: #01AB7D;
      color: #01AB7D;
      background-color: rgba(1, 171, 125, 0.04);
    }
  }
`;

export const CancelButton = styled(Button)
`
  && {
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    text-transform: none;
    background-color: #01AB7D;
    color: white;

    &:hover {
      background-color: #019968;
    }
  }
`;