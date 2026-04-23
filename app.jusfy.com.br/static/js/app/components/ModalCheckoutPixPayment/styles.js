import Dialog from "@mui/material/Dialog";
import styled from "styled-components";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export const ModalWrapper = styled(Dialog)
`
  .MuiPaper-root {
    border-radius: 8px;
    overflow: ${({ overflow }) => overflow};
    min-width: ${({ minWidth }) => minWidth};

    @media (max-width: 768px) {
      width: 90% !important;
    }
    @media (max-width: 578px) {
      width: 360px !important;
    }
    @media (max-width: 370px) {
      width: 350px !important;
    }
  }

  .MuiBackdrop-root {
    opacity: 0.3 !important;
    background: #000 !important;
  }

  .MuiDialog-paper {
    max-width: 100% !important;
  }
`;

export const ContentModal = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 32px;
  gap: 24px;
  width: 680px;
  max-width: 100%;
  height: fit-content;
  background: #ffffff;
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    padding: 24px;
    gap: 20px;
  }
  @media (max-width: 578px) {
    padding: 20px;
    gap: 16px;
  }
`;

export const CloseButtonContainer = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0;
  gap: 8px;
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 1;
`;

export const CloseButton = styled(IconButton)
`
  width: 24px !important;
  height: 24px !important;
  padding: 0 !important;
  color: #131313 !important;

  svg {
    width: 24px;
    height: 24px;

    path,
    circle,
    rect,
    line {
      stroke: #131313;
      fill: #131313;
    }
  }
`;

export const HeaderContainer = styled.div `
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 100%;

  @media (max-width: 578px) {
    gap: 16px;
  }
`;

export const TitleContent = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  flex-grow: 1;
  width: 100%;
`;

export const Title = styled.h2 `
  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #131313;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const SubTitle = styled.p `
  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #383839;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const AlertBanner = styled.div `
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  gap: 8px;
  width: 100%;
  background: #fff9e6;
  border: 1px solid #ffeeb3;
  border-radius: 8px;

  @media (max-width: 578px) {
    padding: 12px 16px;
  }
`;

export const AlertContent = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  flex-grow: 1;
  width: 100%;
`;

export const WarningIcon = styled.div `
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;

    path,
    circle,
    rect,
    polygon {
      fill: #ffc700;
      stroke: #ffc700;
    }
  }
`;

export const AlertText = styled.p `
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #383839;
  margin: 0;
  flex-grow: 1;
`;

export const QRCodeSection = styled.div `
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 40px;
  gap: 16px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #e7e8ec;
  border-radius: 0px 0px 8px 8px;

  @media (max-width: 578px) {
    padding: 16px 24px;
  }
`;

export const QRCodeImage = styled.img `
  width: 129px;
  height: 129px;
  object-fit: contain;
`;

export const CopyCodeButton = styled(Button)
`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px !important;
  gap: 4px;
  width: 153px;
  height: 40px !important;
  background: #01ab7d !important;
  border-radius: 5px !important;
  text-transform: none !important;
  font-family: "Noto Sans", sans-serif !important;
  font-style: normal !important;
  font-weight: 500 !important;
  font-size: 14px !important;
  line-height: 140% !important;
  color: #ffffff !important;

  &:hover {
    background: #01906a !important;
  }
`;

export const PaymentDetailsContainer = styled.div `
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 16px;
  gap: 8px;
  width: 100%;
  border: 1px solid #e7e8ec;
  border-radius: 8px;

  @media (max-width: 578px) {
    padding: 16px;
    gap: 16px;
  }
`;

export const Border = styled.div `
  border: 1px solid #e7e8ec;
  border-radius: 8px;
  padding: 24px 16px;
`;

export const DetailsHeader = styled.h3 `
  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #131313;
  margin: 0 0 8px 0;
  width: 100%;

  @media (max-width: 578px) {
    display: none;
  }
`;

export const DetailRow = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 16px;

  @media (max-width: 578px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

export const DetailLabel = styled.p `
  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #5e5e60;
  margin: 0;
  flex-shrink: 0;
`;

export const DetailValue = styled.p `
  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #131313;
  margin: 0;
  text-align: right;
  word-break: break-word;
`;

export const PlanDetailValue = styled(DetailValue)
`
  font-weight: 600;
  color: #383839;
`;

export const AmountDetailValue = styled(DetailValue)
`
  font-weight: 700;
  font-size: 16px;
  line-height: 140%;
  color: #01ab7d;
`;

export const Divider = styled.div `
  width: 100%;
  height: 1px;
  margin: 8px 0;
  background: #e7e8ec;
  border-radius: 999px;

  @media (max-width: 578px) {
    display: none;
  }
`;

export const ButtonsContainer = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 100%;

  @media (max-width: 578px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const SuccessSection = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 100%;
  
  ${TitleContent} {
    align-items: center;
    text-align: center;
    
    ${Title} {
      text-align: center;
    }
    
    ${SubTitle} {
      text-align: center;
    }
  }
`;

export const SuccessIconContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  svg {
    width: 100%;
    height: auto;
    max-width: 100%;
  }
`;

export const ButtonModal = styled(Button)
`
  width: 100%;
  height: 40px !important;
  padding: 10px !important;
  color: #ffffff !important;
  border-radius: 5px !important;
  text-transform: none !important;
  font: normal 600 14px "Noto Sans" !important;
  background: #01ab7d !important;
  border: none;

  &:hover {
    background: #01906a !important;
  }
`;

export const ButtonModalOutlined = styled(Button)
`
  width: 100%;
  height: 40px !important;
  padding: 10px !important;
  color: #01ab7d !important;
  border-radius: 5px !important;
  text-transform: none !important;
  font: normal 600 14px "Noto Sans" !important;
  background: #ffffff !important;
  border: 1px solid #01ab7d !important;

  transition: all 0.3s ease-in-out;

  &:hover {
    background: #01906a !important;
    color: #ffffff !important;
    border: 1px solid #01906a !important;
  }
`;