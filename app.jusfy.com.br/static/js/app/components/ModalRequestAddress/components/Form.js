import React, {
    useEffect,
    useState
} from "react";
import {
    useSelector
} from "react-redux";
import {
    BlockUi
} from "../../../components/BlockUI";
import Select from "react-select";
import {
    phoneMask
} from "../../../../_metronic/_helpers/MasksHelper";
import {
    customSelectStyle
} from "../../../../_metronic/_partials/dropdowns/ReactSelectCustomStyle";
import RightInfo from "../../../pages/Cadastro/components/RightInfo/RightInfo";
import {
    STATES
} from "../../../pages/Cadastro/Steps/Step2/constants";
import {
    tracking
} from "../../../services/tracking";

const Form = props => {
        const states = STATES;
        const user = useSelector(state => state.auth.user);
        const [cities, setCities] = useState([]);
        const citiesError = useSelector(state => state.app.cities_error || false);
        const [loadingCep, setLoadingCep] = useState(false);
        const [loadingCities, setLoadingCities] = useState(false);
        const [selectedCity, setSelectedCity] = useState("");
        const [foundCEP, setFoundCEP] = useState(false);
        const [foundDistrict, setFoundDistrict] = useState(false);
        const [foundAddress, setFoundAddress] = useState(false);

        const getRequiredFields = () => {
            return ['phone', 'state', 'city', 'district', 'postal_code', 'address', 'address_number'];
        };

        useEffect(() => {
            if (user) {
                const requiredFields = getRequiredFields();
                tracking.userProfile.trackUpdateStarted(user, requiredFields);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        const analyzeFormFields = (values) => {
            const requiredFields = getRequiredFields();
            const formFieldsFilled = [];
            const formFieldsMissing = [];

            requiredFields.forEach(field => {
                if (values[field] && values[field] !== "" && values[field] !== null) {
                    if (typeof values[field] === 'object' && values[field].id) {
                        formFieldsFilled.push(field);
                    } else if (typeof values[field] !== 'object') {
                        formFieldsFilled.push(field);
                    } else {
                        formFieldsMissing.push(field);
                    }
                } else {
                    formFieldsMissing.push(field);
                }
            });

            return {
                formFieldsFilled,
                formFieldsMissing
            };
        };

        const handleFormSubmit = () => {
            if (user && props.formik.values) {
                const {
                    formFieldsFilled,
                    formFieldsMissing
                } = analyzeFormFields(props.formik.values);
                tracking.userProfile.trackUpdateSubmitted(user, formFieldsFilled, formFieldsMissing);
            }

            const requiredFields = getRequiredFields();
            const validationErrors = [];
            const values = props.formik.values;

            requiredFields.forEach(field => {
                switch (field) {
                    case 'phone':
                        if (!values.phone || values.phone.trim() === '') {
                            validationErrors.push(`${field}: O campo telefone é obrigatório!`);
                        } else {
                            // Verificar formato do telefone
                            const phoneRegex = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/;
                            if (!phoneRegex.test(values.phone)) {
                                validationErrors.push(`${field}: Telefone inválido.`);
                            }
                        }
                        break;

                    case 'state':
                        if (!values.state || !values.state.state) {
                            validationErrors.push(`${field}: O campo estado é obrigatório!`);
                        }
                        break;

                    case 'city':
                        if (!values.city || !values.city.id) {
                            validationErrors.push(`${field}: O campo cidade é obrigatório!`);
                        }
                        break;

                    case 'district':
                        if (!values.district || values.district.trim() === '') {
                            validationErrors.push(`${field}: O campo bairro é obrigatório!`);
                        }
                        break;

                    case 'postal_code':
                        if (!values.postal_code || values.postal_code.trim() === '') {
                            validationErrors.push(`${field}: O campo CEP é obrigatório!`);
                        }
                        break;

                    case 'address':
                        if (!values.address || values.address.trim() === '') {
                            validationErrors.push(`${field}: O campo endereço é obrigatório!`);
                        }
                        break;

                    case 'address_number':
                        if (!values.address_number || values.address_number.trim() === '') {
                            validationErrors.push(`${field}: O campo número é obrigatório!`);
                        }
                        break;

                    default:
                        break;
                }
            });

            if (validationErrors.length > 0) {
                const errorMessage = `[${validationErrors.join(', ')}]`;
                tracking.userProfile.trackUpdateFailed(user, "form_validation_error", errorMessage);
            }

            props.formik.handleSubmit();
        };

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
                        props.formik.setFieldValue("state", stateOption || null);
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
            props.formik.setFieldValue("state", null);
            props.formik.setFieldValue("city", null);
            props.formik.setFieldValue("address_number", "");
            props.formik.setFieldValue("address_complement", "");
        };

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

        return ( <
                BlockUi blocking = {
                    props.formik.isSubmitting
                } >
                <
                div className = "d-flex flex-row no-gutters" >
                <
                div className = "pt-12 pl-12 pb-12 mr-10" >
                <
                h2 > Valide as informações abaixo < /h2> <
                p >
                Para que você
                continue usando a Jusfy sem problemas, precisamos que
                inclua ou confirme as informações abaixo.Essa confirmação nos ajuda a melhorar sua experiência na plataforma. <
                /p> <
                div className = "border-top mb-7 mt-5"
                style = {
                    {
                        borderColor: "#E7E8EC"
                    }
                }
                /> <
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
                    handleOnBlurCep
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
                        props.formik.setFieldValue("city", null);
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
                    /div> { /* District && city */ } <
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
                            !props.formik.values.state ? .id ||
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
                            (props.formik.errors.district && props.formik.touched.district ?
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
                            200
                        }
                        /> {
                            props.formik.errors.address && props.formik.touched.address && ( <
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
                            6
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
                        /div> <
                        div className = "row mb-10" >
                        <
                        div className = "col-12" >
                        <
                        label >
                        Telefone < span className = "text-danger" > & nbsp;* < /span> <
                        /label> <
                        input
                        type = "text"
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
                        maxLength = {
                            15
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
                        /div> <
                        button className = "btn btn-primary"
                        style = {
                            {
                                width: "100%",
                                fontSize: "16px",
                                marginTop: "8px"
                            }
                        }
                        onClick = {
                            handleFormSubmit
                        }
                        disabled = {
                            props.formik.isSubmitting
                        } >
                        CONFIRMAR INFORMAÇÕES <
                        /button> <
                        /div> <
                        RightInfo type = {
                            "paymentLink"
                        }
                        style = {
                            {
                                minHeight: "auto"
                            }
                        }
                        /> <
                        /div> <
                        /BlockUi>
                    );
                };

                export default Form;