import React, {
    useContext
} from "react";
import {
    FiFileText
} from "react-icons/fi";

import {
    Home
} from "./components/Home";
import {
    Container
} from "./style";
import {
    PdfContext
} from "../Provider";
import {
    BlockUi
} from "../../../components/BlockUI";

function DivisionPdf() {
    const {
        uploadHook,
        tabs
    } = useContext(PdfContext);
    const {
        fetching
    } = uploadHook;

    return ( <
        BlockUi blocking = {
            fetching
        }
        style = {
            {
                height: "100%"
            }
        } >
        <
        Container style = {
            {
                display: tabs === "2" ? "flex" : "none"
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
        h3 > Dividir PDF < /h3> <
        /div> <
        span > Separe seu documento em partes de menor tamanho < /span> <
        /div>

        <
        Home / >
        <
        /Container> <
        /BlockUi>
    );
}

export {
    DivisionPdf
};