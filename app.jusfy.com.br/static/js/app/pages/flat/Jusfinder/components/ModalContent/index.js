import {
    useContext
} from "react";
import {
    jusfinderContext
} from "../../context";
import ModalDialog from "../../../../../components/flat/ui/ModalDialog";
import {
    MODAL_TYPES
} from "./constants";

const ModalContent = () => {
    const {
        modal
    } = useContext(jusfinderContext);

    const ModalElement = MODAL_TYPES.get(modal.type) || null;

    return ModalElement ? ( <
        ModalDialog open = {
            modal.open
        } >
        <
        ModalElement { ...modal.config
        }
        /> <
        /ModalDialog>
    ) : null;
};

export default ModalContent;