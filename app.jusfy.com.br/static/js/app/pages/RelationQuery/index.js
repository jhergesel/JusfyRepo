import Relations from "./Components/Relations";
import SearchRelationsProvider from "./context/searchRelations/Provider";

const RelationQuery = () => {
    return ( <
        SearchRelationsProvider >
        <
        Relations / >
        <
        /SearchRelationsProvider>
    );
};

export default RelationQuery;