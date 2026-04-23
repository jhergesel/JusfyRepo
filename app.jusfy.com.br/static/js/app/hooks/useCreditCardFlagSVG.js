import valid from "card-validator";
import React from "react";
import {
    CREDIT_CARD_FLAGS
} from "../components/flat/ui/Forms/SelectCardForm/constants";

const useCreditCardFlagSVG = ({
    cardNumber
}) => {
    const [svg, setSvg] = React.useState(CREDIT_CARD_FLAGS.get("default"));

    React.useEffect(() => {
        const cleanNumber = String(cardNumber ? ? "").replace(/\D/g, "");
        if (cleanNumber.length < 6) {
            setSvg(CREDIT_CARD_FLAGS.get("default"));
            return;
        }

        const {
            card
        } = valid.number(cleanNumber);
        const brand = card ? .type ? ? "default";
        setSvg(CREDIT_CARD_FLAGS.get(brand) || CREDIT_CARD_FLAGS.get("default"));
    }, [cardNumber]);

    return {
        svg
    };
};

export default useCreditCardFlagSVG;