import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback
} from 'react';
import {
    useSelector
} from 'react-redux';
import {
    io
} from 'socket.io-client';
import useFeatureFlag from "../../../app/hooks/useFeatureFlag";
import {
    FEATURE_FLAGS
} from "../../../app/constants/FeatureFlag";

const SocketContext = createContext();

export function useSocket() {
    return useContext(SocketContext);
}

export function SocketProvider({
    children
}) {
    const {
        authToken
    } = useSelector((state) => state.auth);
    const [socket, setSocket] = useState(null);
    const [anonHash, setAnonHash] = useState(null);
    const {
        isFeatureFlagEnable: enableSocket
    } = useFeatureFlag(FEATURE_FLAGS.KILL_SWITCH.ASYNC_SOCKET_CHANNEL);

    const getSocket = useCallback(() => {
        if (!enableSocket) return null;
        if (!authToken && !anonHash) return null;

        const socket = io(process.env.REACT_APP_GAMIFICATION_SOCKET_URL, {
            // path: process.env.REACT_APP_SOCKET_PATH,
            transports: ['websocket'],
            auth: authToken ?
                {
                    token: authToken
                } :
                {
                    hash: anonHash
                },
            autoConnect: true,
            reconnection: true,
            reconnectionAttempts: 5,
            reconnectionDelay: 1000,
            reconnectionDelayMax: 5000,
            timeout: 20000,
        });
        socket.on('connect', () => {
            console.log('Socket connected!');
        });

        socket.on('disconnect', () => {
            console.log('Socket disconnected!');
        });

        socket.on('error', (error) => {
            console.error('Socket error:', error);
        });

        socket.on('connect_error', (err) => {
            console.log('Connection error:', err.message);
        });

        return socket;
    }, [authToken, enableSocket, anonHash]);

    const handleSetAnonHash = useCallback((hash) => {
        if (!authToken) {
            setAnonHash(hash);
        }
    }, [authToken]);

    useEffect(() => {
        if (!enableSocket) return null;
        if (!authToken && !anonHash) return null;

        const newSocket = getSocket();
        if (newSocket) {
            setSocket(newSocket);
            return () => {
                newSocket.close();
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authToken, enableSocket, anonHash]);

    return ( <
        SocketContext.Provider value = {
            {
                socket,
                setAnonHash: handleSetAnonHash
            }
        } > {
            children
        } <
        /SocketContext.Provider>
    );
}