import styled from "styled-components";

export const Container = styled.div `
  width: ${({ width }) => (width ? width : "100%")};

label {
    color: #111219;
    font-family: "Noto Sans";
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 4px;
  }
}`;

export const InputContainer = styled.div `
  border: 1px solid ${({ borderColor }) => (borderColor ? borderColor : "#cac9cf")};
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  padding: ${({ padding }) => (padding ? padding : "4px 12px")};
  background-color: #FFF;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 50px;
`;

export const Input = styled.input `
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-family: "Noto Sans" !important;
  padding: 0px 6px;
  border: 0;
  outline: none;
  padding: ${({ padding }) => (padding ? padding : null)};
`;