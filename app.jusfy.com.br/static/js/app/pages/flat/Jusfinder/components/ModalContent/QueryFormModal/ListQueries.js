import {
    ContentQueries,
    WrapperQueries
} from "./QueryFormModal.styles";
import {
    useQueryForm
} from "./useQueryForm";
import {
    Checkbox,
    FormControlLabel
} from "@material-ui/core";
import React from "react";
import {
    QUANTITY_QUERIES_CREDITS,
    QUERIES,
    QUERY_ERRORS
} from "./constants";
import * as S from "./QueryFormModal.styles";

export const ListQueries = ({
    queryOption,
    error,
    hasInputError
}) => {
    const {
        queries,
        onChangeQueries
    } = useQueryForm(queryOption);
    const qtdQueries =
        queryOption.credit > QUANTITY_QUERIES_CREDITS ?
        QUANTITY_QUERIES_CREDITS :
        queryOption.credit;
    const msg = {
        ERROR_CREDIT: `Você tem apenas ${queryOption.credit} créditos, escolha até ${qtdQueries} consultas a serem realizadas`,
        EMPTY_QUERY: "Selecione pelo menos uma consulta",
    }[error] || "";

    return ( <
        WrapperQueries isVisible = {
            queryOption.identification === "economic_group"
        } >
        <
        h2 >
        Consultas a serem realizadas(1 crédito cada) < span > * < /span> <
        /h2>

        <
        ContentQueries hasError = {
            hasInputError && (error === "ERROR_CREDIT" || error === "EMPTY_QUERY")
        } >
        {
            QUERIES.map((query, i) => ( <
                FormControlLabel key = {
                    i
                }
                onChange = {
                    e => onChangeQueries(e, query.value)
                }
                control = { <
                    Checkbox
                    checked = {
                        queries.includes(query.value)
                    }
                    name = {
                        query.value
                    }
                    color = "primary" /
                    >
                }
                label = {
                    query.text
                }
                />
            ))
        } <
        /ContentQueries> {
            hasInputError &&
                (error === "ERROR_CREDIT" || error === "EMPTY_QUERY") ? ( <
                    S.Error > {
                        msg
                    } < /S.Error>
                ) : queryOption.credit <= queries.length ||
                queries.length < queryOption.credit ? null : ( <
                    S.Error > {
                        QUERY_ERRORS.get(error)
                    } < /S.Error>
                )
        } <
        /WrapperQueries>
    );
};