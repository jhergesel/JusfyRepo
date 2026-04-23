import * as yup from "yup";

export const paymentLinkSchema = yup.object().shape({
    cardHolderName: yup
        .string()
        .required("O nome do titular do cartão é obrigatório."),
    cardNumber: yup.string().required("O número do cartão é obrigatório."),
    cardExpiration: yup
        .string()
        .required("O mês/ano de expiração do cartão é obrigatório."),
    cardCvv: yup
        .string()
        .required("O código de segurança (CVV) do cartão é obrigatório."),
});