import styled from "styled-components";
import Card from "@mui/material/Card";

export const CardCustom = styled(Card)
`
  box-shadow: none !important;
  border-radius: 7px;
  height: ${({ height }) => (height === "full" ? "100%" : height)};
  width: ${({ width }) => (width === "full" ? "100%" : width)};
  position: ${({ position }) => position};
  padding: ${({ padding }) => (padding ? padding : "0")};
  border: ${({ border }) => (border ? border : "none")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius + " !important" : "0"};
  flex-grow: ${({ grow }) => grow};
  overflow: ${({ overflow }) => overflow} !important;
`;