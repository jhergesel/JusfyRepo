import styled from "styled-components";
import {
    INPUT_COLORS
} from "./constants";

export const CoupomWrapper = styled.div `
  width: 100%;
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

export const CupomReferenceContainer = styled.div `
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-top: 10px;

  div {
    flex: 1;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;