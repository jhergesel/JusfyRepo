import SVG from "react-inlinesvg";
import {
    toAbsoluteUrl
} from "../../../../../../_metronic/_helpers";
import {
    CREDIT_CARD_FLAGS
} from "../constants";

const CreditCardFlagIcon = ({
    flag
}) => {
    const creditCardFlag =
        CREDIT_CARD_FLAGS.get(flag) || CREDIT_CARD_FLAGS.get("default");

    return <SVG src = {
        toAbsoluteUrl(creditCardFlag)
    }
    width = "40"
    height = "28" / > ;
};

export default CreditCardFlagIcon;