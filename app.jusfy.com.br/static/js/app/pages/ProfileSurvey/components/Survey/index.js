import {
    useContext,
    useState,
    useEffect
} from "react";
import useWindowSize from "../../../../hooks/useWindowResize";
import {
    NavigationContext
} from "../../context/navigation/Provider";
import {
    SurveyDataContext
} from "../../context/surveyData/Provider";
import {
    ReasonSignForm,
    WorkContextForm,
    ActiveProcessForm,
    LawAreasForm,
} from "../Forms";
import axios from "axios";

import * as S from "./Survey.styles";

const Survey = ({
        onFinish
    }) => {
        const {
            setAdditionalSteps,
            getStep,
            navigationSize,
            getCurrentStep,
            prevStep,
            nextStep,
            isFirstStep,
            isLastStep,
            buttonDisabled,
        } = useContext(NavigationContext);
        const {
            setShouldSubmit,
            shouldSubmit
        } = useContext(SurveyDataContext);

        const actualStep = getStep();

        const windowSize = useWindowSize();

        const isDesktop = windowSize >= 1024;

        const isReasonSignStep = actualStep === "reasonSign";

        const onAdvance = () => (isLastStep ? onFinish() : nextStep());

        const [surveyInfo, setSurveyInfo] = useState();

        const SURVEY_FORMS = new Map([
                    [
                        "workContext", <
                        WorkContextForm options = {
                            surveyInfo
                        }
                        setStep = {
                            setAdditionalSteps
                        }
                        />,
                    ],
                    ["activeProcess", < ActiveProcessForm options = {
                            surveyInfo
                        }
                        />], ["lawAreas", < LawAreasForm options = {
                                surveyInfo
                            }
                            />], ["reasonSign", < ReasonSignForm options = {
                                    surveyInfo
                                }
                                onFinish = {
                                    onFinish
                                }
                                />],
                            ]);
                        const loadSurveyInfo = async () => {
                            const response = await axios.get(
                                `${process.env.REACT_APP_API_URL}/surveys/info`
                            );
                            setSurveyInfo(response.data);
                        };
                        const onSubmit = () => {
                            setShouldSubmit(true);
                        };

                        useEffect(() => {
                            loadSurveyInfo();
                        }, []);

                        const mobileFooter = ( <
                            S.Options >
                            <
                            S.Button disable = {
                                isFirstStep
                            }
                            secondary onClick = {
                                prevStep
                            } >
                            Voltar <
                            /S.Button> {
                                !isLastStep ? ( <
                                    S.Button onClick = {
                                        onAdvance
                                    }
                                    disable = {
                                        buttonDisabled
                                    } >
                                    Avançar <
                                    /S.Button>
                                ) : ( <
                                    S.Button onClick = {
                                        onSubmit
                                    }
                                    disable = {
                                        buttonDisabled
                                    } >
                                    Finalizar <
                                    /S.Button>
                                )
                            } <
                            /S.Options>
                        );

                        const desktopFooter = ( <
                            S.Footer position = {
                                isReasonSignStep ? "relative" : "absolute"
                            } >
                            <
                            S.Rights >
                            <
                            p > Jusfy® < /p> <
                            p > ©2023 All Rights Reserved. < /p> <
                            /S.Rights> <
                            S.Options >
                            <
                            S.Button disable = {
                                isFirstStep
                            }
                            secondary onClick = {
                                prevStep
                            } >
                            Voltar <
                            /S.Button> {
                                !isLastStep ? ( <
                                    S.ButtonDisabled onClick = {
                                        onAdvance
                                    }
                                    disable = {
                                        buttonDisabled
                                    } >
                                    Avançar <
                                    /S.ButtonDisabled>
                                ) : ( <
                                    S.ButtonDisabled onClick = {
                                        onSubmit
                                    }
                                    disable = {
                                        buttonDisabled
                                    } >
                                    Finalizar <
                                    /S.ButtonDisabled>
                                )
                            } <
                            /S.Options> <
                            /S.Footer>
                        );

                        return ( <
                            S.Container >
                            <
                            span >
                            Passo {
                                getCurrentStep()
                            }
                            de {
                                navigationSize
                            } <
                            /span> {
                                surveyInfo ? SURVEY_FORMS.get(actualStep) : null
                            } {
                                isDesktop ? desktopFooter : mobileFooter
                            } <
                            /S.Container>
                        );
                    };

                    export default Survey;