import {
    useSelector
} from "react-redux";
import {
    redirectToCommunity
} from "../../_redux/authCrud";
import SVG from "react-inlinesvg";
import {
    useEffect,
    useState
} from "react";
import LoginCommunity from "./components/LoginCommunity";
import RegisterCommunity from "./components/RegisterCommunity";
import {
    toAbsoluteUrl
} from "../../../../../_metronic/_helpers";
import ReactLoading from "react-loading";

import * as S from "./AuthCommunity.styles";

const AuthCommunity = () => {
    const [isLogin, setIsLogin] = useState(false);

    const {
        isCommunity,
        isAuthorized
    } = useSelector(
        ({
            auth: {
                origin,
                user
            }
        }) => ({
            isCommunity: origin.type === "community",
            isAuthorized: user != null,
        })
    );

    const isLoggedInCommunity = isAuthorized && isCommunity;

    useEffect(() => {
        if (isLoggedInCommunity) {
            const queryParams = window.location.search;

            redirectToCommunity(queryParams).then(({
                data: {
                    url
                }
            }) => {
                window.location.replace(url);
            });
        }
    }, [isLoggedInCommunity]);

    return ( <
        S.Container >
        <
        S.LogoWrapper >
        <
        SVG width = "115"
        height = "58"
        src = {
            toAbsoluteUrl("/media/logos/logo-light.svg")
        }
        /> <
        S.LogoText > JusConecta < /S.LogoText> <
        /S.LogoWrapper>

        {
            !isLoggedInCommunity ? ( <
                S.Wrapper width = {
                    isLogin ? "418px" : "700px"
                } >
                <
                S.Title > {
                    isLogin ? "Entrar" : "Cadastre-se"
                }
                na comunidade < /S.Title> {
                    isLogin ? ( <
                        LoginCommunity onRegister = {
                            () => setIsLogin(false)
                        }
                        />
                    ) : ( <
                        RegisterCommunity onLogin = {
                            () => setIsLogin(true)
                        }
                        />
                    )
                } <
                /S.Wrapper>
            ) : ( <
                ReactLoading type = "spin"
                color = "rgba(248, 250, 253, 0.6)"
                width = "32px"
                height = "32px" /
                >
            )
        } <
        /S.Container>
    );
};

export default AuthCommunity;