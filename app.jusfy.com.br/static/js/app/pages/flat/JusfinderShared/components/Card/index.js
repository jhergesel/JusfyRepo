import * as S from "./styles";

const Card = ({
    children,
    sWidth,
    sHeight,
    gap,
    sPadding
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
        }
        sPadding = {
            sPadding
        } > {
            children
        } <
        /S.Card>
    );
};

export {
    Card
};