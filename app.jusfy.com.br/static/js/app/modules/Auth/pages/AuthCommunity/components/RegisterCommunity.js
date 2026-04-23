import {
    Link
} from "react-router-dom";
import {
    useFormik
} from "formik";
import {
    registerExternal as registerRequest
} from "../../../_redux/authCrud";
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
import {
    REGISTER_INITIAL_VALUES,
    REGISTER_SCHEMA
} from "../constants";
import {
    useState
} from "react";
import {
    createHubspotContact
} from '../../../../Utils/hubpspot/api';
import getCookie from '../../../../../helpers/Cookies';

const RegisterCommunity = ({
    onLogin,
    loginCommunity
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [showErrors, setShowErrors] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const formik = useFormik({
        initialValues: REGISTER_INITIAL_VALUES,
        validationSchema: REGISTER_SCHEMA,
        onSubmit: values => {
            setIsLoading(true);
            registerRequest(
                    values.name ? .trim(),
                    values.email,
                    values.password,
                    values.confirmPassword
                )
                .then(async ({
                    data: {
                        success,
                        message
                    }
                }) => {
                    const hutk = getCookie('hubspotutk');
                    const props = {
                        formik: {
                            values: {
                                name: values.name,
                                email: values.email,
                            },
                        },
                    };
                    try {
                        await createHubspotContact(props, hutk, 'community')
                    } catch (e) {
                        console.log('hubspot error', e)
                    }
                    if (message) {
                        setErrorMessage(message);
                    }

                    if (success) {
                        LoginRequest(values.email, values.password)
                            .then(({
                                data: {
                                    accessToken
                                }
                            }) => {
                                setIsLoading(false);
                                loginCommunity(accessToken);
                            })
                            .catch(() => onLogin());
                    }
                })
                .catch(() => {
                    setIsLoading(false);
                    setErrorMessage(
                        "Não foi possível realizar seu cadastro. Tente novamente mais tarde!"
                    );
                });
        },
    });

    const onSubmit = () => {
        const hasFormErros = Object.values(formik.errors).length;

        if (hasFormErros) {
            setShowErrors(true);
            return;
        }

        formik.handleSubmit();
    };

    return ( <
        >
        <
        S.Form > {
            errorMessage && ( <
                S.Error className = "alert-text font-weight-bold" > {
                    errorMessage
                } <
                /S.Error>
            )
        } <
        S.Fields >
        <
        S.FieldsContainer half >
        <
        S.Label > Digite seu nome < /S.Label> <
        S.Input value = {
            formik.values.name
        }
        onChange = {
            formik.handleChange
        }
        type = "text"
        name = "name" /
        > {
            showErrors ? ( <
                S.ErrorLabel > {
                    formik.errors.name
                } < /S.ErrorLabel>
            ) : null
        } <
        /S.FieldsContainer>

        <
        S.FieldsWrapper >
        <
        S.FieldsContainer >
        <
        S.Label > Digite seu e - mail < /S.Label> <
        S.Input value = {
            formik.values.email
        }
        onChange = {
            formik.handleChange
        }
        type = "email"
        name = "email" /
        > {
            showErrors ? ( <
                S.ErrorLabel > {
                    formik.errors.email
                } < /S.ErrorLabel>
            ) : null
        } <
        /S.FieldsContainer> <
        S.FieldsContainer >
        <
        S.Label > Confirme o seu e - mail < /S.Label> <
        S.Input value = {
            formik.values.confirmEmail
        }
        onChange = {
            formik.handleChange
        }
        type = "email"
        name = "confirmEmail" /
        > {
            showErrors ? ( <
                S.ErrorLabel > {
                    formik.errors.confirmEmail
                } < /S.ErrorLabel>
            ) : null
        } <
        /S.FieldsContainer> <
        /S.FieldsWrapper>

        <
        S.FieldsWrapper >
        <
        S.FieldsContainer >
        <
        S.Label > Digite sua senha < /S.Label> <
        S.Input value = {
            formik.values.password
        }
        onChange = {
            formik.handleChange
        }
        name = "password"
        type = "password" /
        > {
            showErrors ? ( <
                S.ErrorLabel > {
                    formik.errors.password
                } < /S.ErrorLabel>
            ) : null
        } <
        /S.FieldsContainer>

        <
        S.FieldsContainer >
        <
        S.Label > Confirme a sua senha < /S.Label> <
        S.Input value = {
            formik.values.confirmPassword
        }
        onChange = {
            formik.handleChange
        }
        name = "confirmPassword"
        type = "password" /
        > {
            showErrors ? ( <
                S.ErrorLabel > {
                    formik.errors.confirmPassword
                } < /S.ErrorLabel>
            ) : null
        } <
        /S.FieldsContainer> <
        /S.FieldsWrapper> <
        /S.Fields>

        <
        S.ActionWrapper >
        <
        S.SubmitButton type = "submit"
        onClick = {
            onSubmit
        }
        disabled = {
            isLoading
        } > {
            isLoading && ( <
                S.SubmitButtonSpinner left = "0"
                className = "ml-3 spinner spinner-white" >
                < /S.SubmitButtonSpinner>
            )
        }
        CADASTRAR <
        /S.SubmitButton> <
        S.ButtonLabel > OU < /S.ButtonLabel> <
        S.Button onClick = {
            onLogin
        } > ENTRE COM SUA CONTA < /S.Button> <
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

export default injectIntl(connect(null, auth.actions)(RegisterCommunity));