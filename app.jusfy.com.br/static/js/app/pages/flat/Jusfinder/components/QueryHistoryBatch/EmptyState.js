import * as S from "./QueryHistory.styles";
import {
    CardEmpyState
} from "./QueryHistory.styles";
import {
    toAbsoluteUrl
} from "../../../../../../_metronic/_helpers";
import React, {
    useContext
} from "react";
import SVG from "react-inlinesvg";
import {
    jusfinderContext
} from "../../context";


export const EmptyState = () => {
    const {
        setPage
    } = useContext(jusfinderContext);

    return ( <
        CardEmpyState >
        <
        S.EmptyState >
        <
        SVG src = {
            toAbsoluteUrl("/media/jusfinder/figure-jusfinder.svg")
        }
        /> <
        div >
        <
        h2 > Você ainda não criou nenhuma consulta < /h2> <
        p >
        Faça consultas de diversos documentos com rapidez.Comece agora,
        anexe uma planilha e otimize suas buscas!
        <
        /p> <
        /div> <
        button onClick = {
            () => setPage("batchQueries")
        } >
        <
        SVG src = {
            toAbsoluteUrl("/media/flat/add-button-jusfinder.svg")
        }
        />{" "}
        Criar minha primeira consulta <
        /button> <
        /S.EmptyState> <
        /CardEmpyState>
    );
};