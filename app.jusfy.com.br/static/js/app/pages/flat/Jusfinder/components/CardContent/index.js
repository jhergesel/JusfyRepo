import SVG from 'react-inlinesvg';
import Card from '../../../../../components/flat/ui/Card';
import {
    FavoriteButton
} from '../../../JusfinderShared/components/FavoriteButton';
import {
    toAbsoluteUrl
} from '../../../../../../_metronic/_helpers';
import {
    ICON_NAMES
} from './constants';

import * as S from './CardContent.styles';
import CardActionBase from './components/CardActionBase';
import {
    CustomTooltip
} from './components/CustomTooltip/CustomTooltip';
import {
    useCardContent
} from './useCardContent';

const StopPropagation = (e) => {
    e.preventDefault();
    e.stopPropagation();
}

const CardContent = ({
    queryOption,
    onClick,
    openModal,
    onFavoriteClick,
    isCardFavorited
}) => {
    const {
        UNAVAILABLE_FEATURES,
        hasUnlimitedCredits,
        identification,
        getCardBadge,
        name,
        isMaintenance,
    } = useCardContent(queryOption, onClick, openModal);
    const favorited = isCardFavorited ? isCardFavorited(queryOption.identification) : false;

    return ( <
        S.Container onClick = {
            onClick
        }
        isMaintenance = {
            isMaintenance
        } > {
            getCardBadge()
        }

        <
        Card >
        <
        S.CardWrapper isMaintenance = {
            isMaintenance
        } >
        <
        S.TitleWrapper >
        <
        S.IconContainer >
        <
        SVG src = {
            toAbsoluteUrl(
                `/media/flat/${ICON_NAMES.get(identification)}.svg`,
            )
        }
        /> <
        /S.IconContainer> <
        h1 > {
            name
        } < /h1> <
        FavoriteButton onPointerDown = {
            StopPropagation
        }
        onMouseDown = {
            StopPropagation
        }
        onClick = {
            (e) => {
                StopPropagation(e)
                onFavoriteClick()
            }
        }
        favorited = {
            favorited
        }
        /> {
            identification === 'list_vehicles' && < CustomTooltip / >
        } <
        /S.TitleWrapper>

        <
        CardActionBase queryOption = {
            queryOption
        }
        unavailable = {
            UNAVAILABLE_FEATURES.includes(identification)
        }
        hasUnlimitedCredits = {
            hasUnlimitedCredits
        }
        /> <
        /S.CardWrapper> <
        /Card> <
        /S.Container>
    );
};

export default CardContent;