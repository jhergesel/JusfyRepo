import styled from "styled-components";

export const Container = styled.div `
  background-color: #f9fbfd;
  border: 1px solid #ebedf3;
  border-radius: 5px;
  padding: 27px 14px;
  position: relative;
  transition: all 3s;
  height: 100%;

  ${({ colapsed }) =>
    colapsed
      ? `
max - height: 75 px;
overflow: hidden;
`
      : ""};

  div {
    display: flex;
    flex-direction: column;
    row-gap: 13px;
    font-family: ${({ theme }) => theme.typography.primary};
    font-size: 12px;

    span {
      font-weight: 300;

      span {
        font-weight: 700;
        opacity: 0.8;
        text-transform: capitalize;
      }
    }
  }
`;

export const Title = styled.h1 `
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: 500;
  font-size: 16px;
`;

export const Hr = styled.hr `
  margin: 28px 0 25px;
`;

export const ColapseButton = styled.button `
  outline: none;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: 500;
  font-size: 11px;
  position: absolute;
  right: 8px;
  top: 35px;

  &:after {
    content: "";
    display: block;
    margin-top: 2px;
    width: 9px;
    height: 5px;
    background-image: url(/media/relationQuery/chevron-black.svg);
    background-size: contain;
    transform: ${({ colapsed }) => (colapsed ? "rotate(180deg)" : "")};
    transition: all 0.3s;
  }
`;