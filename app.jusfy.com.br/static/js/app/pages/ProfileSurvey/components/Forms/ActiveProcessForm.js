import {
    useContext,
    useEffect,
    useState
} from "react";
import useProfileSurveyForm from "../../hooks/useProfileSurveyForm";
import CheckboxOptions from "./components/CheckboxOption";
import * as S from "./Forms.styles";
import {
    NavigationContext
} from "../../context/navigation/Provider";

const ActiveProcessForm = ({
    options
}) => {
    const {
        form
    } = useProfileSurveyForm();

    const [selectedActiveProcessess, setSelectedActiveProcessess] = useState(
        form.values.activeProcessess
    );

    const {
        buttonDisabled,
        setButtonDisabled
    } = useContext(NavigationContext);

    useEffect(() => {
        form.setFieldValue("activeProcessess", selectedActiveProcessess);
        setButtonDisabled(false);
    }, [selectedActiveProcessess]);

    useEffect(() => {
        if (selectedActiveProcessess) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, []);

    return ( <
        S.Container >
        <
        S.Title required > Quantos processos ativos você possui ? < /S.Title> <
        S.Wrapper > {
            options.casesSize.map(activeProcessessOption => ( <
                CheckboxOptions value = {
                    activeProcessessOption
                }
                key = {
                    activeProcessessOption
                }
                onClick = {
                    () => setSelectedActiveProcessess(activeProcessessOption)
                }
                isSelected = {
                    activeProcessessOption === selectedActiveProcessess
                }
                />
            ))
        } <
        /S.Wrapper> <
        /S.Container>
    );
};

export default ActiveProcessForm;