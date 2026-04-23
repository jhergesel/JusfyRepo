import * as S from "../../CardContent.styles";
import {
    OverlayTrigger
} from "react-bootstrap";
import SVG from "react-inlinesvg";
import {
    toAbsoluteUrl
} from "../../../../../../../../_metronic/_helpers";
import React from "react";

export const CustomTooltip = () => {
    return ( <
        S.TooltipWrapper >
        <
        OverlayTrigger placement = "top"
        overlay = { <
            S.CustomTooltip id = "tooltip-top" >
            <
            strong >
            A pesquisa fornece dados apenas para até 10 veículos,
            <
            /strong>{" "}
            independentemente do total vinculado ao CPF ou CNPJ,
            que pode ser
            superior a esse limite. <
            /S.CustomTooltip>
        } >
        <
        span >
        <
        SVG width = "18px"
        height = "18px"
        title = ""
        fill = "#000000"
        src = {
            toAbsoluteUrl("/media/casesManagement/info.svg")
        }
        /> <
        /span> <
        /OverlayTrigger> <
        /S.TooltipWrapper>
    );
};