import Button from "@mui/material/Button";
import styled from "styled-components";

export const ButtonCustom = styled(Button)
`
  box-shadow: none !important;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  font-family: "Noto Sans" !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  text-transform: none !important;
  color: ${({ Scolor }) => Scolor + "!important"};
  background-color: ${({ SbackgroundColor, disabled }) =>
    disabled ? "gray !important" : SbackgroundColor + "!important"};
  padding: ${({ Spadding }) => Spadding + "!important"};
  width: ${({ Swidth }) => Swidth + "!important"};
  border: ${({ Sborder }) => Sborder + "!important"};
  border-radius: ${({ SborderRadius }) => SborderRadius + "!important"};
  ${({ disabled }) => disabled && "pointer-events: none"};
  ${({ height }) => height && `
height: $ {
    height
};
`}
  align-self: ${({ alignSelf }) => alignSelf}
`;