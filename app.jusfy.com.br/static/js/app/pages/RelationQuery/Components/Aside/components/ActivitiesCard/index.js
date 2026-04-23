import {
    useState
} from "react";
import DetailsCard from "../DetailsCard";

import * as S from "./Activities Card.styles";

const ActivitiesCard = ({
    data
}) => {
    const [isExpanded, setIsExpanded] = useState(data.length <= 1);

    return ( <
        DetailsCard name = "CNAEs" >
        <
        S.Container expand = {
            isExpanded
        } > {
            data.map(({
                activity
            }) => {
                const [code, name] = activity.replace(/^(\S+)\s/, "$1|") ? .split("|");

                return ( <
                    div >
                    <
                    span > {
                        code
                    }: < span > {
                        name.toLowerCase()
                    } < /span> <
                    /span> <
                    /div>
                );
            })
        } <
        /S.Container> <
        S.ExpandButton hide = {
            isExpanded
        }
        onClick = {
            () => setIsExpanded(true)
        } >
        Ver Mais <
        /S.ExpandButton> <
        /DetailsCard>
    );
};

export default ActivitiesCard;