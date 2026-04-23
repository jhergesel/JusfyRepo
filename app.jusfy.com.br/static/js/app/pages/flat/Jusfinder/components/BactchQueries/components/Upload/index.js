import React, {
    useState
} from "react";
import SVG from "react-inlinesvg";
import * as S from "./styles";
import {
    has,
    isEmpty
} from "lodash";

import {
    useDropzone
} from "react-dropzone";

import {
    toAbsoluteUrl
} from "../../../../../../../../_metronic/_helpers";
import {
    EventsSegment
} from "../../../../../../../helpers/EventsSegmentsCalculators";

export const UploadDND = ({
        multiple = false,
        accept = [".pdf"],
        sizeLimitMB = 0,
        hasFile = false,
        alreadyTitle = undefined,
        description = undefined,
        onChange,
        message = "",
        onError = errorType => {},
    }) => {
        const [selectedFiles, setSelectedFiles] = useState([]);
        const [tempFiles, setTempFiles] = useState([]);
        const [error, setError] = useState(null);
        const [modalAlreadyFile, setModalAlreadyFile] = useState(false);
        const sizeLimitInBytes = sizeLimitMB * 1024 * 1024;

        const {
            HandleEvent
        } = EventsSegment();

        const onSendFile = async files => {
            const validExtension = files.map(file => file.name.toLowerCase());
            const validatedExtensions = validExtension.some(
                text => text.endsWith("xlsx") || text.endsWith("csv")
            );

            if (!validatedExtensions) {
                onError("invalid_format");
                HandleEvent("Invalid File Format Uploaded Queries", {
                    format: validExtension[0] || "",
                });
                return handleError({
                    error: `O arquivo deve ser no formato XLSX ou CSV (planilha)`,
                });
            }

            if (sizeLimitMB > 0) {
                const validSize = files.every(file => file.size <= sizeLimitInBytes);
                if (!validSize) {
                    onError("size_too_large");
                    HandleEvent("Upload Invalid File Size");
                    return handleError({
                        error: `O arquivo deve ter o tamanho de até ${sizeLimitMB}mb`,
                    });
                }
            }

            setSelectedFiles(files);
            const returnedValue = await onChange(files);
            if (returnedValue && has(returnedValue, "error"))
                return handleError(returnedValue);
        };

        const onContinueAlready = () => {
            setModalAlreadyFile(false);
            onSendFile(tempFiles);
            setTempFiles([]);
        };

        const onCancelAready = () => {
            setModalAlreadyFile(false);
            setTempFiles([]);
        };

        const handleChange = files => {
            setError(null);

            if ((!isEmpty(selectedFiles) || hasFile) && !!alreadyTitle) {
                setTempFiles(files);
                return setModalAlreadyFile(true);
            }

            return onSendFile(files);
        };

        const handleError = err => {
            setSelectedFiles([]);
            console.error(err);

            if (Array.isArray(err)) {
                const isFileTooLarge = err.every(rjfile =>
                    rjfile.errors.find(error => error.code === "file-too-large")
                );
                if (isFileTooLarge) {
                    onError("size_too_large");
                    return handleError({
                        error: `O arquivo deve ter o tamanho de até ${sizeLimitMB}mb`,
                    });
                }
                return handleError({
                    error: `Erro ao processar o arquivo`
                });
            }

            setError(err);
        };

        const {
            getRootProps,
            getInputProps,
            isDragActive
        } = useDropzone({
            onDropAccepted: handleChange,
            onDropRejected: handleError,
            accept,
            multiple,
            maxSize: sizeLimitMB > 0 ? sizeLimitInBytes : undefined,
        });

        return ( <
            >
            <
            S.Dragzone { ...getRootProps()
            }
            hasFiles = {!isEmpty(selectedFiles)
            }
            hasError = {!!error || !!message
            } >
            {
                isEmpty(selectedFiles) && ( <
                    SVG src = {
                        toAbsoluteUrl("/media/svg/icons/Files/export.svg")
                    }
                    />
                )
            } {
                isDragActive ? ( <
                    S.Title > Solte o arquivo aqui para anexar < /S.Title>
                ) : ( <
                    S.Title > {
                        isEmpty(selectedFiles) ?
                        "Clique aqui para escolher ou Arraste o arquivo" :
                            "Clique para escolher outro arquivo"
                    } <
                    /S.Title>
                )
            } {
                isEmpty(selectedFiles) ? ( <
                        > {!description && ( <
                                S.Description >
                                arquivo em {
                                    accept.toUpperCase().replace(".", "")
                                } {
                                    " "
                                } {
                                    sizeLimitMB > 0 ? `de até ${sizeLimitMB}mb` : ""
                                } <
                                /S.Description>
                            )
                        } {
                            description && < S.Description > {
                                    description
                                } < /S.Description>} <
                                />
                        ): (
                            selectedFiles.map((file, idx) => ( <
                                S.Description key = {
                                    idx
                                } > {
                                    file.name
                                } < /S.Description>
                            ))
                        )
                    } <
                    input { ...getInputProps()
                    }
                accept = {
                    accept
                }
                /> <
                /S.Dragzone> {
                    error ? ( <
                        S.ErrorMessage > {
                            error ? .error || error
                        } < /S.ErrorMessage>
                    ) : (
                        message && < S.ErrorMessage > {
                            message
                        } < /S.ErrorMessage>
                    )
                } <
                />
            );
        };