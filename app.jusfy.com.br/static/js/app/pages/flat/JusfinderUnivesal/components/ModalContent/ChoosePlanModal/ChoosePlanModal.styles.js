import styled from "styled-components";

export const Container = styled.div `
  padding: 32px;
  ${({ type }) =>
    type === "choose_plan" ? "max-width: 430px;" : "max-width: 500px;"}
`;

export const Header = styled.div `
  display: flex;
  gap: 4px;
  flex-direction: column;
  font-family: "Noto Sans";

  p {
    color: #655d79;
    font-weight: 400;
    font-size: 14px;
    margin: 0;
  }

  h1 {
    color: #111219;
    font-weight: 700;
    font-size: 26px;
    margin: 0;
  }
`;

export const CloseIcon = styled.div `
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
`;

export const Content = styled.div `
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Description = styled.p `
  font-family: "Noto Sans";
  font-size: 15px;
  font-weight: 400;
  margin: 0;

  span {
    font-family: "Noto Sans";
    font-weight: 500;
    color: #535353;

    .highlight {
      color: #5105be;
    }
  }
`;

export const PriceContainer = styled.div `
  border-top: 1px solid #eaecf0;
  padding: 24px 0;
`;

export const PriceAction = styled.div `
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 304px;
  margin: 0 auto;
`;

export const Switch = styled.div `
  background-color: #f9fafb;
  border-radius: 5px;
  border: 1px solid #eaecf0;
  padding: 6px;
  display: flex;
  gap: 8px;
`;

export const SwitchOption = styled.div `
  border-radius: 5px;
  padding: 14px 10px;
  ${({ isGrow }) => (isGrow ? "flex-grow: 1;" : "")}
  background-color: #fff;
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 400;
  color: #667085;
  cursor: pointer;
  box-shadow: 0px 1px 3px 0px #1018281a;

  ${({ selected }) =>
    selected
      ? `
font - family: 'Noto Sans';
font - size: 16 px;
font - weight: 600;
padding: 14 px 10 px;
color: #5105BE;
  background-color: # EEE3FF;
box - shadow: 0 px 1 px 2 px 0 px #1018280F;
  `
      : ""}
`;

export const Price = styled.p `
  font-family: Inter;
  font-size: 48px;
  font-weight: 600;
  text-align: center;
  margin: 0;

  ${({ isAnnually }) =>
    isAnnually
      ? ` &
    ::before {
        content: "12x de ";
        font - family: Inter;
        font - size: 16 px;
        font - weight: 400;
        text - align: center;
        margin: 0;
        width: fit - content;
        color: #475467;
    heigth: 16px;
  }
  `
      : ""}
`;

export const PriceDescription = styled.p `
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  margin: 0;
  color: #475467;
`;

        export const BenefitsList = styled.ul `
  list-style-type: none;
  padding: 32px 0;
  border-top: 1px solid #eaecf0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 304px;
  margin: 0 auto;

  li {
    display: flex;
    gap: 12px;
    align-items: center;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    color: #535353;
  }
`;