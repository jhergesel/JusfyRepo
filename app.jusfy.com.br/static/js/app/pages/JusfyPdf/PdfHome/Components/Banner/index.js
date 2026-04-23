import {
    Container
} from "./style.js";
import {
    toAbsoluteUrl
} from "../../../../../../_metronic/_helpers";
import {
    Button
} from "@material-ui/core";
import {
    Link
} from "react-router-dom";

const Banner = () => {
    return ( <
        Container >
        <
        div className = "banner" >
        <
        div className = "content" >
        <
        div className = "info-content" >
        <
        span > Conheça a < /span> <
        img src = {
            `${toAbsoluteUrl("/media/svg/logos/jusfypdf-logo.svg")}`
        }
        /> <
        /div> <
        div className = "info-down" >
        <
        p > tudo para advogar, uma só assinatura. < /p> <
        a href = "https://jusfy.com.br"
        className = "button" >
        Acessar o site {
            ">"
        } <
        /a> <
        /div> <
        /div> <
        /div> <
        /Container>
    );
};

export {
    Banner
};