import styled from "styled-components";
import SVG from "react-inlinesvg";
import {
    BACKGROUND_COLOR_DEFAULT
} from "../../Pages/constants";

export const ContainerTag = styled.div `
  width: ${({ width }) => width || "fit-content"};
  display: flex;
  position: relative;
  align-items: center;

  &::after {
    content: "Estamos finalizando a sua consulta. O retorno pode acontecer em até 24h.";
    position: absolute;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-family: "Noto Sans";
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    border-radius: 5px;
    background: #535353;
    white-space: nowrap;
    padding: 8px 16px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
    pointer-events: none;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 115%;
    left: 50%;
    top: -8px;
    transform: translateX(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: #535353 transparent transparent;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
    pointer-events: none;
  }

  &:hover::after,
  &:hover::before {
    opacity: 1;
    visibility: ${({ isTooltip }) => (isTooltip ? "visible" : "hidden")};
  }
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