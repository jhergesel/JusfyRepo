import * as S from "./Card.styles";

const Card = ({
    width = "full",
    height = "height",
    padding = "0",
    border,
    position = "relative",
    overflow = "hidden",
    borderRadius,
    grow = "0",
    children,
}) => {
    return ( <
        S.CardCustom { ...{
                width,
                height,
                padding,
                border,
                borderRadius,
                grow,
                overflow,
                position,
            }
        } >
        {
            children
        } <
        /S.CardCustom>
    );
};

export default Card;