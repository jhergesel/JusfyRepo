import {
    useState
} from "react";
import * as S from "./DatailsCard.styles";

const DetailsCard = ({
    name,
    children
}) => {
    const [isColapsed, setIsColapse] = useState(false);

    return ( <
        S.Container colapsed = {
            isColapsed
        } >
        <
        S.Title > {
            name
        } < /S.Title> <
        S.ColapseButton colapsed = {
            isColapsed
        }
        onClick = {
            () => setIsColapse(state => !state)
        } >
        <
        span > Expandir < /span> <
        /S.ColapseButton> <
        S.Hr / > {
            children
        } <
        /S.Container>
    );
};

export default DetailsCard;