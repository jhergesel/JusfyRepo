import {
    TABSQUERIES
} from "./contants";
import {
    ButtonSwitch,
    ContainerSwitch,
    Icon
} from "./styles";
import {
    useSwitch
} from "./useSwitch";

export const SwitchTabs = () => {
    const {
        changePage,
        page
    } = useSwitch();
    return ( <
        ContainerSwitch > {
            TABSQUERIES.map((item, index) => ( <
                ButtonSwitch key = {
                    `${index}-${item.page_queries}`
                }
                isActive = {
                    page === item.page_queries
                }
                onClick = {
                    () => changePage(item.page_queries)
                } >
                <
                Icon src = {
                    item.icon
                }
                /> {
                    item.title
                } <
                /ButtonSwitch>
            ))
        } <
        /ContainerSwitch>
    );
};