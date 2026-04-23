import React from "react";
import SVG from "react-inlinesvg";
import Tag from "../../../../../../../components/flat/ui/Tag";
import Button from "../../../../../../../components/flat/ui/Button";
import {
    toAbsoluteUrl
} from "../../../../../../../../_metronic/_helpers";

import * as S from "../../CardContent.styles";
import {
    pluralize
} from "../../../../utils/utils.jusfinder";

const CardActionBase = ({
    queryOption,
    hasUnlimitedCredits,
    unavailable
}) => {
    const {
        description,
        identification,
        credit
    } = queryOption;

    return ( <
        S.InfoWrapper unavailable = {
            unavailable
        } >
        <
        p > {
            description
        } < /p>

        {
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
            !unavailable && hasUnlimitedCredits ? ( <
                Tag text = {
                    "Créditos ilimitados"
                }
                />
            ) : credit ? ( <
                Tag text = {
                    `${pluralize("crédito", credit, "créditos")} disponível`
                }
                />
            ) : ( <
                Tag color = "#D71D1D"
                backgroundColor = "rgba(255, 229, 229, 0.8)"
                text = "Você não possui créditos" /
                >
            )
        }

        {
            !unavailable && ( <
                Button color = "#01AB7D"
                backgroundColor = "transparent" > {
                    credit ? ( <
                        span > Iniciar consulta < /span>
                    ) : ( <
                        span > Comprar consulta < /span>
                    )
                } <
                SVG src = {
                    toAbsoluteUrl("/media/flat/arrow-right.svg")
                }
                /> <
                /Button>
            )
        } <
        /S.InfoWrapper>
    );
};

export default CardActionBase;