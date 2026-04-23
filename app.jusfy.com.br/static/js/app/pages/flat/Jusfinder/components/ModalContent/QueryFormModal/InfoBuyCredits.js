import * as S from "./QueryFormModal.styles";
export const InfoBuyCredits = ({
    isVisible,
    message,
    icon,
    hasCredit,
    openModal,
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
        } < /span> {
            hasCredit && ( <
                S.ButtonOpenBuyCredits onClick = {
                    openModal
                } >
                Comprar créditos <
                /S.ButtonOpenBuyCredits>
            )
        } <
        /S.ContentInfo> <
        /S.WrapperInfoCredits>
    );
};