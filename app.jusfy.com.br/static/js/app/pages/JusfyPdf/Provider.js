import React, {
    useState,
    createContext,
    useEffect
} from "react";
import usePdfSplitterInput from "./PdfSplitter/hooks/usePdfSplitterInput";
import usePdfSplitterDownload from "./PdfSplitter/hooks/usePdfSplitterDownload";
const PdfContext = createContext({});

function PdfProvider({
    children
}) {
    const [visible, setVisible] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [value, setValue] = useState(0);
    const [file, setFile] = useState("");
    const [upload, setUpload] = useState(false);
    const [login, setLogin] = useState(false);
    const [interval, setInterval] = useState(false);
    const [intervalDetails, setIntervalDetails] = useState(false);
    const [sizeDetails, setSizeDetails] = useState(false);
    const [modalDownload, setModalDownload] = useState(false);
    const [modalLimited, setModalLimited] = useState(0);
    const [tabs, setTabs] = useState("0");
    const [countLoading, setCountLoading] = useState(0);
    const [menuMobile, setMenuMobile] = useState(false);

    const [userAuthData, setUserAuthData] = useState(null);
    useEffect(() => {
        setUserAuthData(JSON.parse(localStorage.getItem("user")));
    }, []);

    const inputFileRef = React.useRef(
        document.getElementById("upload-file-input")
    );

    const {
        onResetStates,
        onSubmit,
        onFileChange,
        isFileSelected,
        filename,
        fetching,
        uploadSuccess,
        failure,
        result,
        desiredFileSizeMB,
        setDesiredFileSizeMB,
        onDesiredFileSizeChange,
        isDesiredFileSizeValid,
        downloadFileUUID,
        isReadyToDownload,
        usageLimitPassed,
        setUsageLimitPassed,
        doAuthorizationRequest,
    } = usePdfSplitterInput(inputFileRef);

    const {
        onPerformDownload
    } = usePdfSplitterDownload();

    return ( <
        PdfContext.Provider value = {
            {
                visible,
                setVisible,
                openModal,
                setOpenModal,
                value,
                setValue,
                file,
                setFile,
                upload,
                setUpload,
                login,
                setLogin,
                interval,
                setInterval,
                intervalDetails,
                setIntervalDetails,
                sizeDetails,
                setSizeDetails,
                modalDownload,
                setModalDownload,
                modalLimited,
                setModalLimited,
                tabs,
                setTabs,
                countLoading,
                setCounLoading: setCountLoading,
                menuMobile,
                setMenuMobile,

                // usado pelo hook de upload
                inputFileRef,

                uploadHook: {
                    onResetStates,
                    onSubmit,
                    onFileChange,
                    isFileSelected,
                    filename,
                    fetching,
                    uploadSuccess,
                    failure,
                    result,
                    desiredFileSizeMB,
                    setDesiredFileSizeMB,
                    onDesiredFileSizeChange,
                    isDesiredFileSizeValid,
                    downloadFileUUID,
                    isReadyToDownload,
                    usageLimitPassed,
                    setUsageLimitPassed,
                    doAuthorizationRequest,
                },

                downloadHook: {
                    onPerformDownload,
                },
            }
        } >
        {
            children
        } <
        /PdfContext.Provider>
    );
}

export {
    PdfContext
};
export default PdfProvider;