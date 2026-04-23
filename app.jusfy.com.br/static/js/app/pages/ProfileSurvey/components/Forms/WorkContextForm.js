import {
    useContext,
    useEffect,
    useState
} from "react";
import {
    NavigationContext
} from "../../context/navigation/Provider";
import useProfileSurveyForm from "../../hooks/useProfileSurveyForm";
import * as S from "./Forms.styles";
import CheckboxOptions from "./components/CheckboxOption";
import {
    WORK_CONTEXT_MAP
} from "../../context/navigation/state/constants";

const WorkContextForm = ({
    options,
    setStep
}) => {
    const {
        form
    } = useProfileSurveyForm();

    const [selectedWorkContext, setSelectedWorkContext] = useState(
        form.values.workContext
    );

    const [
        selectedWorkForceSizeOption,
        setSelectedWorkForceSizeOption,
    ] = useState(form.values.workForceSize);

    const [workContextDetails, setWorkContextDetails] = useState(
        form.values.workContextDetails
    );
    const {
        buttonDisabled,
        setButtonDisabled
    } = useContext(NavigationContext);

    const hasDetailWorkContext = ["Outro", "Serviço público"].includes(
        selectedWorkContext
    );

    const hasEmployeeQuantity = ["Escritório de advocacia"].includes(
        selectedWorkContext
    );

    useEffect(() => {
        const autoCompleteFields = [
            "Advogado autônomo",
            "Escritório de contabilidade",
            "Setor jurídico",
        ];

        const isAutoCompleteField = autoCompleteFields.some(val =>
            form.values.workContext.includes(val)
        );

        if (!isAutoCompleteField) {
            if (hasEmployeeQuantity) {
                form.setFieldValue("workForceSize", selectedWorkForceSizeOption);
                setButtonDisabled(false);
            } else if (workContextDetails) {
                form.setFieldValue("workContextDetails", workContextDetails);
                setButtonDisabled(false);
            } else {
                setButtonDisabled(true);
            }
        } else {
            setButtonDisabled(false);
        }
    }, [
        workContextDetails,
        form.values.workContext,
        selectedWorkForceSizeOption,
    ]);

    useEffect(() => {
        const workContext = form.values.workContext;

        if (WORK_CONTEXT_MAP.hasOwnProperty(workContext)) {
            setStep(WORK_CONTEXT_MAP[workContext]);
        }
    }, [form.values]);

    useEffect(() => {
        if (selectedWorkContext) {
            setButtonDisabled(false);
            return;
        }

        setButtonDisabled(true);
    }, []);

    useEffect(() => {
        form.setFieldValue("workContext", selectedWorkContext);
    }, [selectedWorkContext]);

    const createCheckboxOption = (option, state, setState, label) => ( <
        CheckboxOptions value = {
            option
        }
        key = {
            option
        }
        onClick = {
            () => setState(option)
        }
        isSelected = {
            option === state
        }
        label = {
            label
        }
        />
    );

    const setSubTitle = () => {
        if (hasDetailWorkContext) {
            return "Em qual contexto?";
        } else if (hasEmployeeQuantity) {
            return "Qual é o número de funcionários do escritório?";
        }
        return null;
    };

    const setTextArea = () => {
        if (hasDetailWorkContext) {
            return ( <
                S.TextArea placeholder = "Digite o seu contexto de trabalho"
                value = {
                    workContextDetails
                }
                onChange = {
                    evt => setWorkContextDetails(evt.target.value)
                }
                />
            );
        } else if (hasEmployeeQuantity) {
            return ( <
                S.Wrapper > {
                    options.maxWorkSize.map(option =>
                        createCheckboxOption(
                            option,
                            selectedWorkForceSizeOption,
                            setSelectedWorkForceSizeOption,
                            option
                        )
                    )
                } <
                /S.Wrapper>
            );
        }

        return < > < />;
    };

    const Details = ( <
        >
        <
        S.Subtitle > {
            setSubTitle()
        } < /S.Subtitle> {
            setTextArea()
        } <
        />
    );

    return ( <
        S.Container >
        <
        S.Title required > Qual é o seu contexto de trabalho ? < /S.Title> <
        S.Wrapper > {
            options.workContext.map(option =>
                createCheckboxOption(
                    option,
                    selectedWorkContext,
                    setSelectedWorkContext,
                    option
                )
            )
        } <
        /S.Wrapper> {
            selectedWorkContext ? Details : null
        } <
        /S.Container>
    );
};

export default WorkContextForm;