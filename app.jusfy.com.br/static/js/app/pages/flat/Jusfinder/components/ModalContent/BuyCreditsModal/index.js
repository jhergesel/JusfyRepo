import * as S from "./BuyCreditsModal.styles";
import {
    CardPlan,
    CardPlansContainer,
    CardPlanTitleContent,
    CardPrice,
    ContentCardDescription,
    ContentCardInfos,
    ContentInfoBuCredits,
    Divider,
    WrapperModalContent,
} from "./BuyCreditsModal.styles";
import {
    toAbsoluteUrl
} from "../../../../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import {
    useContext,
    useEffect,
    useRef,
    useState
} from "react";
import {
    jusfinderContext
} from "../../../context";
import useClickOutside from "../../../../../../hooks/useClickOutside";
import Button from "../../../../../../components/flat/ui/Button";
import InputNumber from "../../../../../../components/flat/ui/Inputs/InputNumber";
import NewCardForm from "../../../../../../components/flat/ui/Forms/NewCardForm";
import SelectCardForm from "../../../../../../components/flat/ui/Forms/SelectCardForm";
import {
    toast
} from "react-toastify";
import axios from "axios";
import {
    ReCaptchaProvider,
    ReCaptchaV3
} from "react-recaptcha-x";

import {
    useRecaptchaTokenRefresh,
    useRecaptchaV3,
} from "../../../../../../hooks/useRecaptcha";
import {
    PLAN_OPTIONS
} from "../constants";
import {
    EventsSegment
} from "../../../../../../helpers/EventsSegmentsCalculators";
import useLocalStorage from "../../../../../../hooks/useLocalStorage";
import {
    tracking
} from "../../../../../../services/tracking";
import {
    useSelector
} from "react-redux";

const MIN_CREDITS_AMOUNT_VALUE = 1;

const MAX_CREDITS_AMOUNT_VALUE = 99;

