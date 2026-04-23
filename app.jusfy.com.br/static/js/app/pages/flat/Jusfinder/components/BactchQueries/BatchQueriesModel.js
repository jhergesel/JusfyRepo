import {
    BlockUi
} from "../../../../../components/BlockUI";
import {
    Button,
    ButtonAboutInfo,
    Container,
    ContentQueries,
    ContentQueriesWrapper,
    ContentTitleAboutDocument,
    ContentUpload,
    Icon,
    Label,
    UploadContainer,
    WrapperBatch,
    WrapperButton,
    WrapperInfoDocument,
    WrapperQueries,
} from "./styles";
import {
    Card
} from "../../Pages/components/Card";
import {
    ORIENTATIONS,
    RadioOptions
} from "./components/RadioOptions";
import {
    DOCUMENTS
} from "./constants";
import {
    Checkbox,
    FormControlLabel
} from "@material-ui/core";
import {
    Error
} from "../ModalContent/QueryFormModal/QueryFormModal.styles";
import {
    UploadDND
} from "./components/Upload";
import {
    toAbsoluteUrl
} from "../../../../../../_metronic/_helpers";
import React from "react";
import {
    ReprocessBulk
} from "./components/ReprocessBulk";

export const BatchQueriesModel = ({
        document,
        onChangeDocumentValue,
        queries,
        onChangeQueries,
        submitQueries,
        error,
        onChooseFile,
        emptyFileError,
        isLoadingBatch,
        leftColumn,
        rightColumn,
        openManual,
    }) => {
        return ( <
            BlockUi blocking = {
                isLoadingBatch
            } >
            <
            Container >
            <
            Card >
            <
            WrapperBatch >
            <
            Label >
            Formato dos documentos < span > * < /span> <
            /Label> <
            RadioOptions options = {
                DOCUMENTS
            }
            orientation = {
                ORIENTATIONS.HORIZONTAL
            }
            actived = {
                document
            }
            onChange = {
                e => onChangeDocumentValue(e.target.value)
            }
            /> <
            /WrapperBatch>

            <
            WrapperBatch >
            <
            Label >
            Consultas a serem realizadas < span > * < /span> <
            /Label> <
            ContentQueriesWrapper >
            <
            ContentQueries > {
                leftColumn ? .map((query, i) => ( <
                    WrapperQueries key = {
                        i
                    }
                    error = {
                        error
                    }
                    checked = {
                        queries.includes(query.value)
                    }
                    data - testid = {
                        "queries"
                    } >
                    <
                    FormControlLabel control = { <
                        Checkbox
                        checked = {
                            queries.includes(query.value)
                        }
                        name = {
                            query.value
                        }
                        color = "primary"
                        onChange = {
                            e => onChangeQueries(e, query.value)
                        }
                        />
                    }
                    label = {
                        query.name
                    }
                    /> <
                    /WrapperQueries>
                ))
            } <
            /ContentQueries> <
            ContentQueries > {
                rightColumn.map((query, i) => ( <
                    WrapperQueries key = {
                        i
                    }
                    error = {
                        error
                    }
                    checked = {
                        queries.includes(query.value)
                    }
                    data - testid = {
                        "queries"
                    } >
                    <
                    FormControlLabel control = { <
                        Checkbox
                        checked = {
                            queries.includes(query.value)
                        }
                        name = {
                            query.value
                        }
                        color = "primary"
                        onChange = {
                            e => onChangeQueries(e, query.value)
                        }
                        />
                    }
                    label = {
                        query.name
                    }
                    /> <
                    /WrapperQueries>
                ))
            } <
            /ContentQueries> <
            /ContentQueriesWrapper> {
                error && < Error > {
                        error
                    } < /Error>} <
                    /WrapperBatch>

                    <
                    WrapperBatch >
                    <
                    Label >
                    Anexar arquivo < span > * < /span> <
                    /Label> <
                    UploadContainer >
                    <
                    ContentUpload >
                    <
                    UploadDND
                accept = {
                    [".csv", ".xlsx"]
                }
                sizeLimitMB = {
                    50
                }
                description = "Escolha um arquivo .xlsx ou .csv"
                onChange = {
                    onChooseFile
                }
                multiple = {
                    true
                }
                data - testid = "upload-file"
                message = {
                    emptyFileError
                }
                /> <
                /ContentUpload> <
                WrapperInfoDocument >
                    <
                    ContentTitleAboutDocument >
                    <
                    Icon
                src = {
                    toAbsoluteUrl("/media/jusfinder/information-icon.svg")
                }
                /> <
                Label > Como deve estar seu arquivo < /Label> <
                    /ContentTitleAboutDocument>

                    <
                    span >
                    Os documentos a serem consultados devem estar em uma mesma
                coluna indicada com o título“ CPF”, “CNPJ” ou“ Placa”. <
                    /span>

                    <
                    span >
                    Planilhas mais antigas geralmente são.xls e devem ser
                transformadas em.xlsx ou.csv. <
                    /span> <
                    ButtonAboutInfo onClick = {
                        openManual
                    } >
                    Saber mais <
                    /ButtonAboutInfo> <
                    /WrapperInfoDocument> <
                    /UploadContainer> <
                    /WrapperBatch> <
                    /Card> <
                    WrapperButton >
                    <
                    Button onClick = {
                        submitQueries
                    } > Consultar < /Button> <
                    /WrapperButton> <
                    ReprocessBulk / >
                    <
                    /Container> <
                    /BlockUi>
            );
        };