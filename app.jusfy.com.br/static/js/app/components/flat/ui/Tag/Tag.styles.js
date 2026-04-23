import styled from "styled-components";

export const Container = styled.div `
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  text-align: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-family: "Noto Sans";
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-weight: ${({ fontWeight }) => fontWeight};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  border-image: ${({ borderImage }) => borderImage};
  display: flex;
  gap: 8px;
  align-items: center;
`;