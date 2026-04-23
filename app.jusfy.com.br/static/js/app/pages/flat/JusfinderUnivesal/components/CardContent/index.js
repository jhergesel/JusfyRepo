import Card from '../../../../../components/flat/ui/Card';
import CardActionBase from './components/CardActionBase';
import * as S from './CardContent.styles';
import {
    useCardContent
} from './useCardContent';
import {
    DOCUMENTS_MAPPED
} from './constants';
import {
    CustomTooltip
} from './components/CustomTooltip/CustomTooltip';
import {
    FavoriteButton
} from '../../../JusfinderShared/components/FavoriteButton';

const CardContent = ({
    queryOption,
    onClick,
    openModal,
    creditAvailable,
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
    } = useCardContent(queryOption, onClick, openModal, creditAvailable);
    const favorited = isCardFavorited ? isCardFavorited(queryOption.identification) : false;

    return ( <
        S.Container isMaintenance = {
            isMaintenance
        } >
        {
            getCardBadge()
        }

        <
        Card >
        <
        S.CardWrapper isMaintenance = {
            isMaintenance
        } >
        <
        S.ContentCard >
        <
        S.HeaderContainer >
        <
        S.TitleWrapper >
        <
        h1 > {
            name
        } < /h1>{' '} {
            identification === 'list_vehicles' && < CustomTooltip / >
        } <
        /S.TitleWrapper> <
        FavoriteButton favorited = {
            favorited
        }
        onClick = {
            onFavoriteClick
        }
        /> <
        /S.HeaderContainer> <
        p > {
            queryOption.description
        } < /p>

        <
        S.WrapperTagDocuments > {
            DOCUMENTS_MAPPED.get(identification) ? .map((item) => ( <
                S.TagDocument > {
                    item
                } < /S.TagDocument>
            ))
        } <
        /S.WrapperTagDocuments> <
        /S.ContentCard>

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
        onClick = {
            onClick
        }
        /> <
        /S.CardWrapper> <
        /Card> <
        /S.Container>
    );
};

export default CardContent;