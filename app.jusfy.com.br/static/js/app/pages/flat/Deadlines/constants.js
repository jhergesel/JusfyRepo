import {
    FEATURE_FLAGS
} from "../../../constants/FeatureFlag";

export const PAGES = {
    DEADLINE_LIST: "deadlines",
};

export const NAVIGATION_TABS = {
    LIST: "lista",
    CALENDAR: "calendario",
};

export const PAGE_TABS = [{
    name: PAGES.DEADLINE_LIST,
    text: "Prazos",
    featureFlag: FEATURE_FLAGS.KILL_SWITCH.LAWSUIT_MONITOR_DEADLINES,
    shouldRedirect: true,
    hasFeatureFlag: true,
}, ];

export const ITEMS_PER_PAGE = 10