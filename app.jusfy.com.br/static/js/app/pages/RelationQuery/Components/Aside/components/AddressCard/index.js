import {
    useState
} from "react";
import DetailsCard from "../DetailsCard";

import * as S from "./AdressCard.styles";

const AdressCard = ({
    data
}) => {
    const [isExpanded, setIsExpanded] = useState(data.length <= 1);

    return ( <
        DetailsCard name = "Endereços" >
        <
        S.Container expand = {
            isExpanded
        } > {
            data.map(addressInfo => ( <
                div >
                <
                span >
                Endereço: < span > {
                    addressInfo.address
                } < /span> <
                /span> <
                span >
                Bairro: < span > {
                    addressInfo.neighborhood
                } < /span> <
                /span> <
                span >
                Cidade - UF: {
                    " "
                } <
                span > {
                    addressInfo.city
                }
                / {addressInfo.state} <
                /span> <
                /span> <
                span >
                CEP: < span > {
                    addressInfo.zipcode
                } < /span> <
                /span> <
                /div>
            ))
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

export default AdressCard;