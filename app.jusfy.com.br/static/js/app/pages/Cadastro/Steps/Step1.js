import axios from "axios";
import React, {
    useRef,
    useState
} from "react";

import useFeatureFlag from "../../../../app/hooks/useFeatureFlag";
import traceId from "../../../../redux/traceId";
import {
    Password
} from "../../../components/Password";
import {
    FEATURE_FLAGS
} from "../../../constants/FeatureFlag";
import getCookie from "../../../helpers/Cookies";
import {
    createHubspotContact
} from "../../../modules/Utils/hubpspot/api";
import RightInfo from "../components/RightInfo/RightInfo";
import {
    tracking
} from "../../../services/tracking";
import {
    sanitizeOnBlur
} from "../../../helpers/sanitizeInput";

export default function Step1(props) {
    const {
        isFeatureFlagEnable,
        flagsReady
    } = useFeatureFlag(
        FEATURE_FLAGS.KILL_SWITCH.ENABLE_CHECKOUT_CUSTOMER_CREATE
    );

    const [isPersisting, setIsPersisting] = useState(false);
    const isPersistingRef = useRef(false);

    React.useEffect(() => {
        tracking.checkout.trackCheckoutStarted(props.formik.values, {});
    }, []);

    const redirectToNextStep = async () => {
        if (isPersistingRef.current) {
            return;
        }

        setIsPersisting(true);

        try {
            isPersistingRef.current = true;
            const validation = await props.formik.validateForm();
            props.formik.setTouched(validation);

            if (Object.keys(validation).length !== 0) {
                const firstErrorKey = Object.keys(validation)[0];
                const firstErrorMessage = validation[firstErrorKey];

                tracking.checkout.trackCheckoutStep2AdvancedFailed(
                    props.formik.values,
                    null, {
                        type: "validation_error",
                        message: firstErrorMessage,
                        code: "VALIDATION_FAILED",
                        validation_errors: validation,
                        failed_field: firstErrorKey,
                    }
                );

                return;
            }

            const hutk = getCookie("hubspotutk");

            if (process.env.NODE_ENV === "production") {
                createHubspotContact(props, hutk, "App");
            }

            const traits = {
                name: props.formik.values.name,
                email: props.formik.values.email,
            };

            if (flagsReady && isFeatureFlagEnable) {
                const response = await axios.post(
                    process.env.REACT_APP_JUSBILL_URL + "/clients/persist", {
                        name: props.formik.values.name,
                        email: props.formik.values.email,
                    }, {
                        headers: {
                            "x-trace-id": traceId,
                        },
                    }
                );

                props.formik.setFieldValue("createdCustomerId", response ? .data ? .id);
            }

            props.setStep(1);
            window.analytics.identify({ ...traits
            });
            window.analytics.track("Sign Up General Info Step Advanced");

            tracking.checkout.trackCheckoutStep2Advanced(props.formik.values, {});
        } catch (e) {
            tracking.checkout.trackCheckoutStep2AdvancedFailed(
                props.formik.values,
                null, {
                    type: "error_persisting_customer",
                    message: e.response ? .data ? .message ||
                        e.message ||
                        "Erro ao avançar para o step 2 - falha ao criar usuário",
                    code: e.response ? .status || "unknown",
                }
            );
        } finally {
            setIsPersisting(false);
            isPersistingRef.current = false;
        }
    };

    return ( <
        div className = "row no-gutters mb-20" >
        <
        div className = "col-xl-8" >
        <
        div className = "border-radius-only-left"
        style = {
            {
                backgroundColor: "#fff",
                padding: "40px",
                height: "100%"
            }
        } >
        <
        div className = "row" >
        <
        div className = "col-xl-4 d-flex align-items-center mb-10" >
        <
        div >
        <
        div className = {
            `step ${props.step == 0 ? "active" : ""}`
        } >
        <
        span > 1 < /span> <
        /div> <
        /div> <
        div className = "step-info d-flex flex-column" >
        <
        span className = "step-title" > Sobre você < /span> <
        /div> <
        /div> <
        div className = "col-xl-4 d-flex align-items-center mb-10" >
        <
        div >
        <
        div className = {
            `step ${props.step == 1 ? "active" : ""}`
        } >
        <
        span > 2 < /span> <
        /div> <
        /div> <
        div className = "step-info d-flex flex-column" >
        <
        span className = "step-title" > Finalizar cadastro < /span> <
        /div> <
        /div> <
        /div>

        <
        div className = "row mb-5" >
        <
        div className = "col-xl-4" > < /div> <
        /div>

        <
        div className = "row mb-5" >
        <
        div className = "col-xl-6" >
        <
        label className = "form-label" >
        Nome completo < span className = "text-danger" > & nbsp;* < /span> <
        /label> <
        input type = "text"
        name = "name"
        className = {
            "form-control " +
            (props.formik.errors.name && props.formik.touched.name ?
                "is-invalid" :
                "")
        }
        value = {
            props.formik.values.name
        }
        onChange = {
            props.formik.handleChange
        }
        onBlur = {
            e => {
                const sanitizedValue = sanitizeOnBlur(e.target.value, "text");
                props.formik.setFieldValue("name", sanitizedValue);
            }
        }
        maxLength = {
            64
        }
        /> {
            props.formik.errors.name && props.formik.touched.name && ( <
                label className = "invalid-feedback" > {
                    props.formik.errors.name
                } <
                /label>
            )
        } <
        /div> <
        /div>

        <
        div className = "row mb-5" >
        <
        div className = "col-xl-6" >
        <
        label className = "form-label" >
        E - mail < span className = "text-danger" > & nbsp;* < /span> <
        /label> <
        input type = "text"
        name = "email"
        className = {
            "form-control " +
            (props.formik.errors.email && props.formik.touched.email ?
                "is-invalid" :
                "")
        }
        value = {
            props.formik.values.email
        }
        onChange = {
            props.formik.handleChange
        }
        onBlur = {
            e => {
                const sanitizedValue = sanitizeOnBlur(
                    e.target.value,
                    "email"
                );
                props.formik.setFieldValue("email", sanitizedValue);
            }
        }
        maxLength = {
            64
        }
        /> {
            props.formik.errors.email && props.formik.touched.email && ( <
                label className = "invalid-feedback" > {
                    props.isUniqueEmail ? ( <
                        span >
                        E - mail já cadastrado.Para fazer o login, & nbsp; <
                        a rel = "noreferrer noopener"
                        href = "/login"
                        style = {
                            {
                                background: "#41c78f",
                                color: "transparent",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                            }
                        } >
                        clique aqui. <
                        /a> <
                        /span>
                    ) : (
                        props.formik.errors.email
                    )
                } <
                /label>
            )
        } <
        /div> <
        div className = "col-xl-6" >
        <
        label className = "form-label" >
        Confirmar e - mail < span className = "text-danger" > & nbsp;* < /span> <
        /label> <
        input type = "text"
        name = "confirmation_email"
        className = {
            "form-control " +
            (props.formik.errors.confirmation_email &&
                props.formik.touched.confirmation_email ?
                "is-invalid" :
                "")
        }
        value = {
            props.formik.values.confirmation_email
        }
        onChange = {
            props.formik.handleChange
        }
        onBlur = {
            e => {
                const sanitizedValue = sanitizeOnBlur(
                    e.target.value,
                    "email"
                );
                props.formik.setFieldValue(
                    "confirmation_email",
                    sanitizedValue
                );
            }
        }
        maxLength = {
            64
        }
        /> {
            props.formik.errors.confirmation_email &&
                props.formik.touched.confirmation_email && ( <
                    label className = "invalid-feedback" > {
                        props.formik.errors.confirmation_email
                    } <
                    /label>
                )
        } <
        /div> <
        /div> <
        div className = "row mb-5" >
        <
        div className = "col-xl-6" >
        <
        label className = "form-label" >
        Senha < span className = "text-danger" > & nbsp;* < /span> <
        /label> <
        Password form = {
            props.formik
        }
        /> <
        /div> <
        div className = "col-xl-6" >
        <
        label className = "form-label" >
        Confirme a senha < span className = "text-danger" > & nbsp;* < /span> <
        /label> <
        input type = "password"
        name = "confirmation_password"
        className = {
            "form-control " +
            (props.formik.errors.confirmation_password &&
                props.formik.touched.confirmation_password ?
                "is-invalid" :
                "")
        }
        value = {
            props.formik.values.confirmation_password
        }
        onChange = {
            props.formik.handleChange
        }
        /> {
            props.formik.errors.confirmation_password &&
                props.formik.touched.confirmation_password && ( <
                    label className = "invalid-feedback" > {
                        props.formik.errors.confirmation_password
                    } <
                    /label>
                )
        } <
        /div> <
        /div>

        <
        div className = "row mb-5" >
        <
        div className = "col-xl-12" >
        <
        button type = "button"
        name = "advance_button"
        onClick = {
            redirectToNextStep
        }
        disabled = {
            isPersisting
        }
        className = "btn btn-primary"
        style = {
            {
                width: "100%",
                height: "50px",
                marginTop: "calc(42px - 1.25rem)",
            }
        } >
        AVANÇAR <
        /button> <
        /div> <
        /div> <
        /div> <
        /div> <
        RightInfo formik = {
            props.formik
        }
        disabledCreditCard = {
            props.disabledCreditCard
        }
        /> <
        /div>
    );
}