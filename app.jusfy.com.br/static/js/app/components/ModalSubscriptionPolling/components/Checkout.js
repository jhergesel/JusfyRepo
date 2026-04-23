import React, {
    useEffect,
    useMemo,
    useRef,
    useState
} from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import styled from 'styled-components';
import {
    toAbsoluteUrl
} from '../../../../_metronic/_helpers';
import FloatToCurrency from '../../../helpers/FloatToCurrency';
import {
    BlockUi
} from '../../BlockUI';
import Button from '../../flat/ui/Button';
import * as S from './CheckoutModal.styles';

import {
    ReCaptchaProvider,
    ReCaptchaV3
} from 'react-recaptcha-x';

import {
    Radio
} from '@material-ui/core';
import {
    cardMask,
    expirationMask,
} from '../../../../_metronic/_helpers/MasksHelper';
import {
    FEATURE_FLAGS
} from '../../../constants/FeatureFlag';
import useCreditCardFlagSVG from '../../../hooks/useCreditCardFlagSVG';
import useFeatureFlag from '../../../hooks/useFeatureFlag';
import {
    useRecaptchaTokenRefresh,
    useRecaptchaV3,
} from '../../../hooks/useRecaptcha';
import {
    PERFIL_TEXTS
} from '../../../pages/Perfil/texts';
import CreditCardFlagIcon from '../../flat/ui/Forms/SelectCardForm/CreditCardFlagIcon';
import InputText from '../../flat/ui/Inputs/InputText';
import SelectInput from '../../flat/ui/Select';
import RefoundInfo from './RefoundInfo';

const Content = styled.div `
  input:focus {
    border: 1px solid #41c78f !important;
  }

  span.title {
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
    margin-bottom: 10px;
    margin-left: 5px;
    font-size: 14px;
    opacity: 0.6;
    color: #091d5c;
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
  margin: 0 5px 15px 0;
`;

