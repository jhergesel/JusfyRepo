import React from "react";
import {
    useHistory
} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import * as S from "./styles";

const BusinessBanner = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/gpt/business");
    };

    return ( <
        S.BannerContainer onClick = {
            handleClick
        } >
        <
        S.BannerIllustration src = "/media/jusgpt/business/illustration.svg"
        alt = "JusGPT Business" /
        >
        <
        S.BannerContent >
        <
        S.BannerText >
        <
        span className = "highlight-bold" > Você < /span> já usa IA. Agora imagine ela treinada com
        os < span className = "highlight-bold" > processos do seu escritório. < /span> <
            /S.BannerText> <
            S.BannerButton onClick = {
                (e) => {
                    e.stopPropagation();
                    handleClick();
                }
            } >
            Ativar versão premium <
            /S.BannerButton> <
            /S.BannerContent> <
            /S.BannerContainer>
    );
};

export default BusinessBanner;