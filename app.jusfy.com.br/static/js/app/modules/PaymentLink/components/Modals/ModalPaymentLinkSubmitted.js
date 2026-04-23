import React from "react";
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
  max-width: 420px;
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

const SuccessIcon = styled.div `
  width: 80px;
  height: 140px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconImage = styled.img `
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
  margin: 0 0 32px 0;
  line-height: 1.5;
  opacity: 0.9;
`;

export const ModalPaymentLinkSubmitted = ({
    open = false,
    onClose,
    onAccessPlatform,
    description,
    actionText,
    title,
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
        SuccessIcon >
        <
        IconImage src = {
            toAbsoluteUrl("/media/modal-success.svg")
        }
        alt = "Pagamento confirmado" /
        >
        <
        /SuccessIcon> <
        Title > {
            title
        } < /Title> <
        Description > {
            description
        } < /Description> <
        button type = "button"
        className = "btn btn-primary"
        style = {
            {
                width: "100%",
                height: "50px"
            }
        }
        onClick = {
            onAccessPlatform
        } >
        {
            actionText
        } <
        /button> <
        /ContentModal> <
        /ModalWrapper>
    );
};

export default ModalPaymentLinkSubmitted;