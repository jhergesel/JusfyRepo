const EventsSegmentGamification = () => {

    const trackGamificationPageViewed = (properties = {}) => {
        window.analytics.track("Gamification Page Viewed", {
            timestamp: new Date().toISOString(),
            ...properties,
        });
    };

    const trackInviteModalOpened = (properties = {}) => {
        window.analytics.track("Gamification Invite Modal Opened", {
            challenge_id: properties.challenge_id || null,
            challenge_name: properties.challenge_name || null,
            challenge_points: properties.challenge_points || null,
            timestamp: new Date().toISOString(),
        });
    };

    const trackJusfyPayRedirect = (properties = {}) => {
        window.analytics.track("Gamification Jusfy Pay Redirect", {
            challenge_id: properties.challenge_id || null,
            challenge_name: properties.challenge_name || null,
            challenge_event: properties.challenge_event || null,
            timestamp: new Date().toISOString(),
        });
    };

    return {
        trackGamificationPageViewed,
        trackInviteModalOpened,
        trackJusfyPayRedirect,
    };
};

export default EventsSegmentGamification;