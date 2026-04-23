import * as S from "./Select.styles";

const SelectInput = ({
    label,
    children,
    value,
    onChange,
    ...config
}) => {
    return ( <
        S.Container >
        <
        label > {
            label
        } < /label> <
        S.CustomSelect value = {
            value
        }
        onChange = {
            onChange
        } { ...config
        } > {
            children
        } <
        /S.CustomSelect> <
        /S.Container>
    );
};

export default SelectInput;