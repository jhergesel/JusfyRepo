import axios from "axios";
import traceId from "../../../redux/traceId";

export function getCardBrand(cardNumber) {
    const number = cardNumber.replace(/\D/g, "");
    const bin = number.slice(0, 6);

    if (/^4/.test(bin)) return "visa";
    if (/^5[1-5]/.test(bin)) return "mastercard";
    if (/^3[47]/.test(bin)) return "amex";
    if (/^3(?:0[0-5]|[68])/.test(bin)) return "diners";
    if (/^6(?:011|5)/.test(bin)) return "discover";
    if (/^35(2[89]|[3-8][0-9])/.test(bin)) return "jcb";
    if (
        /^(50|60|65|4011|4312|4389|4514|4576|5041|5066|5067|509|6277|6362|6363)/.test(
            bin
        )
    )
        return "elo";
    if (/^606282|3841/.test(bin)) return "hipercard";
    if (/^637095|637568|637599|637609|637612/.test(bin)) return "banescard";

    return "unknown";
}

export const createClientCardPagarmeV5 = async ({
    user,
    card
}) => {
    const jusbillUrl = process.env.REACT_APP_JUSBILL_URL;

    try {
        const response = await axios.post(
            `${jusbillUrl}/client-cards/pagarme-v5`, {
                // customerId: user.client_id,
                email: user.email,
                name: user.name,
                document: user.document_number ? .replace(/[^0-9]/g, ""),
                phone: user.phone,
                address: {
                    zipCode: user.postal_code ? ? "",
                    state: user._state_data ? .state ? ? "",
                    address: user.address ? ? "",
                    number: user.address_number ? ? "",
                    neighborhood: user.district ? ? "",
                    city: user._city_data ? .name ? ? "",
                    complement: user.address_complement ? ? "",
                },
                card: {
                    token: card.token,
                    holderName: card.card_holder_name,
                    lastDigits: card.card_number ? .replace(/\s/g, "").slice(-4),
                    firstDigits: card.card_number ? .replace(/\s/g, "").slice(0, 6),
                    expirationMonth: card.card_expiration_date.split("/")[0],
                    expirationYear: card.card_expiration_date.split("/")[1],
                    brand: getCardBrand(card.card_number ? .replace(/\s/g, "")),
                },
                metadata: {
                    id: "unknown",
                    userAgent: navigator.userAgent,
                    language: navigator.language,
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                },
            }, {
                headers: {
                    "x-trace-id": traceId,
                },
            }
        );

        return response.data;
    } catch (error) {
        throw new Error(
            `Erro ao criar cliente e cartão ${error?.response?.status ||
        error.message}`
        );
    }
};