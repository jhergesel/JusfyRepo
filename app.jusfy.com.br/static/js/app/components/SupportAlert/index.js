import {
    useDispatch
} from "react-redux";
import {
    toAbsoluteUrl
} from "../../../_metronic/_helpers";
import {
    useHistory
} from "react-router-dom";

import * as S from "./SupportAlert.styles";
import * as auth from "../../modules/Auth/_redux/authRedux";

export const SupportAlert = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
        dispatch({
            type: auth.actionTypes.Logout
        });
        history.push("/logout");
    };

    return ( <
        S.Container >
        <
        S.Wrapper >
        <
        img src = {
            toAbsoluteUrl("/media/error/support.png")
        }
        alt = "Support Alert"
        width = "190" /
        >

        <
        h1 > Entre em contato com nosso suporte < /h1> <
        S.Text >
        Para utilizar a Jusfy com a sua conta da comunidade, entre em contato com o nosso suporte via Whatsapp para completarmos o seu cadastro!
        <
        /S.Text> <
        S.LinkButton href = "https://api.whatsapp.com/send?phone=5511933304069&text="
        target = "_BLANK"
        rel = "noreferrer" >
        Entrar em contato via Whatsapp <
        /S.LinkButton> <
        S.LogoutButton onClick = {
            logout
        } >
        Entrar com uma outra conta <
        /S.LogoutButton> <
        /S.Wrapper> <
        /S.Container>
    );
};

export default SupportAlert;