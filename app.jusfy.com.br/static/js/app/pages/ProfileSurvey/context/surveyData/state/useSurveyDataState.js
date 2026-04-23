import {
    useState
} from "react";
import useLocalStorage from "../../../../../hooks/useLocalStorage";

const LOCAL_STORAGE_KEY = "profileSurvey";

const useSurveyDataState = () => {
    const {
        getToken,
        setToken,
        hasToken,
        clear
    } = useLocalStorage(
        LOCAL_STORAGE_KEY
    );

    const initialSurveyData = hasToken ? getToken : {};

    const [surveyData, setSurveyData] = useState(initialSurveyData);
    const [shouldSubmit, setShouldSubmit] = useState(false);

    const addSurveyData = (name, value) => {
        const newSurveyData = { ...surveyData,
            [name]: value
        };

        setSurveyData(newSurveyData);
        setToken(newSurveyData);
    };

    return {
        addSurveyData,
        shouldSubmit,
        setShouldSubmit,
    };
};

export default useSurveyDataState;