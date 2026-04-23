import * as S from "./InputNumber.styles";
import {
    toAbsoluteUrl
} from "../../../../../../_metronic/_helpers";

const InputNumber = ({
    label,
    value,
    onChange,
    onIncrease,
    onDecrease,
    ...config
}) => {
    return ( <
        S.Container >
        <
        label > {
            label
        } < /label> <
        S.InputContainer >
        <
        S.ActionInput onClick = {
            onDecrease
        }
        src = {
            toAbsoluteUrl("/media/flat/less.svg")
        }
        /> <
        S.Input type = "number" { ...config
        } { ...{
                onChange,
                value
            }
        }
        /> <
        S.ActionInput onClick = {
            onIncrease
        }
        src = {
            toAbsoluteUrl("/media/flat/more.svg")
        }
        /> <
        /S.InputContainer> <
        /S.Container>
    );
};

export default InputNumber;