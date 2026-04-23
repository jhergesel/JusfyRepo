import {
    toAbsoluteUrl
} from "../../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import {
    useHistory
} from "react-router-dom";

import * as S from "./Header.styles";

const Header = () => {
    const history = useHistory();

    const navigateToJusfinder = () => history.push("/jusfinder/query");

    return ( <
        S.Container >
        <
        S.Wrapper >
        <
        S.Title >
        Consulta de < span > relacionamentos < /span> <
        /S.Title> <
        S.Breadcrumb >
        <
        span onClick = {
            navigateToJusfinder
        } > JusFinder < /span> <
        SVG src = {
            toAbsoluteUrl("/media/relationQuery/chevron-right.svg")
        }
        width = "16"
        height = "16" /
        >
        <
        span > Consultas < /span> <
        /S.Breadcrumb> <
        /S.Wrapper> <
        S.ButtonWrapper >
        <
        S.HistoryButton secondary onClick = {
            navigateToJusfinder
        } >
        <
        SVG src = {
            toAbsoluteUrl("/media/jusfinder/arrow-left.svg")
        }
        width = "10"
        height = "10" /
        >
        Voltar para consultas <
        /S.HistoryButton> <
        S.SurveyButton href = "https://forms.gle/9KYi9UQbWHdk8vT96"
        target = "_9BLANK"
        onClick = {
            () =>
            window.analytics.track("Relationship Tree Feedback Button Clicked")
        } >
        <
        SVG src = {
            toAbsoluteUrl("/media/relationQuery/survey.svg")
        }
        /> <
        span > O que achou da Consulta ? < /span> <
        /S.SurveyButton> <
        /S.ButtonWrapper> <
        /S.Container>
    );
};

export default Header;