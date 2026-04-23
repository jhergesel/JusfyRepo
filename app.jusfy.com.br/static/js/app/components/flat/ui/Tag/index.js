import * as S from "./Tag.styles";

const Tag = ({
    text,
    color = "#535353",
    backgroundColor = "rgba(232, 235, 235, 0.8)",
    padding = "4px 12px",
    width = "fit-content",
    height = "auto",
    fontSize = "13px",
    fontWeight = "400",
    borderRadius = "4px",
    border = "none",
    borderImage = "none",
    margin = "0",
    children,
}) => {
    return ( <
        S.Container { ...{
                color,
                backgroundColor,
                padding,
                fontSize,
                fontWeight,
                borderRadius,
                border,
                borderImage,
                width,
                height,
                margin
            }
        } > {
            children
        } {
            text
        } <
        /S.Container>
    );
};

export default Tag;