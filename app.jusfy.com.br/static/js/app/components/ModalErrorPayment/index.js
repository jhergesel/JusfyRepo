import React from "react";
import {
    Button
} from "./Button";
import {
    ContentModal
} from "./ContentModal";
import {
    SubTitle
} from "./SubTitle";
import {
    Title
} from "./Title";
import {
    ModalWrapper
} from "./Wrapper";
import {
    TextContent
} from "./TextContent";
export const ModalErrorPayment = ({
    isOpen,
    onClose,
    onSupportClick
}) => {
    return ( <
        ModalWrapper open = {
            isOpen
        }
        onClose = {
            onClose
        } >
        <
        ContentModal >
        <
        TextContent >
        <
        Title > Ocorreu um erro durante o pagamento < /Title> <
        SubTitle >
        Entre em contato para que possamos resolver o erro e restabelecer o seu acesso à Jusfy <
        /SubTitle> <
        /TextContent> <
        Button onClick = {
            onSupportClick
        } > Falar com o suporte < /Button> <
        /ContentModal> <
        /ModalWrapper>
    );
};