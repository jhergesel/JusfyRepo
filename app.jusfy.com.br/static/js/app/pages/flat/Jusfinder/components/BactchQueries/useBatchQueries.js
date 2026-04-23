import {
    useCallback,
    useContext,
    useEffect,
    useState
} from "react";
import {
    LINK_MANUAL,
    QUERIES_BATCH
} from "./constants";
import {
    jusfinderContext
} from "../../context";
import axios from "axios";
import {
    toast
} from "react-toastify";
import {
    EventsSegment
} from "../../../../../helpers/EventsSegmentsCalculators";


export const useBatchQueries = () => {
    const {
        openModal,
        closeModal
    } = useContext(jusfinderContext);
    const [document, setDocument] = useState("CPF");
    const [queries, setQueries] = useState([]);
    const [error, setError] = useState("");
    const [emptyFileError, setEmptyFileError] = useState("");
    const [fileUpload, setFileUpload] = useState(null);
    const [isLoadingBatch, setIsLoadingBatch] = useState(false);
    const {
        HandleEvent
    } = EventsSegment();

    const queriesFiltered = useCallback(() => {
        return QUERIES_BATCH.filter(query => {
            return query.type.includes(document);
        }).sort((a, b) => a.name.localeCompare(b.name));
    }, [document]);

    const items = queriesFiltered();
    const middleIndex = Math.ceil(items.length / 2);
    const leftColumn = items.slice(0, middleIndex);
    const rightColumn = items.slice(middleIndex);

    const onChangeDocumentValue = document => {
        setDocument(document);

        if (document === "PLATE") {
            setQueries(["vehicle_data"]);
            return;
        }

        setQueries([]);
    };

    const onChangeQueries = (e, value) => {
        setQueries(prev => {
            const isChecked = prev.includes(value);
            return isChecked ? prev.filter(item => item !== value) : [...prev, value];
        });
    };

    const onChooseFile = ([file]) => {
        setFileUpload(file);

        HandleEvent("Upload File Queries Success");
    };

    const validationQueries = () => {
        return queries.length === 0;
    };

    const validationFile = () => {
        return fileUpload === null;
    };

    const prepareFormData = () => {
        let formData = new FormData();
        formData.append("documentType", document);
        formData.append("queries", JSON.stringify(queries));
        formData.append("file", fileUpload);

        return formData;
    };

    const hasErrors = () => {
        const isQueryInvalid = validationQueries();
        const isFileInvalid = validationFile();

        if (isQueryInvalid) setError("Selecione uma consulta.");
        if (isFileInvalid) setEmptyFileError("Selecione um arquivo.");

        return isQueryInvalid || isFileInvalid;
    };
    const submitQueries = async () => {
        if (hasErrors()) return;

        const formData = prepareFormData();
        try {
            await axios.post(
                `${process.env.REACT_APP_API_URL}/bulk-queries`,
                formData
            );

            HandleEvent("Submitted Queries", {
                document_type: document,
                queries: queries,
            });

            openModal("AVAILABLE_SOON_MODAL", {
                context: "BatchQueriesPage",
            });
        } catch (e) {
            toast.error("Erro ao consultar documentos");
        }
    };

    const openManual = () => {
        window.open(LINK_MANUAL, "_blank");
        HandleEvent("Open Manual Button Clicked Queries");
    };

    useEffect(() => {
        setError("");
    }, [queries]);

    useEffect(() => {
        setEmptyFileError("");
    }, [fileUpload]);

    const hasChekedQueries = queriesFiltered().some(query =>
        queries.includes(query.value)
    );

    return {
        document,
        setDocument,
        onChangeDocumentValue,
        queriesFiltered,
        queries,
        setQueries,
        onChangeQueries,
        submitQueries,
        error,
        hasChekedQueries,
        onChooseFile,
        emptyFileError,
        isLoadingBatch,
        setIsLoadingBatch,
        leftColumn,
        rightColumn,
        validationQueries,
        validationFile,
        openManual,
    };
};