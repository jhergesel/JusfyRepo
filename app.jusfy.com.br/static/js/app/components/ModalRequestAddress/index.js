import axios from "axios";
import React, {
    useState,
    useEffect
} from "react";
import {
    Modal
} from "react-bootstrap";
import styled from "styled-components";
import Warning from "./components/Warning";
import Success from "./components/Success";
import Form from "./components/Form";
import * as yup from "yup";
import {
    useFormik
} from "formik";
import {
    toast
} from "react-toastify";
import {
    useDispatch,
    useSelector
} from "react-redux";
import * as auth from "../../modules/Auth/_redux/authRedux";
import {
    tracking
} from "../../services/tracking";

export const ModalContainer = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ open }) => (open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 999;
`;

const ResponsiveModal = styled(Modal)
`
  z-index: 1300;
  
  .modal-body {
    padding: 40px;
    width: 100%;
  }

  .modal-content {
    height: auto !important;
    border-radius: 10px !important;
  }

  .modal-dialog {
    max-width: ${({ screen }) =>
      screen === "form" ? "70vw" : "auto"} !important;
    margin-top: 15px !important;
  }

  @media screen and (max-width: 767px) {
    .modal-content {
      width: 90% !important;
      margin: 0 auto !important;
    }
  }
`;

const ModalRequestAddress = ({
    isOpen,
    onClose
}) => {
    const [screen, setScreen] = useState("warning");
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const [isCepValid, setValidCep] = useState(true);
    const [errorCount, setErrorCount] = useState(0);
    const [canClose, setCanClose] = useState(false);
    const [initialValues, setInitialValues] = useState({
        postal_code: "",
        city: "",
        state: "",
        address: "",
        address_number: "",
        address_complement: "",
        district: "",
        phone: "",
    });
    const getUpdatedFields = (values) => {
        const updatedFields = [];
        const fieldsToCheck = ['phone', 'state', 'city', 'district', 'postal_code', 'address', 'address_number', 'address_complement'];

        fieldsToCheck.forEach(field => {
            if (values[field] && values[field] !== "" && values[field] !== null) {
                if (typeof values[field] === 'object' && values[field].id) {
                    updatedFields.push(field);
                } else if (typeof values[field] !== 'object') {
                    updatedFields.push(field);
                }
            }
        });

        return updatedFields;
    };

    const handleError = () => {
        const newErrorCount = errorCount + 1;
        setErrorCount(newErrorCount);
        if (newErrorCount >= 3) {
            setCanClose(true);
            toast.error("Estamos com dificuldades técnicas. Tentaremos atualizar suas informações novamente amanhã.");
        }
    };

    const handleClose = () => {
        if (canClose) {
            const now = new Date().getTime();
            localStorage.setItem('modal_request_address_closed_at', now.toString());
            onClose();
        }
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: initialValues,
        onSubmit: (values, {
            setSubmitting
        }) => {
            //ATUALIZAR BACK E JUSBILL
            dispatch({
                type: "SAVE_PROFILE",
                payload: {
                    values: {
                        ...values,
                        oab: user.oab,
                        name: user.name,
                        email: user.email,
                        oab_state: user._oab_state_data,
                        profession: user.profession,
                        document_number: user.document_number,
                        manage_url: user.manage_url,
                        password: "",
                        confirmation_password: "",
                    },
                    callback: (response) => {
                        dispatch(auth.actions.requestUser());
                        setSubmitting(false);
                        if (response ? .data ? .success) {
                            const updatedFields = getUpdatedFields(values);
                            tracking.userProfile.trackUpdateSucceeded(user, updatedFields);
                            setScreen("success");
                            setErrorCount(0); // Reset error count on success
                            localStorage.removeItem('modal_request_address_closed_at'); // Limpa o timestamp ao salvar com sucesso
                        } else {
                            const errorMessage = response ? .data ? .message || "Erro no servidor ao atualizar informações";
                            tracking.userProfile.trackUpdateFailed(user, "backend_error", errorMessage);
                            handleError();
                        }
                    },
                    onError: (error) => {
                        setSubmitting(false);
                        const errorMessage = error ? .response ? .data ? .message || error ? .response ? .data ? .msg || error ? .message || "Erro de conexão ao atualizar informações";
                        const rawMsg = error ? .response ? .data ? .msg || "";
                        if (rawMsg.includes("[backend]")) {
                            tracking.userProfile.trackUpdateFailed(user, "backend_error", errorMessage);
                        }
                        if (rawMsg.includes("[jusbill]")) {
                            tracking.userProfile.trackUpdateFailed(user, "jusbill_error", errorMessage);
                        }
                        if (rawMsg.includes("[provider]")) {
                            tracking.userProfile.trackUpdateFailed(user, "provider_error", errorMessage);
                        }
                        handleError();
                    },
                },
            })
        },
        validationSchema: yup.object().shape({
            phone: yup
                .string()
                .required("O campo telefone é obrigatório!")
                .matches(
                    /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
                    "Telefone inválido."
                ),
            state: yup.object().required("O campo estado é obrigatório!"),
            city: yup.object().required("O campo cidade é obrigatório!"),
            district: yup.string().required("O campo bairro é obrigatório!"),
            postal_code: yup
                .string()
                .required("O campo CEP é obrigatório!")
                .test(
                    "is-valid-cep",
                    "CEP inválido. Por favor, insira um CEP válido.",
                    function(value) {
                        if (!value) {
                            setValidCep(true);
                            return false;
                        }
                        if (!isCepValid) return false;
                        if (value.length <= 9) return true;

                        return true;
                    }
                ),
            address: yup.string().required("O campo endereço é obrigatório!"),
            address_number: yup.string().required("O campo número é obrigatório!"),
            address_complement: yup.string(),
        }),
    });

    const searchAddressByAddressCode = async code => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_CEP_API_BASE_URL}/${code}/json/`, {
                    timeout: 5000
                }
            );
            const data = await response.data;
            if (data.erro === "true") {
                setValidCep(false);
                return {
                    success: false,
                    error: "Não foi possível localizar o CEP",
                };
            } else {
                setValidCep(true);
            }

            return {
                success: true,
                data: {
                    address: data.logradouro || "",
                    district: data.bairro || "",
                    city: data.localidade || "",
                    state: data.uf || "",
                },
            };
        } catch (error) {
            if (error ? .code === "ECONNABORTED" || error ? .response ? .status === 502) {
                setValidCep(true);
                toast.error(
                    "Estamos com problemas para localizar o CEP, por favor, insira manualmente."
                );
                return {
                    success: true,
                };
            }
            setValidCep(false);
            console.error("Não foi possível localizar o CEP:", error);
            return {
                success: false,
                error: "Não foi possível localizar o CEP",
            };
        }
    };

    useEffect(() => {
        if (!user || Object.keys(user).length === 0) return;
        setInitialValues({
            phone: user.phone || "",
            address: user.address || "",
            address_number: user.address_number || "",
            address_complement: user.address_complement || "",
            state: user._state_data || "",
            city: user._city_data || "",
            postal_code: user.postal_code || "",
            district: user.district || "",
        });
    }, [user]);

    useEffect(() => {
        const body = document.body;
        const hasModalOpenClass = body.classList.contains("modal-open");
        let originalOverflow = body.style.overflow;
        if (hasModalOpenClass) {
            body.style.setProperty("overflow", "hidden", "important");
        }
        return () => {
            body.style.overflow = originalOverflow;
        };
    }, []);

    return ( <
        ModalContainer open = {
            isOpen
        } >
        <
        ResponsiveModal show = {
            isOpen
        }
        onHide = {
            () => {}
        }
        centered backdrop = {
            false
        }
        keyboard = {
            false
        }
        screen = {
            screen
        } >
        {
            canClose && ( <
                button onClick = {
                    handleClose
                }
                style = {
                    {
                        position: "absolute",
                        top: "15px",
                        right: "15px",
                        background: "transparent",
                        border: "none",
                        fontSize: "24px",
                        cursor: "pointer",
                        zIndex: 1,
                        color: "#666",
                    }
                }
                aria - label = "Fechar" >
                ×
                <
                /button>
            )
        } <
        Modal.Body style = {
            {
                padding: screen === "form" ? "0 0 0 0" : undefined
            }
        } > {
            screen === "warning" && ( <
                Warning setScreen = {
                    setScreen
                }
                />
            )
        } {
            screen === "form" && ( <
                Form formik = {
                    formik
                }
                searchAddress = {
                    code => searchAddressByAddressCode(code)
                }
                />
            )
        } {
            screen === "success" && ( <
                Success onClose = {
                    () => window.location.reload()
                }
                />
            )
        } <
        /Modal.Body> <
        /ResponsiveModal> <
        /ModalContainer>
    );
};

export default ModalRequestAddress;