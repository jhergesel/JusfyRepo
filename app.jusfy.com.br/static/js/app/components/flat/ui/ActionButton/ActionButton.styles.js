import styled from "styled-components";

export const Button = styled.button `
  height: 36px;
  padding: 0 16px;
  display: flex;
  gap: 5px;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #cac9cf;
  background-color: #fdfdff;

  ${({ disabled }) => (disabled ? "opacity: 0.2;" : "")}

  span {
    color: #111219;
    font-size: 14px;
    font-family: "Noto Sans";
    font-weight: 600;
  }
`;