import {
    useState,
    useEffect
} from "react";
import * as S from "./styles.js";
import SVG from "react-inlinesvg";
import {
    toAbsoluteUrl
} from "../../../_metronic/_helpers/AssetsHelpers.js";

export const ModalProcessingPaymentContent = ({
    isOpen
}) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!isOpen) {
            setProgress(0);
            return;
        }

        const duration = 1 * 60 * 1000;
        const interval = 100;
        const increment = (100 / duration) * interval;

        const timer = setInterval(() => {
            setProgress(prev => {
                const next = prev + increment;
                if (next >= 100) {
                    return 0;
                }
                return next;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [isOpen]);

    return ( <
        S.ContentModal >
        <
        S.TextContent >
        <
        SVG src = {
            toAbsoluteUrl("/media/checkout/waiting.svg")
        }
        /> <
        S.Title > Estamos ativando sua conta < /S.Title> <
        S.SubTitle >
        Em instantes, você terá acesso à Jusfy, a plataforma que facilita a sua vida jurídica. <
        /S.SubTitle> <
        /S.TextContent> <
        S.ProgressBarContainer >
        <
        S.ProgressBarFill progress = {
            progress
        }
        /> <
        /S.ProgressBarContainer> <
        /S.ContentModal>
    );
};

export const ModalProcessingPayment = props => {
    return ( <
        S.ModalWrapper open = {
            props.isOpen
        }
        onClose = {
            props.onClose
        } >
        <
        ModalProcessingPaymentContent isOpen = {
            props.isOpen
        } { ...props
        }
        /> <
        /S.ModalWrapper>
    );
};