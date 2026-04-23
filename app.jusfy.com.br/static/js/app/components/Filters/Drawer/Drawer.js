import {
    Drawer
} from "@mui/material";

export const DrawerComponent = ({
    children,
    position = "right",
    open = false,
    onClose = () => {},
}) => {
    return ( <
        Drawer anchor = {
            position
        }
        open = {
            open
        }
        onClose = {
            onClose
        } > {
            children
        } <
        /Drawer>
    );
};