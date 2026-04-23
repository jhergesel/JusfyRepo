export const DASHBOARD_NEXT_TASKS_QUERY_KEY = 'dashboard-next-tasks';

export const getDashboardNextTasksQueryKey = (userId?: number | string) => [
  DASHBOARD_NEXT_TASKS_QUERY_KEY,
  userId,
];