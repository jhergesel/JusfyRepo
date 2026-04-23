import { SegmentProvider } from 'app/modules/Segment/SegmentProvider';
import { AnalyticsTracker } from './AnalyticsTracker';

const SegmentProviderInstance = new SegmentProvider();

const eventTracker = new AnalyticsTracker(SegmentProviderInstance);

export { eventTracker };
export { SEGMENT_EVENTS } from './eventNames';
