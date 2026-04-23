import React from "react";
import styled from 'styled-components';
import {
    ModalFailedPaymentContent
} from '../../ModalFailedPayment/index.js';

const Content = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export default function Failed(props) {
    return ( <
        Content >
        <
        ModalFailedPaymentContent { ...props
        }
        /> <
        /Content>
    )
}