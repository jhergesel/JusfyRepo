import React from "react";
import CurrencyInput from "../../../../components/CurrencyInput";
import NavigationButtons from "../NavigationButtons";

export default function StepTaxaJuros(props) {
    return ( <
        >
        <
        h2 > Valor do Empréstimo < /h2> <
            CurrencyInput
        name = "contract_amount"
        className = "form-control"
        value = {
            props.formik.values.contract_amount
        }
        prefix = "R$ "
        decimalSeparator = ","
        selectAllOnFocus = {
            true
        }
        thousandSeparator = "."
        onChangeEvent = {
            (ev, maskedvalue, floatvalue) =>
            props.formik.setFieldValue("contract_amount", floatvalue)
        }
        /> <
        NavigationButtons formik = {
            props.formik
        }
        setStep = {
            props.setStep
        }
        step = {
            props.step
        }
        isValidated = {
            props.formik.values.contract_amount != ""
        }
        /> <
        />
    );
}