import React, {
    useContext,
    useState,
    useEffect
} from "react";
import {
    Container
} from "./style.js";
import {
    FiFileText
} from "react-icons/fi";
import {
    PdfContext
} from "../Provider.js";
import {
    DivisionPdf
} from "../DivisionPdf/index.js";

import {
    PdfSplitter
} from "../PdfSplitter/index.js";
import {
    CompressionPdf
} from "../CompressionPdf/index.js";
import {
    Banner
} from "./Components/Banner/index.js";

import useJusfySplitterAuth from "../PdfSplitter/hooks/useJusfySplitterAuth";

import {
    CardInfos
} from "../DivisionPdf/components/CardInfo/index.js";

const PdfHome = () => {
    const {
        tabs,
        setTabs
    } = useContext(PdfContext);
    const {
        usageLimitPassed,
        setUsageLimitPassed,
        checkAuthorization,
    } = useJusfySplitterAuth();

    async function onClickGoToTab(tabNumber, usedFeature) {
        const authorized = await checkAuthorization(usedFeature);

        if (authorized) setTabs(tabNumber);
        // no need for else: useJusfySplitterAuth hook will set the flag that will show the modal
    }

    console.log(tabs);
    return ( <
        >
        <
        Container style = {
            {
                display: tabs == "0" ? "flex" : "none",
                height: "100%"
            }
        } >
        {
            usageLimitPassed ? ( <
                CardInfos setDisplayState = {
                    setUsageLimitPassed
                }
                />
            ) : ( <
                > < />
            )
        } <
        div className = "content-title" >
        <
        div className = "title" >
        <
        FiFileText className = "icon"
        size = {
            26
        }
        color = "#41C78F" / >
        <
        p > JusPDF < /p> <
        /div>

        <
        span >
        Selecione a opção que mais faz sentido para o que você gostaria. <
        /span> <
        /div>

        <
        div className = "content-button" >
        <
        div className = "comprimir" >
        <
        button onClick = {
            () => {
                onClickGoToTab("1", "compress");
                window.analytics.track("PDF Compression Selected");
            }
        } >
        Comprimir um PDF <
        /button> <
        /div>

        <
        div className = "decision" >
        <
        small > ou < /small> <
        /div>

        <
        div className = "division" >
        <
        button onClick = {
            () => {
                onClickGoToTab("2", "split");
                window.analytics.track("PDF Split Selected");
            }
        } >
        Dividir PDF por tamanho <
        /button> <
        /div> <
        /div>

        <
        Banner > < /Banner> <
        /Container>

        {
            tabs === "1" && < CompressionPdf / >
        } {
            tabs === "2" && < DivisionPdf / >
        } <
        />
    );
};

export {
    PdfHome
};