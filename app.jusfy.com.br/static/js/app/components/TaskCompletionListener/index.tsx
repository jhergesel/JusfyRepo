import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
  NOTIFICATION_TYPES,
  useRealtimeNotificationListener,
} from '../../modules/RealtimeNotificationsProvider';
import { DASHBOARD_NEXT_TASKS_QUERY_KEY } from '../../pages/Dashboard/components/NextTasks/queryKeys';

const TaskCompletionListener = () => {
  const queryClient = useQueryClient();

  useRealtimeNotificationListener((notification) => {
    if (notification.type !== NOTIFICATION_TYPES.TASK_COMPLETED) {
      return;
    }

    queryClient.invalidateQueries({
      queryKey: [DASHBOARD_NEXT_TASKS_QUERY_KEY],
      refetchType: 'active',
    });
  });

  return null;
};

export default TaskCompletionListener;