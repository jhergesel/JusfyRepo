import styled from "styled-components";
import SVG from "react-inlinesvg";
export const Container = styled.div `
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: fit-content;
  border-radius: 7px;
  background: #fff;

  @media (max-width: 578px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ContentInfoCredits = styled.div `
  display: flex;
  height: 32px;
  padding: 8px 12px;
  margin-left: 1px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 3px;
  background: ${({ hasCredit }) => (hasCredit ? "#E6F7F2" : "#FBEAEC")};

  span {
    color: #383839;
    font-family: ${({ theme }) => theme.typography.quartenary};
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;

    strong {
      font-weight: 700;
    }
  }
  @media (max-width: 578px) {
    width: 100%;
  }
`;

export const Icon = styled(SVG)
``;

export const ContentButtonBuyCredits = styled.div `
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  border-radius: 8px;

  button {
    border: none;
    background: transparent;

    color: #01ab7d;
    text-align: center;

    font-family: ${({ theme }) => theme.typography.quartenary};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    padding: 0px;
  }
  @media (max-width: 578px) {
    width: 100%;
  }
`;