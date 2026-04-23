import PageView from '../../../components/flat/ui/PageView';
import Header from './components/Header';
import ModalContent from './components/ModalContent';
import Page from './components/Page';
import {
    SubHeader
} from './components/SubHeader/SubHeader';

import JusfinderProviderUniversal from './context';
import {
    useUserPreferences
} from '../../../services/userPreferences';

const JusfinderUniversal = () => {
    const {
        preferences
    } = useUserPreferences();

    return ( <
        JusfinderProviderUniversal >
        <
        PageView hasMargin = {
            preferences ? .menuVersion === 'v2'
        } >
        <
        ModalContent / >
        <
        Header / >
        <
        SubHeader / >
        <
        Page / >
        <
        /PageView> <
        /JusfinderProviderUniversal>
    );
};

export default JusfinderUniversal;