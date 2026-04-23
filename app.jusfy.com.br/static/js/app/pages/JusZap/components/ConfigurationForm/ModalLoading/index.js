import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useState,
    useRef
} from "react";
import SVG from "react-inlinesvg";
import ModalDialog from "../../../../../components/flat/ui/ModalDialog";
import {
    toAbsoluteUrl
} from "../../../../../../_metronic/_helpers";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import * as S from "./styles";

const ModalLoading = forwardRef(({
    isOpen,
    onComplete,
    closeModal
}, ref) => {
    const [type, setType] = useState(null);
    const [customDelay, setCustomDelay] = useState({
        checkout: 5000, // 5 segundos para checkout (mais rápido)
        configuration: 15000, // 15 segundos para configuration (mais demorado)
        complete: 2000, // 2 segundos para mostrar sucesso
    });
    const [progress, setProgress] = useState(0);
    const hasCompletedRef = useRef(false);
    const isWaitingRequestRef = useRef(false);

    useImperativeHandle(ref, () => ({
        setType: (newType) => {
            setType(newType);
            if (newType === 'checkout') {
                hasCompletedRef.current = false;
                isWaitingRequestRef.current = true; // Marca que está aguardando requisição
            }
        },
        setError: () => {
            setType("error");
            isWaitingRequestRef.current = false;
        },
        setDynamicDelay: (delays) => {
            setCustomDelay({
                checkout: delays.checkout ? ? 5000,
                configuration: delays.configuration ? ? 15000,
                complete: delays.complete ? ? 2000,
            });
        },
        complete: () => {
            // Só completa se não estiver mais aguardando requisição
            if (!hasCompletedRef.current) {
                hasCompletedRef.current = true;
                isWaitingRequestRef.current = false;
                onComplete();
            }
        }
    }));

    useEffect(() => {
        let intervalId;
        let timeoutId;

        const delayMap = {
            checkout: customDelay ? .checkout ? ? 5000,
            configuration: customDelay ? .configuration ? ? 15000,
            complete: customDelay ? .complete ? ? 2000,
        };

        const targetProgressMap = {
            checkout: 25, // Checkout vai até 25% (mais rápido, peso menor)
            configuration: 90, // Configuration vai de 25% até 90% (mais demorado, peso maior)
            complete: 100, // Complete vai de 90% até 100%
        };

        if (!['checkout', 'configuration', 'complete'].includes(type)) return;

        const duration = delayMap[type];
        const target = targetProgressMap[type];

        const stepCount = 60;
        const intervalDuration = duration / stepCount;

        // Define o progresso inicial baseado no tipo
        let currentProgress =
            type === "checkout" ? 0 :
            type === "configuration" ? 25 :
            type === "complete" ? 90 : 0;

        setProgress(currentProgress);
        const progressStep = (target - currentProgress) / stepCount;

        intervalId = setInterval(() => {
            currentProgress += progressStep;
            const clamped = Math.min(Math.max(currentProgress, 0), 100);
            setProgress(clamped);

            if ((progressStep > 0 && clamped >= target) || (progressStep < 0 && clamped <= target)) {
                clearInterval(intervalId);
            }
        }, intervalDuration);

        // Para checkout e configuration, não avançar automaticamente - aguardar as requisições
        if (type === "checkout" || type === "configuration") {
            // Não definir timeout para avançar automaticamente
            // A transição será feita manualmente quando cada requisição completar
        } else if (type === "complete") {
            timeoutId = setTimeout(() => {
                if (!hasCompletedRef.current) {
                    hasCompletedRef.current = true;
                    isWaitingRequestRef.current = false;
                    onComplete();
                }
            }, duration);
        }

        return () => {
            clearInterval(intervalId);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [type, customDelay, onComplete]);

    return ( <
        ModalDialog open = {
            isOpen
        } >
        <
        S.Container >
        <
        S.IconWrapper key = {
            type
        }
        error = {
            type === "error"
        } > {
            type === "error" ? ( <
                ErrorOutlineIcon style = {
                    {
                        fontSize: 75
                    }
                }
                sx = {
                    {
                        color: '#F64E60 !important'
                    }
                }
                />
            ) : ( <
                img src = {
                    toAbsoluteUrl(`/media/juszap/${type === "complete" ? "second" : "first"}.svg`)
                }
                width = "75"
                height = "75"
                alt = "Icon" /
                >
            )
        } <
        /S.IconWrapper>

        <
        S.Title > {
            type === "complete" ?
            "Tudo pronto!" :
                type === "configuration" ?
                "Configurando seu WhatsApp Business" :
                type === "checkout" ?
                "Processando configuração" :
                "Ops! Erro ao configurar"
        } <
        /S.Title>

        <
        S.Subtitle > {
            type === "complete" ?
            "Você será redirecionado em instantes. Bem-vindo ao IA Assistente WhatsApp!" :
                type === "configuration" ?
                "Aguarde enquanto finalizamos a configuração. Isso pode levar até 20 segundos." :
                type === "checkout" ?
                "Processando sua configuração. Isso levará apenas alguns segundos." :
                "Algo deu errado. Tente novamente ou entre em contato com o suporte."
        } <
        /S.Subtitle>

        {
            type !== "error" && ( <
                S.ProgressContainer style = {
                    {
                        width: '100%'
                    }
                } >
                <
                S.ProgressBar >
                <
                S.ProgressFill progress = {
                    progress
                }
                /> <
                /S.ProgressBar> <
                /S.ProgressContainer>
            )
        } <
        /S.Container> <
        /ModalDialog>
    );
});

export default ModalLoading;