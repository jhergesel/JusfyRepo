import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { useSocket } from '../SocketProvider';
import type { RealtimeNotificationPayload } from './types';

type RealtimeNotificationListener = (
  notification: RealtimeNotificationPayload,
) => void;

type RealtimeNotificationsContextValue = {
  subscribe: (listener: RealtimeNotificationListener) => () => void;
};

const RealtimeNotificationsContext = createContext<
  RealtimeNotificationsContextValue | undefined
>(undefined);

export function useRealtimeNotificationListener(
  handler: RealtimeNotificationListener,
) {
  const ctx = useContext(RealtimeNotificationsContext);

  if (!ctx) {
    throw new Error(
      'useRealtimeNotificationListener must be used within RealtimeNotificationsProvider',
    );
  }

  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  const stableListener = useCallback(
    (notification: RealtimeNotificationPayload) => {
      handlerRef.current?.(notification);
    },
    [],
  );

  useEffect(() => {
    const unsubscribe = ctx.subscribe(stableListener);
    return unsubscribe;
  }, [ctx, stableListener]);
}

export function RealtimeNotificationsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { socket } = useSocket();
  const listenersRef = useRef<Set<RealtimeNotificationListener>>(new Set());

  useEffect(() => {
    if (!socket) return;

    const handleSocketNotification = (
      notification: RealtimeNotificationPayload,
    ) => {
      listenersRef.current.forEach((listener) => listener(notification));
    };

    socket.on('notification', handleSocketNotification);

    return () => {
      socket.off('notification', handleSocketNotification);
    };
  }, [socket]);

  const subscribe = useCallback((listener: RealtimeNotificationListener) => {
    listenersRef.current.add(listener);

    return () => {
      listenersRef.current.delete(listener);
    };
  }, []);

  const value = useMemo(() => ({ subscribe }), [subscribe]);

  return (
    <RealtimeNotificationsContext.Provider value={value}>
      {children}
    </RealtimeNotificationsContext.Provider>
  );
}
