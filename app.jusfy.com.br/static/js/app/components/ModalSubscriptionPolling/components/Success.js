import React from "react";
import styled from "styled-components";
import SvgSuccess from "../../../components/SvgAnimations/Success.js";

const Content = styled.div `
  span {
    font-size: 40px;
    display: block;
    padding: 5px;
    text-align: center;
    color: #a1a8c1;
  }
  hr {
    opacity: 0.1;
    margin: 0;
  }
  small {
    font-size: 16px;
    display: block;
    text-align: center;
    opacity: 0.6;
    margin-top: 20px;
  }

  .success {
    color: #41c78f !important;
  }
  .warning {
    color: #ffc107 !important;
  }
  .error {
    color: #ff6245 !important;
  }
`;

const Title = styled.h2 `
  font-weight: bold;
  font-size: 19px;
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;
`;

export default function Success(props) {

    return ( <
        Content >
        <
        SvgSuccess / > {
            props.status === "trialSuccess" ? ( <
                Title className = "success" >
                Sua assinatura iniciou o período de teste!
                <
                /Title>
            ) : ( <
                Title className = "success" >
                Parabéns, sua assinatura foi realizada com sucesso!
                <
                /Title>
            )
        } <
        button type = "button"
        className = "btn btn-primary"
        style = {
            {
                width: "100%"
            }
        }
        onClick = {
            props.close
        } >
        CONTINUAR NAVEGANDO <
        /button> <
        /Content>
    );
}