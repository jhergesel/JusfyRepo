import styled from "styled-components";

export const Container = styled.div `
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: absolute;
  border-radius: 7px 7px 0px 0px;
  font-family: "Noto Sans" !important;
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 0;
  top: -16px;
  height: 30px;
  width: ${({ width }) => (width === "full" ? "100%" : width + "px")};
  z-index: 1;

  span {
    font-weight: 700;
    font-size: 14px;
  }

  path {
    fill: ${({ color }) => `
$ {
    color
}!important `};
  }
`;