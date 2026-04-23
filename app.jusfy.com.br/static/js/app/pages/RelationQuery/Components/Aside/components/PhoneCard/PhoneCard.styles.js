import styled from "styled-components";

export const Container = styled.div `
  flex-wrap: wrap;
  flex-direction: row !important;
  margin-left: 10px;
  height: ${({ expand }) => (expand ? "auto" : "50px")};
  overflow: overlay;
  transition: all 0.3s;

  span {
    margin-right: 10px !important;
  }
`;

export const ExpandButton = styled.button `
  display: ${({ hide }) => (hide ? "none" : "block")};
  margin-top: 24px;
  position: relative;
  left: 85%;
  transition: all 0.3s;
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: 500;
  color: #05bdfa;
  font-size: 10px;
  border: 0;
  outline: none;
  background: transparent;
  text-decoration: underline;
`;