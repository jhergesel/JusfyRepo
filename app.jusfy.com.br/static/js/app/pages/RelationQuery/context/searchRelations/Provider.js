import React, {
    createContext,
    useState
} from "react";

export const SearchRelationsContext = createContext({});

const SearchRelationsProvider = ({
    children
}) => {
    const [searchedRelation, setSearchedRelation] = useState({});
    const [isCompanySearch, setIsCompanySearch] = useState(false);

    return ( <
        SearchRelationsContext.Provider value = {
            {
                searchedRelation,
                setSearchedRelation,
                isCompanySearch,
                setIsCompanySearch,
            }
        } >
        {
            children
        } <
        /SearchRelationsContext.Provider>
    );
};

export default SearchRelationsProvider;