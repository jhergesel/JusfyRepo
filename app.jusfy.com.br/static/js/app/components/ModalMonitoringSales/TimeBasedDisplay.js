import React, {
    useState,
    useEffect
} from "react";
import {
    EventsSegment
} from "../../helpers/EventsSegmentsCalculators";

const TimeBasedDisplay = ({
    timeInterval,
    isActive,
    children
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const {
        HandleEvent
    } = EventsSegment();

    useEffect(() => {
        if (isActive) {
            const lastShown = localStorage.getItem("lastDisplayShown");
            const currentTime = new Date().getTime();

            if (!lastShown || currentTime - parseInt(lastShown, 10) > timeInterval) {
                HandleEvent("Announcement Pop up Viewed", {
                    current_time: new Date().toISOString(),
                });
                setIsVisible(true);
                localStorage.setItem("lastDisplayShown", currentTime.toString());
            }
        }
    }, [timeInterval, isActive]);

    if (!isVisible) return null;

    return < > {
        children
    } < />;
};

export default TimeBasedDisplay;