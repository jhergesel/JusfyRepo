import {
    toAbsoluteUrl
} from "../../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";

import * as S from "./SearchCard.styles";
import {
    useContext,
    useEffect,
    useRef
} from "react";
import {
    SearchRelationsContext
} from "../../context/searchRelations/Provider";

const SearchCard = ({
    onClose
}) => {
    const {
        searchedRelation
    } = useContext(SearchRelationsContext);

    const searchCardRef = useRef(null);

    useEffect(() => {
        if (searchCardRef && searchCardRef.current) {
            window.scrollTo({
                top: searchCardRef.current.offsetTop - 35,
                behavior: "smooth",
            });
        }
    }, [searchedRelation]);

    return ( <
        S.Container ref = {
            searchCardRef
        } >
        <
        S.CloseIcon src = {
            toAbsoluteUrl("/media/relationQuery/close-black.svg")
        }
        onClick = {
            onClose
        }
        /> <
        S.IconContainer >
        <
        SVG src = {
            toAbsoluteUrl("/media/relationQuery/search-lg.svg")
        }
        /> <
        /S.IconContainer> <
        S.Wrapper >
        <
        S.Title > {
            searchedRelation ? .name ? .toLowerCase()
        } < /S.Title> <
        /S.Wrapper> <
        /S.Container>
    );
};

export default SearchCard;