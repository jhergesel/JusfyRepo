import styled from "@emotion/styled";

import {
    INPUT_COLORS
} from "./constants";

export const CreditCardContainer = styled.div `
  position: relative;

  img {
    height: 23px;
    position: absolute;
    right: 9px;
    top: 8px;
  }
`;

export const CoupomWrapper = styled.div `
  width: 100%;
  max-width: 515px;
  padding-left: 12px;
`;

export const CoupomBtn = styled.button `
  width: 145px;
  padding: 0 20px;
  position: relative;
  left: -12px;
`;

export const CoupomInput = styled.input `
  border: 2px solid;
  border-radius: 10px;
  border-color: ${props =>
    props.feedback ? INPUT_COLORS?.get(props.feedback) : "#e4e6ef"};
  color: ${props =>
    props.errorType === "ERROR"
      ? INPUT_COLORS?.get(props.errorType)
      : "#3f4254"};
  display: block;
  width: 100%;
  height: calc(1.5em + 1.3rem + 2px);
  padding: 0.65rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-clip: padding-box;
  box-shadow: none;
`;

export const CoupomInputMessage = styled.label `
  color: ${props => props.color};
  margin-top: 10px;
`;