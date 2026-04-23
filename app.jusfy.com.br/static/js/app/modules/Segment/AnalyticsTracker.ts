import { ZodError } from 'zod';
import { AnalyticsProvider } from './interface';
import { analyticsEventSchema } from './schemaValidation';
import { AnalyticsEvent } from './types';

export class AnalyticsTracker {
  constructor(private readonly provider: AnalyticsProvider) {}

  track(event: AnalyticsEvent): void {
    this.validate(event);
    this.provider.track(event);
  }

  private validate(event: AnalyticsEvent): void {
    try {
      analyticsEventSchema.parse(event);
    } catch (error) {
      if (error instanceof ZodError) {
        throw new Error(
          `AnalyticsEvent: ${
            error.issues[0].message
          } - ${error.issues[0]?.path?.join('.')}`,
        );
      }
      throw error;
    }
  }
}
