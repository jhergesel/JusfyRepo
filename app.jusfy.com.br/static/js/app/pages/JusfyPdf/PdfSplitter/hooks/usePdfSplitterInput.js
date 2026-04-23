import {
    set
} from "lodash";
import {
    useState
} from "react";

import useJusfySplitterAuth from "./useJusfySplitterAuth";

//const backend_url = 'http://localhost:12345/upload/'
const backend_url = process.env.REACT_APP_PDF_URL;
//import { backend_url } from '../environment.js'

function usePdfSplitterInput(fileRef) {
    const [fetching, setFetching] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const [fileExists, setFileExists] = useState(false);
    const [result, setResult] = useState();

    // iniciado como string vazia para exibição inicial
    const [desiredFileSizeMB, setDesiredFileSizeMB] = useState("");

    const [filename, setFilename] = useState("");
    const [fileData, setFileData] = useState("");
    const [isFileSelected, setIsFileSelected] = useState(false);
    const [isDesiredFileSizeValid, setIsDesiredFileSizeValid] = useState(false);
    //const [isFileValid, setIsFileValid] = useState(false)
    const [invalidFileError, setInvalidFileError] = useState(false);

    const [isReadyToDownload, setIsReadyToDownload] = useState(false);
    const [downloadFileUUID, setDownloadFileUUID] = useState("");

    const {
        usageLimitPassed,
        setUsageLimitPassed,
        doAuthorizationRequest,
    } = useJusfySplitterAuth();

    const onResetStates = () => {
        setFetching(false);
        setUploadSuccess(false);
        setFailure(false);
        setFileExists(false);
        setResult(null);

        fileRef.current.value = null;
        setIsFileSelected(false);
        setDesiredFileSizeMB("");
        setFileData("");
        setIsDesiredFileSizeValid(false);

        setInvalidFileError(false);
        setIsReadyToDownload(false);
        setFilename("");
        setDownloadFileUUID("");
    };

    const onSubmit = async usedFeature => {
        const formData = new FormData();
        formData.append("uploadFile", fileData);
        formData.append(
            "desiredFileSizeMB",
            desiredFileSizeMB ? desiredFileSizeMB : 1
        );
        formData.append("usedFeature", usedFeature);

        setFileExists(false);
        setUploadSuccess(false);
        setFailure(false);
        setResult(undefined);

        setInvalidFileError(false);

        setIsReadyToDownload(false);
        setDownloadFileUUID("");

        try {
            setFetching(true);

            const registeredUsage = await doAuthorizationRequest(usedFeature);
            if (registeredUsage === null) {
                setFetching(false);
                setFailure(true);
            } else {
                const usedFeatureToEndpointCorrespondence = {
                    split: "/upload",
                    compress: "/compress",
                };

                // FIXME: de início só havia o Splitter sob o endpoint /upload,
                // sem informar uma usedFeature;
                // a ideia é ficar assim:
                //se usedFeature é "split", usamos um endpoint /split
                //se usedFeature é "compress", usamos um endpoint /compress
                // TODO: é preciso ajustar o backend para que ele use o endpoint /split ao invés de /upload
                const endpoint = usedFeature ?
                    usedFeatureToEndpointCorrespondence[usedFeature] :
                    "/upload";

                const uploadUrl = new URL(endpoint, backend_url).href;
                const response = await fetch(uploadUrl, {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/pdf",
                    },
                });
                setFetching(false);

                if (response.status === 409) {
                    setFileExists(true);
                    setFailure(true);
                } else if (response.status === 500) {
                    setFailure(true);
                } else if (response.status === 400) {
                    //setIsFileValid(false)
                    setFailure(true);
                    setInvalidFileError(true);
                } else {
                    if (response.status === 201) {
                        setUploadSuccess(true);
                        setFailure(false);
                        const responseMessage = await response.json();
                        setResult(responseMessage);
                        setIsReadyToDownload(true);
                        setDownloadFileUUID(responseMessage.uuid);
                    }
                }
            }
        } catch (err) {
            setFetching(false);
            setFailure(true);
        }
    };

    const onFileChange = validationMethod => {
        setDownloadFileUUID("");

        setFailure(false);
        setUploadSuccess(false);
        setFileExists(false);

        setDesiredFileSizeMB("");
        setIsDesiredFileSizeValid(false);

        setFilename(fileRef.current.files[0] ? .name);
        setIsFileSelected(!!fileRef.current.files[0] ? .name);

        //setIsFileValid(await validationMethod(fileRef.current.files[0]))
        setFileData(fileRef.current.files[0]);
    };

    // TODO:
    //  - validação por coisas como tamanho máximo desejado, etc.
    //  - também validar checando se o arquivo é de fato um PDF,
    //    através de magic numbers e tal
    const onDesiredFileSizeChange = targetValue => {
        // Primeiro fazemos um matching sintático,
        // aceitando somente 0 a n dígitos como entrada
        if (targetValue.match(/^\d*$/)) {
            setDesiredFileSizeMB(targetValue);
            // O número de bytes tratando a entrada do usuário como um número inteiro em MiB
            // deve ser menor que o número de bytes do tamanho do arquivo a ser enviado
            if (!Number.isNaN(Number.parseInt(targetValue)) &&
                Number.parseInt(targetValue) * 1024 * 1024 <
                fileRef.current.files[0].size
            )
                setIsDesiredFileSizeValid(true);
            else setIsDesiredFileSizeValid(false);
        }
    };

    return {
        onResetStates,
        onSubmit,
        onFileChange,
        isFileSelected,
        filename,
        fetching,
        uploadSuccess,
        failure,
        result,
        fileExists,
        //isFileValid,
        //isFileTooLarge,
        invalidFileError,
        desiredFileSizeMB,
        setDesiredFileSizeMB,
        onDesiredFileSizeChange,
        isDesiredFileSizeValid,
        downloadFileUUID,
        isReadyToDownload,
        usageLimitPassed,
        setUsageLimitPassed,
        fileData,
    };
}

export default usePdfSplitterInput;