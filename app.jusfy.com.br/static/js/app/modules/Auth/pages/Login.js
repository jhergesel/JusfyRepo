import {
    useFormik
} from 'formik';
import {
    useEffect,
    useRef,
    useState
} from 'react';
import {
    injectIntl
} from 'react-intl';
import {
    ReCaptchaProvider,
    ReCaptchaV2,
    ReCaptchaV3
} from 'react-recaptcha-x';
import {
    connect
} from 'react-redux';
import {
    Link
} from 'react-router-dom';
import {
    toAbsoluteUrl
} from '../../../../_metronic/_helpers';
import {
    login
} from '../_redux/authCrud';
import * as auth from '../_redux/authRedux';

import {
    useRecaptchaV2,
    useRecaptchaV3
} from '../../../hooks/useRecaptcha';

/*
  INTL (i18n) docs:
  https://github.com/formatjs/react-intl/blob/master/docs/Components.md#formattedmessage
*/

/*
  Formik+YUP:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
*/

const initialValues = {
    email: '',
    password: '',
    recaptchaToken: '',
    recaptchaVersion: '',
};

const AuthStatus = Object.freeze({
    REQUIRED_2FA: 'require_2fa',
    SUCCESS: 'success',
});

const Login = (props) => {
    const refreshRecaptchaV3Ref = useRef();

    const [handleRecaptchaV2Callback, captchaV2Params] = useRecaptchaV2();
    const [handleRecaptchaV3Callback, captchaV3Params] = useRecaptchaV3(
        refreshRecaptchaV3Ref,
    );

    const [loading, setLoading] = useState(false);
    const [disableButton, setDisableButton] = useState(false);
    const [enableRecaptchaV2, setEnableRecaptchaV2] = useState(false);

    useEffect(() => {
        updateFormWithRecaptchaToken(captchaV3Params.v3Token, '3');
    }, [captchaV3Params.v3Token]);

    useEffect(() => {
        updateFormWithRecaptchaToken(captchaV2Params.v2Token, '2');
    }, [captchaV2Params.v2Token]);

    useEffect(() => {
        captchaV3Params.v3Retrieving ?
            setDisableButton(true) :
            setDisableButton(false);
    }, [captchaV3Params.v3Retrieving]);

    useEffect(() => {
        enableRecaptchaV2 && captchaV2Params.v2Token ?
            setDisableButton(false) :
            setDisableButton(true);
    }, [enableRecaptchaV2, captchaV2Params.v2Token]);

    const updateFormWithRecaptchaToken = (token, version) => {
        formik.setFieldValue('recaptchaVersion', version);
        formik.setFieldValue('recaptchaToken', token);
    };

    const handleKeyDown = (evt) => {
        if (evt.key === 'Enter' && !loading && !disableButton) {
            formik.submitForm();
        }
    };

    const enableLoading = () => {
        setLoading(true);
    };

    const disableLoading = () => {
        setLoading(false);
    };

    const formik = useFormik({
        initialValues,
        onSubmit: (values, {
            setStatus,
            setSubmitting,
            setFieldValue
        }) => {
            enableLoading();
            setEnableRecaptchaV2(false);
            setDisableButton(true);
            login(
                    values.email,
                    values.password,
                    values.recaptchaToken,
                    values.recaptchaVersion,
                )
                .then(({
                    data: responseData
                }) => {
                    const isTwoFactorRequired =
                        responseData.status === AuthStatus.REQUIRED_2FA;
                    const hasMissingTwoFactorCredentials = !responseData.userLoginId || !responseData.accessToken;

                    if (isTwoFactorRequired && hasMissingTwoFactorCredentials) {
                        setStatus('Erro ao processar autenticação de dois fatores.');
                        disableLoading();
                        return;
                    }

                    if (isTwoFactorRequired) {
                        disableLoading();
                        props.history.push('/auth/two-factor', {
                            email: values.email,
                            userId: responseData.userLoginId,
                            tempToken: responseData.accessToken,
                        });
                        return;
                    }
                    const {
                        accessToken,
                        userLoginId
                    } = responseData;
                    disableLoading();
                    props.setUserLoginId(userLoginId);
                    props.login(accessToken);
                })
                .catch((err) => {
                    disableLoading();
                    setSubmitting(false);
                    setFieldValue('password', '');
                    setDisableButton(false);

                    if (
                        err ? .response &&
                        err ? .response ? .data ? .error === 'INVALID_RECAPTCHA'
                    ) {
                        if (!enableRecaptchaV2 && refreshRecaptchaV3Ref.current) {
                            refreshRecaptchaV3Ref.current();
                            setEnableRecaptchaV2(true);
                            setDisableButton(true);
                            return;
                        }

                        if (enableRecaptchaV2) {
                            setStatus(
                                'Ocorreu um erro na validação do reCAPTCHA. Por favor, tente novamente.',
                            );
                            return;
                        }
                    }

                    setStatus(
                        err ? .response ? .data ? .message ? ?
                        'Ocorreu um erro interno no servidor.',
                    );
                });
        },
    });

    return ( <
        div className = "jusfyLogin" >
        <
        div className = "box" >
        <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col-md-5 col-sm-12" >
        <
        div className = "logo" >
        <
        img src = {
            toAbsoluteUrl('/media/logos/logo-light.svg')
        }
        alt = "Logo Jusfy" /
        >
        <
        /div>

        <
        h1 >
        Todas as ferramentas que você precisa.Você encontra na {
            ' '
        } <
        span className = "primary" > Jusfy < /span>. <
        /h1> <
        p > A maior e melhor ferramenta jurídica do Brasil. < /p> <
            a href = "https://jusfy.com.br"
        className = "learnMore" >
        SAIBA MAIS <
        /a> <
        /div>

        <
        div className = "col-md-7 col-sm-12" >
        <
        div className = "boxLogin" >
        <
        h2 > Entrar como advogado < /h2>

        {
            formik.status && ( <
                div className = "mt-5 alert alert-custom alert-light-danger alert-dismissible" >
                <
                div className = "alert-text font-weight-bold" > {
                    formik.status
                } <
                /div> <
                /div>
            )
        } <
        p className = "label-login mt-5" > Digite seu e - mail < /p> <
        input value = {
            formik.values.email
        }
        type = "text"
        className = "form-control"
        onChange = {
            formik.handleChange
        }
        name = "email"
        onKeyDown = {
            handleKeyDown
        }
        />

        <
        p className = "label-login" > Digite sua senha < /p> <
        input name = "password"
        value = {
            formik.values.password
        }
        type = "password"
        onChange = {
            formik.handleChange
        }
        className = "form-control"
        onKeyDown = {
            handleKeyDown
        }
        />

        <
        ReCaptchaProvider siteKeyV2 = {
            process.env.REACT_APP_RECAPTCHA_V2_SITEKEY
        }
        siteKeyV3 = {
            process.env.REACT_APP_RECAPTCHA_V3_SITEKEY
        } >
        {!enableRecaptchaV2 && ( <
                ReCaptchaV3 callback = {
                    handleRecaptchaV3Callback
                }
                action = "login" /
                >
            )
        } {
            enableRecaptchaV2 && ( <
                ReCaptchaV2 callback = {
                    handleRecaptchaV2Callback
                }
                className = "mt-6" /
                >
            )
        } <
        /ReCaptchaProvider>

        <
        button className = "btn"
        onClick = {
            formik.submitForm
        }
        disabled = {
            disableButton
        } >
        {
            loading && ( <
                span className = "ml-3 spinner spinner-white" > < /span>
            )
        }
        ENTRAR <
        /button>

        <
        a href = "https://jusfy.com.br/home/#planos" >
        <
        div className = "registerAccont" > CADASTRE - SE AGORA < /div> <
        /a> <
        hr / >
        <
        Link to = "/request_password_reset" >
        <
        div className = "forgotPassword" > ESQUECI MINHA SENHA < /div> <
        /Link> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    );
};

export default injectIntl(connect(null, auth.actions)(Login));