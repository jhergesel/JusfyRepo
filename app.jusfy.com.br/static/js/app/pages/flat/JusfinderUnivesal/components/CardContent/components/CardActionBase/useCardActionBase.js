import {
    EventsSegment
} from "../../../../../../../helpers/EventsSegmentsCalculators";
import {
    LINKS_EXAMPLES_QUERIES
} from "../../../../../components/constants";

export const useCardActionBase = queryOption => {
    const {
        HandleEvent
    } = EventsSegment();

    const extractUrl = () => {
        const url = LINKS_EXAMPLES_QUERIES.get(queryOption.identification);

        return url;
    };

    const openExamplePdf = () => {
        HandleEvent("Universal Open Example PDF Clicked");

        const urlOpened = extractUrl();

        if (!urlOpened) return;

        window.open(urlOpened, "_blank", "noopener,noreferrer");
    };

    return {
        openExamplePdf,
    };
};