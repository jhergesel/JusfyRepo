import styled from "styled-components";

import SVG from "react-inlinesvg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 578px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`;

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  gap: 16px;
`;

export const ContentInputs = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  @media (max-width: 578px) {
    flex-direction: column;
  }
`;

export const WrapperCardsQueries = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, minmax(395px, 1fr));

  @media (max-width: 578px) {
    grid-template-columns: 1fr;
  }
`;

export const WrapperTotalCredits = styled.div`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  width: 100%;
  border-radius: 7px;
  background: #fafbff;

  span {
    color: #383839;
    font: normal 600 16px ${({ theme }) => theme.typography.quartenary};
    line-height: 140%;
  }

  @media (max-width: 578px) {
    flex-direction: column;
  }
`;
export const CreditQuantityCard = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 4px;
  background: #e6f7f2;

  color: #383839;
  text-align: center;

  font-family: ${({ theme }) => theme.typography.quartenary};

  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;
export const Icon = styled(SVG)``;

export const WrapperButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const WrapperInfoCredits = styled.div`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  padding: 12px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 3px;
  background: #fff9e6;
  margin-top: 8px;

  span {
    color: #383839;
    font-family: ${({ theme }) => theme.typography.quartenary};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    flex: 1;
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

export const ButtonOpenBuyCredits = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  color: #806408;
  font-family: ${({ theme }) => theme.typography.quartenary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  position: relative;

  &:after {
    content: ">";
    position: absolute;

    right: -15px;
    top: 1px;

    height: 0px;
    background: #806400;
  }
`;

export const IconInfoCredits = styled(SVG)`
  margin-top: 3px;
`;
