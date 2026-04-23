import React from "react";
import SVG from "react-inlinesvg";
import {
    useHistory
} from "react-router-dom";
import {
    toAbsoluteUrl
} from "../../../../_metronic/_helpers";
import {
    ClockIllustration,
    ExpiredContainer,
    ExpiredContent,
    ExpiredDescription,
    ExpiredPage,
    ExpiredText,
    ExpiredTitle,
    GlobalStyles,
} from "../styles";

export const PaymentLinkAlreadyPaid = () => {
    const history = useHistory();

    const handleGoToDashboard = () => {
        history.push("/auth/login");
    };

    return ( <
        >
        <
        GlobalStyles / >
        <
        ExpiredPage >
        <
        ExpiredContainer >
        <
        ExpiredContent >
        <
        ClockIllustration >
        <
        SVG src = {
            toAbsoluteUrl("/media/banner-success.svg")
        }
        alt = "Pagamento realizado com sucesso" /
        >
        <
        /ClockIllustration> <
        ExpiredText >
        <
        ExpiredTitle > Pagamento realizado! < /ExpiredTitle> <
        ExpiredDescription >
        O pagamento da sua assinatura já foi realizado.Você já pode acessar a plataforma Jusfy. <
        /ExpiredDescription> <
        /ExpiredText> <
        button type = "button"
        className = "btn btn-primary"
        onClick = {
            handleGoToDashboard
        } >
        Acessar plataforma <
        /button> <
        /ExpiredContent> <
        /ExpiredContainer> <
        /ExpiredPage> <
        />
    );
};