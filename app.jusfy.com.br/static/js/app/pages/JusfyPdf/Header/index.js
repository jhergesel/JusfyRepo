import React, {
    useState,
    useContext
} from "react";
import {
    FiX
} from "react-icons/fi";
import {
    toAbsoluteUrl
} from "../../../../_metronic/_helpers";
import {
    PdfContext
} from "../Provider";
import {
    FaAlignJustify
} from "react-icons/fa";
import {
    Container,
    ContainerLogin
} from "./style";
import {
    useSelector
} from "react-redux";
import {
    useHistory
} from "react-router-dom";
import {
    useEffect
} from "react";

function LoggedInUserInfo({
    userInfo,
    handleClick
}) {
    const username = userInfo.name ? .split(" ")[0];
    //const username = "Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga".split(' ')[0]

    return ( <
        button className = "userInfo"
        onClick = {
            handleClick
        } >
        <
        span style = {
            {
                width: "fit-content",
                fontSize: "17px"
            }
        } > {
            " "
        }
        Olá, {
            username
        }!
        <
        /span> <
        /button>
    );
}

function AboutButton() {
    return ( <
        a className = "userInfoAbout "
        href = "https://jusfy.com.br/juspdf.html" >
        <
        span style = {
            {
                width: "fit-content",
                fontSize: "17px"
            }
        } >
        Saiba mais sobre o Juspdf <
        /span> <
        /a>
    );
}

function MobileMenu(props) {
    return ( <
        ul className = "buttons-content mobile"
        style = {
            {
                display: props.menuMobile && props.width <= 578 ? "flex" : "none",
            }
        } >
        {
            props.user ? ( <
                LoggedInUserInfo userInfo = {
                    props.user
                }
                handleClick = {
                    props.handleNavigateToRootClick
                } >
                < /LoggedInUserInfo>
            ) : ( <
                button className = "login"
                onClick = {
                    props.handleNavigateToRootClick
                } >
                <
                p className = "loginText" > Acessar < /p> <
                /button>
            )
        }

        <
        div style = {
            {
                backgroundColor: "#ffff",
                width: "100%",
                height: "1px"
            }
        } >
        < /div> <
        AboutButton / >
        <
        /ul>
    );
}

function Header() {
    const {
        login,
        setLogin,
        tabs,
        setTabs,
        uploadHook,
        menuMobile,
        setMenuMobile,
    } = useContext(PdfContext);
    const {
        onResetStates
    } = uploadHook;
    const history = useHistory();
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleNavigateToRootClick = () => {
        onResetStates();
        history.push("/");
    };

    const user = useSelector(state => state.auth.user);

    console.log({
        user
    });

    console.log(menuMobile);
    return ( <
        >
        <
        Container >
        <
        div className = "logo"
        onClick = {
            handleNavigateToRootClick
        }
        style = {
            {
                cursor: "pointer"
            }
        } >
        <
        img src = {
            `${toAbsoluteUrl("/media/svg/logos/jusfypdf-logo.svg")}`
        }
        /> <
        /div>

        <
        div className = "buttons-content" >
        <
        AboutButton / > {
            user ? ( <
                LoggedInUserInfo userInfo = {
                    user
                }
                handleClick = {
                    handleNavigateToRootClick
                } >
                < /LoggedInUserInfo>
            ) : ( <
                button className = "login"
                onClick = {
                    handleNavigateToRootClick
                } >
                <
                p className = "loginText" > Acessar < /p> <
                /button>
            )
        } <
        /div> <
        MobileMenu user = {
            user
        }
        menuMobile = {
            menuMobile
        }
        handleNavigateToRootClick = {
            handleNavigateToRootClick
        }
        width = {
            width
        }
        /> <
        FaAlignJustify color = "#13b370"
        size = {
            26
        }
        className = "icon-hamburguer"
        onClick = {
            () => setMenuMobile(!menuMobile)
        }
        /> <
        /Container>

        {
            login && ( <
                ContainerLogin >
                <
                div className = "container" >
                <
                div className = "container-closed" >
                <
                FiX size = {
                    30
                }
                className = "icon"
                onClick = {
                    () => setLogin(!login)
                }
                color = "#F7F7F7" /
                >
                <
                /div>

                <
                div className = "input-first" >
                <
                label > Email < /label> <
                input type = "text"
                className = "form-control" / >
                <
                /div> <
                div className = "input-second" >
                <
                div className = "input-title" >
                <
                label > Senha < /label> <
                a href = "*" > Esqueceu a Senha < /a> <
                /div> <
                input type = "text"
                className = "form-control" / >
                <
                /div>

                <
                button >
                <
                span > Entrar < /span> <
                /button>

                <
                p >
                Não tem uma conta ? < a href = "#" > Cadastre - se < /a> <
                /p> <
                /div> <
                /ContainerLogin>
            )
        } <
        />
    );
}

export {
    Header
};