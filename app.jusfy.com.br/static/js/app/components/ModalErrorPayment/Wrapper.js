import * as S from "./styles";

export const ModalWrapper = ({
    children,
    open,
    onClose
}) => {
    return ( <
        S.ModalWrapper open = {
            open
        }
        onClose = {
            onClose
        } > {
            children
        } <
        /S.ModalWrapper>
    );
};