import * as S from './PageView.styles';

const PageView = ({
    children,
    hasMargin = false
}) => {
    return <S.Container hasMargin = {
        hasMargin
    } > {
        children
    } < /S.Container>;
};

export default PageView;