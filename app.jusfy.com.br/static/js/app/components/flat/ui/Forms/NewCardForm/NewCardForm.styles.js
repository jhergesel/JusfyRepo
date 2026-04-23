import styled from "styled-components";
import SVG from "react-inlinesvg";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InputWrapper = styled.div `
  display: flex;
  gap: 24px;
`;

export const InputLabel = styled.span `
  color: #111219;
  font-size: 14px;
  font-family: "Noto Sans";
  font-weight: 400;

  &:after {
    content: " *";
    color: #e91229;
  }
`;

export const Error = styled.label `
  color: #f64e60;
`;

export const ButtonText = styled.span `
  font-family: "Noto Sans";
  font-weight: 600;
  font-size: 14px;

  ${({ secondary }) => (secondary ? `
text - decoration: underline;
` : null)}
`;

export const CardFlag = styled(SVG)
`
  position: absolute;
  top: 43px;
  left: 15px;
`;

export const InputCardNumberWrapper = styled.div `
  position: relative;
`;