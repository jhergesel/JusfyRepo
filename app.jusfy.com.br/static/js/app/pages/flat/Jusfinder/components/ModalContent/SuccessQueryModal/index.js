import * as S from "./SuccessQueryModal";
import {
    toAbsoluteUrl
} from "../../../../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import Button from "../../../../../../components/flat/ui/Button";
import {
    useContext,
    useEffect
} from "react";
import {
    jusfinderContext
} from "../../../context";
import useClickOutside from "../../../../../../hooks/useClickOutside";

const SuccessQueryModal = ({
    type,
    action
}) => {
    const {
        closeModal,
        setPage
    } = useContext(jusfinderContext);

    const modalRef = useClickOutside(closeModal);

    const RESULT_TYPES = new Map([
        [
            "query",
            {
                message: "A consulta abrirá em uma nova aba do seu navegador, ou se preferir, clique em abrir consulta.",
                buttonText: "Abrir consulta",
            },
        ],
        [
            "file",
            {
                message: "O PDF abrirá em uma nova aba do seu navegador, ou se preferir, clique em baixar o PDF.",
                buttonText: "Baixar PDF agora",
            },
        ],
        [
            "buy",
            {
                message: "A sua consulta foi creditada no Jusfinder!",
                buttonText: "Voltar para consulta",
            },
        ],
    ]);

    const handleGoToHistory = () => {
        closeModal();
        setPage("history");
    };

    useEffect(() => {
        action();
    }, []);

    return ( <
        S.Container ref = {
            modalRef
        } >
        <
        S.CloseIcon onClick = {
            closeModal
        } >
        <
        SVG src = {
            toAbsoluteUrl("/media/flat/close.svg")
        }
        /> <
        /S.CloseIcon> <
        S.Header >
        <
        SVG src = {
            toAbsoluteUrl("/media/flat/check-rounded.svg")
        }
        /> <
        h1 > Consulta realizada! < /h1> <
        /S.Header> <
        p > {
            RESULT_TYPES.get(type).message
        } < /p> <
        S.ButtonWrapper > {
            type === "buy" ? ( <
                Button onClick = {
                    action
                }
                padding = "10px 40px"
                width = "100%"
                border = "1px solid #01AB7D"
                backgroundColor = "#FDFDFF" >
                <
                S.ButtonText tertiary > {
                    RESULT_TYPES.get(type).buttonText
                } <
                /S.ButtonText> <
                /Button>
            ) : ( <
                >
                <
                Button padding = "10px 40px"
                width = "100%"
                backgroundColor = "#FDFDFF"
                border = "1px solid #CAC9CF"
                onClick = {
                    handleGoToHistory
                } >
                <
                S.ButtonText secondary > Ver consultas < /S.ButtonText> <
                /Button> <
                Button onClick = {
                    action
                }
                padding = "10px 40px"
                width = "100%"
                border = "1px solid #01AB7D" >
                <
                S.ButtonText > {
                    RESULT_TYPES.get(type).buttonText
                } < /S.ButtonText> <
                /Button> <
                />
            )
        } <
        /S.ButtonWrapper> <
        /S.Container>
    );
};

export default SuccessQueryModal;