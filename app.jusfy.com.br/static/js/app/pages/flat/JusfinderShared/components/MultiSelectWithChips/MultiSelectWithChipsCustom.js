import React from "react";
import {
    InputLabel,
    Select,
    MenuItem,
    Box
} from "@mui/material";

import * as S from "./styles";

export default function MultiSelectWithChipsCustom({
    options,
    client,
    setOptions,
}) {
    const handleChange = event => {
        setOptions(event.target.value);
    };

    const handleDelete = valueToDelete => {
        setOptions(prev => prev.filter(v => v.feature !== valueToDelete.feature));
    };

    return ( <
        S.StyledFormControl fullWidth >
        <
        InputLabel id = "status-label" > Cliente < /InputLabel> <
        Select labelId = "status-label"
        multiple value = {
            client
        }
        onChange = {
            handleChange
        }
        renderValue = {
            selected => ( <
                Box sx = {
                    {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 0.5
                    }
                } > {
                    selected.map(value => ( <
                            S.StyledChip key = {
                                `chip-${value.feature}`
                            }
                            label = {
                                value.name
                            }
                            onDelete = {
                                e => {
                                    e.stopPropagation();
                                    handleDelete(value);
                                }
                            }
                            onMouseDown = {
                                e => e.stopPropagation()
                            }
                            deleteIcon = { < span > × < /span>} /
                                >
                            ))
                    } <
                    /Box>
                )
            }
            sx = {
                {
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#01ab7d",
                    },
                    "& + .MuiInputLabel-root.Mui-focused": {
                        color: "#01ab7d",
                    },
                }
            } >
            {
                options ? .map(option => ( <
                    MenuItem key = {
                        `select-item-${option?.feature}`
                    }
                    value = {
                        option
                    }
                    selected = {
                        options ? .some(s => s.feature === option ? .feature)
                    } >
                    {
                        option.name
                    } <
                    /MenuItem>
                ))
            } <
            /Select> <
            /S.StyledFormControl>
        );
    }