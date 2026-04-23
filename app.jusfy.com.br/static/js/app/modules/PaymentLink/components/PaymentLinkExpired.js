import React from "react";
import SVG from "react-inlinesvg";
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

export const PaymentLinkExpired = () => {
    const handleContactSupport = () => {
        window.open(
            "https://api.whatsapp.com/send?phone=5511933304069&text=&source=&data=",
            "_blank"
        );
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
            toAbsoluteUrl("/media/clock-banner.svg")
        }
        alt = "Relógio indicando tempo expirado" /
        >
        <
        /ClockIllustration> <
        ExpiredText >
        <
        ExpiredTitle > Link de pagamento expirado < /ExpiredTitle> <
        ExpiredDescription >
        O link de pagamento que você tentou acessar não está mais disponível.Para continuar, entre em contato com o time de suporte, eles irão te ajudar a gerar um novo link e concluir o pagamento rapidamente. <
        /ExpiredDescription> <
        /ExpiredText>

        <
        button type = "button"
        className = "btn btn-primary"
        onClick = {
            handleContactSupport
        } >
        Falar com suporte <
        /button> <
        /ExpiredContent> <
        /ExpiredContainer> <
        /ExpiredPage> <
        />
    );
};