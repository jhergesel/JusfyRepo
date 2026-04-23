import React from "react";
import SVG from "react-inlinesvg";

import * as InternalStyles from "./styles";
import {
    toAbsoluteUrl
} from "../../../../_metronic/_helpers";

export const FilterSearchComponent = ({
    loading,
    search = "",
    onChange = () => {},
    flex = "",
    placeholder = "Pesquise pelo documento",
    width,
}) => {
    return ( <
        InternalStyles.Filter flex = {
            flex
        }
        width = {
            width
        } >
        <
        SVG src = {
            toAbsoluteUrl("/media/casesManagement/search.svg")
        }
        /> <
        input placeholder = {
            placeholder
        }
        type = "search"
        value = {
            search
        }
        onChange = {
            onChange
        }
        disabled = {
            loading
        }
        aria - label = {
            placeholder
        }
        /> <
        /InternalStyles.Filter>
    );
};