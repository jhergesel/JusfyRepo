import * as Yup from "yup";

export const LOGIN_INITIAL_VALUES = {
    email: "",
    password: "",
};

export const REGISTER_INITIAL_VALUES = {
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
};

export const REGISTER_SCHEMA = Yup.object().shape({
    name: Yup.string()
        .min(3, "O nome precisa ter no mínimo de 3 caracteres.")
        .max(50, "O nome deve ter no máximo 50 caracteres.")
        .required("O campo de nome é obrigatório."),

    email: Yup.string()
        .email("O valor digitado não é um email válido.")
        .min(3, "O email precisa ter no mínimo 3 caracteres.")
        .max(50, "O email deve ter no máximo 50 caracteres.")
        .required("O campo de email é obrigatório."),

    confirmEmail: Yup.string()
        .required("O campo de confirmação é obrigatório.")
        .when("email", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf([Yup.ref("email")], "Os emails não coincidem."),
        }),

    password: Yup.string()
        .min(3, "A senha precisa ter no mínimo 3 caracteres.")
        .max(50, "A senha deve ter no máximo 50 caracteres.")
        .required("O campo de senha é obrigatório."),

    confirmPassword: Yup.string()
        .required("O campo de confirmação é obrigatório.")
        .when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "As senhas não coincidem."
            ),
        }),
});