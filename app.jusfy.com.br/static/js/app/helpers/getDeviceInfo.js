import MobileDetect from 'mobile-detect';
import {
    v4 as uuidv4
} from 'uuid';

const mobileDetect = new MobileDetect(window.navigator.userAgent);

const getDeviceType = () => {
    if (mobileDetect.mobile()) return 'mobile';
    if (mobileDetect.tablet()) return 'tablet';
    return 'desktop';
};

export const getOrCreateDeviceId = () => {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') return undefined;

    const existingId = localStorage.getItem('deviceId');
    if (existingId) return existingId;

    const newId = crypto.randomUUID();
    localStorage.setItem('deviceId', newId);

    return newId;
};

export const getDeviceInfo = () => {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') return {};

    const nav = window.navigator;

    const rawDNT =
        nav.doNotTrack ? ?
        window.doNotTrack ? ?
        nav.msDoNotTrack ? ?
        undefined;

    const doNotTrack = rawDNT === '1' || rawDNT === 'yes' || rawDNT === 'true' ? true : false;

    return {
        deviceFingerprint: getOrCreateDeviceId(),
        requestId: uuidv4(),
        doNotTrack,
        userAgent: nav.userAgent,
        language: nav.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone ? ? undefined,
        screen: `${window.screen.width}x${window.screen.height}`,
        colorDepth: window.screen.colorDepth,
        deviceMemory: nav.deviceMemory,
        hardwareConcurrency: nav.hardwareConcurrency,
        touchSupport: 'ontouchstart' in window ||
            (window.DocumentTouch && document instanceof window.DocumentTouch),
        deviceType: getDeviceType(),
        referrer: document.referrer,
        cookiesEnabled: nav.cookieEnabled,
    };
};