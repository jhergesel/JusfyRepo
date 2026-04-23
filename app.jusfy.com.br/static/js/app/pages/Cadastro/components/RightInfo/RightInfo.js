import React from "react";
import * as S from "./RightInfo.styles";
import {
    RIGHT_INFO_CONTENT
} from "./constants";
const RightInfo = ({
    type = "default",
    style
}) => ( <
    div className = "col-xl-4" >
    <
    S.Background className = "border-radius-only-right"
    style = {
        style
    } > {
        RIGHT_INFO_CONTENT.get(type)
    } <
    /S.Background> <
    /div>
);
export default RightInfo;