import {
    toAbsoluteUrl
} from "../../../../../_metronic/_helpers";

import * as S from "./TooltipAwards.styles";

const TooltipAwards = ({
    onClose
}) => ( <
    S.Container >
    <
    S.Icon width = "42"
    height = "42"
    src = {
        toAbsoluteUrl("/media/porfileSurvey/guided-tour.svg")
    }
    /> <
    S.CloseButtonIcon width = "32"
    height = "32"
    src = {
        toAbsoluteUrl("/media/porfileSurvey/close.svg")
    }
    onClick = {
        onClose
    }
    />
    Responda agora para ganhar 3 consultas de < span > Localização < /span>, 1 de <span> Relacionamento </span > e 2 oportunidades no < span > JusMatch! < /span> <
    /S.Container>
);

export default TooltipAwards;