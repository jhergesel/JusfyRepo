import * as S from "./AvailableSoonModal.styles";
import {
    toAbsoluteUrl
} from "../../../../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";

import {
    useContext
} from "react";
import {
    jusfinderContext
} from "../../../context";
import {
    useHistory
} from "react-router-dom";
import useLocalStorage from "../../../../../../hooks/useLocalStorage";

const AvailableSoonModal = () => {
    const {
        setPage,
        closeModal,
        modal
    } = useContext(jusfinderContext);
    const history = useHistory();

    const {
        setToken
    } = useLocalStorage("context_queries");

    const cleanTokeStorage = () => {
        setToken("");
    };
    const onClick = () => {
        if (modal ? .config ? .context === "BatchQueriesPage") {
            history.push("/jusfinder/history_batch");
            cleanTokeStorage();
            closeModal();
            return;
        }
        setPage("history");
        cleanTokeStorage();
        closeModal();
    };

    return ( <
        S.Container >
        <
        S.Header >
        <
        SVG src = {
            toAbsoluteUrl("/media/flat/clock.svg")
        }
        /> <
        h1 > Consulta em processamento < /h1> <
        /S.Header> <
        p > Estamos processando a sua consulta, em breve ela estará disponível. < /p> <
        S.ContentButtons >
        <
        S.ButtonModal padding = "0 32px"
        onClick = {
            closeModal
        } >
        Voltar <
        /S.ButtonModal>

        <
        S.ButtonModal backgroundColor = "#01AB7D"
        color = "#fff"
        border = "none"
        onClick = {
            onClick
        } >
        Acompanhar <
        /S.ButtonModal> <
        /S.ContentButtons> <
        /S.Container>
    );
};

export default AvailableSoonModal;