import * as S from "./ChoosePlanModal.styles";
import {
    toAbsoluteUrl
} from "../../../../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import {
    jusfinderContext
} from "../../../context";
import {
    useContext,
    useEffect,
    useState
} from "react";
import Button from "../../../../../../components/flat/ui/Button";
import * as auth from "../../../../../../modules/Auth/_redux/authRedux";
import * as yup from "yup";
import {
    useFormik
} from "formik";

import pagarme from "pagarme/browser";
import {
    toast
} from "react-toastify";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    INITIAL_PRODUCT,
    useSubscriptionPlans
} from "./constants";
import ModalSubscriptionPolling from "../../../../../../components/ModalSubscriptionPolling";
import Checkout from "./Checkout";

const ChoosePlanModal = () => {
    const [screen, setScreen] = useState("choose_plan");
    const subscription = useSelector(state => state.subscription);
    const {
        provider
    } = subscription ? .subscription_status.info || {};
    const [modalV5, setModalV5] = useState(false);
    const {
        closeModal,
        setShouldReload
    } = useContext(jusfinderContext);

    const hasJusProcessos = subscription ? .subscription_status ? .has_jusprocessos;

    const processCount = subscription ? .subscription_status ? .jus_processos_qtd;
    const {
        billingCycle,
        toggleBillingCycle,
        planPrices
    } = useSubscriptionPlans(
        hasJusProcessos,
        processCount
    );

    const dispatch = useDispatch();

    const {
        price,
        priceDisplay,
        label,
        description,
        totalPrice,
        title,
        gateway_id,
        name,
    } = planPrices.ultimate;

    useEffect(() => {
        formik.setFieldValue("product_selected", {
            ...formik.values.product_selected,
            price,
            description,
            periodicity: billingCycle,
            gateway_id: gateway_id,
            name: name,
        });
        formik.setFieldValue("totalPrice", totalPrice);
    }, [
        billingCycle,
        price,
        priceDisplay,
        label,
        description,
        totalPrice,
        gateway_id,
    ]);

    const onSubscribe = () => {
        if (provider === "pagarme_v5") {
            setModalV5(true);
            setScreen("checkoutV5");
        } else {
            setScreen("checkout");
        }
    };

    const formik = useFormik({
        initialValues: {
            product_selected: INITIAL_PRODUCT,
            cardholder_name: "",
            card_number: "",
            card_payment_method: null,
            card_cvv: "",
            card_expiration: "",
            recaptchaToken: "",
        },
        onSubmit: (values, {
            setSubmitting
        }) => {
            var card = {};
            card.card_holder_name = values.cardholder_name;
            card.card_expiration_date =
                values.card_expiration.substr(0, 2) +
                "/" +
                values.card_expiration.substr(values.card_expiration.length - 2);
            card.card_number = values.card_number;
            card.card_cvv = values.card_cvv;
            var cardValidations = pagarme.validate({
                card: card
            });

            if (!cardValidations.card.card_holder_name) {
                setSubmitting(false);
                toast.error("Verifique o nome impresso no cartão.");
                return false;
            }
            if (!cardValidations.card.card_number) {
                setSubmitting(false);
                toast.error("Verifique o número do cartão.");
                return false;
            }
            if (!cardValidations.card.card_expiration_date) {
                setSubmitting(false);
                toast.error("Verifique a data de expiração do cartão.");
                return false;
            }
            if (!cardValidations.card.card_cvv) {
                setSubmitting(false);
                toast.error("Verifique o código de segurança (CVV) do cartão.");
                return false;
            }

            const handleSubscription = card_hash => {
                dispatch({
                    type: "CREATE_SUBSCRIPTION",
                    payload: {
                        values: {
                            ...values,
                            card_hash,
                        },
                        callback: response => {
                            const currentPlan =
                                subscription ? .subscription_status ? .plan_details;
                            window.analytics.track("Universal Plan Upgraded", {
                                context: "lawsuits_query",
                                current_plan: currentPlan ? .name,
                                current_plan_id: currentPlan ? .gateway_id,
                                new_plan_name: name,
                                new_plan_price: values.product_selected ? .price,
                                current_plan_price: currentPlan ? .amount,
                                new_plan_id: values.product_selected ? .gateway_id,
                                isUniversal: true,
                            });
                            dispatch({
                                type: "LOAD_SUBSCRIPTION_STATUS",
                                payload: {
                                    callback: provider => {
                                        dispatch(auth.actions.updateUserProvider(provider));
                                    },
                                },
                            });

                            setShouldReload(true);
                            setScreen("success");
                            closeModal();
                        },
                        setSubmitting,
                    },
                });
            };

            if (provider === "pagarme_v5") {
                fetch(
                        `https://api.pagar.me/core/v5/tokens?appId=${process.env.REACT_APP_PAGARME_V5_ENCRYPTION_KEY}`, {
                            method: "POST",
                            headers: {
                                accept: "application/json",
                                "content-type": "application/json",
                            },
                            body: JSON.stringify({
                                type: "card",
                                card: {
                                    number: card.card_number.replace(/\s/g, ""),
                                    holder_name: card.card_holder_name,
                                    exp_month: parseInt(card.card_expiration_date.substr(0, 2), 10),
                                    exp_year: parseInt(card.card_expiration_date.substr(3, 2), 10),
                                    cvv: card.card_cvv,
                                },
                            }),
                        }
                    )
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Erro ao processar o cartão: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => handleSubscription(data.id))
                    .catch(error => {
                        setSubmitting(false);
                        toast.error(`Erro ao processar o cartão, tente novamente.`);
                        console.error("Erro ao processar o cartão:", error);
                    });
            } else {
                pagarme.client
                    .connect({
                        encryption_key: process.env.REACT_APP_PAGARME_ENCRYPTION_KEY,
                    })
                    .then(client => client.security.encrypt(card))
                    .then(card_hash => handleSubscription(card_hash));
            }
        },
        validationSchema: yup.object().shape({
            cardholder_name: yup
                .string()
                .required("O nome do titular do cartão é obrigatório."),
            card_number: yup.string().required("O número do cartão é obrigatório."),
            card_expiration: yup
                .string()
                .required("O mês/ano de expiração do cartão é obrigatório.")
                .test("isValidExpiration", "O vencimento é inválido.", function(value) {
                    const cleanedExpirationDate = value.replace(/\s/g, "");
                    if (!cleanedExpirationDate ||
                        !/^(0[1-9]|1[012])[/]\d{2}$/.test(cleanedExpirationDate)
                    ) {
                        return false;
                    }

                    const currentDate = new Date();
                    const currentMonth = String(currentDate.getMonth() + 1).padStart(
                        2,
                        "0"
                    );
                    const currentYear = String(currentDate.getFullYear()).substr(-2);

                    const [expMonth, expYear] = cleanedExpirationDate.split("/");

                    if (
                        expYear < currentYear ||
                        (expYear === currentYear && expMonth < currentMonth)
                    ) {
                        return false;
                    }

                    return true;
                }),
            card_cvv: yup
                .string()
                .required("O código de segurança (CVV) do cartão é obrigatório.")
                .test("isValidCVV", "Número do CVV inválido.", function(value) {
                    return value && /^[0-9]{3,4}$/.test(value);
                }),
        }),
    });

    return ( <
        > {
            screen === "choose_plan" && ( <
                S.Container type = {
                    screen
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
                >
                <
                S.Content >
                <
                S.Header >
                <
                p > Encontre processos com facilidade < /p> <
                h1 > {
                    title
                } < /h1> <
                /S.Header>

                <
                S.Description >
                <
                span >
                Maximize sua eficiência: Plano Ultimate com acesso total ao Buscador Processual em todo o Brasil!Aproveite já🔥 <
                /span> <
                /S.Description> <
                S.PriceContainer >
                <
                S.PriceAction >
                <
                S.Switch >
                <
                S.SwitchOption selected = {
                    billingCycle === "monthly"
                }
                onClick = {
                    toggleBillingCycle
                } >
                Mensal <
                /S.SwitchOption> <
                S.SwitchOption selected = {
                    billingCycle === "annually"
                }
                onClick = {
                    toggleBillingCycle
                }
                isGrow >
                Anual 20 % de desconto <
                /S.SwitchOption> <
                /S.Switch> <
                div >
                <
                S.Price isAnnually = {
                    billingCycle === "annually"
                } > {
                    priceDisplay
                } <
                /S.Price> <
                S.PriceDescription > {
                    label
                } < /S.PriceDescription> <
                /div> <
                Button width = "100%"
                padding = "10px"
                borderRadius = "5px"
                onClick = {
                    onSubscribe
                } >
                Assine agora!
                <
                /Button> <
                /S.PriceAction> <
                /S.PriceContainer> <
                /S.Content> <
                /> <
                /S.Container>
            )
        } {
            screen === "checkout" && ( <
                S.Container type = {
                    screen
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
                Checkout screen = {
                    screen
                }
                setScreen = {
                    setScreen
                }
                formik = {
                    formik
                }
                back = {
                    () => setScreen("choose_plan")
                }
                isQuery /
                >
                <
                /S.Container>
            )
        } {
            screen === "checkoutV5" && ( <
                ModalSubscriptionPolling isOpen close = {
                    () => {
                        setScreen("choose_plan");
                        setModalV5(false);
                        closeModal();
                        if (screen !== "checkoutV5" && screen !== "checkout") {
                            setShouldReload(true);
                        }
                    }
                }
                disableClose back = {
                    () => {
                        setScreen("choose_plan");
                        setModalV5(false);
                    }
                }
                productSelected = {
                    {
                        id: formik.values.product_selected ? .id,
                        name: formik.values.product_selected ? .name,
                        description: formik.values.product_selected ? .description,
                        periodicity: formik.values.product_selected ? .periodicity,
                        price: formik.values.product_selected ? .price,
                        totalPrice: formik.values.totalPrice,
                        gateway_id: formik.values.product_selected ? .gateway_id,
                    }
                }
                isQuery /
                >
            )
        } <
        />
    );
};

export default ChoosePlanModal;