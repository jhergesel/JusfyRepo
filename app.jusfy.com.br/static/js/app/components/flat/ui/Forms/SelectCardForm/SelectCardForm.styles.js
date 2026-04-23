import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";

export const Container = styled.div ``;

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

export const ButtonText = styled.span `
  font-family: "Noto Sans";
  font-weight: 600;
  font-size: 14px;

  ${({ secondary }) =>
    secondary
      ? `
text - decoration: underline;
font - weight: 400;
font - size: 12 px;
text - decoration: underline;
width: fit - content;
`
      : null}
`;

export const CustomOption = styled(MenuItem)
`
  display: flex !important;
  align-items: center !important;
  gap: 10px !important;
  padding-left: 6px !important;
`;

export const MainCardBadge = styled.span `
  background: rgba(1, 171, 125, 0.1);
  color: #01ab7d;
  font-family: "Noto Sans";
  font-weight: 600;
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 10px;
  margin-left: auto;
  white-space: nowrap;
`;