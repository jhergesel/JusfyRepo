import React from "react";
import NavigationProvider from "./navigation/Provider";
import SurveyDataProvider from "./surveyData/Provider";

const ProfileSurveyProvider = ({
    children
}) => ( <
    NavigationProvider >
    <
    SurveyDataProvider > {
        children
    } < /SurveyDataProvider> <
    /NavigationProvider>
);

export default ProfileSurveyProvider;