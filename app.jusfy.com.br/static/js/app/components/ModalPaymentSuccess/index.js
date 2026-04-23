import * as S from "./styles.js";
import SVG from "react-inlinesvg";
import {
    toAbsoluteUrl
} from "../../../_metronic/_helpers/AssetsHelpers.js";

export const ModalPaymentSuccessContent = ({
    email,
    onAccessPlatform
}) => {
    return ( <
        S.ContentModal >
        <
        S.TextContent >
        <
        SVG src = {
            toAbsoluteUrl("/media/checkout/success.svg")
        }
        /> <
        S.Title > Pagamento confirmado < /S.Title> <
        S.SubTitle >
        Seu pagamento foi processado com sucesso e sua assinatura está ativa.Aproveite os recursos da Jusfy!
        <
        br / >
        <
        br / >
        <
        strong > Valide seu e - mail. < /strong> <
        br / >
        Seu e - mail é: < strong > {
            email
        } < /strong>. Caso não localize nossa mensagem, por favor verifique na caixa de spam. <
        /S.SubTitle> <
        S.ButtonModal style = {
            {
                marginTop: 32,
                width: "100%"
            }
        }
        onClick = {
            onAccessPlatform
        } >
        Acessar plataforma <
        /S.ButtonModal> <
        /S.TextContent> <
        /S.ContentModal>
    );
};

export const ModalPaymentSuccess = props => {
    return ( <
        S.ModalWrapper open = {
            props.isOpen
        }
        onClose = {
            props.onClose
        } >
        <
        ModalPaymentSuccessContent { ...props
        }
        /> <
        /S.ModalWrapper>
    );
};