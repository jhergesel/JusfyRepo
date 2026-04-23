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
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  flex-direction: column;
  overflow: hidden;
  gap: 32px;

  @media (max-width: 578px) {
    width: 400px !important;
  }
  @media (max-width: 370px) {
    width: 350px !important;
  }
`;

export const Title = styled.h6 `
  margin: 0;
  color: #111219;
  font: normal 600 20px ${({ theme }) => theme.typography.quartenary};
  line-height: 140%;
`;
export const SubTitle = styled.span `
  margin: 0;
  color: #111219;
  font: normal 400 14px ${({ theme }) => theme.typography.quartenary};
  line-height: 140%;
`;
export const TextContent = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;
export const ButtonModal = styled(Button)
`
  width: ${({ width }) => width ?? "100%"} !important;
  max-width: 100% !important;
  height: 40px !important;
  padding: 10px 40px 10px 40px !important;
  gap: 10px;
  color: #ffffff !important;
  border-radius: 5px !important;
  opacity: 0px;
  text-transform: none !important;
  font: normal 600 14px "Noto Sans" !important;
  background: #01ab7d !important;
  border: none;
  &:hover {
    background: #01906a !important;
  }
`;