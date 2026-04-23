import React, {
    createContext
} from "react";

import useSurveyDataState from "./state/useSurveyDataState";

export const SurveyDataContext = createContext({});

const SurveyDataProvider = ({
    children
}) => {
    const {
        addSurveyData,
        shouldSubmit,
        setShouldSubmit
    } = useSurveyDataState();

    return ( <
        SurveyDataContext.Provider value = {
            {
                addSurveyData,
                shouldSubmit,
                setShouldSubmit,
            }
        } >
        {
            children
        } <
        /SurveyDataContext.Provider>
    );
};

export default SurveyDataProvider;