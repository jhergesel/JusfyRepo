import {
    useContext,
    useEffect,
    useState
} from "react";
import {
    NavigationContext
} from "../../context/navigation/Provider";
import {
    SurveyDataContext
} from "../../context/surveyData/Provider";
import useProfileSurveyForm from "../../hooks/useProfileSurveyForm";
import * as S from "./Forms.styles";
import CheckboxOptions from "./components/CheckboxOption";
import useWindowSize from "../../../../hooks/useWindowResize";

const ReasonSignForm = ({
    options,
    onFinish
}) => {
    const {
        form
    } = useProfileSurveyForm();

    const windowSize = useWindowSize();

    const isDesktop = windowSize >= 650;

    const [selectedReasonSigns, setselectedReasonSigns] = useState(
        form.values.reasonSign
    );
    const [reasonSignDetails, setReasonSignDetails] = useState(
        form.values.reasonSignDetails
    );
    const hasOtherReasonSign = selectedReasonSigns.includes("Outro");

    const {
        shouldSubmit,
        setShouldSubmit
    } = useContext(SurveyDataContext);
    const {
        buttonDisabled,
        setButtonDisabled
    } = useContext(NavigationContext);

    useEffect(() => {
        const isValidReasonSign =
            (selectedReasonSigns ? .length && !hasOtherReasonSign) ||
            (selectedReasonSigns ? .length &&
                hasOtherReasonSign &&
                !!reasonSignDetails ? .length);

        setButtonDisabled(!isValidReasonSign);

        form.setFieldValue("reasonSign", selectedReasonSigns);
        form.setFieldValue("reasonSignDetails", reasonSignDetails);
    }, [selectedReasonSigns, reasonSignDetails, hasOtherReasonSign]);

    useEffect(() => {
        const isReasonSignSelected = selectedReasonSigns ? .length > 0;
        setButtonDisabled(!isReasonSignSelected);
    }, []);

    const handleReasonSignChange = option => {
        setselectedReasonSigns(option);
        if (!hasOtherReasonSign) {
            setReasonSignDetails("");
        }
    };

    const handleReasonSignDetailsChange = event => {
        setReasonSignDetails(event.target.value);
    };

    const handleSelectOption = reasonSignOption => {
        if (selectedReasonSigns.includes(reasonSignOption)) {
            setselectedReasonSigns(
                selectedReasonSigns.filter(option => option !== reasonSignOption)
            );
            return;
        }
        handleReasonSignChange(reasonSign => {
            return [...reasonSign, reasonSignOption];
        });
    };

    const scrollToBottom = () =>
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });

    useEffect(() => {
        if (shouldSubmit) {
            form.handleSubmit();
            onFinish();
            setShouldSubmit(false);
        }
    }, [shouldSubmit]);

    useEffect(() => {
        if (hasOtherReasonSign) {
            scrollToBottom();
        }
    }, [hasOtherReasonSign]);

    useEffect(() => {
        if (isDesktop) {
            scrollToBottom();
        }
    }, []);

    return ( <
        S.Container >
        <
        S.Title required > Por que você decidiu assinar a Jusfy ? < /S.Title> <
        S.Wrapper > {
            options.reasonToSign.map(reasonSignOption => ( <
                CheckboxOptions value = {
                    reasonSignOption
                }
                key = {
                    reasonSignOption
                }
                onClick = {
                    () => handleSelectOption(reasonSignOption)
                }
                isSelected = {
                    selectedReasonSigns.includes(reasonSignOption)
                }
                isSquare /
                >
            ))
        } <
        /S.Wrapper> {
            hasOtherReasonSign && ( <
                >
                <
                S.Subtitle > Qual seria o motivo ? < /S.Subtitle> <
                S.TextArea placeholder = "Digite aqui o motivo de ter assinado a Jusfy"
                value = {
                    reasonSignDetails
                }
                onChange = {
                    handleReasonSignDetailsChange
                }
                /> <
                />
            )
        } <
        /S.Container>
    );
};

export default ReasonSignForm;