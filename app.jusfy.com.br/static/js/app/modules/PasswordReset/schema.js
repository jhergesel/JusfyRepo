import * as Yup from "yup";
import {
    passwordValidationSchema
} from "../../components/Password/schema";

export const PasswordResetSchema = Yup.object().shape({
    password: passwordValidationSchema.required("A nova senha é obrigatória"),
    confirmation_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "As senhas inseridas não coincidem.")
        .required("O campo confirmação de senha é obrigatório."),
});