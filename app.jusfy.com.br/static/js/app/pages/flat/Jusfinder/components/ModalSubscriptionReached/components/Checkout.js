import React, {
    useEffect,
    useRef
} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import InputMask from "react-input-mask";

import {
    Form
} from "react-bootstrap";

import {
    ReCaptchaProvider,
    ReCaptchaV3
} from "react-recaptcha-x";

import {
    useRecaptchaTokenRefresh,
    useRecaptchaV3,
} from "../../../../../../hooks/useRecaptcha";
import {
    BlockUi
} from "../../../../../../components/BlockUI";
import {
    FloatToCurrency,
    toAbsoluteUrl,
} from "../../../../../../../_metronic/_helpers";
import {
    ButtonBack,
    ContentPlan,
    CreditCardContainer
} from "./styles";
import {
    IMAGE_DEFAULT_CREDIT_CARD
} from "../../../../../Perfil/components/SubscriptionUpgradeModal/styles.js";

import useCreditCardFlagSVG from "../../../../../../hooks/useCreditCardFlagSVG";

export default function Checkout(props) {
    const cards = useSelector(state => state.app.cards);
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    const checkout = () => {
        props.formik.handleSubmit();
    };

    const refreshRecaptchaV3Ref = useRef();
    const [handleRecaptchaV3Callback, captchaV3Params] = useRecaptchaV3(
        refreshRecaptchaV3Ref
    );
    useRecaptchaTokenRefresh(refreshRecaptchaV3Ref);

    useEffect(() => {
        props.formik.setFieldValue("recaptchaToken", captchaV3Params.v3Token);
    }, [captchaV3Params.v3Token]);

    useEffect(() => {
        dispatch({
            type: "LOAD_CARDS"
        });
    }, [dispatch]);

    const {
        svg
    } = useCreditCardFlagSVG({
        cardNumber: props.formik.values.card_number,
    });

    return ( <
        BlockUi blocking = {
            props.formik.isSubmitting
        } > {
            props.formik.values.product_selected != null && ( <
                ContentPlan >
                <
                ButtonBack onClick = {
                    () => props.back()
                }
                src = {
                    toAbsoluteUrl("/media/svg/icons/Navigation/Arrow-left.svg")
                }
                /> <
                span > Checkout < /span> <
                hr / >
                <
                h3 > {
                    props.formik.values.product_selected.name
                } < /h3> <
                p > {
                    props.formik.values.product_selected.description
                } < /p> <
                span className = "price" >
                R$ {
                    FloatToCurrency(props.formik.values.product_selected.price)
                } <
                /span>

                <
                div className = "hr" > < /div>

                <
                div key = {
                    props.formik.values.card_selected
                }
                className = "mb-3" > {
                    cards &&
                    cards.map(card => ( <
                        Form.Check key = {
                            card.hash
                        }
                        custom type = {
                            "checkbox"
                        }
                        label = {
                            `Desejo utilizar meu cartão com final ${card.last_digits}`
                        }
                        checked = {
                            props.formik.values.card_selected &&
                            props.formik.values.card_selected.hash === card.hash
                        }
                        onChange = {
                            () =>
                            props.formik.setFieldValue("card_selected", card)
                        }
                        id = {
                            `card-${card.hash}`
                        }
                        />
                    ))
                } <
                Form.Check custom type = {
                    "checkbox"
                }
                label = {
                    `Desejo informar os dados do cartão manualmente`
                }
                checked = {
                    props.formik.values.card_selected === null
                }
                onChange = {
                    () => props.formik.setFieldValue("card_selected", null)
                }
                id = {
                    `card-none`
                }
                /> <
                /div>

                {
                    props.formik.values.card_selected === null && ( <
                        div className = "row" >
                        <
                        div className = "col-12" >
                        <
                        label > Nome impresso no cartão < /label> <
                        input name = "cardholder_name"
                        type = "text"
                        className = {
                            "form-control " +
                            (props.formik.errors.cardholder_name &&
                                props.formik.touched.cardholder_name ?
                                "is-invalid" :
                                "")
                        }
                        onChange = {
                            props.formik.handleChange
                        }
                        value = {
                            props.formik.values.cardholder_name
                        }
                        /> {
                            props.formik.errors.cardholder_name &&
                                props.formik.touched.cardholder_name && ( <
                                    label className = "invalid-feedback" > {
                                        props.formik.errors.cardholder_name
                                    } <
                                    /label>
                                )
                        } <
                        /div> <
                        div className = "col-lg-6" >
                        <
                        label > Número do cartão < /label> <
                            CreditCardContainer >
                            <
                            InputMask
                        name = "card_number"
                        placeholder = "0000 0000 0000 0000"
                        mask = "9999 9999 9999 9999"
                        maskChar = {
                            null
                        }
                        className = {
                            "form-control " +
                            (props.formik.errors.card_number &&
                                props.formik.touched.card_number ?
                                "is-invalid" :
                                "")
                        }
                        type = "tel"
                        onChange = {
                            props.formik.handleChange
                        }
                        value = {
                            props.formik.values.card_number
                        }
                        /> <
                        img src = {
                            svg ? toAbsoluteUrl(svg) : IMAGE_DEFAULT_CREDIT_CARD
                        }
                        alt = "Bandeira do cartão" /
                        > {
                            props.formik.errors.card_number &&
                            props.formik.touched.card_number && ( <
                                label className = "invalid-feedback" > {
                                    props.formik.errors.card_number
                                } <
                                /label>
                            )
                        } <
                        /CreditCardContainer> <
                        /div>

                        <
                        div className = "col-lg-3 col-6" >
                        <
                        label > Vencimento < /label> <
                        InputMask name = "card_expiration"
                        placeholder = "MM / AA"
                        mask = "99 / 99"
                        maskChar = {
                            null
                        }
                        className = {
                            "form-control " +
                            (props.formik.errors.card_expiration &&
                                props.formik.touched.card_expiration ?
                                "is-invalid" :
                                "")
                        }
                        type = "tel"
                        onChange = {
                            props.formik.handleChange
                        }
                        value = {
                            props.formik.values.card_expiration
                        }
                        /> {
                            props.formik.errors.card_expiration &&
                                props.formik.touched.card_expiration && ( <
                                    label className = "invalid-feedback" > {
                                        props.formik.errors.card_expiration
                                    } <
                                    /label>
                                )
                        } <
                        /div>

                        <
                        div className = "col-lg-3 col-6" >
                        <
                        label > CVV < /label> <
                        InputMask name = "card_cvv"
                        placeholder = "000"
                        mask = "9999"
                        maskChar = {
                            null
                        }
                        className = {
                            "form-control " +
                            (props.formik.errors.card_cvv &&
                                props.formik.touched.card_cvv ?
                                "is-invalid" :
                                "")
                        }
                        type = "tel"
                        onChange = {
                            props.formik.handleChange
                        }
                        value = {
                            props.formik.values.card_cvv
                        }
                        /> {
                            props.formik.errors.card_cvv &&
                                props.formik.touched.card_cvv && ( <
                                    label className = "invalid-feedback" > {
                                        props.formik.errors.card_cvv
                                    } <
                                    /label>
                                )
                        } <
                        /div> <
                        /div>
                    )
                }

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

                <
                span className = "desc-payment" > & nbsp; < /span> <
                button className = "btn btn-primary"
                type = "button"
                onClick = {
                    checkout
                }
                disabled = {
                    props.formik.isSubmitting
                } >
                Assinar agora <
                /button> <
                /ContentPlan>
            )
        } <
        /BlockUi>
    );
}