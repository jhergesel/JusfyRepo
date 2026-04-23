import {
    useState
} from "react";
import * as S from "./RelationWrapper.styles";

const RelationWrapper = ({
    name,
    type,
    children
}) => {
    const [close, setClose] = useState(false);

    return ( <
        S.Container >
        <
        S.Colapse type = {
            type
        }
        close = {
            close
        }
        onClick = {
            () => setClose(!close)
        } >
        <
        span > {
            name
        } < /span> <
        /S.Colapse> <
        S.Wrapper type = {
            type
        }
        close = {
            close
        } > {
            children
        } <
        /S.Wrapper> <
        /S.Container>
    );
};

export default RelationWrapper;