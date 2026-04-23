import {
    useState
} from "react";

const {
    REACT_APP_PDF_DOWNLOAD_BASE_URL
} = process.env;

function usePdfSplitterDownload() {
    const [downloadFetching, setDownloadFetching] = useState(false);
    const [downloadSuccess, setDownloadSuccess] = useState(false);
    const [downloadFailure, setDownloadFailure] = useState(false);

    //const downloadFile = (fileURL) => {
    //    const link = document.createElement('a')
    //    link.href =

    //}

    const onPerformDownload = async fileUUID => {
        // WRONG
        //const downloadURL = new URL(`/${fileUUID}/`, REACT_APP_PDF_DOWNLOAD_BASE_URL).toString()
        const downloadURL = `${REACT_APP_PDF_DOWNLOAD_BASE_URL}${fileUUID}`;
        try {
            setDownloadFetching(true);
            setDownloadSuccess(false);
            setDownloadFailure(false);

            // isto está meio hacky,
            // e as mudanças de estados estão escritas
            // sob a suposição anterior de que eu faria um
            // fetch para baixar o arquivo...
            // podemos mudar depois, mas por ora isto baixa
            // o arquivo como um download comum de arquivo estático
            // (é usado res.download para a requisição no express, no backend)
            const fileURL = `${downloadURL}.zip`;
            window.location.href = fileURL;
            setDownloadSuccess(true);
            setDownloadFetching(false);
        } catch (err) {
            if (process.env.NODE_ENV === "development") console.error(err);
            setDownloadFetching(false);
            setDownloadFailure(true);
        }
    };

    return {
        onPerformDownload,

        downloadFetching,
        downloadSuccess,
        downloadFailure,
    };
}

export default usePdfSplitterDownload;