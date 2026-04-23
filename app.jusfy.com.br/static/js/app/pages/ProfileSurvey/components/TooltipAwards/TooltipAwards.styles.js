import styled from "styled-components";
import SVG from "react-inlinesvg";

export const Container = styled.div `
  position: absolute;
  right: 0;
  top: 96px;
  margin-right: 64px;
  background-color: #fff1da;
  padding 30px 27px 16px;
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: 400;
  font-size: 20px;
  max-width: 445px;
  color: #996819;

  span {
    font-weight: 600;
  }
`;

export const Icon = styled(SVG)
`
  padding: 5px;
  border-radius: 50%;
  background: white;
  border: 1px solid #fff1da;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 0;
  left: 40px;
`;

export const CloseButtonIcon = styled(SVG)
`
  position: absolute;
  top: -30px;
  right: 0;
  transform: translate(50%, 50%);
  cursor: pointer;
`;