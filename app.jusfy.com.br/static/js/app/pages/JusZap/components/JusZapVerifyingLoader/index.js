import React from "react";
import styled, {
    keyframes
} from "styled-components";

const spin = keyframes `
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Root = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  flex-direction: column;
  gap: 16px;
  padding: 2rem;
`;

const Spinner = styled.div `
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #01ab7d;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Message = styled.p `
  color: #666;
  font-size: 16px;
  margin: 0;
  text-align: center;
`;

const defaultMessage =
    "Verificando configuração do IA Assistente WhatsApp...";

const JusZapVerifyingLoader = ({
    message = defaultMessage
}) => ( <
    Root >
    <
    Spinner / >
    <
    Message > {
        message
    } < /Message> <
    /Root>
);

export default JusZapVerifyingLoader;