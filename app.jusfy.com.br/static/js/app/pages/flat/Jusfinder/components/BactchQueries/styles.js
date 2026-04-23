import styled from "styled-components";
import SVG from "react-inlinesvg";

export const Container = styled.div `
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const WrapperBatch = styled.div `
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const Label = styled.label `
  color: #131313;
  font-family: ${({ theme }) => theme.typography.secondary};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin: 0;

  span {
    color: #d83143;
  }
`;

export const ContentQueries = styled.div `
  padding: 4px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button `
  display: flex;
  height: 40px;
  padding: 10px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: #01ab7d;
  color: #fff;
  text-align: center;
  font-family: ${({ theme }) => theme.typography.secondary};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  border: none;
`;

export const WrapperButton = styled.div `
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 64px;
`;

export const WrapperQueries = styled.div `
  .MuiSvgIcon-root {
    color: ${({ error, checked }) => {
      return error ? "#D83143" : checked ? "#01AB7D" : "#A0A0A0";
    }} !important;
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

export const UploadContainer = styled.div `
  width: 100%;
  margin-top: 4px;
  display: flex;

  gap: 16px;

  @media (max-width: 578px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ContentQueriesWrapper = styled.div `
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 578px) {
    grid-template-columns: 1fr;
  }
`;

export const WrapperInfoDocument = styled.div `
  display: flex;
  width: 100%;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.white.senary};

  span {
    color: #5e5e60;
    font-family: ${({ theme }) => theme.typography.quartenary};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;

export const ButtonAboutInfo = styled.button `
  color: ${({ theme }) => theme.colors.green.quinary};
  text-align: center;
  background: transparent;
  border: none;
  position: relative;
  font-family: ${({ theme }) => theme.typography.quartenary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  padding: 0;

  &::before {
    content: ">";
    position: absolute;
    top: 5%;
    left: 80px;
    right: 0;

    height: 0;
    background-color: ${({ theme }) => theme.colors.green.quinary};
  }
`;

export const ContentTitleAboutDocument = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`;
export const Icon = styled(SVG)
``;

export const ContentUpload = styled.div `
  width: 100%;
  height: 152px;
`;