export default function Checkout({
    migrationData,
    ...props
}) {
    const dispatch = useDispatch();
    const {
        svg
    } = useCreditCardFlagSVG({
        cardNumber: props.formik.values.card_number,
    });
    const {
        isFeatureFlagEnable: isSetPrimaryCardEnabled,
        flagsReady,
    } = useFeatureFlag(FEATURE_FLAGS.KILL_SWITCH.JUSBILL_SET_PRIMARY_CARD);
    const [state, setState] = useState('user_card');
    const is_loading_cards = useSelector((state) => state.app.is_loading_cards);
    const loadedCards = useSelector((state) => state.app.cards);

    const {
        setFieldValue,
        values
    } = props.formik;
    const cardSelected = values.card_selected;
    const isPromotionalPlanToCheckout =
        props.formik.values.product_selected.gateway_id === '6842967';

    const cards = useMemo(() => {
        if (
            migrationData ? .enableOrganicMigration &&
            migrationData ? .currentProvider === 'pagarme'
        ) {
            const migrationCards =
                migrationData ? .cards ? .filter((card) => card.valid) || [];
            return migrationCards.map((mc) => ({
                ...mc,
                hash: mc.provider_id,
                expiration_date: `${mc.expiration_month}/${mc.expiration_year}`,
                id: mc.id,
                brand: mc.brand,
                last_digits: mc.digits,
                in_use: mc.is_primary,
                valid: mc.valid,
            }));
        }

        return loadedCards;
    }, [
        loadedCards,
        migrationData ? .cards,
        migrationData ? .enableOrganicMigration,
        migrationData ? .currentProvider,
    ]);

    const checkout = () => {
        props.formik.handleSubmit();
    };

    const refreshRecaptchaV3Ref = useRef();
    const [handleRecaptchaV3Callback, captchaV3Params] = useRecaptchaV3(
        refreshRecaptchaV3Ref,
    );
    useRecaptchaTokenRefresh(refreshRecaptchaV3Ref);

    const renderCardInput = (
        name,
        label,
        placeholder,
        maxLength,
        mask = (val) => val,
    ) => ( <
        div >
        <
        InputText label = { < S.CardInputLabel > {
                label
            } < /S.CardInputLabel>}
            name = {
                name
            }
            onChange = {
                props.formik.handleChange
            }
            value = {
                mask(props.formik.values[name])
            }
            placeholder = {
                placeholder
            }
            maxLength = {
                maxLength
            }
            padding = {
                name === 'card_number' && '0 0 0 22px'
            }
            /> {
                props.formik.errors[name] && props.formik.touched[name] && ( <
                    S.Error > {
                        props.formik.errors[name]
                    } < /S.Error>
                )
            } <
            /div>
        );

        useEffect(() => {
            props.formik.setFieldValue('recaptchaToken', captchaV3Params.v3Token);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [captchaV3Params.v3Token]);

        useEffect(() => {
            dispatch({
                type: 'LOAD_CARDS'
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        useEffect(() => {
            if (is_loading_cards) return;

            const cardsArray = Array.isArray(cards) ? cards : [];

            if (cardsArray.length === 0 && cardSelected) {
                setFieldValue('card_selected', null);
                return;
            }

            const mainCard = cardsArray.find((card) => card.in_use);
            if (mainCard && !cardSelected) {
                setFieldValue('card_selected', mainCard);
            }

            if (cardsArray.length === 0) {
                setState('new_card');
                return;
            }
        }, [cards, cardSelected, setFieldValue, is_loading_cards]);

        return ( <
            BlockUi blocking = {
                props.formik.isSubmitting
            } > {
                props.formik.values.product_selected != null && ( <
                    Content > {!!props.back &&
                        (props.screen !== 'polling' ||
                            props.pollingStatus === 'failed') && ( <
                            ButtonBack onClick = {
                                props.back
                            }
                            src = {
                                toAbsoluteUrl(
                                    '/media/svg/icons/Navigation/Arrow-left.svg',
                                )
                            }
                            />
                        )
                    } <
                    span className = "title" > Checkout < /span> <
                    hr / >
                    <
                    h3 > {
                        props.formik.values.product_selected.name
                    } < /h3> <
                    p > {
                        props.formik.values.product_selected.description
                    } < /p> <
                    span className = "price" > {
                        props.isQuery ?
                        `R$ ${FloatToCurrency(props.formik.values.totalPrice)}` :
                            `R$ ${FloatToCurrency(
                  props.formik.values.product_selected.price,
                )}`
                    } <
                    /span> {
                        isPromotionalPlanToCheckout ? ( <
                            >
                            <
                            p >
                            <
                            span > {
                                PERFIL_TEXTS.promotionalPlanInfo.message
                            } < /span> <
                            /p> <
                            p >
                            <
                            span > {
                                PERFIL_TEXTS.promotionalPlanInfo.info
                            } < /span> <
                            span > {
                                PERFIL_TEXTS.promotionalPlanInfo.clients
                            } < /span> <
                            /p> <
                            />
                        ) : null
                    } <
                    hr / >
                    <
                    div >
                    <
                    S.RadioContainer onClick = {
                        () => setState('user_card')
                    }
                    selected = {
                        state === 'user_card'
                    } >
                    <
                    Radio checked = {
                        state === 'user_card'
                    }
                    /> <
                    span > Utilizar cartão já cadastrado < /span> <
                    /S.RadioContainer> {
                        state === 'user_card' && ( <
                            S.OptionContainer >
                            <
                            SelectInput value = {
                                props.formik.values.card_selected ? .id || 'default'
                            }
                            onChange = {
                                (e) =>
                                props.formik.setFieldValue(
                                    'card_selected',
                                    cards.find((card) => card.id === e.target.value),
                                )
                            }
                            disabled = {
                                (!Array.isArray(cards) || !cards.length) &&
                                !is_loading_cards
                            } >
                            {
                                is_loading_cards ? ( <
                                    S.CustomOption value = "default" >
                                    Carregando...
                                    <
                                    /S.CustomOption>
                                ) : Array.isArray(cards) && cards.length > 0 ? (
                                    cards.map((userCard) => ( <
                                        S.CustomOption key = {
                                            userCard.id
                                        }
                                        value = {
                                            userCard.id
                                        } >
                                        <
                                        CreditCardFlagIcon flag = {
                                            userCard ? .brand
                                        }
                                        /> **
                                        ** {
                                            userCard ? .last_digits
                                        } {
                                            userCard.in_use &&
                                                flagsReady &&
                                                isSetPrimaryCardEnabled ? ( <
                                                    S.MainCardBadge > Em uso < /S.MainCardBadge>
                                                ) : null
                                        } <
                                        /S.CustomOption>
                                    ))
                                ) : ( <
                                    S.CustomOption value = "default" >
                                    Nenhum cartão encontrado <
                                    /S.CustomOption>
                                )
                            } <
                            /SelectInput> <
                            /S.OptionContainer>
                        )
                    } <
                    S.RadioContainer onClick = {
                        () => {
                            setState('new_card');
                            props.formik.setFieldValue('card_selected', null);
                        }
                    }
                    selected = {
                        state === 'new_card'
                    } >
                    <
                    Radio checked = {
                        state === 'new_card'
                    }
                    /> <
                    span > Cadastrar novo cartão < /span> <
                    /S.RadioContainer> {
                        state === 'new_card' && ( <
                            S.OptionContainer >
                            <
                            S.CardContainer > {
                                renderCardInput(
                                    'cardholder_name',
                                    'Nome impresso no cartão',
                                )
                            } <
                            S.InputWrapper >
                            <
                            S.InputCardNumberWrapper > {
                                renderCardInput(
                                    'card_number',
                                    'Número do cartão',
                                    '0000 0000 0000 0000',
                                    '19',
                                    cardMask,
                                )
                            } <
                            S.CardFlag width = "22"
                            height = "14"
                            src = {
                                toAbsoluteUrl(svg)
                            }
                            /> <
                            /S.InputCardNumberWrapper> {
                                renderCardInput(
                                    'card_expiration',
                                    'Validade',
                                    'MM/AA',
                                    '5',
                                    expirationMask,
                                )
                            } {
                                renderCardInput('card_cvv', 'CVV', '000', '4')
                            } <
                            /S.InputWrapper> <
                            /S.CardContainer> <
                            /S.OptionContainer>
                        )
                    } <
                    /div> <
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
                    RefoundInfo newPlanAmount = {
                        props.formik.values.totalPrice ||
                        props.formik.values.product_selected.price
                    }
                    />

                    <
                    span className = "desc-payment" > & nbsp; < /span> {
                        props.isQuery ? ( <
                            Button width = "100%"
                            padding = "10px"
                            borderRadius = "5px"
                            onClick = {
                                checkout
                            } >
                            Assinar Ultimate <
                            /Button>
                        ) : ( <
                            button style = {
                                {
                                    width: props.isQuery ? '100%' : 'fit-content'
                                }
                            }
                            className = "btn btn-primary"
                            type = "button"
                            onClick = {
                                checkout
                            }
                            disabled = {
                                props.formik.isSubmitting
                            } >
                            Assinar agora <
                            /button>
                        )
                    } <
                    /Content>
                )
            } <
            /BlockUi>
        );
    }