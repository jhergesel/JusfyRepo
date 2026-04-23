import {
    toAbsoluteUrl
} from "../../../../../../../../_metronic/_helpers";
import {
    ButtonClose,
    ButtonModal,
    ContentButtonsAction,
    ContentModal,
    Icon,
    ModalWrapper,
    TitleModal,
} from "./styles";

const ModalQueryHistory = ({
    open,
    closeModal,
    modalConfirmed
}) => {
    return ( <
        ModalWrapper open = {
            open
        } >
        <
        ContentModal >
        <
        ButtonClose onClick = {
            closeModal
        } >
        <
        Icon src = {
            toAbsoluteUrl("/media/close-modal.svg")
        }
        /> <
        /ButtonClose> <
        TitleModal > Tem certeza que deseja excluir esta consulta ? < /TitleModal>

        <
        ContentButtonsAction >
        <
        ButtonModal border = "1px solid #CECED2"
        color = "#131313"
        background = "transparent"
        onClick = {
            closeModal
        } >
        Não, voltar <
        /ButtonModal> <
        ButtonModal border = "none"
        background = {
            "#D83143"
        }
        color = "#fff"
        onClick = {
            modalConfirmed
        } >
        Sim, excluir <
        /ButtonModal> <
        /ContentButtonsAction> <
        /ContentModal> <
        /ModalWrapper>
    );
};

export {
    ModalQueryHistory
};