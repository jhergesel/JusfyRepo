import React from "react";

import {
    UseQueryHistory
} from "./useQueryHistory";
import {
    QueryHistoryModel
} from "./QueryHistoryModel";

const QueryHistoryBatch = () => {
    const methods = UseQueryHistory();

    return <QueryHistoryModel { ...methods
    }
    />;
};

export default QueryHistoryBatch;