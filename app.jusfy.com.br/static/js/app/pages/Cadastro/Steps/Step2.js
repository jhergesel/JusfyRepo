import {
    FormControl,
    FormControlLabel,
    FormGroup,
    Switch,
} from "@material-ui/core";
import {
    useEffect,
    useState
} from "react";
import InputMask from "react-input-mask";
import {
    ReCaptchaProvider,
    ReCaptchaV2,
    ReCaptchaV3
} from "react-recaptcha-x";
import {
    useSelector
} from "react-redux";
import Select from "react-select";
import styled from "styled-components";
import {
    STATES
} from "./Step2/constants";

import {
    toAbsoluteUrl
} from "../../../../_metronic/_helpers";
import {
    cpfMask,
    phoneMask
} from "../../../../_metronic/_helpers/MasksHelper";
import RightInfo from "../components/RightInfo/RightInfo";
import {
    COUPON_INPUT_MESSAGES,
    INPUT_COLORS,
    PERIODICITIES,
} from "./Step2/constants";

import {
    customSelectStyle
} from "../../../../_metronic/_partials/dropdowns/ReactSelectCustomStyle";
import useFeatureFlag from "../../../../app/hooks/useFeatureFlag";
import {
    BlockUi
} from "../../../components/BlockUI";
import {
    FEATURE_FLAGS
} from "../../../constants/FeatureFlag";
import * as S from "./Step2/Step2.styles";

import {
    IMAGE_DEFAULT_CREDIT_CARD
} from "../../../pages/Perfil/components/SubscriptionUpgradeModal/styles.js";

import useCreditCardFlagSVG from "../../../hooks/useCreditCardFlagSVG";
import {
    tracking
} from '../../../services/tracking';

const CreditCardContainer = styled.div `
  position: relative;

  img {
    height: 23px;
    position: absolute;
    right: 9px;
    top: 8px;
  }
`;

