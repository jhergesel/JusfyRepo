import React from "react";
import Loading from "react-loading";
import styled from "styled-components";
import {
    toAbsoluteUrl
} from "../../../../../_metronic/_helpers";

// Styled Components
const ModalWrapper = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: ${({ open }) => (open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 99;
  transition: all 0.3s ease;
`;

const ContentModal = styled.div `
  position: relative;
  width: 100%;
  max-width: 500px;
  background: white;
  border-radius: 12px;
  padding: 40px 32px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  animation: ${({ open }) => (open ? "modalAppear 0.3s ease-out" : "none")};

  @keyframes modalAppear {
    from {
      opacity: 0;
      transform: scale(0.9) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @media (max-width: 480px) {
    max-width: 90%;
    padding: 32px 24px;
  }
`;

const ActivatingIcon = styled.div `
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconImage = styled.img `
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Title = styled.h2 `
  font-size: 24px;
  font-weight: 700;
  color: #131313;
  margin: 0 0 16px 0;
  line-height: 1.2;
`;

const Description = styled.p `
  font-size: 16px;
  color: #131313;
  margin: 0;
  line-height: 1.5;
  opacity: 0.9;
`;

const LoadingContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

export const ModalPaymentLinkActivating = ({
    open = false
}) => {
    return ( <
        ModalWrapper open = {
            open
        } >
        <
        ContentModal open = {
            open
        } >
        <
        ActivatingIcon >
        <
        IconImage src = {
            toAbsoluteUrl("/media/chat-success.svg")
        }
        alt = "Ativando conta" /
        >
        <
        /ActivatingIcon>

        <
        Title > Estamos ativando sua conta < /Title>

        <
        Description >
        Em instantes, você terá acesso à Jusfy, a plataforma que facilita a sua vida jurídica. <
        /Description>

        <
        LoadingContainer >
        <
        Loading type = "spin"
        color = "#01ab7d"
        width = "32px"
        height = "32px" / >
        <
        /LoadingContainer> <
        /ContentModal> <
        /ModalWrapper>
    );
};

export default ModalPaymentLinkActivating;