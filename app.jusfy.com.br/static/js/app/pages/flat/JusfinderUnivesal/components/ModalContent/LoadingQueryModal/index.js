import * as S from "./LoadingQueryModal.styles";
import {
    toAbsoluteUrl
} from "../../../../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import ReactLoading from "react-loading";

const LoadingQueryModal = ({
    name,
    isBuying
}) => {
    const loadingQueryContent =
        name === "Relacionamentos" ? ( <
            p >
            Em alguns segundos você será redirecionado para o resultado da consulta de {
                name
            }...
            <
            /p>
        ) : ( <
            p >
            Em alguns segundos você será redirecionado para o resultado da consulta de {
                name
            }...
            <
            /p>
        );

    return ( <
        S.Container >
        <
        S.Header >
        <
        SVG src = {
            toAbsoluteUrl("/media/flat/file.svg")
        }
        /> <
        h1 > Processando... < /h1> <
        /S.Header> {
            isBuying ? ( <
                p > Em alguns segundos a sua consulta será creditada... < /p>
            ) : (
                loadingQueryContent
            )
        } <
        ReactLoading type = "spin"
        color = "#9154DE"
        width = "29px"
        height = "29px" / >
        <
        /S.Container>
    );
};

export default LoadingQueryModal;