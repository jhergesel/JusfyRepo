import {
    useCallback,
    useContext
} from "react";
import {
    jusfinderContext
} from "../../context";
import {
    PAGE_CONTENTS
} from "./constants.header";

export const useHeaderPage = () => {
    const {
        page,
        setPage,
        setModalSuggestion
    } = useContext(jusfinderContext);

    const {
        title,
        subtitle,
        buttonText,
        buttonIcon,
        pageRedirect,
    } = PAGE_CONTENTS.get(page);

    const redirect = useCallback(() => {
        if (!pageRedirect) return;
        setPage(pageRedirect);
    }, [pageRedirect, setPage]);

    const openModalSuggestion = () => {
        setModalSuggestion(true);
    };
    return {
        title,
        subtitle,
        buttonText,
        buttonIcon,
        pageRedirect,
        redirect,
        openModalSuggestion,
    };
};