import {
    useContext
} from "react";
import {
    jusfinderContext
} from "../../context";

export const useSwitch = () => {
    const {
        setPage,
        page,
        setDataQueries
    } = useContext(jusfinderContext);

    const changePage = (page = "") => {
        if (!page) return;
        setDataQueries([]);
        setPage(page);
    };

    return {
        changePage,
        page,
    };
};