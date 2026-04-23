import styled from 'styled-components';
import Card from '@mui/material/Card';
export const Container = styled.div `
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;

  @media (min-width: 545px) {
    margin-top: 16px;
  }
`;

export const EmptySpace = styled.div `
  width: 275px;
  flex-grow: 1;

  @media (min-width: 1800px) {
    width: 350px;
  }
`;

export const CardFeedback = styled.div `
  position: relative;
  width: 275px;
  flex-grow: 1;

  ${({ isMaintenance }) =>
    isMaintenance
      ? `
pointer - events: none;
`
      : ''}

  @media (min-width: 1800px) {
    width: 350px;
  }
`;

export const ListTitle = styled.p `
  color: var(--gray-900, #131313);
  font-family: var(--font-family-font-family-title, 'Noto Sans');
  font-size: var(--font-size-font-size-20, 20px);
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

export const CardCustom = styled(Card)
`
  box-shadow: none !important;
  border-radius: 7px;
  width: ${({ width }) => (width === 'full' ? '100%' : width)};
  position: ${({ position }) => position};
  padding: ${({ padding }) => (padding ? padding : '0')};
  border: ${({ border }) => (border ? border : 'none')};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius + ' !important' : '0'};
  flex-grow: ${({ grow }) => grow};
  overflow: ${({ overflow }) => overflow} !important;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  height: 281px;

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h5 {
      margin: 0px;
      color: #017858;
      text-align: center;
      font-family: 'Noto Sans';
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 110%;
    }

    span {
      color: #383839;
      text-align: center;

      font-family: 'Noto Sans';
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
    }
  }

  button {
    display: flex;
    height: 40px;
    padding: 10px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    background: #01ab7d;
    border: none;

    color: #fff;
    text-align: center;
    font-family: 'Noto Sans';
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;

    &:hover {
      border-radius: 5px;
      background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.08) 0%,
          rgba(0, 0, 0, 0.08) 100%
        ),
        #01ab7d;
    }
  }
`;