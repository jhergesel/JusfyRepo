export const paginateTrackClick = ({
    isNext,
    isPrevious
}, label) => {
    if (isNext) {
        window.analytics.track(label, {
            navigation_type: "next_page",
        });
        return;
    }

    if (isPrevious) {
        window.analytics.track(label, {
            navigation_type: "previous_page",
        });
        return;
    }

    window.analytics.track(label, {
        navigation_type: "page_number",
    });
};