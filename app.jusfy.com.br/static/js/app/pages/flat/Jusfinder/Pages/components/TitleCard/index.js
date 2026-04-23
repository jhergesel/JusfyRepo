import * as S from "./styles";
import {
    SubTitleCard
} from "./styles";

const TitleCard = ({
        title = "Adicione o seu título",
        optionalText = "",
        hasOptional = false,
        subTitle = "",
    }) => {
        return ( <
            S.Container >
            <
            S.TitleCard hasOptional = {
                hasOptional
            } > {
                title
            } {
                " "
            } {
                optionalText && < S.TitleOptional > {
                        optionalText
                    } < /S.TitleOptional>} <
                    /S.TitleCard> <
                    SubTitleCard > {
                        subTitle
                    } < /SubTitleCard> <
                    /S.Container>
            );
        };

        export {
            TitleCard
        };