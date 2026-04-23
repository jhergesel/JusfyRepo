import * as S from "./styles";
import {
    toAbsoluteUrl
} from "../../../../../../_metronic/_helpers";
import React from "react";

import {
    Card
} from "../Card";

export const EmptyStateFilters = () => {
    return ( <
        Card sPadding = {
            "64px 24px"
        } >
        <
        S.EmpttyStateFilterWrapper >
        <
        S.Icon src = {
            toAbsoluteUrl("/media/jusfinder/icon-filters-empty.svg")
        }
        width = "266" /
        >
        <
        div >
        <
        S.EmptyStateTitleFilters >
        Nenhuma consulta encontrada <
        /S.EmptyStateTitleFilters>

        <
        S.EmptyStateTextFilters > {
            " "
        }
        Ajuste os filtros aplicados e tente novamente. <
        /S.EmptyStateTextFilters> <
        /div> <
        /S.EmpttyStateFilterWrapper> <
        /Card>
    );
};