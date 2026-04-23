import React from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    toAbsoluteUrl
} from "../../../_metronic/_helpers";
import {
    Link
} from "react-router-dom";
import {
    BlockUi
} from "../../components/BlockUI";
import {
    useFormik
} from "formik";
import {
    Password
} from "../../components/Password";
import {
    PasswordResetSchema
} from "./schema";

export default function PasswordReset(props) {
    const dispatch = useDispatch();
    const loading_reset_password = useSelector(
        state => state.resetPassword.loading_reset_password
    );
    const reset_password_data = useSelector(
        state => state.resetPassword.reset_password_data
    );

    const form = useFormik({
        initialValues: {
            password: "",
            confirmation_password: "",
        },
        validationSchema: PasswordResetSchema,
        onSubmit: (values, {
            setSubmitting
        }) => {
            setSubmitting(true);
            dispatch({
                type: "RESET_PASSWORD",
                payload: {
                    data: {
                        password: values.password,
                        confirmation_password: values.confirmation_password,
                        token: props.match.params.token,
                    },
                },
            });
        },
    });

    return ( <
        div className = "d-flex flex-column flex-root"
        style = {
            {
                backgroundColor: "#FFF"
            }
        } >
        <
        div className = "d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
        style = {
            {
                backgroundImage: `url(${toAbsoluteUrl("/media/development-hd.png")})`,
            }
        } >
        <
        div className = "d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20" >
        <
        a href = "/metronic8/demo1/../demo1/index.html"
        className = "mb-12" >
        <
        img alt = "Logo"
        src = {
            toAbsoluteUrl("/media/logo-jusfy.svg")
        }
        className = "h-45px" /
        >
        <
        /a> <
        div className = "w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto"
        style = {
            {
                backgroundColor: "#FFF"
            }
        } >
        {
            Object.keys(reset_password_data).length > 0 &&
            reset_password_data.success && ( <
                div className = "mb-10 alert alert-custom alert-light-success alert-dismissible" >
                <
                div className = "alert-text font-weight-bold" >
                Sucesso!Sua senha foi alterada com sucesso. {
                    " "
                } <
                Link to = "/"
                style = {
                    {
                        fontWeight: "bold",
                        color: "inherit",
                        fontSize: "16px",
                    }
                } >
                Clique aqui para realizar login. <
                /Link> <
                /div> <
                /div>
            )
        } {
            " "
        } {
            Object.keys(reset_password_data).length > 0 &&
                !reset_password_data.success && ( <
                    div className = "mb-10 alert alert-custom alert-light-danger alert-dismissible" >
                    <
                    div className = "alert-text font-weight-bold" > {
                        reset_password_data.msg ||
                        "Ocorreu um erro ao alterar sua senha, tente novamente."
                    } <
                    /div> <
                    /div>
                )
        } {
            (Object.keys(reset_password_data).length === 0 ||
                (Object.keys(reset_password_data).length > 0 &&
                    !reset_password_data.success)) && ( <
                BlockUi tag = "div"
                blocking = {
                    loading_reset_password
                } >
                <
                form onSubmit = {
                    form.handleSubmit
                } >
                <
                div className = "fv-row mb-10" >
                <
                label className = "form-label fw-bolder text-gray-900 fs-6" >
                Nova senha <
                /label> <
                Password className = "form-control-solid"
                form = {
                    form
                }
                /> <
                /div>

                <
                div className = "fv-row mb-10" >
                <
                label className = "form-label fw-bolder text-gray-900 fs-6" >
                Confirme a senha <
                /label> <
                input type = "password"
                name = "confirmation_password"
                className = {
                    "form-control form-control-solid " +
                    (form.errors.confirmation_password &&
                        form.touched.confirmation_password ?
                        "is-invalid" :
                        "")
                }
                value = {
                    form.values.confirmation_password
                }
                onChange = {
                    form.handleChange
                }
                /> {
                    form.errors.confirmation_password && ( <
                        label className = "invalid-feedback" > {
                            form.errors.confirmation_password
                        } <
                        /label>
                    )
                } <
                /div>

                <
                div className = "d-flex flex-wrap justify-content-center pb-lg-0" >
                <
                button type = "submit"
                className = "btn btn-lg btn-primary fw-bolder mr-5" >
                <
                span className = "indicator-label" > Alterar Senha < /span> <
                /button> <
                Link to = "/"
                className = "btn btn-lg btn-light-primary fw-bolder" >
                Voltar <
                /Link> <
                /div> <
                /form> <
                /BlockUi>
            )
        } <
        /div> <
        /div> <
        div className = "d-flex flex-center flex-column-auto p-10" >
        <
        div className = "d-flex align-items-center fw-bold fs-6" >
        <
        a href = "https://jusfy.com.br"
        target = "_BLANK"
        className = "text-muted text-hover-primary px-2"
        rel = "noreferrer" >
        Sobre nós <
        /a> <
        a href = "mailto:contato@jusfy.com.br"
        className = "text-muted text-hover-primary px-2" >
        Entrar em contato <
        /a> <
        /div> <
        /div> <
        /div> <
        /div>
    );
}