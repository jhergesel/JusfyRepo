const EventsSegment = () => {
    const EventDashboardSegment = (name, values = {}) => { //Juspage Banner Button Clicked
        window.analytics.track(name, values);
    };
    const EventWizardSegment = (name, values) => {
        window.analytics.track(name, values);
    };
    const EventUpdateSegment = (name, values = {}) => {
        window.analytics.track(name, values);
    };

    return {
        EventDashboardSegment,
        EventWizardSegment,
        EventUpdateSegment
    };
};

export {
    EventsSegment
};