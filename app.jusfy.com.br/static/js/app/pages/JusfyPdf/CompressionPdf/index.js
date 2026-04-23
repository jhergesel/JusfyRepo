import React, {
    useContext
} from "react";
import {
    FiFileText
} from "react-icons/fi";
import {
    PdfContext
} from "../Provider.js";
import {
    Home
} from "./Components/Home/index.js";
import {
    Container
} from "./style.js";

const CompressionPdf = () => {
    const {
        tabs
    } = useContext(PdfContext);

    return ( <
        Container style = {
            {
                display: tabs === "1" ? "flex" : "none",
                height: "100vh"
            }
        } >
        <
        div className = "header" >
        <
        div className = "header-title" >
        <
        FiFileText size = {
            36
        }
        className = "icon"
        color = "#41C78F" / >
        <
        h3 > Comprimir PDF < /h3> <
        /div> <
        span > Comprima seu documento em partes de menor tamanho. < /span> <
        /div> <
        Home / >
        <
        /Container>
    );
};

export {
    CompressionPdf
};