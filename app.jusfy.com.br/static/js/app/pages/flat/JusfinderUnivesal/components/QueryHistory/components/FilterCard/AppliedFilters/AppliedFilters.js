import {
    Box
} from "@mui/material";
import * as S from "./styles";

export const AppliedFilters = ({
    filtersApplied,
    onClear
}) => {
    const chips = [];
    if (!filtersApplied) {
        return < > < />;
    }

    if (filtersApplied.features) {
        chips.push( <
            S.StyledChip key = "chip-features"
            label = { <
                >
                <
                strong > Tipos: < /strong> {filtersApplied.features} <
                    />
            }
            />
        );
    }

    if (filtersApplied.date) {
        chips.push( <
            S.StyledChip key = "chip-date"
            label = { <
                >
                <
                strong > Data: < /strong> {filtersApplied.date} <
                    />
            }
            />
        );
    }

    if (filtersApplied.statuses) {
        chips.push( <
            S.StyledChip key = "chip-statuses"
            label = { <
                >
                <
                strong > Status: < /strong> {filtersApplied.statuses} <
                    />
            }
            />
        );
    }

    if (filtersApplied.client) {
        chips.push( <
            S.StyledChip key = "chip-client"
            label = { <
                >
                <
                strong > Cliente: < /strong> {filtersApplied.client} <
                    />
            }
            />
        );
    }

    return ( <
        Box display = "flex"
        alignItems = "center"
        flexWrap = "wrap"
        gap = {
            1
        }
        mt = {
            2
        } > {
            chips
        } {
            chips.length > 0 && ( <
                S.ClearButton variant = "text"
                onClick = {
                    onClear
                } >
                Limpar <
                /S.ClearButton>
            )
        } <
        /Box>
    );
};