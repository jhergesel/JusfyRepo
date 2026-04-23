import * as S from "./CheckboxOption.styles";

const CheckboxOptions = ({
    value,
    onClick,
    isSelected,
    isSquare
}) => {
    return ( <
        S.Container selected = {
            isSelected
        }
        onClick = {
            onClick
        } >
        <
        S.Label selected = {
            isSelected
        }
        isSquare = {
            isSquare
        }
        /> <
        S.Text > {
            value
        } < /S.Text> <
        /S.Container>
    );
};

export default CheckboxOptions;