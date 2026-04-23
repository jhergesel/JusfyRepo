import * as S from "./ErrorQueryModal";
import {
    toAbsoluteUrl
} from "../../../../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import Button from "../../../../../../components/flat/ui/Button";
import {
    ERROR_TYPE_CONTENT
} from "./constants";

const ErrorQueryModal = ({
    type,
    action
}) => {
    const errorContent = ERROR_TYPE_CONTENT.get(type);

    return ( <
        S.Container >
        <
        S.Header >
        <
        SVG src = {
            toAbsoluteUrl(`/media/flat/${errorContent.icon}.svg`)
        }
        /> <
        h1 > {
            errorContent.title
        } < /h1> <
        /S.Header> <
        p > {
            errorContent.message
        } < /p> <
        Button padding = "10px 40px"
        width = "100%"
        backgroundColor = "#FDFDFF"
        border = "1px solid #CAC9CF"
        onClick = {
            action
        } >
        <
        S.ButtonText > {
            errorContent.buttonText
        } < /S.ButtonText> <
        /Button> <
        /S.Container>
    );
};

export default ErrorQueryModal;