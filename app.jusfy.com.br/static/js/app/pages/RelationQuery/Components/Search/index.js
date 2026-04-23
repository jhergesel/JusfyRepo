import {
    useContext
} from "react";
import {
    SearchRelationsContext
} from "../../context/searchRelations/Provider";
import ListingSearch from "../ListingSearch";
import SearchCard from "../SearchCard";

const Search = ({
    isOpen,
    setIsOpen
}) => {
    const {
        searchedRelation
    } = useContext(SearchRelationsContext);

    const hasSearchedRealtion =
        searchedRelation.name && searchedRelation.document;

    return hasSearchedRealtion && isOpen ? ( <
        >
        <
        SearchCard onClose = {
            () => setIsOpen(false)
        }
        /> <
        ListingSearch / >
        <
        />
    ) : null;
};

export default Search;