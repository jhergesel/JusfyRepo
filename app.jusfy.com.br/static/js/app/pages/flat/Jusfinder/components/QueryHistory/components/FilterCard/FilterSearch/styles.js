import styled from "styled-components";

export const Filter = styled.div `
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 16px;
  width: 300px;
  border-radius: 6px;
  border: 1px solid #e7e8ec;
  input {
    width: 100%;
    padding: 8px 16px;
    border: none;
    opacity: 0.8;
    background: transparent;
    outline: none;
    font-weight: 400;
    font-size: 14px;
    font-style: initial;
    font-family: "Noto Sans";
    color: ${({ theme }) => theme.colors.black.primary};
  }
  svg {
    min-width: 14px;
  }
`;