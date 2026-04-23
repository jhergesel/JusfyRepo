/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
    Switch,
    Redirect
} from "react-router-dom";
import {
    ContentRoute
} from "../../../../_metronic/layout";
import Login from "./Login";
import "../../../../_metronic/_assets/sass/pages/login/classic/login-1.scss";
import Impersonate from "./Impersonate";
import TwoFactorPage from "./TwoFactor";

export function AuthPage() {
    return ( <
        >
        <
        Switch >
        <
        ContentRoute path = "/auth/login"
        component = {
            Login
        }
        /> <
        ContentRoute path = "/auth/two-factor"
        component = {
            TwoFactorPage
        }
        /> <
        ContentRoute path = "/auth/impersonate"
        component = {
            Impersonate
        }
        /> <
        Redirect from = "/auth"
        exact = {
            true
        }
        to = "/auth/login" / >
        <
        Redirect to = "/auth/login" / >
        <
        /Switch> <
        />
    );
}