const BuyCreditsModal = ({
    queryOption,
    context = ""
}) => {
    const [creditsAmount, setCreditsAmount] = useState(MIN_CREDITS_AMOUNT_VALUE);
    const [isNewCard, setIsNewCard] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState("");
    const {
        getToken
    } = useLocalStorage("context_queries");

    const subscription = useSelector(state => state.subscription);
    const user = useSelector(state => state.auth.user);
    const path = window.location.pathname;
    const pathParts = path.split("/");
    const url = pathParts[1];

    const {
        openModal,
        closeModal,
        setShouldReload,
        setModalCheckout,
    } = useContext(jusfinderContext);
    const modalRef = useClickOutside(() => null);
    const {
        HandleEvent
    } = EventsSegment();

    const payment_option = isNewCard ? "new-credit-card" : "existing-credit-card";

    const onChangeCreditsAmount = e => {
        const inputValue = e.target.value;

        if (
            inputValue >= MIN_CREDITS_AMOUNT_VALUE &&
            inputValue <= MAX_CREDITS_AMOUNT_VALUE
        ) {
            setCreditsAmount(Number(inputValue));
        }
    };

    const onDecreaseCreditsAmount = () => {
        if (creditsAmount > MIN_CREDITS_AMOUNT_VALUE) {
            setCreditsAmount(prev => Number(prev) - 1);
            return;
        }

        setCreditsAmount(Number(MIN_CREDITS_AMOUNT_VALUE));
    };

    const onIncreaseCreditsAmount = () => {
        if (creditsAmount < MAX_CREDITS_AMOUNT_VALUE) {
            setCreditsAmount(prev => Number(prev) + 1);
            return;
        }

        setCreditsAmount(Number(MAX_CREDITS_AMOUNT_VALUE));
    };

    const queryType = () => {
        const queryOptions = new Map([
            ["trademarks", "trademarks_and_patents"],
            ["professional_data", "professional_data"],
        ]);

        return (
            queryOptions.get(queryOption.identification) || queryOption.identification
        );
    };

    const refreshRecaptchaV3Ref = useRef();
    const [handleRecaptchaV3Callback, captchaV3Params] = useRecaptchaV3(
        refreshRecaptchaV3Ref
    );
    useRecaptchaTokenRefresh(refreshRecaptchaV3Ref);

    useEffect(() => {
        setRecaptchaToken(captchaV3Params.v3Token);
    }, [captchaV3Params.v3Token]);

    const onSubmit = card => {
        const context_queries = getToken();
        setIsLoading(true);
        axios
            .post(`${process.env.REACT_APP_API_URL}/queries/purchase_credits`, {
                card_id: card.hash,
                product_identification: queryOption.identification,
                purchased_credits_qty: Number(creditsAmount),
                recaptchaToken: recaptchaToken,
            })
            .then(response => {
                setShouldReload(true);
                setIsLoading(false);
                toast.success("Compra de créditos realizada!");

                HandleEvent("Query Credit Bought", {
                    payment_option,
                    query_type: queryType(),
                    purchased_credits_qty: Number(creditsAmount),
                    context_queries: context_queries ? context_queries : "jusfinder",
                    context: context,
                    isUniversal: false,
                });

                openModal("SUCCESS_QUERY_MODAL", {
                    type: "buy",
                    queryOption,
                    action: () => openModal("QUERY_FORM_MODAL", {
                        queryOption
                    }),
                });
            })
            .catch(err => {
                setIsLoading(false);
                openModal("ERROR_QUERY_MODAL", {
                    type: "FAIL_PURCHASE",
                    action: closeModal,
                });
            });
    };

    const pricePreview = Number(queryOption.price) * creditsAmount;

    useEffect(() => {
        if (isLoading) {
            openModal("LOADING_QUERY_MODAL", {
                isBuying: true
            });
        }
    }, [isLoading]);

    useEffect(() => {
        window.analytics.track("Buy Query Credit Modal Opened", {
            context: "card-icon-button",
            query_type: queryType(),
        });
    }, []);

    const openPlanModal = () => {
        setModalCheckout(true);
        closeModal();
        HandleEvent("About Information Plans Clicked");
        tracking.upgrade.trackUpgradeStarted(
            user,
            subscription.subscription_status, {}, {},
            url
        );
    };

    return ( <
        WrapperModalContent ref = {
            modalRef
        } >
        <
        S.CloseIcon onClick = {
            closeModal
        } >
        <
        SVG src = {
            toAbsoluteUrl("/media/flat/close.svg")
        }
        /> <
        /S.CloseIcon> <
        S.Container >
        <
        ContentInfoBuCredits >
        <
        SVG src = {
            toAbsoluteUrl("/media/jusfinder/info-jusfinder-circle.svg")
        }
        width = {
            "16px"
        }
        height = {
            "16px"
        }
        /> <
        span >
        Você não possui créditos para esta consulta, compre mais para conseguir realizá - la ou contrate um plano com mais créditos <
        /span> <
        /ContentInfoBuCredits> <
        S.Header >
        <
        p > Comprar consultas avulsas de < /p> <
        h1 > {
            isNewCard ? "Novo cartão" : queryOption.name
        } < /h1> <
        /S.Header>

        <
        S.CreditsWrapper >
        <
        InputNumber label = "Nº de créditos"
        value = {
            creditsAmount
        }
        onChange = {
            onChangeCreditsAmount
        }
        onDecrease = {
            onDecreaseCreditsAmount
        }
        onIncrease = {
            onIncreaseCreditsAmount
        }
        /> <
        S.CreditsTotal >
        R$ {
            pricePreview.toFixed(2)
        } <
        span > /</span >
        <
        /S.CreditsTotal> <
        /S.CreditsWrapper>

        <
        ReCaptchaProvider siteKeyV3 = {
            process.env.REACT_APP_RECAPTCHA_V3_SITEKEY
        } >
        <
        ReCaptchaV3 callback = {
            handleRecaptchaV3Callback
        }
        /> <
        /ReCaptchaProvider>

        {
            isNewCard ? ( <
                >
                <
                NewCardForm buttonText = "Finalizar compra"
                onLoading = {
                    () => setIsLoading(true)
                }
                onSubmit = {
                    onSubmit
                }
                /> <
                Button color = "#01AB7D"
                backgroundColor = "transparent"
                onClick = {
                    () => setIsNewCard(false)
                }
                width = "full" >
                <
                S.ButtonText secondary >
                Selecionar um cartão cadastrado <
                /S.ButtonText> <
                /Button> <
                />
            ) : ( <
                SelectCardForm buttonText = "Finalizar compra"
                onNewCard = {
                    () => setIsNewCard(true)
                }
                onSubmit = {
                    onSubmit
                }
                />
            )
        } <
        /S.Container> <
        Divider > < /Divider> <
        CardPlansContainer >
        <
        p > Economize e tenha mais consultas disponíveis todos os meses! < /p>

        <
        ContentCardInfos > {
            PLAN_OPTIONS[queryOption.identification].map((plan, index) => ( <
                CardPlan key = {
                    `${plan.name}-${index}`
                } >
                <
                CardPlanTitleContent >
                <
                span > {
                    plan.name
                } < /span> <
                CardPrice > {
                    plan.price
                } < /CardPrice> <
                /CardPlanTitleContent>

                <
                ContentCardDescription >
                <
                span > {
                    plan.mainDescription
                } < /span> <
                span > {
                    plan.additionalDescription
                } < /span> <
                /ContentCardDescription> <
                /CardPlan>
            ))
        } <
        /ContentCardInfos> <
        Button backgroundColor = {
            "#E94F0E"
        }
        color = {
            "#FFF"
        }
        padding = {
            "10px 40px"
        }
        width = {
            "100%"
        }
        borderRadius = {
            "5px"
        }
        onClick = {
            openPlanModal
        } >
        Conhecer Planos {
            " "
        } <
        SVG src = {
            toAbsoluteUrl("/media/flat/arrow-jusfinder-new.svg")
        }
        fill = {
            "#fff"
        }
        /> <
        /Button> <
        /CardPlansContainer> <
        /WrapperModalContent>
    );
};

export default BuyCreditsModal;