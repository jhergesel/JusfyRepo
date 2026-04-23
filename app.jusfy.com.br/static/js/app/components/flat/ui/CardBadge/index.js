import SVG from "react-inlinesvg";
import {
    toAbsoluteUrl
} from "../../../../../_metronic/_helpers";

import * as S from "./CardBadge.styles";
import {
    BADGE_CONTENT
} from "./constants";

const CardBadge = ({
    type,
    width = "full"
}) => {
    const {
        text,
        iconName,
        color,
        backgroundColor
    } = BADGE_CONTENT.get(type);

    const icon = toAbsoluteUrl(`/media/flat/${iconName}.svg`);

    return ( <
        S.Container { ...{
                width,
                color,
                backgroundColor
            }
        } >
        <
        SVG src = {
            icon
        }
        width = "12"
        height = "14" / >
        <
        span > {
            text
        } < /span> <
        /S.Container>
    );
};

export default CardBadge;