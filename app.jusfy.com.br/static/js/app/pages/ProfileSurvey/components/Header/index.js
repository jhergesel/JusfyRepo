import {
    toAbsoluteUrl
} from "../../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import {
    OverlayTrigger,
    Tooltip
} from "react-bootstrap";

import * as S from "./Header.styles";

const Header = () => {
    const estimatedTimeElement = ( <
        S.Time >
        <
        SVG width = "21"
        height = "21"
        src = {
            toAbsoluteUrl("/media/porfileSurvey/dotted-timer.svg")
        }
        /> <
        span > Tempo estimado: 2 min < /span> <
        /S.Time>
    );

    return ( <
        S.Container >
        <
        SVG src = {
            toAbsoluteUrl("/media/logo-jusfy.svg")
        }
        width = "94"
        height = "44.5" /
        >

        <
        S.TooltipWrapper > {
            estimatedTimeElement
        }

        <
        OverlayTrigger placement = "right"
        overlay = { <
            Tooltip id = "profile-survey-info"
            className = "tooltip" >
            <
            S.TooltipContent >
            <
            h2 > Ajude - nos a construir! < /h2> <
            p > & bull;Para sugerir ferramentas adequadas ao seu perfil. < /p> <
            p >
            &
            bull;Para nos ajudar a identificar oportunidades de novas
            funcionalidades para adicionarmos ao produto no futuro. <
            /p> <
            /S.TooltipContent> <
            /Tooltip>
        } >
        <
        span >
        <
        SVG width = "19"
        height = "19"
        src = {
            toAbsoluteUrl("/media/porfileSurvey/tooltip.svg")
        }
        /> <
        /span> <
        /OverlayTrigger>

        <
        span > Como usaremos seus dados ? < /span> <
        /S.TooltipWrapper> <
        /S.Container>
    );
};

export default Header;