import MenuItem from "@mui/material/MenuItem";
import SVG from "react-inlinesvg";
import styled, {
    keyframes
} from "styled-components";

export const Container = styled.div `
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
  color: #131313;
  font-family: "Noto Sans";
  width: 100%;
`;

export const OnBack = styled.div `
  cursor: pointer;
`;

export const Header = styled.div `
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;

export const Info = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
  }

  p {
    color: #5e5e60;
    margin: 0;
  }

  span {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const Close = styled.div `
  position: absolute;
  top: -18px;
  right: -12px;
  cursor: pointer;
  z-index: 2;
`;

export const RadioContainer = styled.div `
  padding: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid ${({ selected }) => (selected ? "#01AB7D" : "#E7E8EC")};
  cursor: pointer;

  .MuiRadio-root {
    max-height: 20px;
  }

  &:first-of-type {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;
const fadeIn = keyframes `
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const OptionContainer = styled.div `
  padding: 16px;
  border: 1px solid #e7e8ec;
  background: #fafbff;
  animation: ${fadeIn} 0.2s ease-in-out;
`;

export const CustomOption = styled(MenuItem)
`
  display: flex !important;
  align-items: center !important;
  gap: 10px !important;
  padding-left: 6px !important;
  justify-content: flex-start;
`;

export const InputLabel = styled.span `
  color: #111219;
  font-size: 14px;
  font-family: "Noto Sans";
  font-weight: 400;

  &:after {
    content: " *";
    color: #e91229;
  }
`;

export const CardContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InputWrapper = styled.div `
  display: flex;
  gap: 24px;
`;

export const CardInputLabel = styled.span `
  color: #111219;
  font-size: 14px;
  font-family: "Noto Sans";
  font-weight: 400;

  &:after {
    content: " *";
    color: #e91229;
  }
`;

export const Error = styled.label `
  color: #f64e60;
`;

export const ButtonText = styled.span `
  font-family: "Noto Sans";
  font-weight: 600;
  font-size: 14px;

  ${({ secondary }) => (secondary ? `
text - decoration: underline;
` : null)}
`;

export const CardFlag = styled(SVG)
`
  position: absolute;
  top: 43px;
  left: 15px;
`;

export const InputCardNumberWrapper = styled.div `
  position: relative;
  min-width: 262px;
`;

export const PlanTitle = styled.h2 `
  margin-bottom: 10px;
`;

export const PromoContainer = styled.div `
  margin-top: 10px;
`;

export const PromoText = styled.p `
  color: ${props => props.theme.colors.primary};
`;

export const BillingText = styled.p `
  color: ${props => props.theme.colors.text};
`;

export const PriceContainer = styled.div `
  display: flex;
  align-items: baseline;
  margin-bottom: auto;
`;

export const Price = styled.span `
  font-size: 20px;
`;

export const PriceUnit = styled.span `
  font-size: 14px;
  margin-left: 5px;
`;

export const MainCardBadge = styled.span `
  background: rgba(1, 171, 125, 0.1);
  color: #01ab7d;
  font-family: "Noto Sans";
  font-weight: 600;
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 10px;
`;