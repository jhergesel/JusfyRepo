import Header from "./components/Header";
import Survey from "./components/Survey";
import ProfileSurveyProvider from "./context";
import {
    useHistory,
    useLocation
} from "react-router-dom";
import ProgressBar from "./components/ProgressBar";
import {
    toAbsoluteUrl
} from "../../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import * as S from "./ProfileSurvey.styles";
import {
    useState,
    useEffect,
    useContext
} from "react";
import SurveyModal from "./components/SurveyModal";
import ReactLoading from "react-loading";
import TooltipAwards from "./components/TooltipAwards";
import useWindowSize from "../../hooks/useWindowResize";

let status;
let isSuccessApiTest;
let isLoadingTest;

const ProfileSurvey = () => {
        const [showModal, setShowModal] = useState(true);
        const [showTooltip, setShowTooltip] = useState(true);
        const [onFinish, setOnFinish] = useState(false);

        useEffect(() => {
            if (isSuccessApiTest) {
                setOnFinish(true);
            }
        }, [status, isSuccessApiTest, isLoadingTest]);

        const windowSize = useWindowSize();

        const isDesktop = windowSize >= 1024;

        const history = useHistory();

        const navigateToDashboard = () =>
            history.push({
                pathname: "/dashboard",
                state: {
                    origin: "/profile/survey",
                },
            });

        const onFinished = () => {
            setOnFinish(false);
        };

        useEffect(() => {
            if (onFinish) {
                setTimeout(() => {
                    history.push({
                        pathname: "/dashboard",
                        state: {
                            origin: "/profile/survey"
                        },
                    });
                }, 5000);
            }
        }, [onFinish, history]);

        const congratulationsElement = ( <
            S.Congratulations >
            <
            SVG src = {
                toAbsoluteUrl("/media/logo-jusfy.svg")
            }
            width = "94"
            height = "44.5" /
            >
            <
            p >
            Parabéns, você ganhou < span > 4 consultas no JusFinder < /span>
            (3 localização e 1 Relacionamento) <
            span > e 2 oportunidades no JusMatch < /span>🤩 <
            /p> <
            S.Loading >
            <
            ReactLoading type = "spin"
            color = "#33D690"
            width = "15px"
            height = "15px" / >
            <
            span > Os robôs estão trabalhando para gerar sua plataforma < /span> <
            /S.Loading> <
            /S.Congratulations>
        );

        const surveyElement = ( <
            >
            <
            ProgressBar / >
            <
            S.Options >
            <
            S.Button onClick = {
                navigateToDashboard
            } > SAIR DO GUIA < /S.Button> <
            /S.Options> <
            S.Wrapper >
            <
            Header / >
            <
            Survey onFinish = {
                onFinished
            }
            /> <
            /S.Wrapper> {
                showTooltip && isDesktop ? ( <
                    TooltipAwards onClose = {
                        () => setShowTooltip(false)
                    }
                    />
                ) : null
            } {
                showModal ? < SurveyModal onClose = {
                    () => setShowModal(false)
                }
                /> : null} <
                />
            );

            return ( <
                ProfileSurveyProvider >
                <
                S.Container > {
                    onFinish ? congratulationsElement : surveyElement
                } <
                /S.Container> <
                /ProfileSurveyProvider>
            );
        };

        export default ProfileSurvey;

        export const validateValues = (
            statusApi,
            isSuccessApi,
            isLoading,
            setStatus,
            setIsSuccessApiValidate,
            setIsLoadingValidate
        ) => {
            setStatus(statusApi);
            setIsSuccessApiValidate(isSuccessApi);
            setIsLoadingValidate(isLoading);

            status = statusApi;
            isSuccessApiTest = isSuccessApi;
            isLoadingTest = isLoading;
        };