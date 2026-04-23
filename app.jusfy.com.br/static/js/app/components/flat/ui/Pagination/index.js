import * as S from "./Pagination.styles";
import {
    useState
} from "react";
import {
    LIMIT_EXPANSIVE,
    TOTAL_PAGE_RENDER
} from "./constants";
import {
    toAbsoluteUrl
} from "../../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";

const generatePagination = (
    totalPages,
    currentPage,
    expandedLeft,
    expandedRight
) => {
    const pages = [];

    const leftLimit = expandedLeft ?
        Math.max(LIMIT_EXPANSIVE, currentPage - TOTAL_PAGE_RENDER) :
        Math.max(LIMIT_EXPANSIVE, currentPage - LIMIT_EXPANSIVE);
    const rightLimit = expandedRight ?
        Math.min(totalPages - 1, currentPage + TOTAL_PAGE_RENDER) :
        Math.min(totalPages - 1, currentPage + LIMIT_EXPANSIVE);

    if (totalPages > 1) {
        pages.push(1);
    }

    if (leftLimit > 2) pages.push("leftDots");
    for (let i = leftLimit; i <= rightLimit; i++) pages.push(i);
    if (rightLimit < totalPages - 1) pages.push("rightDots");
    pages.push(totalPages);

    return pages;
};

const Pagination = ({
    changePage,
    currPage,
    totalPages
}) => {
    const [expandedLeft, setExpandedLeft] = useState(false);
    const [expandedRight, setExpandedRight] = useState(false);

    const pagesToRender = generatePagination(
        totalPages,
        currPage,
        expandedLeft,
        expandedRight
    );

    const goTo = page => {
        if (page < 1 || page > totalPages || page === currPage) return;
        setExpandedLeft(false);
        setExpandedRight(false);
        changePage(page);
    };

    return ( <
        S.PagesContainer >
        <
        ul >
        <
        div className = "prevActions" >
        <
        div onClick = {
            () => goTo(1)
        }
        className = {
            currPage <= 1 ? "forbidden" : ""
        } >
        <
        SVG src = {
            toAbsoluteUrl("/media/lawsuitMonitor/next.svg")
        }
        /> <
        /div> <
        div onClick = {
            () => goTo(currPage - 1)
        }
        className = {
            currPage <= 1 ? "forbidden" : ""
        } >
        <
        SVG src = {
            toAbsoluteUrl("/media/lawsuitMonitor/chevron.svg")
        }
        /> <
        /div> <
        /div>

        {
            pagesToRender.map((item, index) => {
                if (item === "leftDots") {
                    return ( <
                        li key = {
                            `left-${index}`
                        }
                        className = "dots"
                        onClick = {
                            () => setExpandedLeft(true)
                        } >
                        ...
                        <
                        /li>
                    );
                }

                if (item === "rightDots") {
                    return ( <
                        li key = {
                            `right-${index}`
                        }
                        className = "dots"
                        onClick = {
                            () => setExpandedRight(true)
                        } >
                        ...
                        <
                        /li>
                    );
                }

                return ( <
                    li key = {
                        item
                    }
                    className = {
                        item === currPage ? "active" : ""
                    }
                    onClick = {
                        () => goTo(item)
                    } >
                    {
                        item
                    } <
                    /li>
                );
            })
        }

        <
        div className = "nextActions" >
        <
        div className = {
            currPage === totalPages ? "forbidden" : ""
        }
        onClick = {
            () => goTo(currPage + 1)
        } >
        <
        SVG src = {
            toAbsoluteUrl("/media/lawsuitMonitor/chevron.svg")
        }
        /> <
        /div> <
        div className = {
            currPage === totalPages ? "forbidden" : ""
        }
        onClick = {
            () => goTo(totalPages)
        } >
        <
        SVG src = {
            toAbsoluteUrl("/media/lawsuitMonitor/next.svg")
        }
        /> <
        /div> <
        /div> <
        /ul> <
        /S.PagesContainer>
    );
};

export {
    Pagination
};