import React from "react";
import SVG from "react-inlinesvg";

import Button from "../../../../../../../components/flat/ui/Button";
import {
    toAbsoluteUrl
} from "../../../../../../../../_metronic/_helpers";

import * as S from "../../CardContent.styles";
import {
    WrapperButtons
} from "../../CardContent.styles";
import {
    ButtonExample
} from "../../../../../components/Button/Button";
import {
    useCardActionBase
} from "./useCardActionBase";
import {
    QUERIES_ENUM
} from "../../../ModalContent/QueryFormModal/constants";

const CardActionBase = ({
    unavailable,
    onClick,
    queryOption
}) => {
    const {
        openExamplePdf
    } = useCardActionBase(queryOption);
    return ( <
        S.InfoWrapper unavailable = {
            unavailable
        } > {
            unavailable && ( <
                S.CardUnavailable >
                <
                h3 >
                <
                SVG src = {
                    toAbsoluteUrl("/media/warning.svg")
                }
                />
                Momentaneamente indisponível <
                /h3> <
                p >
                Nosso fornecedor está fora do ar, estamos trabalhando para
                normalização. <
                /p> <
                /S.CardUnavailable>
            )
        }

        {
            !unavailable && ( <
                S.WrapperCardAction >
                <
                S.CreditQunatityCard >
                <
                S.Icon src = {
                    toAbsoluteUrl("/media/jusfinderuniversal/credit-dolar.svg")
                }
                /> {
                    queryOption.universal_price
                } <
                /S.CreditQunatityCard>

                <
                WrapperButtons > {
                    queryOption.identification !== QUERIES_ENUM.LAWSUIT && ( <
                        ButtonExample title = {
                            "Ver exemplo"
                        }
                        background = {
                            "transparent"
                        }
                        padding = {
                            "4px 8px"
                        }
                        border = {
                            "none"
                        }
                        fontWeight = {
                            700
                        }
                        onClick = {
                            openExamplePdf
                        }
                        />
                    )
                }

                <
                Button color = "#01AB7D"
                backgroundColor = "transparent"
                height = "40px"
                padding = "0px 24px"
                border = "1px solid #01AB7D"
                borderRadius = "5px"
                onClick = {
                    onClick
                } >
                <
                span > Consultar < /span> <
                /Button> <
                /WrapperButtons> <
                /S.WrapperCardAction>
            )
        } <
        /S.InfoWrapper>
    );
};

export default CardActionBase;