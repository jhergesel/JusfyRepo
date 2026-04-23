import {
    useState
} from "react";
import {
    ValidationError
} from "yup";
import {
    passwordValidationSchema
} from "./schema";

export const Password = props => {
    const {
        form
    } = props;
    const [errors, setErrors] = useState([]);

    const validatePassword = async value => {
        form.setFieldValue("password", value);

        if (!value) {
            setErrors([]);
            return;
        }

        try {
            await passwordValidationSchema.validate(value, {
                abortEarly: false,
                context: {
                    name: form.values.name,
                },
            });

            setErrors([]);
        } catch (error) {
            if (error instanceof ValidationError) {
                setErrors(error.errors || []);
            }
        }
    };

    return ( <
        >
        <
        input type = "password"
        name = "password"
        autoComplete = {
            props.autoComplete || "off"
        }
        className = {
            `form-control ${props.className || ""} ${
          form.errors.password && form.touched.password ? "is-invalid" : ""
        }`
        }
        value = {
            form.values.password
        }
        onChange = {
            e => validatePassword(e.target.value)
        }
        /> {
            errors.length > 0 && ( <
                ul className = "invalid-feedback"
                style = {
                    {
                        paddingTop: 8
                    }
                } > {
                    errors.map((error, index) => ( <
                        li key = {
                            index
                        } > {
                            error
                        } < /li>
                    ))
                } <
                /ul>
            )
        } {
            !errors.length && form.errors.password ? ( <
                >
                <
                p className = "invalid-feedback" > {
                    form.errors.password
                } < /p> <
                />
            ) : null
        } <
        />
    );
};