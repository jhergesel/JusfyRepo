import React, {
    useState
} from "react";
import * as S from "./Button.styles";

const ButtonContainer = ({
    variant,
    children,
    type = "button",
    color = "white",
    backgroundColor = "#01AB7D",
    padding = "0px",
    width = "fit-content",
    height = 'auto',
    border = "none",
    borderRadius = "0",
    onClick = () => {},
    hoverColor = color,
    hoverBackgroundColor = backgroundColor,
    alignSelf = "flex-start",
    ...props
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const getChildrenWithProps = () => {
        if (React.isValidElement(children)) {
            return React.cloneElement(children, {
                isHovered
            });
        }

        return children;
    }

    return ( <
        S.ButtonCustom { ...{
                Scolor: isHovered && hoverColor ? hoverColor : color,
                SbackgroundColor: isHovered && hoverBackgroundColor ? hoverBackgroundColor : backgroundColor,
                Spadding: padding,
                Swidth: width,
                height,
                Sborder: border,
                SborderRadius: borderRadius,
                onClick,
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                alignSelf,
                ...props
            }
        }
        variant = {
            variant
        }
        isHovered = {
            isHovered
        }
        type = {
            type
        } >
        {
            getChildrenWithProps()
        } <
        /S.ButtonCustom>
    );
};

export default ButtonContainer;