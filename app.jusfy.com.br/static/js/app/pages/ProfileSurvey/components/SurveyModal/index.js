import {
    toAbsoluteUrl
} from "../../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";

import * as S from "./SurveyModal.styles";
import useWindowSize from "../../../../hooks/useWindowResize";
import useClickOutside from "../../../../hooks/useClickOutside";

const SurveyModal = ({
    onClose
}) => {
    const windowSize = useWindowSize();

    const modalRef = useClickOutside(onClose);

    const isDesktop = windowSize >= 1024;

    const estimatedTimeElement = ( <
        S.Time >
        <
        SVG width = "19"
        height = "19"
        src = {
            toAbsoluteUrl("/media/porfileSurvey/dotted-timer.svg")
        }
        /> <
        span > Tempo estimado: 2 min < /span> <
        /S.Time>
    );

    return ( <
        S.ModalContainer >
        <
        S.ModalContent ref = {
            modalRef
        } >
        <
        S.Container > {
            isDesktop ? ( <
                SVG src = {
                    toAbsoluteUrl("/media/porfileSurvey/awards.svg")
                }
                />
            ) : null
        } <
        S.Title > Ganhe créditos rápido🥳 < /S.Title> <
        S.Text >
        Responda perguntas e ganhe 3 consultas de < span > Localização < /span>,
        1 de < span > Relacionamento < /span> e 2 oportunidades no{" "} <
        span > JusMatch! < /span> <
        /S.Text> {
            isDesktop ? estimatedTimeElement : null
        } <
        S.Button onClick = {
            onClose
        } > Comece agora < /S.Button> <
        /S.Container> <
        /S.ModalContent> <
        /S.ModalContainer>
    );
};

export default SurveyModal;