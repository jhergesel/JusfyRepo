import styled from "styled-components";

export const WrapperModalContent = styled.div `
  display: flex;
  gap: 24px;
  position: relative;
  padding: 32px;
  width: 700px;
  @media screen and (max-width: 578px) {
    width: 100%;
  }
`;
export const Container = styled.div `
  position: relative;
  display: flex;
  gap: 24px;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 578px) {
    width: 100%;
  }
`;

export const ButtonText = styled.span `
  font-family: "Noto Sans";
  font-weight: 600;
  font-size: 14px;

  ${({ secondary }) => (secondary ? `
text - decoration: underline;
` : null)}
`;

export const CloseIcon = styled.div `
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
`;

export const Header = styled.div `
  display: flex;
  gap: 4px;
  flex-direction: column;
  font-family: "Noto Sans";
  margin-bottom: 8px;

  p {
    color: #655d79;
    font-weight: 400;
    font-size: 14px;
    margin: 0;
    line-height: 100%;
  }

  h1 {
    color: #111219;
    font-weight: 500;
    font-size: 24px;
    margin: 0;
    line-height: 100%;
  }
`;

export const CreditsWrapper = styled.div `
  display: flex;
  align-items: end;
  gap: 14px;
`;

export const CreditsTotal = styled.span `
  color: #111219;
  font-size: 24px;
  font-family: "Noto Sans";
  font-weight: 600;
  margin-bottom: -2px;

  span {
    font-size: 14px;
  }

  &:after {
    content: "total";
    font-size: 14px;
    font-weight: 400;
  }
`;

export const CardPlansContainer = styled.div `
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  border-radius: 5px;
  border: 1px solid #f8cab7;
  background: #fdede7;
  width: 100%;

  p {
    color: #383839;

    font-family: "Noto Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }

  @media screen and (max-width: 578px) {
    display: none;
  }
`;

export const ContentCardInfos = styled.div `
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const CardPlan = styled.div `
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  border-radius: 7px;
  border: 1px solid #e7e8ec;
  background: #fff;
`;

export const CardPlanTitleContent = styled.div `
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    color: #383839;

    font-family: "Noto Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
`;

export const CardPrice = styled.div `
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #131313;
  leading-trim: both;
  text-edge: cap;

  font-family: "Noto Sans";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  border-radius: 2px;
  background: #f8cab7;
`;

export const ContentCardDescription = styled.div `
  display: flex;
  flex-direction: column;

  span {
  }
`;

export const ContentInfoBuCredits = styled.div `
  display: flex;
  padding: 12px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 3px;
  background: #fff9e6;

  span {
    color: #383839;
    font-family: ${({ theme }) => theme.typography.quartenary};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    flex: 1 0 0;
  }
`;

export const Divider = styled.div `
  width: 1px;
  background: #e7e8ec;

  @media screen and (max-width: 578px) {
    display: none;
  }
`;