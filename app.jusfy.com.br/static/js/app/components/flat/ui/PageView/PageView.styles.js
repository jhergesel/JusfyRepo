import styled from 'styled-components';

export const Container = styled.div `
  margin-top: ${({ hasMargin }) => (hasMargin ? '0px' : '75px')};
  padding: 40px 24px;

  @media (min-width: 545px) {
    padding: 40px;
  }
`;