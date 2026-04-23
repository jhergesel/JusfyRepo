import * as S from "./InputText.styles";

const InputText = ({
    label,
    value,
    onChange,
    padding,
    borderColor,
    width,
    ...config
}) => {
    return ( <
        S.Container { ...{
                width
            }
        } >
        <
        label > {
            label
        } < /label> <
        S.InputContainer { ...{
                padding,
                borderColor
            }
        } >
        <
        S.Input type = "text" { ...config
        } { ...{
                onChange,
                value,
                padding
            }
        }
        /> <
        /S.InputContainer> <
        /S.Container>
    );
};

export default InputText;