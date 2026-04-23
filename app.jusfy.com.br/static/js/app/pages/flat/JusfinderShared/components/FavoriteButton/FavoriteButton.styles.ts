import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const Icon = styled(SVG)`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;

export const FavoriteButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 26px;
  height: 26px;
  padding: 4px;
  border: none;
`;
