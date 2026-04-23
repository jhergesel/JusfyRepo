import styled from "styled-components";
import {
    FormControl
} from "@mui/material";
import {
    Chip
} from "@mui/material";

export const StyledFormControl = styled(FormControl)
`
  width: 100%;

  .MuiInputLabel-root.Mui-focused {
    color: ${({ theme }) => theme.colors.brand.primary.main};
  }
`;

export const StyledChip = styled(Chip)
`
  background-color: ${({ theme }) => theme.colors.gray[200]} !important;
  color: ${({ theme }) => theme.colors.gray[700]} !important;
  font-weight: 500;
  width: fit-content;

  & .MuiChip-deleteIcon {
    font-size: ${({ theme }) => theme.fontSizes.sm[700]} !important;
    color: ${({ theme }) => theme.colors.gray[700]} !important;
  }
`;