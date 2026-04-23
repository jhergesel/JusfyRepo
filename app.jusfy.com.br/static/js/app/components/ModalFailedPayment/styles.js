import Dialog from "@mui/material/Dialog";
import styled from "styled-components";
import Button from "@mui/material/Button";

export const ModalWrapper = styled(Dialog)
`
  .MuiPaper-root {
    border-radius: 7px;
    overflow: ${({ overflow }) => overflow};
    min-width: ${({ minWidth }) => minWidth};

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

  width: 500px;
  max-width: 100%;
  height: fit-content;
  padding: 40px;
  background: #fff;
  border-radius: 8px;
  flex-direction: column;
  overflow: hidden;
  gap: 40px;

  text-align: center;

  @media (max-width: 578px) {
    width: 400px !important;
  }
  @media (max-width: 370px) {
    width: 350px !important;
  }
`;

export const Title = styled.h6 `
  margin: 0;
  color: #131313;
  font: normal 600 20px ${({ theme }) => theme.typography.quartenary};
  line-height: 140%;
  font-weight: 600;
`;
export const SubTitle = styled.span `
  margin: 0;
  color: #5e5e60;
  font: normal 400 14px ${({ theme }) => theme.typography.quartenary};
  font-weight: 400;
  line-height: 140%;
`;
export const TextContent = styled.div `
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
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

export const ButtonsContainer = styled.div `
  gap: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LoadingContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
`;