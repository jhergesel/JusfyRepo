import * as S from "./styles";

const Card = ({
    children,
    sWidth,
    sHeight,
    gap
}) => {
    return ( <
        S.Card sWidth = {
            sWidth
        }
        sHeight = {
            sHeight
        }
        gap = {
            gap
        } > {
            children
        } <
        /S.Card>
    );
};

export {
    Card
};