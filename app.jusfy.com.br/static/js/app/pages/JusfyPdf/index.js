import React from "react";
import {
    Header
} from "./Header";
import PdfProvider from "./Provider";
import {
    PdfHome
} from "./PdfHome";

export function JusfyPdf() {
    return ( <
        PdfProvider >
        <
        div style = {
            {
                height: "100vh",
                backgroundColor: "#111219"
            }
        } >
        <
        Header / >
        <
        PdfHome / >
        <
        /div> <
        /PdfProvider>
    );
}