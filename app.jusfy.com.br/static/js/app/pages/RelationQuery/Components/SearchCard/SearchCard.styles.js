import styled from "styled-components";
import SVG from "react-inlinesvg";

export const Container = styled.div `
  width: 317px;
  background-color: #fff5f5;
  border: 3px dotted #ffaeae;
  border-radius: 12px;
  position: relative;
  text-align: center;
`;

export const IconContainer = styled.div `
  background-color: #ffdede;
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  border: 4px solid ${({ theme }) => theme.colors.white.primary};
`;

export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 50px 10px 40px;
`;

export const Title = styled.h1 `
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: 500;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.black.primary};
  margin: 0;
  text-transform: capitalize;
  padding: 0 15px;
`;

export const CloseIcon = styled(SVG)
`
  width: 21px;
  height: 21px;
  position: absolute;
  right: -10px;
  top: -10px;
  cursor: pointer;
`;