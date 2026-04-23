import {
    useBatchQueries
} from "./useBatchQueries";

import React from "react";

import {
    BatchQueriesModel
} from "./BatchQueriesModel";

export const BatchQueries = () => {
    const methods = useBatchQueries();
    return <BatchQueriesModel { ...methods
    }
    />;
};