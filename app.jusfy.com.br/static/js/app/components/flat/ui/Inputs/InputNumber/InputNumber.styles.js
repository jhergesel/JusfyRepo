import styled from "styled-components";
import SVG from "react-inlinesvg";

export const Container = styled.div `
label {
    color: #111219;
    font-family: "Noto Sans";
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 4px;
  }
}`;

export const InputContainer = styled.div `
  border: 1px solid #cac9cf;
  position: relative;
  border-radius: 5px;
  padding: 4px 12px;

  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
`;

export const Input = styled.input `
  -moz-appearance: textfield;

  /* Webkit browsers like Chrome and Safari */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  -webkit-appearance: none;

  outline: none;
  border: 0;

  color: #111219;

  text-align: center;
  font-family: "Noto Sans" !important;
  font-size: 19px;
  font-weight: 400;
  width: 32px;
`;

export const ActionInput = styled(SVG)
`
  cursor: pointer;

  &:hover {
    path {
      fill: #111219;
    }
  }
`;