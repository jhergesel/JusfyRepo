import {
    useContext,
    useEffect
} from "react";
import {
    useParams
} from "react-router-dom";
import {
    jusfinderContext
} from "../../context";
import {
    BatchQueries
} from "../BactchQueries";
import ListingCards from "../ListingCards";
import QueryHistory from "../QueryHistory";
import QueryHistoryBatch from "../QueryHistoryBatch";
import {
    MultipleQueriesPage
} from "../MultipleQueries/MultipleQueriesPage";

const Page = () => {
    const {
        page,
        setPage
    } = useContext(jusfinderContext);

    const params = useParams();

    const PAGES = new Map([
        ["query", ListingCards],
        ["history", QueryHistory],
        ["batchQueries", BatchQueries],
        ["history_batch", QueryHistoryBatch],
        ["multipleQueriesPage", MultipleQueriesPage],
    ]);

    const PageElement = PAGES.get(page);

    useEffect(() => {
        if (params.page) {
            setPage(params.page);
        }
    }, [params.page, setPage]);

    return page === "MultipleQueriesPage" ? ( <
        MultipleQueriesPage / >
    ) : ( <
        PageElement / >
    );
};

export default Page;