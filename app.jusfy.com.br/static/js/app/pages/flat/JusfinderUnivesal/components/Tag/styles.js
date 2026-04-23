import styled from "styled-components";
import SVG from "react-inlinesvg";
import {
    BACKGROUND_COLOR_DEFAULT
} from "../../Pages/constants";

export const ContainerTag = styled.div `
  width: ${({ width }) => width || "fit-content"};
  display: flex;

  align-items: center;
`;
export const CardItemInfoTag = styled.div `
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${({ background }) =>
    background ? background : BACKGROUND_COLOR_DEFAULT};
  border-radius: 3px;
  padding: 8px 12px;
  gap: 8px;
  width: ${({ width }) => width || "fit-content"};
`;
export const CardItemInfoTagText = styled.span `
  color: #131313;
  font-family: ${({ theme }) => theme.typography.quartenary};
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  margin: 0 !important;
`;

export const Icon = styled(SVG)
``;