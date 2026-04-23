import styled from "styled-components";
import SVG from "react-inlinesvg";

export const ContainerSwitch = styled.div `
  display: flex;
  height: 40px;
  padding: 4px;

  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  width: fit-content;
  border-radius: 7px;
  background: #fff;

  @media (max-width: 578px) {
    width: calc(100% - 1px);
    justify-content: flex-start;
    position: fixed;
    top: 60px;
    left: 2px;
    overflow: hidden;
    padding: 16px;
    height: auto;
  }
`;

export const ButtonSwitch = styled.button `
  display: flex;
  padding: 4px 24px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border: none;
  border-radius: 3px 0 0 3px;
  background: ${({ isActive }) => (isActive ? "#f4f5f9" : "#fff")};
  transition: all ease-out;

  color: ${({ isActive }) => (isActive ? "#131313" : "#5E5E60")};
  font-family: ${({ theme }) => theme.typography.quartenary};
  font-size: 14px;
  font-style: normal;
  font-weight: ${({ isActive }) => (isActive ? "600" : "400")};
  line-height: 140%;

  svg path {
    stroke: ${({ isActive }) => (isActive ? "#131313" : "#5E5E60")};
  }

  @media (max-width: 578px) {
    height: 40px;
  }
`;
export const Icon = styled(SVG)
``;