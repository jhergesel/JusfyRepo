import {
    Skeleton
} from "@mui/material";

export const Loading = () => {
    return ( <
        > {
            Array.from(Array(10).keys()).map((_, index) => ( <
                Skeleton key = {
                    index
                }
                variant = "rounded"
                width = "100%"
                height = {
                    72
                }
                animation = "pulse" /
                >
            ))
        } <
        />
    );
};