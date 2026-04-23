import {
    useContext,
    useEffect,
    useState
} from "react";
import useProfileSurveyForm from "../../hooks/useProfileSurveyForm";
import Select from "react-select";
import {
    customSelectStyle
} from "../../../../../_metronic/_partials/dropdowns/ReactSelectCustomStyle";
import * as S from "./Forms.styles";
import axios from "axios";
import {
    NavigationContext
} from "../../context/navigation/Provider";
import {
    FILTER_NAMES
} from "../../context/navigation/state/constants";
import {
    uuid4
} from "@sentry/utils";

const LawAreasForm = ({
    options
}) => {
    const {
        form
    } = useProfileSurveyForm();

    const {
        buttonDisabled,
        setButtonDisabled
    } = useContext(NavigationContext);

    useEffect(() => {
        if (form.values.lawAreas ? .length) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [form.values.lawAreas]);

    useEffect(() => {
        FILTER_NAMES.forEach(filterName => {
            if (!options.areasOfLaw.some(area => area.name === filterName)) {
                const areasToPush = {
                    name: filterName,
                    id: uuid4(),
                };
                options.areasOfLaw.push(areasToPush);
            }
        });
    }, []);

    const areasOfLawFiltered = options.areasOfLaw
        .filter(item => FILTER_NAMES.includes(item.name))
        .sort((a, b) => a.name.localeCompare(b.name));

    return ( <
        S.Container >
        <
        S.Title required > Com quais áreas do Direito você atua ? < /S.Title> <
            S.SelectWrapper >
            <
            S.Label > Selecionar : < /S.Label> <
            Select
        name = "law_area"
        options = {
            areasOfLawFiltered
        }
        placeholder = "Escolha uma ou mais áreas do direito"
        onChange = {
            value => form.setFieldValue("lawAreas", value)
        }
        getOptionLabel = {
            option => option.name
        }
        getOptionValue = {
            option => option.id
        }
        isClearable value = {
            form.values.lawAreas
        }
        isMulti hideSelectedOptions theme = {
            customSelectStyle
        }
        /> <
        /S.SelectWrapper> <
        /S.Container>
    );
};

export default LawAreasForm;