export default function Step2Cep(props) {
    const states = STATES;
    const [cities, setCities] = useState([]);
    const coupom = useSelector(state => state.app.coupom);
    const citiesError = useSelector(state => state.app.cities_error || false);
    const [coupomInputFeedback, setCoupomInputFeedback] = useState(null);
    const [loadingCep, setLoadingCep] = useState(false);
    const [loadingCities, setLoadingCities] = useState(false);
    const [selectedCity, setSelectedCity] = useState("");
    const [foundCEP, setFoundCEP] = useState(false);
    const [foundDistrict, setFoundDistrict] = useState(false);
    const [foundAddress, setFoundAddress] = useState(false);

    const loadCidades = async state => {
        setLoadingCities(true);
        try {
            const response = await fetch(`/cities/${state}.json`);
            if (!response.ok) throw new Error("Erro ao carregar cidades");
            const cidades = await response.json();
            // Ordena as cidades em ordem alfabética pelo nome
            const sortedCities = [...cidades.loc_cities].sort((a, b) =>
                a.name.localeCompare(b.name, "pt-BR", {
                    sensitivity: "base"
                })
            );
            setCities(sortedCities);
        } catch (err) {
            console.error(err);
            return [];
        } finally {
            setLoadingCities(false);
        }
    };

    const search = new URLSearchParams(document.location.search);
    const hasCompraGarantida = search.get("compra_garantida") === "true";

    const defaultTrialDays = useSelector(state => state.app.default_trial_days);

    const isCoupomEmpty = props.formik.values.coupom === "";

    const isCoupomValid = coupom.is_valid && !coupom.invalid_reason;

    const hasCoupomError = !coupom.is_valid && coupom.invalid_reason;

    const shouldWarningCoupomNotApplied = !isCoupomEmpty && !coupomInputFeedback;

    const {
        isFeatureFlagEnable: isCepAutofillEnable
    } = useFeatureFlag(
        FEATURE_FLAGS.KILL_SWITCH.ENABLE_CEP_AUTOFILL
    );

    props.formik.values.has_compra_garantida =
        hasCompraGarantida && coupomInputFeedback !== "SUCCESS";

    const submitHandleClick = event => {
        window.analytics.track("Sign Up Create Account Button Clicked", {
            name: props.formik.values ? .name,
            email: props.formik.values ? .email,
            profession: props.formik.values ? .profession,
            coupom: props.formik.values ? .coupom,
            document_number: props.formik.values ? .document_number,
            phone: props.formik.values ? .phone,
            plan: props.formik.values ? .plan,
            state: props.formik.values ? .state,
            city: props.formik.values ? .city,
            district: props.formik.values ? .district,
            postal_code: props.formik.values ? .postal_code,
            address: props.formik.values ? .address,
            address_number: props.formik.values ? .address_number,
            address_complement: props.formik.values ? .address_complement,
            cardholder_name: props.formik.values ? .cardholder_name,
            card_number_length: props.formik.values ? .card_number ? .length || 0,
            card_payment_method: props.formik.values ? .card_payment_method,
            card_cvv_length: props.formik.values ? .card_cvv ? .length || 0,
            card_expiration_length: props.formik.values ? .card_expiration ? .length || 0,
        });

        tracking.checkout.trackCheckoutSignUpAttempt(
            props.formik.values,
            coupom,
            defaultTrialDays
        );

        if (shouldWarningCoupomNotApplied) {
            window.analytics.track("Sign Up Account Creation Failed", {
                error: "WARNING_COUPON_NOT_APPLIED",
                coupon: props.formik.values ? .coupom,
            });
            setCoupomInputFeedback("WARNING");
            return;
        }

        props.handleSubmitForm();
    };

    const getCoupomPeriodicity = periodicity =>
        PERIODICITIES[periodicity] || "/mensal";

    const getCoupomInputMessage = invalidReason => {
        if (coupomInputFeedback === "WARNING")
            return COUPON_INPUT_MESSAGES.get("EMPTY");

        return isCoupomValid ?
            COUPON_INPUT_MESSAGES.get("SUCCESS") :
            COUPON_INPUT_MESSAGES.get(invalidReason);
    };

    const getCoupomMessageColor = () =>
        coupomInputFeedback ?
        INPUT_COLORS.get(coupomInputFeedback) :
        INPUT_COLORS.get("SUCCESS");

    const handleCoupomApply = e => {
        props.getCoupom(e.target.value);
        if (isCoupomEmpty) setCoupomInputFeedback("WARNING");
    };

    const handleChangeCupom = e => {
        if (coupomInputFeedback) {
            setCoupomInputFeedback(null);
        }

        props.formik.setFieldValue("coupom", e.target.value.toUpperCase());
    };

    const validateButtonSubmit = () => {
        if (hasCompraGarantida || (coupom.is_valid && coupom.trial_days !== 0)) {
            return "INICIAR TESTE GRÁTIS";
        } else {
            return "REALIZAR CADASTRO";
        }
    };

    const cupomReferenceInputs = props.showCupomReferenceInputs ? ( <
        S.CupomReferenceContainer >
        <
        div >
        <
        label >
        Nome do responsável <
            span className = "text-danger" > & nbsp;* < /span> <
        /label> <
        input name = "reference_name"
        type = "text"
        className = {
            "form-control " +
            (props.formik.errors.reference_name &&
                props.formik.touched.reference_name ?
                "is-invalid" :
                "")
        }
        onChange = {
            props.formik.handleChange
        }
        value = {
            props.formik.values.reference_name
        }
        /> {
            props.formik.errors.reference_name &&
                props.formik.touched.reference_name && ( <
                    label className = "invalid-feedback" > {
                        props.formik.errors.reference_name
                    } <
                    /label>
                )
        } <
        /div>

        <
        div >
        <
        label >
        Nome do município <
            span className = "text-danger" > & nbsp;* < /span> <
        /label> <
        input name = "reference_city"
        type = "text"
        className = {
            "form-control " +
            (props.formik.errors.reference_city &&
                props.formik.touched.reference_city ?
                "is-invalid" :
                "")
        }
        onChange = {
            props.formik.handleChange
        }
        value = {
            props.formik.values.reference_city
        }
        /> {
            props.formik.errors.reference_city &&
                props.formik.touched.reference_city && ( <
                    label className = "invalid-feedback" > {
                        props.formik.errors.reference_city
                    } <
                    /label>
                )
        } <
        /div> <
        /S.CupomReferenceContainer>
    ) : null;

    const handleOnBlurCep = async evt => {
        try {
            props.formik.setTouched({ ...props.formik.touched,
                postal_code: true
            });

            const cep = evt.target.value.replace(/\D/g, "");
            if (cep.length === 8) {
                setLoadingCep(true);
                const result = await props.searchAddress(cep);

                if (!result.success) {
                    props.formik.setFieldError(
                        "postal_code",
                        result.error || "Digite um CEP válido"
                    );
                    handleResetCepFields();
                } else {
                    const {
                        address,
                        city,
                        district,
                        state
                    } = result.data;
                    const stateOption = states ? .find(
                        stateStored => stateStored.state === state
                    );

                    props.formik.setFieldValue("address", address);
                    props.formik.setFieldValue("district", district);
                    props.formik.setFieldValue("state", stateOption || {});
                    props.formik.setFieldValue("address_number", "");
                    props.formik.setFieldValue("address_complement", "");
                    if (stateOption) {
                        setSelectedCity(city);
                        loadCidades(stateOption.state);
                        setFoundCEP(true);
                        setFoundDistrict(!!district);
                        setFoundAddress(!!address);
                    }
                }
            }
        } catch (error) {
            handleResetCepFields();
            console.error(error);
            throw error;
        } finally {
            setLoadingCep(false);
        }
    };

    const handleOnChangeCep = evt => {
        if (evt.target.value.length < 9) {
            setFoundCEP(false);
            setFoundAddress(false);
            setFoundDistrict(false);
        }
        const rawValue = evt.target.value.replace(/\D/g, "");
        const limitedValue = rawValue.slice(0, 8);
        let formattedValue = limitedValue;
        if (limitedValue.length > 5) {
            formattedValue = `${limitedValue.slice(0, 5)}-${limitedValue.slice(5)}`;
        }
        props.formik.setFieldValue("postal_code", formattedValue);

        if (props.formik.errors.postal_code) {
            props.formik.setFieldError("postal_code", undefined);
        }
    };

    const handleResetCepFields = () => {
        props.formik.setFieldValue("address", "");
        props.formik.setFieldValue("district", "");
        props.formik.setFieldValue("state", "");
        props.formik.setFieldValue("city", "");
        props.formik.setFieldValue("address_number", "");
        props.formik.setFieldValue("address_complement", "");
    };

    useEffect(() => {
        const REFERENCED_COUPONS = ["POA"];
        const shouldShowCupomReferenceInputs =
            coupomInputFeedback === "SUCCESS" &&
            REFERENCED_COUPONS.includes(props.formik.values.coupom);

        props.setShowCupomReferenceInputs(shouldShowCupomReferenceInputs);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [coupomInputFeedback, props.formik.values.coupom]);

    useEffect(() => {
        if (isCoupomValid) {
            setCoupomInputFeedback("SUCCESS");
        }

        if (hasCoupomError) {
            setCoupomInputFeedback("ERROR");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [coupom]);

    useEffect(() => {
        const cityFound = Array.isArray(cities) ?
            cities.find(cityOption => cityOption.name === selectedCity) :
            undefined;
        const {
            id,
            name
        } = cityFound || {};
        if (id && name) {
            props.formik.setFieldValue("city", {
                id,
                name
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cities, selectedCity]);

    // 🔹 bandeira pelo número digitado (hook)
    const {
        svg
    } = useCreditCardFlagSVG({
        cardNumber: props.formik.values.card_number,
    });

    return ( <
            BlockUi blocking = {
                props.formik.isSubmitting
            } >
            <
            div className = "row no-gutters mb-20" >
            <
            div className = "col-xl-8" >
            <
            div className = "border-radius-only-left"
            style = {
                {
                    backgroundColor: "#fff",
                    padding: "40px",
                    height: "100%"
                }
            } >
            <
            div className = "row" >
            <
            div className = "col-xl-4 d-flex align-items-center mb-10"
            style = {
                {
                    cursor: "pointer"
                }
            }
            onClick = {
                () => props.setStep(0)
            } >
            <
            div >
            <
            div className = {
                `step ${props.step === 0 ? "active" : ""}`
            } >
            <
            span > 1 < /span> <
            /div> <
            /div> <
            div className = "step-info d-flex flex-column" >
            <
            span className = "step-title" > Sobre você < /span> <
            /div> <
            /div> <
            div className = "col-xl-4 d-flex align-items-center mb-10" >
            <
            div >
            <
            div className = {
                `step ${props.step === 1 ? "active" : ""}`
            } >
            <
            span > 2 < /span> <
            /div> <
            /div> <
            div className = "step-info d-flex flex-column" >
            <
            span className = "step-title" >
            Finalizar cadastro {
                " "
            } {
                process.env.NODE_ENV === "development" ?
                    "PagarmeV5 (DEV)" :
                    ""
            } <
            /span> <
            /div> <
            /div> <
            /div> <
            div className = "hr mb-3" > < /div> {
                !coupom.is_valid && ( <
                    >
                    <
                    div className = "blocksPrice mt-6" >
                    <
                    div className = "row" >
                    <
                    div style = {
                        {
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "row",
                        }
                    }
                    className = "centerBlock" >
                    <
                    span style = {
                        {
                            fontSize: "12px",
                            lineHeight: "36px",
                            marginRight: "10px",
                        }
                    } >
                    Anual <
                    /span> <
                    FormControl component = "fieldset"
                    style = {
                        {
                            width: "40px"
                        }
                    } >
                    <
                    FormGroup >
                    <
                    FormControlLabel control = { <
                        Switch
                        checked = {
                            props.periodicity === "monthly"
                        }
                        value = "gilad"
                        onChange = {
                            () => {
                                if (props.periodicity === "monthly") {
                                    props.setPeriodicity("annually");
                                    props.switchAnnual();
                                } else if (props.periodicity === "annually") {
                                    props.setPeriodicity("monthly");
                                    props.switchMonthly();
                                }
                            }
                        }
                        />
                    }
                    /> <
                    /FormGroup> <
                    /FormControl> <
                    span style = {
                        {
                            fontSize: "12px",
                            lineHeight: "36px",
                            marginLeft: "10px",
                        }
                    } >
                    Mensal <
                    /span> <
                    /div> <
                    /div> <
                    div className = "row justify-content-center" > {
                        props.plans
                        .filter(plan => plan.type === props.periodicity)
                        .map((plan, index) => ( <
                            div className = {
                                "col-sm-3 mb-4 mr-5 ml-5 " +
                                (props.formik.values.plan.id === plan.id ?
                                    "active" :
                                    "")
                            }
                            onClick = {
                                () =>
                                props.formik.setFieldValue("plan", plan)
                            }
                            key = {
                                index
                            } >
                            {
                                plan.type === "annually" && ( <
                                    span className = "badge badge-primary" >
                                    20 % < br / >
                                    OFF <
                                    /span>
                                )
                            } <
                            span > {
                                plan.name
                            } < /span> <
                            h3 >
                            R$ {
                                plan.amount
                            } <
                            small className = "month" >
                            /{plan.type === "monthly" ? "mensal" : "anual"} <
                            /small> <
                            /h3> <
                            /div>
                        ))
                    } <
                    /div> <
                    /div> <
                    />
                )
            }

            {
                coupom.is_valid && ( <
                    >
                    <
                    p className = "font-size-h3 preto-cabecalho font-weight-bolder mb-0"
                    style = {
                        {
                            opacity: 0.8
                        }
                    } >
                    {
                        coupom.description
                    } <
                    /p> <
                    p className = "font-size-sm preto-cabecalho mb-5"
                    style = {
                        {
                            opacity: 0.8
                        }
                    } >
                    {
                        coupom.subtitle
                    } <
                    /p> <
                    div className = "blocksPrice mt-6" >
                    <
                    div className = "row" >
                    <
                    div className = "col-sm-3 mb-4 mr-5 ml-5 active"
                    onClick = {
                        () => props.formik.setFieldValue("plan", coupom)
                    } >
                    <
                    span > < /span> <
                    h3 className = "cut" > R$ {
                        coupom.old_amount
                    } < /h3> <
                    h3 >
                    R$ {
                        coupom.amount
                    } <
                    small className = "month" > {
                        getCoupomPeriodicity(coupom.periodicity)
                    } <
                    /small> <
                    /h3> <
                    /div> <
                    /div> <
                    /div> <
                    />
                )
            } {
                hasCompraGarantida && ( <
                    div className = "row my-5" >
                    <
                    S.CoupomWrapper >
                    <
                    label className = "form-label" >
                    Compra garantida: cancele sem burocracias em até sete dias com reembolso integral do valor pago <
                        /label> <
                        /S.CoupomWrapper> <
                        /div>
                )
            } <
            div className = "hr mb-5" > < /div> <
            div className = "row my-5" >
            <
            S.CoupomWrapper >
            <
            label className = "form-label" >
            Se possuir um cupom de convênio, digite abaixo <
            /label> <
            div className = "d-flex" >
            <
            S.CoupomInput type = "text"
            name = "coupom"
            feedback = {
                coupomInputFeedback
            }
            value = {
                props.formik.values.coupom
            }
            onChange = {
                handleChangeCupom
            }
            /> <
            S.CoupomBtn className = "btn btn-primary"
            onClick = {
                e => handleCoupomApply(e)
            } >
            Aplicar <
            /S.CoupomBtn> <
            /div> {
                coupomInputFeedback ? ( <
                    S.CoupomInputMessage color = {
                        `${getCoupomMessageColor(coupom.is_valid)}`
                    } >
                    {
                        getCoupomInputMessage(coupom.invalid_reason)
                    } <
                    /S.CoupomInputMessage>
                ) : null
            } {
                cupomReferenceInputs
            } <
            /S.CoupomWrapper> <
            /div>

            {
                props.disabledCreditCard &&
                    Object.keys(coupom).length !== 0 &&
                    coupom.is_valid ? ( <
                        > < />
                    ) : ( <
                        >
                        <
                        div className = "row mb-10" >
                        <
                        div className = "col-xl-12" >
                        <
                        label >
                        Nome impresso no cartão {
                            " "
                        } <
                        span className = "text-danger" > Obrigatório & nbsp;* < /span> <
                        /label> <
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
                        /div> <
                        div className = "row mb-10" >
                        <
                        div className = "col-xl-6 mb-4 mb-xl-0" >
                        <
                        label >
                        Número do cartão < span className = "text-danger" > * < /span> <
                            /label> <
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
                        div className = "col-xl-3 col-md-6 mb-4 mb-xl-0" >
                        <
                        label style = {
                            {
                                whiteSpace: "nowrap"
                            }
                        } >
                        Vencimento(MM / AA) < span className = "text-danger" > * < /span> <
                        /label> <
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
                                    label className = "text-danger" > {
                                        props.formik.errors.card_expiration
                                    } <
                                    /label>
                                )
                        } <
                        /div>

                        <
                        div className = "col-xl-3 col-md-6" >
                        <
                        label >
                        CVV < span className = "text-danger" > * < /span> <
                        /label> <
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
                        /div> <
                        />
                    )
            }

            <
            div className = "row mb-10" >
            <
            div className = "col-xl-6 mb-4 mb-xl-0" >
            <
            label >
            CPF < span className = "text-danger" > & nbsp;* < /span> <
            /label> <
            input type = "text"
            name = "document_number"
            className = {
                "form-control " +
                (props.formik.errors.document_number &&
                    props.formik.touched.document_number ?
                    "is-invalid" :
                    "")
            }
            value = {
                props.formik.values.document_number
            }
            onChange = {
                evt =>
                props.formik.setFieldValue(
                    "document_number",
                    cpfMask(evt.target.value)
                )
            }
            /> {
                props.formik.errors.document_number &&
                    props.formik.touched.document_number && ( <
                        label className = "invalid-feedback" > {
                            props.formik.errors.document_number
                        } <
                        /label>
                    )
            } <
            /div> <
            div className = "col-xl-6" >
            <
            label >
            Telefone < span className = "text-danger" > & nbsp;* < /span> <
            /label> <
            input type = "text"
            name = "phone"
            className = {
                "form-control " +
                (props.formik.errors.phone && props.formik.touched.phone ?
                    "is-invalid" :
                    "")
            }
            value = {
                props.formik.values.phone
            }
            onChange = {
                evt =>
                props.formik.setFieldValue(
                    "phone",
                    phoneMask(evt.target.value)
                )
            }
            /> {
                props.formik.errors.phone && props.formik.touched.phone && ( <
                    label className = "invalid-feedback" > {
                        props.formik.errors.phone
                    } <
                    /label>
                )
            } <
            /div> <
            /div>

            { /* Postal_code && State*/ } <
            div className = "row mb-10" >
            <
            div className = "col-xl-6 mb-4 mb-xl-0" >
            <
            label >
            CEP < span className = "text-danger" > & nbsp;* < /span> <
            /label> <
            div className = "position-relative" >
            <
            input type = "text"
            name = "postal_code"
            className = {
                "form-control " +
                (props.formik.errors.postal_code &&
                    props.formik.touched.postal_code ?
                    "is-invalid" :
                    "")
            }
            value = {
                props.formik.values.postal_code
            }
            onChange = {
                handleOnChangeCep
            }
            onBlur = {
                isCepAutofillEnable ? handleOnBlurCep : undefined
            }
            disabled = {
                loadingCep
            }
            /> {
                loadingCep && ( <
                    div style = {
                        {
                            position: "absolute",
                            right: "15px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            zIndex: 2,
                        }
                    } >
                    <
                    span className = "spinner-border spinner-border-sm text-primary"
                    role = "status"
                    aria - hidden = "true" >
                    < /span> <
                    /div>
                )
            } {
                props.formik.errors.postal_code &&
                    props.formik.touched.postal_code && ( <
                        label className = "invalid-feedback" > {
                            props.formik.errors.postal_code
                        } <
                        /label>
                    )
            } <
            /div> <
            /div> <
            div className = "col-xl-6" >
            <
            label >
            Estado < span className = "text-danger" > & nbsp;* < /span> <
            /label> <
            Select name = "state"
            options = {
                states
            }
            className = {
                props.formik.errors.state && props.formik.touched.state ?
                "is-invalid" :
                    ""
            }
            onChange = {
                evt => {
                    props.formik.setFieldValue("state", evt);
                    props.formik.setFieldValue("city", "");
                    loadCidades(evt.state);
                }
            }
            value = {
                props.formik.values.state
            }
            placeholder = "Selecione..."
            getOptionLabel = {
                option => option.name
            }
            getOptionValue = {
                option => option.id
            }
            noOptionsMessage = {
                () => < span > Sem resultados. < /span>}
                isDisabled = {
                    loadingCep || foundCEP || loadingCities
                }
                theme = {
                    customSelectStyle
                }
                /> {
                    props.formik.errors.state && props.formik.values.state && ( <
                        label className = "invalid-feedback" > {
                            props.formik.errors.state
                        } <
                        /label>
                    )
                } <
                /div> <
                /div>

                { /* District && city */ } <
                div className = "row mb-10" >
                <
                div className = "col-xl-6" >
                <
                label >
                Cidade < span className = "text-danger" > & nbsp;* < /span> <
                /label> <
                Select
                name = "city"
                options = {
                    cities
                }
                className = {
                    props.formik.errors.city && props.formik.touched.city ?
                    "is-invalid" :
                        ""
                }
                onChange = {
                    evt => props.formik.setFieldValue("city", evt)
                }
                value = {
                    props.formik.values.city
                }
                placeholder = {
                    props.formik.values.state ? "Selecione..." : "Selecione o estado primeiro"
                }
                getOptionLabel = {
                    option => option.name
                }
                getOptionValue = {
                    option => option.id
                }
                noOptionsMessage = {
                    () => < span > Sem resultados. < /span>}
                    isDisabled = {
                        loadingCep ||
                        loadingCities ||
                        !props.formik.values.state ||
                        foundCEP
                    }
                    theme = {
                        customSelectStyle
                    }
                    /> {
                        loadingCities && ( <
                            div style = {
                                {
                                    position: "absolute",
                                    right: "55px",
                                    top: "67%",
                                    transform: "translateY(-50%)",
                                    zIndex: 2,
                                }
                            } >
                            <
                            span className = "spinner-border spinner-border-sm text-primary"
                            role = "status"
                            aria - hidden = "true" >
                            < /span> <
                            /div>
                        )
                    } {
                        citiesError && !loadingCep && ( <
                            label className = "text-danger" > {
                                citiesError
                            } < /label>
                        )
                    } <
                    /div> <
                    div className = "col-xl-6 mb-4 mb-xl-0" >
                    <
                    label >
                    Bairro < span className = "text-danger" > & nbsp;* < /span> <
                    /label> <
                    input
                    type = "text"
                    name = "district"
                    className = {
                        "form-control " +
                        (props.formik.errors.district &&
                            props.formik.touched.district ?
                            "is-invalid" :
                            "")
                    }
                    value = {
                        props.formik.values.district
                    }
                    disabled = {
                        loadingCep || foundDistrict
                    }
                    onChange = {
                        props.formik.handleChange
                    }
                    maxLength = {
                        40
                    }
                    /> {
                        props.formik.errors.district &&
                            props.formik.touched.district && ( <
                                label className = "invalid-feedback" > {
                                    props.formik.errors.district
                                } <
                                /label>
                            )
                    } <
                    /div> <
                    /div>

                    { /*Address information*/ } <
                    div className = "row mb-10" >
                    <
                    div className = "col-xl-6 mb-4 mb-xl-0" >
                    <
                    label >
                    Endereço < span className = "text-danger" > & nbsp;* < /span> <
                    /label> <
                    input
                    type = "text"
                    name = "address"
                    className = {
                        "form-control " +
                        (props.formik.errors.address && props.formik.touched.address ?
                            "is-invalid" :
                            "")
                    }
                    value = {
                        props.formik.values.address
                    }
                    disabled = {
                        loadingCep || foundAddress
                    }
                    onChange = {
                        props.formik.handleChange
                    }
                    maxLength = {
                        196
                    }
                    /> {
                        props.formik.errors.address &&
                            props.formik.touched.address && ( <
                                label className = "invalid-feedback" > {
                                    props.formik.errors.address
                                } <
                                /label>
                            )
                    } <
                    /div> <
                    div className = "col-xl-3 mb-4 mb-xl-0" >
                    <
                    label >
                    Número < span className = "text-danger" > & nbsp;* < /span> <
                    /label> <
                    input
                    type = "text"
                    name = "address_number"
                    className = {
                        "form-control " +
                        (props.formik.errors.address_number &&
                            props.formik.touched.address_number ?
                            "is-invalid" :
                            "")
                    }
                    value = {
                        props.formik.values.address_number
                    }
                    onChange = {
                        props.formik.handleChange
                    }
                    maxLength = {
                        10
                    }
                    /> {
                        props.formik.errors.address_number &&
                            props.formik.touched.address_number && ( <
                                label className = "invalid-feedback" > {
                                    props.formik.errors.address_number
                                } <
                                /label>
                            )
                    } <
                    /div> <
                    div className = "col-xl-3" >
                    <
                    label > Complemento < /label> <
                    input
                    type = "text"
                    name = "address_complement"
                    className = {
                        "form-control " +
                        (props.formik.errors.address_complement &&
                            props.formik.touched.address_complement ?
                            "is-invalid" :
                            "")
                    }
                    value = {
                        props.formik.values.address_complement
                    }
                    onChange = {
                        props.formik.handleChange
                    }
                    maxLength = {
                        128
                    }
                    /> {
                        props.formik.errors.address_complement &&
                            props.formik.touched.address_complement && ( <
                                label className = "invalid-feedback" > {
                                    props.formik.errors.address_complement
                                } <
                                /label>
                            )
                    } <
                    /div> <
                    /div>

                    <
                    ReCaptchaProvider
                    siteKeyV2 = {
                        process.env.REACT_APP_RECAPTCHA_V2_SITEKEY
                    }
                    siteKeyV3 = {
                        process.env.REACT_APP_RECAPTCHA_V3_SITEKEY
                    } >
                    {!props.enableRecaptchaV2 && ( <
                            ReCaptchaV3 callback = {
                                props.recaptchaV3HandleChange
                            }
                            action = "login" /
                            >
                        )
                    } {
                        props.enableRecaptchaV2 && ( <
                            ReCaptchaV2 callback = {
                                props.recaptchaV2HandleChange
                            }
                            className = "my-6" /
                            >
                        )
                    } <
                    /ReCaptchaProvider>

                    <
                    div className = "row mb-5" >
                    <
                    div className = "col-xl-12" >
                    <
                    button
                    type = "button"
                    name = "submit_button"
                    className = "btn btn-primary"
                    style = {
                        {
                            width: "100%",
                            height: "50px"
                        }
                    }
                    onClick = {
                        () => submitHandleClick()
                    } >
                    {
                        validateButtonSubmit()
                    } <
                    /button> <
                    /div> <
                    /div> <
                    div className = "row" >
                    <
                    div className = "col-xl-12" > {
                        (!coupom ||
                            !coupom.is_valid ||
                            (coupom.is_valid &&
                                coupom.trial_days > 0 &&
                                coupom.upfront_credit_card_required)) && ( <
                            p className = "preto-cabecalho font-size-sm"
                            style = {
                                {
                                    opacity: 0.45
                                }
                            } >
                            Cobraremos o cartão informado & nbsp; {
                                hasCompraGarantida ||
                                    (coupom.is_valid && coupom.trial_days !== 0) ? ( <
                                        span className = "font-weight-bolder" >
                                        somente se não houver cancelamento da assinatura durante os & nbsp; {
                                            coupom && coupom.trial_days ?
                                                coupom.trial_days :
                                                defaultTrialDays
                                        } {
                                            " "
                                        }
                                        dias de teste. <
                                        /span>
                                    ) : ( <
                                        span className = "font-weight-bolder" >
                                        após a confirmação do seu e - mail. <
                                            /span>
                                    )
                            } &
                            nbsp; Veja ao lado porque pedimos o cartão. <
                            /p>
                        )
                    } <
                    p
                    className = "azul-cabecalho font-size-sm"
                    style = {
                        {
                            opacity: 0.45
                        }
                    } >
                    Ao clicar no botão acima,
                    você concorda com nossos & nbsp; <
                    a
                    href = "https://jusfy.com.br/client/assets/termos.pdf"
                    target = "_BLANK"
                    rel = "noreferrer" >
                    <
                    span className = "font-weight-bolder" > Termos de Uso < /span> <
                    /a>,
                    {
                        " "
                    } <
                    a
                    href = "https://jusfy.com.br/client/assets/politica.pdf"
                    target = "_BLANK"
                    rel = "noreferrer" >
                    <
                    span className = "font-weight-bolder" >
                    Política de Privacidade <
                    /span> <
                    /a> &
                    nbsp;e & nbsp; <
                    a
                    href = "https://jusfy.com.br/client/assets/politica-de-pagamento.pdf"
                    target = "_BLANK"
                    rel = "noreferrer" >
                    <
                    span className = "font-weight-bolder" >
                    Política de Pagamento <
                    /span> <
                    /a> <
                    /p> <
                    /div> <
                    /div> <
                    /div> <
                    /div> <
                    RightInfo
                    formik = {
                        props.formik
                    }
                    disabledCreditCard = {
                        props.disabledCreditCard
                    }
                    /> <
                    /div> <
                    /BlockUi>
                );
            }