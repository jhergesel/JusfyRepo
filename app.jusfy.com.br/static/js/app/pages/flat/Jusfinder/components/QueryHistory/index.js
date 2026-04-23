import React from "react";

import {
    UseQueryHistory
} from "./useQueryHistory";
import {
    QueryHistoryModel
} from "./QueryHistoryModel";

const QueryHistory = () => {
    const methods = UseQueryHistory();

    return <QueryHistoryModel { ...methods
    }
    />;
};

export default QueryHistory;