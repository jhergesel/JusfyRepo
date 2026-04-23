import styled from "styled-components";

export const Container = styled.div `
  display: ${({ isMultipleQueriesPage }) =>
    isMultipleQueriesPage ? "none" : "flex"};
  justify-content: space-between;
  align-items: flex-end;

  h1 {
    margin: 4px 0 0;
    font-weight: 700;
    color: #111219;
    font-family: "Noto Sans";
  }

  span {
    font-family: "Noto Sans";
    color: #655d79;
  }

  @media (max-width: 545px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;

    h1 {
      font-size: 32px;
    }
  }
`;

export const ButtonWrapper = styled.div `
  display: flex;
  gap: 16px;
`;

export const ButtonContent = styled.div `
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const ButtonRedirect = styled.button `
  border: 0;
  border-radius: 5px;
  height: 40px;
  cursor: pointer;
  font-size: 14px;
  font-family: ${({ theme }) => theme.typography.quartenary};
  font-weight: 700;
  padding: 0px 24px;
  color: #fff;
  background-color: #01ab7d;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;