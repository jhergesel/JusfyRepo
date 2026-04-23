import React, {
    useContext
} from "react";
import {
    FiFileText
} from "react-icons/fi";
import {
    PdfContext
} from "../../../Provider";

import * as S from "./style";

function Petition() {
    const {
        uploadHook,
        inputFileRef
    } = useContext(PdfContext);

    const {
        filename,
        isDesiredFileSizeValid,
        onSubmit,
        desiredFileSizeMB,
        onResetStates,
    } = uploadHook;

    const handleFileSubmit = e => {
        onSubmit("split");
        window.analytics.track("PDF File Split Button Clicked", {
            split_size: desiredFileSizeMB,
        });
    };

    return ( <
        S.Content >
        <
        div className = "file-container" >
        <
        div className = "file-details" >
        <
        div className = "file-name" >
        <
        FiFileText size = {
            130
        }
        className = ""
        color = "#41C78F" / >

        <
        p style = {
            {
                justifyContent: "center",
            }
        } >
        {
            filename
        } <
        /p> <
        /div> <
        div className = "file-description" >
        <
        span >
        Tamanho: {
            " "
        } {
            (inputFileRef.current.files[0].size / 1024 / 1024).toFixed(2)
        }
        MB <
        /span> <
        /div> <
        button onClick = {
            onResetStates
        } >
        <
        u style = {
            {
                textAlign: "center"
            }
        } > Escolher outro arquivo < /u> <
        /button> <
        /div> <
        button className = "button"
        onClick = {
            handleFileSubmit
        }
        disabled = {!isDesiredFileSizeValid
        } >
        <
        span > Dividir PDF < /span> <
        /button> <
        /div> <
        /S.Content>
    );
}

export {
    Petition
};