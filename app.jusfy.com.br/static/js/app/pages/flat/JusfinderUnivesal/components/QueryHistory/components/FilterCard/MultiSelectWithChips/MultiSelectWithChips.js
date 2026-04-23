import React from "react";
import {
    InputLabel,
    Select,
    MenuItem,
    Box
} from "@mui/material";
import {
    QUERIES
} from "../constants";
import * as S from "./styles";

export default function MultiSelectWithChips({
    features,
    setFeatures
}) {
    const handleChange = event => {
        setFeatures(event.target.value);
    };

    const handleDelete = valueToDelete => {
        setFeatures(prev => prev.filter(v => v.feature !== valueToDelete.feature));
    };

    return ( <
        S.StyledFormControl fullWidth >
        <
        InputLabel id = "status-label" > Tipo < /InputLabel> <
        Select labelId = "status-label"
        multiple value = {
            features
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
                QUERIES.map(option => ( <
                    MenuItem key = {
                        `select-item-${option.feature}`
                    }
                    value = {
                        option
                    }
                    selected = {
                        features ? .some(s => s.feature === option.feature)
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