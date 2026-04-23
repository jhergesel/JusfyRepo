import styled from "styled-components";
import SVG from "react-inlinesvg";

export const ButtonSuggestion = styled.button`
  display: flex;
  height: 40px;
  padding: 0 14px;
  align-items: center;
  gap: 8px;
  border: none;
  background: transparent;
  width: fit-content;
  color: #017858;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;

  &:hover {
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.08);
  }
`;
export const IconChat = styled(SVG)``;

export const TextChat = styled.span``;
