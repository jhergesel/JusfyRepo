import {
    useSelector
} from "react-redux";
import {
    useHistory
} from "react-router-dom";
import SVG from "react-inlinesvg";
import {
    toAbsoluteUrl
} from "../../../../_helpers";

import * as S from "./Warning.styles";
import {
    WARNING_TEXTS
} from "./constants";
import {
    useState
} from "react";

const Warning = () => {
    const [isOpen, setIsOpen] = useState(true);

    const warnings = useSelector(state => state.auth.user ? .warnings);

    const isVisible = isOpen && warnings ? .length;

    const history = useHistory();

    return ( <
        S.Container visible = {
            isVisible
        } > {
            warnings ? .map(warning => ( <
                >
                <
                S.ContentWrapper >
                <
                SVG src = {
                    toAbsoluteUrl("/media/svg/warning.svg")
                }
                /> <
                span > {
                    WARNING_TEXTS.get(warning)
                } < /span> <
                /S.ContentWrapper>

                <
                S.ContentActions >
                <
                S.Button onClick = {
                    () => history.push("/perfil?tab=credit_cards")
                } >
                Adicionar cartão <
                /S.Button> <
                SVG src = {
                    toAbsoluteUrl("/media/svg/close.svg")
                }
                onClick = {
                    () => setIsOpen(false)
                }
                cursor = "pointer" /
                >
                <
                /S.ContentActions> <
                />
            ))
        } <
        /S.Container>
    );
};

export default Warning;