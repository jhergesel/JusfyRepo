import * as Yup from "yup";

const passwordValidationSchema = Yup.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres.")
    .max(30, "A senha deve ter no máximo 30 caracteres.")
    .matches(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula.")
    .matches(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula.")
    .matches(/[0-9]/, "A senha deve conter pelo menos um número.")
    .matches(/[\W_]/, "A senha deve conter ao menos um caractere especial.")
    .test(
        "no-sequential-numbers",
        "A senha não pode conter números sequenciais.",
        value => {
            return !/(012|123|234|345|456|567|678|789|890)/.test(value);
        }
    )
    .test(
        "no username in password",
        "A senha não pode conter o nome do usuário.",
        function(value) {
            const name = this.options.context ? .name;

            if (!name || !value) {
                return true;
            }

            const valueFormatted = value
                .toLowerCase()
                .trim()
                .replace(/[^a-z]/g, "");

            const firstName = name
                .trim()
                .split(" ")[0]
                .toLowerCase()
                .replace(/[^a-z]/g, "");

            const regex = new RegExp(
                firstName
                .split("")
                .map(char => `${char}+`)
                .join(".*"),
                "i"
            );

            if (regex.test(valueFormatted)) {
                return this.createError({
                    path: this.path,
                    message: "A senha não pode conter o nome do usuário.",
                });
            }

            return true;
        }
    );

export {
    passwordValidationSchema
};