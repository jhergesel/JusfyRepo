import * as S from "./ModalDialog.styles";
import useWindowResize from "../../../../hooks/useWindowResize";

const ModalDialog = ({
    open,
    forceBottomSheet,
    width = "full",
    height = "auto",
    overflow = "auto",
    backgroundColor = "white",
    onClose,
    children,
    ...restProps
}) => {
    const windowSize = useWindowResize();

    const isMobile = windowSize <= 545;

    const isBottomSheet = isMobile || forceBottomSheet;

    return ( <
        S.ModalDialogCustom { ...{
                open,
                isBottomSheet,
                width,
                height,
                overflow,
                backgroundColor,
                onClose
            }
        } { ...restProps
        } > {
            children
        } <
        /S.ModalDialogCustom>
    );
};

export default ModalDialog;