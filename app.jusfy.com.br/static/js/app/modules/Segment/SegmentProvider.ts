import { AnalyticsProvider } from './interface';
import { AnalyticsEvent } from './types';

export class SegmentProvider implements AnalyticsProvider {
  track(event: AnalyticsEvent): void {
    if (typeof window === 'undefined' || !window.analytics) return;

    const { properties, context } = event || {};

    window.analytics.track(
      event.event,
      {
        event_text: event.event,
        ...properties,
      },
      {
        context: {
          ...context,
          source: 'frontend',
        },
      },
    );
  }
}
