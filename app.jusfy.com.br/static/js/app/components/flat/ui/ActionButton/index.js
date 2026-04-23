import {
    toAbsoluteUrl
} from "../../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import * as S from "./ActionButton.styles";

const ActionButton = ({
    children,
    iconPath,
    disabled,
    onClick
}) => {
    return ( <
        S.Button disabled = {
            disabled
        }
        onClick = {
            onClick
        } >
        <
        SVG src = {
            toAbsoluteUrl(iconPath)
        }
        /> <
        span > {
            children
        } < /span> <
        /S.Button>
    );
};

export default ActionButton;