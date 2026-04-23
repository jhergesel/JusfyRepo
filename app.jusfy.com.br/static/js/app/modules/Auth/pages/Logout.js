import {
    Component
} from "react";
import {
    connect
} from "react-redux";
import {
    Redirect
} from "react-router-dom";
import {
    LayoutSplashScreen
} from "../../../../_metronic/layout";
import {
    removeLocalStorage
} from '../../../helpers/LocalStorage';
import * as auth from "../_redux/authRedux";
import {
    clearCache
} from "../../../services/reactQuery";

class Logout extends Component {
    componentDidMount() {
        this.props.logoutRequested();

        try {
            if (window.analytics) {
                window.analytics.identify(null);
                window.analytics.reset();
            }
        } catch (error) {}

        removeLocalStorage('group');
        removeLocalStorage('oab_monitoring_filter_selected');
        clearCache()
    }

    render() {
        const {
            hasAuthToken
        } = this.props;
        return hasAuthToken ? ( <
            LayoutSplashScreen / >
        ) : ( <
            Redirect to = "/auth/login" / >
        );
    }
}

export default connect(
    ({
        auth
    }) => ({
        hasAuthToken: Boolean(auth.authToken)
    }), {
        logoutRequested: auth.actions.logoutRequested
    }
)(Logout);