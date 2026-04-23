import React, {
    useContext,
    useEffect
} from "react";
import {
    useState
} from "react";
import {
    HomeContainer
} from "./style";
import {
    PdfContext
} from "../../../Provider";
import {
    FileDetailsSize
} from "../Loading/components/FileDetailsSize";

function Home() {
    const {
        setVisible,
        inputFileRef,
        uploadHook
    } = useContext(PdfContext);

    const {
        onFileChange,
        isFileSelected,
        onResetStates
    } = uploadHook;

    useEffect(() => {
        onResetStates();
    }, []);
    const handleFileChange = e => {
        e.preventDefault();
        onFileChange();
        setVisible(false);
    };

    return ( <
        > { <
            >
            <
            HomeContainer
            style = {
                {
                    display: isFileSelected ? "none" : "flex",
                    width: "fit-content",
                    height: "13rem",
                }
            } >
            <
            p style = {
                {
                    color: "#fafafa"
                }
            } >
            Arraste seu arquivo PDF para cá ou <
            /p>

            <
            div className = "buttons-container" >
            <
            label className = "button-file" >
            <
            p > Selecione o arquivo PDF < /p> <
            input
            id = "upload-file-input" // esta ID é procurada pelo uploadHook puxado do contexto
            ref = {
                inputFileRef
            }
            type = "file"
            className = "input"
            accept = ".pdf"
            onChange = {
                handleFileChange
            }
            /> <
            /label> <
            /div> <
            /HomeContainer> {
                isFileSelected ? < FileDetailsSize / > : < > < />} <
                    />
            } <
            />
        );
    }

    export {
        Home
    };