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

export const ProgressBarContainer = styled.div `
  margin: 0 auto;
  width: 60%;
  height: 8px;
  background: #e8f5e9;
  border-radius: 4px;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div `
  height: 100%;
  width: ${({ progress }) => progress}%;
  background: #01ab7d;
  border-radius: 4px;
  transition: width 0.1s linear;
`;