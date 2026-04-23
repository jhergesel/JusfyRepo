import {
    useContext
} from "react";
import {
    Credits
} from "../Credits/Credits";
import {
    SwitchTabs
} from "../Switch/Switch";
import {
    SubHeaderWrapper
} from "./subheader.styles";
import {
    jusfinderContext
} from "../../context";

export const SubHeader = ({
    availableCredits
}) => {
    const {
        page
    } = useContext(jusfinderContext);

    return ( <
        SubHeaderWrapper isVisible = {
            page === "query" || page === "history"
        } >
        <
        SwitchTabs / >
        <
        Credits availableCredits = {
            availableCredits
        }
        /> <
        /SubHeaderWrapper>
    );
};