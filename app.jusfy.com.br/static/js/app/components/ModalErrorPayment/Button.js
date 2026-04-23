import * as S from "./styles";

export const Button = ({
    children,
    onClick,
    ...props
}) => {
    return ( <
        S.ButtonModal onClick = {
            onClick
        } { ...props
        } > {
            children
        } <
        /S.ButtonModal>
    );
};