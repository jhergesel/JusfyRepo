import React, {
    useContext,
    useEffect
} from "react";
import {
    FaChevronLeft,
    FaChevronDown,
    FaInfoCircle,
    FaPlus,
} from "react-icons/fa";
import {
    FiInfo,
    FiX
} from "react-icons/fi";
import * as S from "./style";
import {
    Petition
} from "../../../Petition";
import {
    useState
} from "react";
import Select from "react-select";
import styled from "styled-components";

import {
    PdfContext
} from "../../../../../Provider";

function ZipFileDownloadModal() {
    const {
        uploadHook,
        downloadHook,
        setTabs
    } = useContext(PdfContext);

    const {
        filename,
        desiredFileSizeMB,
        downloadFileUUID,
        onResetStates,
    } = uploadHook;

    const {
        onPerformDownload
    } = downloadHook;

    const handleDownload = e => {
        onPerformDownload(downloadFileUUID);
    };

    // fazer um reset dos estados e voltar a página inicial da rota /pdf
    const handleCloseModal = e => {
        console.log(`Resetting states`);
        onResetStates();
        setTabs(0);
    };

    useEffect(() => {
        window.analytics.track("PDF File Uploaded");
    }, []);

    return ( <
        S.ModalDownload >
        <
        div className = "container" >
        <
        div className = "card-tit" >
        <
        p > Arquivo pronto para download! < /p> <
        FiX size = {
            30
        }
        style = {
            {
                marginTop: "-22px"
            }
        }
        onClick = {
            handleCloseModal
        }
        /> <
        /div> <
        div style = {
            {
                width: "100%"
            }
        }
        className = "content-text" >
        <
        p >
        Seu arquivo.zip contendo as divisões do original {
                " "
            } <
            strong > ({
                filename
            }) < /strong> em partes de{" "} <
            b > {
                desiredFileSizeMB
            }
        MB < /b> ou menos está pronto para download.
        Baixar agora ?
        <
        /p> <
        /div>

        <
        div className = "card-button" >
        <
        button className = "button-zip"
        onClick = {
            handleDownload
        } >
        <
        div style = {
            {
                textAlign: "center",
                fontSize: "1.5rem",
                color: "white",
            }
        } >
        Baixar.zip <
        /div> <
        /button> <
        /div> <
        /div> <
        /S.ModalDownload>
    );
}

function FailureNoticeModal({
    closeHandler
}) {
    return ( <
        S.ModalDownload >
        <
        div className = "container" >
        <
        div className = "card-tit" >
        <
        p > Erro! < /p> <
        FiX size = {
            30
        }
        style = {
            {
                marginTop: "-22px"
            }
        }
        onClick = {
            closeHandler
        }
        /> <
        /div> <
        div style = {
            {
                width: "100%"
            }
        }
        className = "content-text" >
        <
        p >
        Aconteceu um erro durante a operação.Tente novamente mais tarde. <
        /p> <
        /div>

        <
        div className = "card-button" >
        <
        button className = "button-zip"
        onClick = {
            closeHandler
        } >
        <
        div style = {
            {
                textAlign: "center",
                fontSize: "1.5rem",
                color: "white",
            }
        } >
        OK <
        /div> <
        /button> <
        /div> <
        /div> <
        /S.ModalDownload>
    );
}

function FileDetailsSize({
    data
}) {
    const {
        sizeDetails,
        modalDownload,
        setModalDownload,
        uploadHook,
        setTabs,
    } = useContext(PdfContext);

    const {
        desiredFileSizeMB,
        onDesiredFileSizeChange,
        isDesiredFileSizeValid,
        isReadyToDownload,
        onResetStates,
        failure,
    } = uploadHook;

    const handleCloseModal = e => {
        onResetStates();
        setTabs(0);
    };

    const handleDesiredFileSizeChange = e => {
        e.preventDefault();
        onDesiredFileSizeChange(e.target.value);
    };

    const isValidValue = !isDesiredFileSizeValid && desiredFileSizeMB > 0;

    return ( <
        > { <
            S.Container >
            <
            div className = "file-options-container" >
            <
            div className = "file-back-container" >
            <
            p > Dividir por Tamanho < /p> <
            /div> <
            div className = "line" > < /div> <
            div className = "file-size-container container" >
            <
            div className = "file-size-options " >
            <
            div className = "file-platform-container " >
            <
            label > Separar em < /label> <
            input
            type = "text"
            value = {
                desiredFileSizeMB
            }
            className = "input form-control"
            onChange = {
                handleDesiredFileSizeChange
            }
            /> <
            span style = {
                {
                    marginLeft: "2px"
                }
            } > {
                " "
            }
            (MB) de partes iguais <
            /span> <
            /div> <
            div
            className = "select-items "
            style = {
                {
                    display: "none"
                }
            } >
            < /div> <
            /div> {
                isValidValue ? ( <
                    S.ErrorText >
                    O tamanho da parte é maior do que o tamanho do arquivo.Tente
                        um tamanho menor. <
                        /S.ErrorText>
                ) : null
            } <
            /div> <
            /div> <
            Petition > < /Petition> <
            /S.Container>
        }

        {
            isReadyToDownload ? < ZipFileDownloadModal / > : < > < />} {
                failure ? < FailureNoticeModal closeHandler = {
                    handleCloseModal
                }
                /> : <></ >
            }

            {
                modalDownload && ( <
                    S.ModalDownload >
                    <
                    div className = "container" >
                    <
                    div className = "card-tit" >
                    <
                    p > Defina as propriedades do arquivo < /p> <
                        FiX
                    size = {
                        30
                    }
                    style = {
                        {
                            marginTop: "-22px"
                        }
                    }
                    onClick = {
                        () => setModalDownload(false)
                    }
                    /> <
                    /div> <
                    div style = {
                        {
                            width: "100%"
                        }
                    } >
                    <
                    p >
                    Seu arquivo será separado em < strong > 4 novos arquivos < /strong>{" "}
                    com < strong > {
                        desiredFileSizeMB
                    } < /strong> cada. Como você
                    gostaria de exportá - los ?
                    <
                    /p> <
                    /div>

                    <
                    div className = "card-button" >
                    <
                    button className = "button-zip" >
                    <
                    span > Baixar zipado < /span> <
                    /button> <
                    button className = "button-zip" >
                    <
                    span className = "text-loose" > Baixar arquivos soltos < /span> <
                    /button> <
                    /div> <
                    /div> <
                    /S.ModalDownload>
                )
            } <
            />
        );
    }

    export {
        FileDetailsSize
    };