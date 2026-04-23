import {
    useFormik
} from "formik";
import {
    useEffect,
    useState
} from "react";
import * as yup from "yup";
import useLocalStorage from "../../../hooks/useLocalStorage";
import {
    INITIAL_VALUES
} from "../constants";
import axios from "axios";
import {
    useDispatch
} from "react-redux";
import * as auth from "../../../modules/Auth/_redux/authRedux";
import {
    toast
} from "react-toastify";
import {
    useHistory
} from "react-router-dom";
import {
    validateValues
} from "../index";

const validation = yup.object().shape({
    workContext: yup.string(),
    workContextDetails: yup.string(),
    workForceSize: yup.string(),
    activeProcessess: yup.string(),
    lawAreas: yup.array(),
    reasonSign: yup.array(),
    reasonSignDetails: yup.string(),
});

const STATUS_TYPES = {
    LOADING: "LOADING_FORM",
    ERROR: "ERROR_FORM",
    SUCCESS: "SUCCESS_FORM",
};

const LOCAL_STORAGE_KEY = "profile-survey-values";

const useProfileSurveyForm = () => {
    const [status, setStatus] = useState("");
    const [isSuccessApi, setIsSuccessApi] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        getToken,
        setToken,
        hasToken
    } = useLocalStorage(LOCAL_STORAGE_KEY);

    const getFormInitialValues = () => (hasToken ? getToken() : INITIAL_VALUES);

    const history = useHistory();
    const dispatch = useDispatch();

    const onCreateProfile = async values => {
        setIsLoading(true);
        await axios
            .post(`${process.env.REACT_APP_API_URL}/profile`, {
                profile: {
                    workContext: values ? .workContext,
                    workForceSize: values ? .workForceSize,
                    casesSize: values ? .activeProcessess,
                    lawArea: JSON.stringify(values.lawAreas),
                    signinChoice: JSON.stringify(values.reasonSign),
                    signinChoiceDetails: values ? .reasonSignDetails,
                    workContextDetails: values ? .workContextDetails,
                },
            })
            .then(response => {
                setIsSuccessApi(true);
                setStatus(STATUS_TYPES.SUCCESS);
                setIsLoading(false);

                setTimeout(() => {
                    toast.success("Perfil criado com sucesso!");
                }, 6000);
            })
            .catch(error => {
                setStatus(STATUS_TYPES.ERROR);
                setIsLoading(false);

                toast.error(
                    "Ops...tivemos um problema de conexão por isso não conseguimos finalizar seu questionário."
                );
            })
            .finally(() => {
                dispatch({
                    type: auth.actionTypes.UserRequested,
                });
            });
    };

    useEffect(() => {
        validateValues(
            status,
            isSuccessApi,
            isLoading,
            setStatus,
            setIsSuccessApi,
            setIsLoading
        );
    }, [status, isSuccessApi, isLoading]);

    const form = useFormik({
        enableReinitialize: true,
        initialValues: getFormInitialValues(),
        onSubmit: async values => {
            if (["Outro", "Serviço público"].includes(values ? .workContext)) {
                values.workForceSize = "";
            } else {
                values.workContextDetails = "";
            }
            onCreateProfile(values);
        },
        validationSchema: validation,
        resetOnSubmit: false,
    });

    useEffect(() => {
        if (hasToken) {
            const persistedValues = getToken();

            for (const key in persistedValues) {
                const value = persistedValues[key];
                form.setFieldValue(key, value);
            }
        }
    }, []);

    useEffect(() => {
        setToken(form.values);
    }, [form.values, setToken]);

    return {
        form,
        status,
    };
};

export default useProfileSurveyForm;