import {
    Checkbox
} from "@mui/material";

import styled, {
    keyframes
} from "styled-components";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

export const ModalDialogCustom = styled(Dialog)
`
  .MuiPaper-root {
    border-radius: 7px;
    overflow: ${({ overflow }) => overflow};
    overflow-x: hidden;
    width: 505px !important;
    max-width: 100%;
    position: fixed;
    margin: 0;

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
export const ButtonSend = styled(Button)
`
  width: fit-content !important;
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

const growAnimation = keyframes `
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Modal = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: ${({ open }) => (open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: ${({ open }) => (open ? "blur(2px)" : "none")};
  z-index: 99;
  min-width: auto;
  overflow: auto;
  overflow-x: hidden;
  transition: all 0.5s;

  @media (max-width: 578px) {
  }
`;

export const ContentModal = styled.div `
  position: relative;
  width: 100%;
  max-width: 600px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${({ background }) => background ?? "#ffff"};
  padding: 32px;
  gap: 24px;
  min-width: 300px;

  animation: ${({ open }) => (open ? growAnimation : "none")} 0.2s ease-in-out
    forwards;

  @media (max-width: 578px) {
    width: 360px;
    padding: 24px;
  }
`;

export const ButtonClose = styled.button `
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  color: red;
`;
export const Container = styled.div `
  position: relative;
  display: flex;
  padding: 32px;
  gap: 24px;
  flex-direction: column;
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
  border: 1px solid #cac9cf;
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
  color: #ff3a4f;
  font-family: "Noto Sans";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

export const ScoreValue = styled.div `
  width: 48px;
  height: 48px;
  background: ${({ isActive }) => (isActive ? "#01ab7d" : "#fff")};
  border-radius: 50%;
  font-weight: ${({ isActive }) => (isActive ? "600" : "400")};
  font-size: 16px;
  line-height: 32px;
  color: ${({ isActive }) => (isActive ? "#ffffff" : "#111219")};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ error }) => (error ? "#ff3a4f" : "#e7e8ec")};
  cursor: pointer;
`;

export const ContentOptionsScore = styled.div `
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Question = styled.h6 `
  color: #131313;
  font: normal 500 14px "Noto Sans";
  line-height: 140%;
  margin: 0;

  span {
    color: #838486;
    font-weight: 400;
  }
`;

export const ContentQuestion = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FeedbackTextarea = styled.textarea `
  display: flex;
  width: 100%;
  height: 80px;
  padding: 12px 0px 0px 12px;
  font-family: "Noto Sans";
  align-items: center;
  gap: 292px;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid #e7e8ec;
  background: #fff;
  font-size: 14px;

  resize: none;
  &:focus {
    outline: none;
  }
`;

export const ContentButton = styled.div `
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;