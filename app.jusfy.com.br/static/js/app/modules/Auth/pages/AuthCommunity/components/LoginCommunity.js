import {
    useState
} from "react";
import {
    Link
} from "react-router-dom";
import {
    useFormik
} from "formik";
import {
    LOGIN_INITIAL_VALUES
} from "../constants";
import {
    login as LoginRequest
} from "../../../_redux/authCrud";
import {
    injectIntl
} from "react-intl";
import * as auth from "../../../_redux/authRedux";
import {
    connect
} from "react-redux";

import * as S from "../AuthCommunity.styles";

const LoginCommunity = ({
    onRegister,
    loginCommunity
}) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleKeyDown = evt => {
        if (evt.key === "Enter") {
            formik.handleSubmit();
        }
    };

    const formik = useFormik({
        initialValues: LOGIN_INITIAL_VALUES,
        onSubmit: (values, {
            setStatus
        }) => {
            setIsLoading(true);
            LoginRequest(values.email, values.password)
                .then(({
                    data: {
                        accessToken
                    }
                }) => {
                    setIsLoading(false);
                    loginCommunity(accessToken);
                })
                .catch(err => {
                    setIsLoading(false);
                    setStatus(err.response ? .data ? .message);
                });
        },
    });

    return ( <
        >
        <
        S.Form > {
            formik.status && ( <
                S.Error className = "alert-text font-weight-bold" > {
                    formik.status
                } <
                /S.Error>
            )
        } <
        S.Label > Digite seu e - mail < /S.Label> <
        S.Input value = {
            formik.values.email
        }
        onChange = {
            formik.handleChange
        }
        type = "text"
        name = "email"
        onKeyDown = {
            handleKeyDown
        }
        />

        <
        S.Label > Digite sua senha < /S.Label> <
        S.Input value = {
            formik.values.password
        }
        onChange = {
            formik.handleChange
        }
        name = "password"
        type = "password"
        onKeyDown = {
            handleKeyDown
        }
        />

        <
        S.ActionWrapper justifyContent = "space-between" >
        <
        S.SubmitButton onClick = {
            formik.handleSubmit
        }
        disabled = {
            isLoading
        } > {
            isLoading && ( <
                S.SubmitButtonSpinner left = "24"
                className = "ml-3 spinner spinner-white" >
                < /S.SubmitButtonSpinner>
            )
        }
        ENTRAR <
        /S.SubmitButton> <
        S.Button onClick = {
            onRegister
        } > CADASTRE - SE AGORA < /S.Button> <
        /S.ActionWrapper> <
        /S.Form>

        <
        S.BreakLine / >

        <
        Link to = "/request_password_reset" >
        <
        S.Button lighter > ESQUECI MINHA SENHA < /S.Button> <
        /Link> <
        />
    );
};

export default injectIntl(connect(null, auth.actions)(LoginCommunity));