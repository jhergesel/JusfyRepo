import styled from "styled-components";
import {
    Checkbox
} from "@mui/material";
import SVG from "react-inlinesvg";

export const Container = styled.div `
  position: relative;
  display: flex;
  padding: 32px;
  gap: 24px;
  flex-direction: column;
  max-width: 462px;

  @media screen and (max-width: 545px) {
    max-width: none;
  }
`;

export const CloseIcon = styled.div `
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
`;

export const ButtonText = styled.span `
  font-family: "Noto Sans";
  font-weight: 600;
  font-size: 14px;
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

export const Label = styled.label `
  font-family: "Noto Sans";
  font-size: 14px;
  color: #111219;
  font-weight: 400;
  margin: 0;

  span {
    font-weight: 700;
  }
`;

export const Input = styled.input `
  border: ${({ error }) => (error ? "1px solid #D83143" : "1px solid #cac9cf")};
  border-radius: 5px;
  outline: none;
  padding: 10px 0 10px 12px;
  font-family: "Noto Sans" !important;
`;

export const InputContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TermsOptionContainer = styled.div `
  display: flex;
  gap: 8px;
  margin-top: 4px;
`;

export const TermsOptionCheckBox = styled(Checkbox)
`
  margin: 0 !important;
  padding: 0 !important;
  width: 18px;
  height: 18px;
`;

export const TermsOptionLabel = styled.label `
  font-family: "Noto Sans";
  font-size: 12px;
  color: #3f4254;
  font-weight: 400;

  a {
    color: #01ab7d;
    text-decoration: underline;
    cursor: pointer;
    font-weight: 700;
  }
`;

export const ChooseTypeFile = styled.div `
  display: ${({ type }) =>
    [
      "list_vehicles",
      "relationship_tree",
      "credit_restriction",
      "lawsuit",
      "trademarks",
    ].includes(type)
      ? "flex"
      : "none"};
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;

  span {
    font-family: "Noto Sans";
    font-size: 14px;
    color: #111219;
    font-weight: 400;
    margin-top: -2px;
  }

  .step-document .flex {
    display: flex !important;
    flex-direction: row !important;
    gap: 30px;

    label {
      margin-bottom: 0 !important;
      font-family: "Noto Sans";
    }

    span {
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;

      color: ${({ theme }) => theme.colors.gray.secondary};
    }
  }
`;

export const Error = styled.div `
  color: #e91229;
  font-family: "Noto Sans";
  font-size: 12px;
  font-weight: 400;
`;

export const WrapperQueries = styled.div `
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;

  h2 {
    color: #131313;
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    span {
      color: #d83143;
    }
  }
`;
export const ContentQueries = styled.div `
  padding: 4px;
  .MuiSvgIcon-root {
    fill: ${({ hasError }) => (hasError ? "#D83143" : "#01AB7D")};
  }

  label {
    .MuiTypography-body1 {
      font-family: "Noto Sans" !important;
      font-size: 14px !important;
      color: #383839 !important;
      font-weight: 400 !important;
      margin-bottom: 4px !important;
    }
  }
`;

export const WrapperInfoCredits = styled.div `
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  padding: 12px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 3px;
  background: ${({ background }) => background || "#E6F3F7"};
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

export const ContentInfo = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

export const ButtonOpenBuyCredits = styled.button `
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  color: #806400;
  font-family: ${({ theme }) => theme.typography.quartenary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-style: normal;
  font-weight: 500;
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
export const IconInfoCredits = styled(SVG)
`
  margin-top: 3px;
`;

export const WrapperButtons = styled.div `
  display: flex;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

export const CardInfoDataQueries = styled.div `
  display: flex;
  padding: 12px;
  flex-direction: column;

  align-items: flex-start;
  gap: 10px;
  align-self: stretch;

  border-radius: 8px;
  background: #fafbff;

  span {
    color: #5e5e60;

    font-family: ${({ theme }) => theme.typography.quartenary};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  strong {
    font-weight: 600;
  }
`;
export const ButtonLink = styled.button `
  color: #017858;

  font-family: ${({ theme }) => theme.typography.quartenary};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;

  background: transparent;
  border: none;
  padding: 0;
`;