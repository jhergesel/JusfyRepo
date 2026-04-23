import PageView from '../../../components/flat/ui/PageView';
import Header from './components/Header';
import {
    ModalUniversalMigration
} from './components/ModalUniversalMigration';
import ModalContent from './components/ModalContent';
import Page from './components/Page';
import JusfinderProvider from './context';
import useFeatureFlag from '../../../hooks/useFeatureFlag';
import {
    FEATURE_FLAGS
} from '../../../constants/FeatureFlag';
import {
    useUserPreferences
} from '../../../services/userPreferences';

const JusfinderNew = () => {
    const {
        isFeatureFlagEnable
    } = useFeatureFlag(
        FEATURE_FLAGS.KILL_SWITCH.ENABLED_BANNER_UNIVERSAL_MIGRATION,
    );

    const {
        preferences
    } = useUserPreferences();

    return ( <
        > {
            isFeatureFlagEnable && < ModalUniversalMigration / >
        } <
        JusfinderProvider >
        <
        PageView hasMargin = {
            preferences ? .menuVersion === 'v2'
        } >
        <
        ModalContent / >
        <
        Header / >
        <
        Page / >
        <
        /PageView> <
        /JusfinderProvider> <
        />
    );
};

export default JusfinderNew;