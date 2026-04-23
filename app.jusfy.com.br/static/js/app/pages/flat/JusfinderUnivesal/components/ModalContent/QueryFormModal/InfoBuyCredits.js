import * as S from "./QueryFormModal.styles";
export const InfoBuyCredits = ({
    isVisible,
    message,
    icon,
    hasCredit
}) => {
    return ( <
        S.WrapperInfoCredits isVisible = {
            isVisible
        }
        background = {
            hasCredit && "#FFF9E6"
        } >
        <
        S.IconInfoCredits src = {
            icon
        }
        /> <
        S.ContentInfo >
        <
        span > {
            message
        } < /span> <
        /S.ContentInfo> <
        /S.WrapperInfoCredits>
    );
};