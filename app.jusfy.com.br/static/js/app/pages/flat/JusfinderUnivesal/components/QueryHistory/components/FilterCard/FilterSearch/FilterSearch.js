import React, {
    useEffect
} from "react";
import SVG from "react-inlinesvg";
import {
    toAbsoluteUrl
} from "../../../../../../../../../_metronic/_helpers";
import * as InternalStyles from "./styles";
import {
    useFilters
} from "../../../context/FiltersContext";
import {
    EventsSegment
} from "../../../../../../../../helpers/EventsSegmentsCalculators";

export default function FilterSearch({
    loading
}) {
    const {
        search,
        setSearch,
        setDebouncedSearch
    } = useFilters();
    const {
        HandleEvent
    } = EventsSegment();

    useEffect(() => {
        const timer = setTimeout(() => {
            HandleEvent("query_filter__document_search", {
                searchParam: search
            });
            setDebouncedSearch(search);
        }, 1000);

        return () => clearTimeout(timer);
    }, [search, setDebouncedSearch]);

    return ( <
        InternalStyles.Filter style = {
            {
                flex: "0 0 90%"
            }
        } >
        <
        SVG src = {
            toAbsoluteUrl("/media/casesManagement/search.svg")
        }
        minWidth = "14px"
        minHeight = "14px" /
        >
        <
        input placeholder = "Pesquise pelo documento"
        value = {
            search
        }
        onChange = {
            e => setSearch(e.target.value)
        }
        disabled = {
            loading
        }
        /> <
        /InternalStyles.Filter>
    );
}