/**
 * Entry application component used to compose providers and render Routes.
 * */

import React from 'react';
import {
    Provider,
    useSelector
} from 'react-redux';
import {
    BrowserRouter
} from 'react-router-dom';
import {
    PersistGate
} from 'redux-persist/integration/react';
import {
    Routes
} from '../app/Routes';
import {
    I18nProvider
} from '../_metronic/i18n';
import {
    LayoutSplashScreen,
    MaterialThemeProvider
} from '../_metronic/layout';
import {
    ToastContainer
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    ThemeProvider
} from 'styled-components';
import {
    theme
} from './styles/theme';
import {
    LocalizationProvider
} from '@mui/x-date-pickers/LocalizationProvider';
import {
    AdapterDayjs
} from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/pt-br';
import {
    QueryClientProvider
} from '@tanstack/react-query';
import {
    ReactQueryDevtools
} from '@tanstack/react-query-devtools';
import {
    queryClient,
    initReactQueryPersist
} from './services/reactQuery';
import ChatLauncher from './modules/ChatLauncher';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

initReactQueryPersist();

// Componente interno para o ChatLauncher global
const GlobalChatLauncher = () => {
        const isAuthenticated = useSelector((state) => state.auth ? .user != null);

        return (
            isAuthenticated && ( <
                ChatLauncher label = ""
                icon = { < ChatBubbleOutlineIcon sx = {
                        {
                            color: '#FFF !important'
                        }
                    }
                    size = {
                        30
                    }
                    />}
                    fabOffset = {
                        {
                            bottom: '15px',
                            right: '22px'
                        }
                    }
                    hideVirtualAssistant = {!isAuthenticated
                    }
                    />
                )
            );
        };

        export default function App({
            store,
            persistor,
            basename
        }) {
            return (
                /* Provide Redux store */
                <
                ThemeProvider theme = {
                    theme
                } >
                <
                QueryClientProvider client = {
                    queryClient
                } >
                <
                Provider store = {
                    store
                } >
                <
                ToastContainer / >

                { /* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */ } <
                PersistGate persistor = {
                    persistor
                }
                loading = { < LayoutSplashScreen / >
                } > { /* Add high level `Suspense` in case if was not handled inside the React tree. */ } <
                React.Suspense fallback = { < LayoutSplashScreen / >
                } > { /* Override `basename` (e.g: `homepage` in `package.json`) */ } <
                BrowserRouter basename = {
                    basename
                } > { /*This library only returns the location that has been active before the recent location change in the current window lifetime.*/ } <
                MaterialThemeProvider > { /* Provide `react-intl` context synchronized with Redux state.  */ } <
                LocalizationProvider dateAdapter = {
                    AdapterDayjs
                }
                adapterLocale = {
                    'pt-br'
                } >
                <
                I18nProvider >
                <
                GlobalChatLauncher / >
                <
                Routes / >
                <
                /I18nProvider> <
                /LocalizationProvider> <
                /MaterialThemeProvider> <
                /BrowserRouter> <
                /React.Suspense> <
                /PersistGate> <
                /Provider>

                {
                    process.env.NODE_ENV === 'development' && ( <
                        ReactQueryDevtools initialIsOpen = {
                            false
                        }
                        toggleButtonProps = {
                            {
                                style: {
                                    bottom: '8px',
                                    left: '77px'
                                },
                            }
                        }
                        />
                    )
                } <
                /QueryClientProvider> <
                /ThemeProvider>
            );
        }