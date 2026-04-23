import {
    FormControlLabel,
    Radio,
    RadioGroup
} from "@material-ui/core";
import * as S from "./styles.js";

const defaultOptions = [{
        value: "first",
        title: "Primeira opção"
    },
    {
        value: "second",
        title: "Segunda opção"
    },
];

export const ORIENTATIONS = {
    VERTICAL: "VERTICAL",
    HORIZONTAL: "HORIZONTAL",
};

export const RadioOptions = ({
    onChange = e => e.target.value,
    actived = "first",
    orientation = ORIENTATIONS.VERTICAL,
    options = defaultOptions,
    error = false,
    disabled = false,
}) => {
    return ( <
        S.ContentOptions error = {
            error
        }
        disabled = {
            disabled
        } >
        <
        RadioGroup className = "flex"
        value = {
            actived
        }
        onChange = {
            onChange
        } >
        <
        S.RadioList orientation = {
            orientation
        } > {
            options.map(({
                value,
                title
            }, i) => ( <
                S.Content value = {
                    value === actived
                }
                key = {
                    i
                } >
                <
                FormControlLabel key = {
                    i
                }
                value = {
                    value
                }
                control = { < Radio / >
                }
                label = { <
                    label
                    className = "title"
                    onClick = {!disabled ?
                        () => onChange({
                            target: {
                                value
                            }
                        }) :
                            undefined
                    } >
                    {
                        title
                    } <
                    /label>
                }
                disabled = {
                    disabled
                }
                /> <
                /S.Content>
            ))
        } <
        /S.RadioList> <
        /RadioGroup> <
        /S.ContentOptions>
    );
};