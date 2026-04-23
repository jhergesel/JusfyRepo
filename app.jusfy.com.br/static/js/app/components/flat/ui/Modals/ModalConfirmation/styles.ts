import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: left;
  max-width: 500px;
  box-sizing: border-box;
`;

export const Title = styled(Typography)`
  &.MuiTypography-root {
    color: var(--neutral-text-text-darker, #131313);
    font-family: var(--font-family-font-family-title, 'Noto Sans');
    font-size: var(--font-size-font-size-20, 20px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    margin-bottom: 8px;
  }
`;

export const Description = styled(Typography)`
  &.MuiTypography-root {
    color: var(--neutral-text-text-light, #5e5e60);
    font-family: var(--font-family-font-family-text, 'Noto Sans');
    font-size: var(--font-size-font-size-14, 14px);
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 40px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`;
