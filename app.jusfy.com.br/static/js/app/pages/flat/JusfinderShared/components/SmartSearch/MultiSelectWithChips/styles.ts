import styled from "styled-components";
import { FormControl } from "@mui/material";
import { Chip } from "@mui/material";

export const StyledFormControl = styled(FormControl)`
  width: 100%;

  .MuiInputLabel-root.Mui-focused {
    color: #41c78f;
  }
`;

export const StyledChip = styled(Chip)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 2px;
  padding: 0 2px !important;

  background-color: #f4f5f9 !important;
  color: #5e5e60 !important;
  font-weight: 500;
  width: fit-content;
  border-radius: 8px;
  height: 25px !important;
  & .MuiChip-deleteIcon {
    font-size: 10px !important;
    color: #383839 !important;
  }
`;
