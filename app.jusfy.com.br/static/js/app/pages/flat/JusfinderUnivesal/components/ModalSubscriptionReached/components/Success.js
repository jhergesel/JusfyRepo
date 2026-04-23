import React from "react";
import {
    useDispatch
} from "react-redux";

import styled from "styled-components";
import * as auth from "../../../../../../modules/Auth";

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
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;
`;

export default function Success(props) {
    const dispatch = useDispatch();

    const navegar = () => {
        dispatch({
            type: "LOAD_SUBSCRIPTION_STATUS",
            payload: {
                callback: provider => {
                    dispatch(auth.actions.updateUserProvider(provider));
                },
            },
        });
        dispatch({
            type: "CLOSE_MODAL_SUBSCRIPTION"
        });
        props.closeModal();
    };
    return ( <
        Content >
        <
        Title className = "success" >
        Parabéns, sua assinatura foi atualizada com sucesso!
        <
        /Title> <
        button type = "button"
        className = "btn btn-primary"
        style = {
            {
                width: "100%"
            }
        }
        onClick = {
            navegar
        } >
        CONTINUAR NAVEGANDO <
        /button> <
        /Content>
    );
}