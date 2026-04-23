export const NOTIFICATION_TYPES = {
  NOTIFICATION: 'notification',
  CHALLENGE_COMPLETED: 'challenge_completed',
  TASK_COMPLETED: 'task_completed',
} as const;

export type NotificationType =
  (typeof NOTIFICATION_TYPES)[keyof typeof NOTIFICATION_TYPES];

