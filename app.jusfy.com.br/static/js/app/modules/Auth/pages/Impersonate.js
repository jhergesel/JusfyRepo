import {
    useEffect
} from "react";
import {
    injectIntl
} from "react-intl";
import {
    connect,
    useSelector
} from "react-redux";
import {
    useHistory
} from "react-router-dom";
import {
    toAbsoluteUrl
} from "../../../../_metronic/_helpers";
import * as auth from "../_redux/authRedux";

const Impersonate = (props) => {
    const history = useHistory();
    const {
        user,
        impersonateExpiresAt
    } = useSelector(state => state.auth);

    useEffect(() => {
        const hashString = window.location.hash.substring(1);

        const fragmentParams = new URLSearchParams(hashString);

        const token = fragmentParams.get("token");
        const expiresAt = fragmentParams.get("expiresAt");
        const adminEmail = fragmentParams.get("adminEmail");

        history.replace("/auth/impersonate");

        if (token && expiresAt && adminEmail) {
            props.impersonateLogin(token, expiresAt, adminEmail);
        } else {
            history.push('/auth/login');
        }
    }, []);

    useEffect(() => {
        if (user && impersonateExpiresAt) {
            history.push("/");
        }
    }, [user, impersonateExpiresAt, history]);

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
            toAbsoluteUrl("/media/logos/logo-light.svg")
        }
        /> <
        /div>

        <
        h1 >
        Todas as ferramentas que você precisa.Você encontra na {
            " "
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
        h2 > Autenticando... < /h2> <
        p > Aguarde, você está sendo redirecionado. < /p> <
        div className = "d-flex justify-content-center mt-5" >
        <
        div className = "spinner-border text-primary"
        role = "status" >
        <
        span className = "sr-only" > Carregando... < /span> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    );
}

export default injectIntl(connect(null, auth.actions)(Impersonate));