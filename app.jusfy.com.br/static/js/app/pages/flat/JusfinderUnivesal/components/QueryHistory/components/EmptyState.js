import * as S from "../QueryHistory.styles";
import {
    toAbsoluteUrl
} from "../../../../../../../_metronic/_helpers";
import React, {
    useEffect
} from "react";

import {
    useFilters
} from "../context/FiltersContext";

export const EmptyState = ({
    setQueryParams,
    setPage
}) => {
    const {
        params
    } = useFilters();

    useEffect(() => {
        setQueryParams(params);
    }, [params]);

    return ( <
        S.EmptyStateWrapper >
        <
        S.Icon src = {
            toAbsoluteUrl("/media/jusfinder/empty.svg")
        }
        width = "266"
        height = "342" /
        >
        <
        S.EmptyStateTitle >
        Você ainda não tem nenhuma consulta realizada <
        /S.EmptyStateTitle> <
        div >
        <
        S.EmptyStateText >
        Para realizar sua primeira consulta, clique em {
            " "
        } <
        /S.EmptyStateText> <
        S.Highlight onClick = {
            () => setPage("query")
        } >
        Nova Consulta <
        /S.Highlight> <
        S.EmptyStateText > e nós te ajudaremos com o resto.. < /S.EmptyStateText> <
        /div> <
        /S.EmptyStateWrapper>
    );
};