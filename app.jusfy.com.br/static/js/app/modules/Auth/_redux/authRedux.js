import {
    persistReducer
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import {
    put,
    select,
    takeLatest
} from "redux-saga/effects";
import {
    logout as apiLogout,
    getUserByToken,
    redirectToCommunity,
} from "./authCrud";
import {
    clearCache
} from "../../../services/reactQuery";

export const actionTypes = {
    Login: "[Login] Action",
    LoginCommunity: "[LoginCommunity] Action",
    ImpersonateLogin: "[ImpersonateLogin] Action",
    LogoutRequested: "[Logout Requested] Action",
    Logout: "[Logout] Action",
    Register: "[Register] Action",
    UserRequested: "[Request User] Action",
    UserLoaded: "[Load User] Auth API",
    SetUser: "[Set User] Action",
    SetOrigin: "[Set Origin] Action",
    UpdateUserProvider: "[Update User Provider] Action",
    SetUserLoginId: "[Set User Login Id] Action",
};

const initialAuthState = {
    user: undefined,
    authToken: undefined,
    origin: {
        type: "default"
    },
    userLoginId: undefined,
    impersonateExpiresAt: undefined,
    impersonateAdminEmail: undefined,
};

export const reducer = persistReducer({
        storage,
        key: "v713-demo1-auth",
        whitelist: [
            "user",
            "authToken",
            "origin",
            "userLoginId",
            "impersonateExpiresAt",
            "impersonateAdminEmail",
        ],
    },
    (state = initialAuthState, action) => {
        switch (action.type) {
            case actionTypes.Login:
                {
                    const {
                        authToken
                    } = action.payload;
                    return {
                        authToken,
                        user: undefined,
                        origin: {
                            type: "default"
                        },
                        userLoginId: state.userLoginId,
                    };
                }
            case actionTypes.ImpersonateLogin:
                {
                    const {
                        authToken,
                        expiresAt,
                        adminEmail
                    } = action.payload;

                    storageSession.removeItem("persist:subscription");

                    return {
                        ...initialAuthState,
                        authToken,
                        impersonateExpiresAt: expiresAt,
                        impersonateAdminEmail: adminEmail,
                    };
                }
            case actionTypes.LoginCommunity:
                {
                    const {
                        authToken
                    } = action.payload;
                    return {
                        authToken,
                        user: undefined,
                        origin: {
                            type: "default"
                        },
                        userLoginId: state.userLoginId,
                    };
                }
            case actionTypes.Register:
                {
                    const {
                        authToken
                    } = action.payload;
                    return {
                        authToken,
                        user: undefined,
                        origin: {
                            type: "default"
                        },
                        userLoginId: state.userLoginId,
                    };
                }

            case actionTypes.Logout:
                {
                    storageSession.removeItem("persist:subscription");
                    return initialAuthState;
                }

            case actionTypes.UserLoaded:
                {
                    const {
                        user
                    } = action.payload;
                    return { ...state,
                        user
                    };
                }

            case actionTypes.SetUser:
                {
                    const {
                        user
                    } = action.payload;
                    return { ...state,
                        user
                    };
                }

            case actionTypes.SetOrigin:
                {
                    if (action.payload) {
                        return { ...state,
                            origin: {
                                type: action.payload
                            }
                        };
                    }
                    return { ...state
                    };
                }

            case actionTypes.UpdateUserProvider:
                {
                    const {
                        provider
                    } = action.payload;
                    return {
                        ...state,
                        provider,
                    };
                }

            case actionTypes.SetUserLoginId:
                {
                    const {
                        loginId
                    } = action.payload;

                    return { ...state,
                        userLoginId: loginId
                    };
                }

            default:
                return state;
        }
    }
);

export const actions = {
    login: authToken => ({
        type: actionTypes.Login,
        payload: {
            authToken
        }
    }),
    impersonateLogin: (authToken, expiresAt, adminEmail) => ({
        type: actionTypes.ImpersonateLogin,
        payload: {
            authToken,
            expiresAt,
            adminEmail
        },
    }),
    loginCommunity: authToken => ({
        type: actionTypes.LoginCommunity,
        payload: {
            authToken
        },
    }),
    register: authToken => ({
        type: actionTypes.Register,
        payload: {
            authToken
        },
    }),
    logout: () => ({
        type: actionTypes.Logout
    }),
    logoutRequested: () => ({
        type: actionTypes.LogoutRequested
    }),
    requestUser: user => ({
        type: actionTypes.UserRequested,
        payload: {
            user
        },
    }),
    fulfillUser: user => ({
        type: actionTypes.UserLoaded,
        payload: {
            user
        }
    }),
    setUser: user => ({
        type: actionTypes.SetUser,
        payload: {
            user
        }
    }),
    setOrigin: origin => ({
        type: actionTypes.SetOrigin,
        payload: {
            origin
        }
    }),
    updateUserProvider: provider => ({
        type: actionTypes.UpdateUserProvider,
        payload: {
            provider
        },
    }),
    setUserLoginId: loginId => ({
        type: actionTypes.SetUserLoginId,
        payload: {
            loginId
        },
    }),
};

export function* saga() {
    yield takeLatest(actionTypes.Login, function* loginSaga() {
        // Esconde o widget do HubSpot quando o usuário faz login
        if (typeof window.hideHubSpotWidget === 'function') {
            window.hideHubSpotWidget();
        }
        yield put(actions.requestUser());
    });

    yield takeLatest(actionTypes.ImpersonateLogin, function* impersonateSaga() {
        // Esconde o widget do HubSpot quando o usuário faz login
        if (typeof window.hideHubSpotWidget === 'function') {
            window.hideHubSpotWidget();
        }
        yield put(actions.requestUser());
    });

    yield takeLatest(actionTypes.Register, function* registerSaga() {
        // Esconde o widget do HubSpot quando o usuário faz registro/login
        if (typeof window.hideHubSpotWidget === 'function') {
            window.hideHubSpotWidget();
        }
        yield put(actions.requestUser());
    });

    yield takeLatest(actionTypes.UserRequested, function* userRequested({
        payload,
    }) {
        try {
            const {
                data: user
            } = yield getUserByToken();

            yield put(actions.fulfillUser(user));

            if (payload ? .callback) {
                payload.callback(user);
            }
        } catch (error) {
            yield put(actions.logout());
        }
    });

    yield takeLatest(actionTypes.LoginCommunity, function* loginCommunitySaga() {
        const queryParams = window.location.search;

        redirectToCommunity(queryParams).then(({
            data: {
                url
            }
        }) => {
            window.location.replace(url);
        });

        yield;
    });

    yield takeLatest(
        actionTypes.LogoutRequested,
        function* logoutRequestedSaga() {
            try {
                const state = yield select();

                const userLoginId = state.auth.userLoginId;
                if (userLoginId) {
                    yield apiLogout(userLoginId);
                }
            } catch (err) {}
            yield put(actions.logout());
        }
    );

    yield takeLatest(actionTypes.Logout, function* logoutSaga() {
        clearCache();
        if (typeof window.showHubSpotWidget === 'function') {
            window.showHubSpotWidget();
        }
        yield;
    });
}