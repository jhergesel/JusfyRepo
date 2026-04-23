import {
    useContext
} from "react";
import {
    FiFileText
} from "react-icons/fi";
import {
    PdfContext
} from "../../../Provider.js";
import {
    ColorRing
} from "react-loader-spinner";
import {
    Container
} from "./style.js";

const Spinner = () => {
    // variações do verde da Jusfy
    const colors = ["#41c78f", "#30b67e", "#41c78f", "#2fa56d", "#41c78f"];

    return <ColorRing colors = {
        colors
    } > < /ColorRing>;
};

const PetitionCompression = () => {
    const {
        uploadHook
    } = useContext(PdfContext);

    const {
        filename
    } = uploadHook;

    return ( <
        >
        <
        Container >
        <
        div className = "content" >
        <
        div className = "header" >
        <
        p > Carregando... < /p> <
        Spinner > < /Spinner> <
        /div> <
        div className = "file" >
        <
        FiFileText size = {
            120
        }
        color = "#41C78F" / >

        <
        span > {
            filename
        } < /span> <
        /div> <
        /div> <
        /Container> <
        />
    );
};

export {
    PetitionCompression
};