import React from "react";
import FilterDrawer from "./FilterDrawer/FilterDrawer";
import FilterSearch from "./FilterSearch/FilterSearch";
import {
    Card
} from "../Card";
import * as S from "./styles";
import {
    useFilters
} from "../../context/FiltersContext";
import {
    AppliedFilters
} from "./AppliedFilters/AppliedFilters";
export default function FilterCard({
    loading
}) {
    const {
        filtersApplied,
        handleClearFilters
    } = useFilters();

    return ( <
        Card >
        <
        S.FilterWrapper >
        <
        S.FilterContainer >
        <
        FilterSearch loading = {
            loading
        }
        /> <
        FilterDrawer / >
        <
        /S.FilterContainer> <
        /S.FilterWrapper>

        <
        AppliedFilters filtersApplied = {
            filtersApplied
        }
        onClear = {
            handleClearFilters
        }
        /> <
        /Card>
    );
}