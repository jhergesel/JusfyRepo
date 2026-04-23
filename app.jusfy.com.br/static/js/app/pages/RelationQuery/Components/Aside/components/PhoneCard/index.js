import {
    useState
} from "react";
import DetailsCard from "../DetailsCard";

import * as S from "./PhoneCard.styles";

const PhoneCard = ({
    data
}) => {
    const [isExpanded, setIsExpanded] = useState(data.length <= 6);
    return ( <
        DetailsCard name = "Telefones" >
        <
        S.Container expand = {
            isExpanded
        } > {
            data.map(({
                phone
            }) => {
                const [ddd, phoneNumber] = phone.split(" ");

                return ( <
                    span > {
                        ddd
                    } < span > {
                        phoneNumber
                    } < /span> <
                    /span>
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

export default PhoneCard;