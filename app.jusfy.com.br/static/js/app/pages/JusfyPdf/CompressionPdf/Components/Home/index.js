import React, {
    useContext,
    useRef,
    useEffect
} from "react";
import {
    useState
} from "react";
import {
    FiX
} from "react-icons/fi";
import {
    HomeContainer,
    ModalDownload
} from "./style";
import {
    PdfContext
} from "../../../Provider";
import {
    PetitionCompression
} from "../Petition";
import usePdfSplitterInput from "../../../PdfSplitter/hooks/usePdfSplitterInput";

function FailureNoticeModal({
    closeHandler
}) {
    return ( <
        ModalDownload >
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
        /ModalDownload>
    );
}

function SuccessNoticeCard({
    closeHandler,
    downloadHandler
}) {
    useEffect(() => {
        window.analytics.track("PDF File Uploaded");
    }, []);

    return ( <
        ModalDownload >
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
        p > Seu arquivo comprimido está pronto! < /p> <
        /div>

        <
        div className = "card-button" >
        <
        button className = "button-zip"
        onClick = {
            downloadHandler
        } >
        <
        div style = {
            {
                textAlign: "center",
                fontSize: "1.5rem",
                color: "white",
            }
        } >
        Baixar arquivo <
        /div> <
        /button> <
        /div> <
        /div> <
        /ModalDownload>
    );
}

function Home() {
    const fileInputRef = useRef(
        document.getElementById("compression-file-upload-input")
    );
    const [downloadFilename, setDownloadFilename] = useState(null);

    const {
        setTabs
    } = useContext(PdfContext);

    const {
        onFileChange,
        isFileSelected,
        fetching,
        onResetStates,
        uploadSuccess,
        onSubmit,
        fileData,
        result,
        failure,
    } = usePdfSplitterInput(fileInputRef);

    const handleFileChange = async e => {
        onFileChange();
    };

    function handleCloseModal(e) {
        onResetStates();
        setTabs(0);
    }

    function handleDownload(e) {
        const downloadURL = new URL(
            `/compress/${downloadFilename}`,
            process.env.REACT_APP_PDF_URL
        ).href;
        window.location.href = downloadURL;
    }
    // enviar quando o fileData mudar
    // basicamente feels like uma versão React
    // de "fileData.addEventListener(onSubmit)" ou algo assim
    // só que o evento é a mudança do estado
    useEffect(() => {
        // evitamos enviar no primeiro render, quando nada está selecionado
        if (fileData) onSubmit("compress");
    }, [fileData]);

    useEffect(() => {
        if (result) {
            setDownloadFilename(result.downloadFilename);
        }
    }, [result]);

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
                p > Arraste seu PDF para cá ou < /p>

                <
                div className = "buttons-container" >
                <
                label className = "button-file" >
                <
                p > Selecione o arquivo PDF < /p> <
                input
                id = "compression-file-upload-input"
                ref = {
                    fileInputRef
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
                    isFileSelected && fetching ? < PetitionCompression / > : < > < />} <
                        />
                } {
                    uploadSuccess && ( <
                        SuccessNoticeCard closeHandler = {
                            handleCloseModal
                        }
                        downloadHandler = {
                            handleDownload
                        }
                        />
                    )
                } {
                    failure && < FailureNoticeModal closeHandler = {
                        handleCloseModal
                    }
                    />} <
                    />
                );
            }

            export {
                Home
            };