import {
    Container,
    ContentButtonBuyCredits,
    ContentInfoCredits,
    Icon,
} from "./styles";
import {
    toAbsoluteUrl
} from "../../../../../../_metronic/_helpers";
import {
    useContext,
    useEffect
} from "react";
import {
    jusfinderContext
} from "../../context";
import {
    useQueryClient
} from "@tanstack/react-query";
import {
    loadProducts
} from "../../../JusfinderShared/services/loadProducts";
import {
    toast
} from "react-toastify";

export const Credits = ({
    creditsMultipleQueries
}) => {
    const {
        openModal,
        creditAvailable,
        setCreditAvailable
    } = useContext(
        jusfinderContext
    );
    const creditIsEqualtoOne = creditAvailable === 1;

    const queryClient = useQueryClient();

    const textCredit = creditIsEqualtoOne ?
        "crédito disponível" :
        "créditos disponíveis";

    useEffect(() => {
        const refreshAndGet = async () => {
            try {
                const data = await queryClient.fetchQuery({
                    queryKey: ["queries"],
                    queryFn: loadProducts,
                });

                setCreditAvailable(data ? .data ? .availableCredits);
            } catch (error) {
                toast.error("Erro ao carregar dados de consulta");
            }
        };

        if (creditsMultipleQueries) {
            refreshAndGet();
        }
    }, [creditsMultipleQueries]);

    return ( <
        Container >
        <
        ContentInfoCredits hasCredit = {
            creditAvailable > 0
        } >
        <
        Icon src = {
            toAbsoluteUrl("/media/jusfinderuniversal/credit-dolar.svg")
        }
        /> <
        span > {
            " "
        } <
        strong > {
            creditAvailable
        } < /strong> {textCredit} <
        /span> <
        /ContentInfoCredits>

        <
        ContentButtonBuyCredits >
        <
        button onClick = {
            () => openModal("BUY_CREDITS_MODAL")
        } >
        Comprar créditos <
        /button> <
        Icon src = {
            toAbsoluteUrl("/media/jusfinderuniversal/arrow.svg")
        }
        /> <
        /ContentButtonBuyCredits> <
        /Container>
    );
};