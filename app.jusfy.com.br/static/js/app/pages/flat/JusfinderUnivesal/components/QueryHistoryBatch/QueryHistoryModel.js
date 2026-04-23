import * as S from "./QueryHistory.styles";
import {
    featureTypeNames,
    ITEMS_PER_PAGE,
    TABLE_COLUMNS
} from "./constants";
import ActionButton from "../../../../../components/flat/ui/ActionButton";
import {
    toAbsoluteUrl
} from "../../../../../../_metronic/_helpers";
import Table from "../../../../../components/flat/ui/Table";
import {
    Skeleton
} from "@mui/material";
import ReactPaginate from "react-paginate";
import {
    paginateTrackClick
} from "../../../../../../_metronic/_helpers/Paginate";
import React from "react";

import {
    EmptyState
} from "./EmptyState";

export const QueryHistoryModel = ({
    data,
    loading,
    pagination,
    setPagination,
    setShouldReload,
    featureTypesUrl,
    openInNewTab,
    paginatedData,
}) => {
    const TABLE_COLUMN_ACTIONS = {
        name: "",
        center: true,
        maxWidth: "250px",
        selector: row => ( <
            > {
                row.status === "success" ? ( <
                    S.ActionWrapper > {
                        featureTypeNames.includes(row.featureTypeName) && ( <
                            ActionButton onClick = {
                                () => featureTypesUrl(row)
                            }
                            iconPath = "/media/flat/external-link.svg" >
                            Abrir <
                            /ActionButton>
                        )
                    }

                    <
                    ActionButton onClick = {
                        () => {
                            window.analytics.track("Performed Queries Action Clicked", {
                                query_type: row.featureTypeName,
                            });
                            openInNewTab(row.downloadLink);
                        }
                    }
                    iconPath = "/media/flat/download-outline.svg" >
                    Baixar <
                    /ActionButton> <
                    /S.ActionWrapper>
                ) : row.status === "pending" ? ( <
                    S.ActionWrapper >
                    <
                    ActionButton iconPath = "/media/flat/reload.svg"
                    onClick = {
                        () => setShouldReload(true)
                    } >
                    Atualizar <
                    /ActionButton> <
                    /S.ActionWrapper>
                ) : row.status === "error" && row.downloadLink ? ( <
                    S.ActionWrapper >
                    <
                    ActionButton onClick = {
                        () => {
                            window.analytics.track("Performed Queries Action Clicked", {
                                query_type: row.featureTypeName,
                            });
                            openInNewTab(row.downloadLink);
                        }
                    }
                    iconPath = "/media/flat/download-outline.svg" >
                    Baixar <
                    /ActionButton> <
                    /S.ActionWrapper>
                ) : ( <
                    S.EmptyButton / >
                )
            } <
            />
        ),
    };

    const renderTable = ( <
        >
        <
        Table columns = {
            [...TABLE_COLUMNS, TABLE_COLUMN_ACTIONS]
        }
        data = {
            paginatedData
        }
        /> <
        />
    );

    const handleRenderTable = () => {
        if (loading)
            return ( <
                Skeleton variant = "rounded"
                width = "100%"
                height = {
                    540
                }
                animation = "wave" /
                >
            );

        return data ? .length ? renderTable : < EmptyState / > ;
    };

    return ( <
        S.Container > {
            handleRenderTable()
        } <
        ReactPaginate previousLabel = { <
            S.PaginationLabel >
            <
            S.Icon src = {
                toAbsoluteUrl("/media/flat/arrow-left-sharped.svg")
            }
            /> <
            span > anterior < /span> <
            /S.PaginationLabel>
        }
        nextLabel = { <
            S.PaginationLabel >
            <
            span > próximo < /span> <
            S.Icon
            src = {
                toAbsoluteUrl("/media/flat/arrow-right-sharped.svg")
            }
            /> <
            /S.PaginationLabel>
        }
        onPageChange = {
            evt => {
                return setPagination(evt.selected);
            }
        }
        pageRangeDisplayed = {
            5
        }
        pageCount = {
            Math.ceil(data.length / ITEMS_PER_PAGE)
        }
        marginPagesDisplayed = {
            1
        }
        pageClassName = "page-item"
        pageLinkClassName = "page-link"
        previousClassName = "page-item"
        previousLinkClassName = "page-link"
        nextClassName = "page-item"
        nextLinkClassName = "page-link"
        breakLabel = "..."
        breakClassName = "page-item"
        breakLinkClassName = "page-link"
        containerClassName = "pagination"
        activeClassName = "active"
        selected = {
            pagination
        }
        onClick = {
            e =>
            paginateTrackClick(e, "JusFinder History Pagination Clicked")
        }
        /> <
        /S.Container>
    );
};