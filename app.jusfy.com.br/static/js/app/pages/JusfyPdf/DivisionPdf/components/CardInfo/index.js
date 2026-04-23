import {
    useContext
} from "react";
import {
    FiLock,
    FiX
} from "react-icons/fi";

import {
    CardInfo
} from "./style";
import {
    PdfContext
} from "../../../Provider";

const CardInfos = ({
    setDisplayState
}) => {
    const {
        uploadHook,
        setTabs
    } = useContext(PdfContext);

    const {
        onResetStates,
        usageLimitPassed,
        setUsageLimitPassed
    } = uploadHook;

    function onClickClose() {
        console.log("Closing limit modal");
        setUsageLimitPassed(false);
        onResetStates();
        setTabs(0);
        setDisplayState(false);
    }

    return ( <
        CardInfo >
        <
        div className = "container" >
        <
        div className = "headers" >
        <
        div className = "title" >
        <
        FiLock size = {
            36
        }
        className = "icon" / >
        <
        span > Uso gratuito esgotado! < /span> <
        /div>

        <
        div className = "close"
        onClick = {
            onClickClose
        } >
        <
        FiX size = {
            20
        }
        color = "F4F4F4" / >
        <
        /div> <
        /div> <
        p >
        Mas você pode usar estas ferramentas e < a href = "#" > muitas outras < /a>{" "}
        com os nossos planos!{
            " "
        } <
        /p>

        <
        a href = "#"
        className = "button-plans" >
        <
        span > Conhecer os planos < /span> <
        /a> <
        /div> <
        /CardInfo>
    );
};

export {
    CardInfos
};