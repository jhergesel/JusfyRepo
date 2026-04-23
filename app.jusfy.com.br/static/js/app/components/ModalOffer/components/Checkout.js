import React, {
    useRef,
    useEffect
} from "react";
import {
    useSelector
} from "react-redux";
import {
    toAbsoluteUrl
} from "../../../../_metronic/_helpers";
import styled from "styled-components";
import InputMask from "react-input-mask";
import ConvertCurrencyToBRL from "../../../helpers/ConvertCurrencyToBRL";
import {
    Form
} from "react-bootstrap";
import {
    BlockUi
} from "../../BlockUI";

import {
    ReCaptchaProvider,
    ReCaptchaV3
} from "react-recaptcha-x";

import {
    useRecaptchaV3,
    useRecaptchaTokenRefresh,
} from "../../../hooks/useRecaptcha";

import {
    IMAGE_DEFAULT_CREDIT_CARD
} from "../../../pages/Perfil/components/SubscriptionUpgradeModal/styles.js";

import useCreditCardFlagSVG from "../../../hooks/useCreditCardFlagSVG";

const Content = styled.div `
  input:focus {
    border: 1px solid #41c78f !important;
  }

  span {
    color: #2e3f75;
    font-weight: bold;
    font-size: 30px;
  }
  h3 {
    color: #2e3f75;
    font-size: 22px;
    display: inline-block;
  }
  p {
    width: 70%;
    text-align: left;
    color: #2e3f75;
    opacity: 0.6;
    margin-top: 5px;
    margin-bottom: 15px;
  }
  span.price {
    font-size: 30px;
    text-align: right;
    display: inline-block;
    float: right;
    margin-top: -68px;
  }
  span.desc-payment {
    font-weight: normal;
    font-size: 12px;
    width: 61%;
    display: inline-block;
    margin-top: 20px;
  }
  hr {
    opacity: 0.1;
    margin: 10px 0px 20px 0px;
  }

  label:not(.invalid-feedback) {
    margin: 0;
    padding: 0;
    font-size: 13px;
    opacity: 0.6;
    color: #091d5c;
    margin: 10px 0px;
  }
  input.form-control {
    margin: 0;
    padding: 9px;
    outline: none;
    box-shadow: none;
    border: 1px solid #ccc;
  }

  .btn-primary {
    background: #41c78f;
    border: none;
    display: inline-block;
    border-radius: 50px;
    padding: 12px 40px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 13px;
    float: right;
  }
  .btn-primary:hover {
    cursor: pointer;
    background: #3ab380;
  }

  @media only screen and (max-width: 899px) {
    .row {
      margin-top: 0px;
    }
    hr {
      margin: 10px;
    }
    label {
      margin: 5px 0px;
    }
    span {
      font-size: 16px;
    }
    h3 {
      font-size: 14px;
    }
    p {
      font-size: 12px;
      width: 100%;
    }

    span.price {
      float: none;
      margin: 0 auto;
      text-align: center;
      letter-spacing: -0.9;
    }
    input.form-control {
      width: 100%;
      margin-bottom: 10px;
      padding: 4px;
    }
    span.desc-payment {
      width: 100%;
      margin-top: 0;
      opacity: 0.6;
      font-size: 10px;
    }

    .btn-primary {
      padding: 10px 40px;
      font-size: 14px;
      width: 100%;
      margin-top: 10px;
    }
  }
`;

const ButtonBack = styled.img `
  filter: brightness(0) saturate(100%) invert(58%) sepia(59%) saturate(452%)
    hue-rotate(103deg) brightness(92%) contrast(83%);
  cursor: pointer;
  margin: 0 5px 5px 0;
`;

const CreditCardContainer = styled.div `
  position: relative;

  img {
    height: 23px;
    position: absolute;
    right: 9px;
    top: 8px;
  }
`;

export default function Checkout(props) {
    const cards = useSelector(state => state.app.cards);

    const checkout = () => {
        props.formik.handleSubmit();
    };

    const {
        svg
    } = useCreditCardFlagSVG({
        cardNumber: props.formik.values.card_number,
    });

    const refreshRecaptchaV3Ref = useRef();
    const [handleRecaptchaV3Callback, captchaV3Params] = useRecaptchaV3(
        refreshRecaptchaV3Ref
    );
    useRecaptchaTokenRefresh(refreshRecaptchaV3Ref);

    useEffect(() => {
        props.formik.setFieldValue("recaptchaToken", captchaV3Params.v3Token);
    }, [captchaV3Params.v3Token]);

    return ( <
        BlockUi blocking = {
            props.formik.isSubmitting
        } > {
            props.formik.values.product_selected != null && ( <
                Content >
                <
                ButtonBack onClick = {
                    () => props.back()
                }
                src = {
                    toAbsoluteUrl("/media/svg/icons/Navigation/Arrow-left.svg")
                }
                />

                <
                span > Checkout < /span> <
                hr / >
                <
                h3 > {
                    props.formik.values.product_selected ? .name
                } < /h3> <
                p > {
                    props.formik.values.product_selected ? .periodicity === "monthly" ?
                    "Mensal" :
                    "Anual"
                } <
                /p> <
                span className = "price" > {
                    ConvertCurrencyToBRL(props.formik.values.product_selected ? .price)
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
                        Form.Check custom type = {
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
                        key = {
                            card.hash
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
                        />

                        <
                        img alt = "bandeira do cartão de crédito"
                        src = {
                            svg ? toAbsoluteUrl(svg) : IMAGE_DEFAULT_CREDIT_CARD
                        }
                        />

                        {
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
                /Content>
            )
        } <
        /BlockUi>
    );
}