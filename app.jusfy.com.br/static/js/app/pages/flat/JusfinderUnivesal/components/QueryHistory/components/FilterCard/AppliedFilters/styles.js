import styled from "styled-components";
import {
    Chip,
    Button
} from "@mui/material";

export const StyledChip = styled(Chip)
`
  &.MuiChip-root {
    background-color: ${({ theme }) => theme.colors.gray[200]};
    color: ${({ theme }) => theme.colors.gray[700]};
    font-weight: 400;
    width: fit-content;
  }

  .MuiChip-label {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-family: ${({ theme }) => theme.typography.quaternary};
  }
`;

export const ClearButton = styled(Button)
`
  && {
    color: ${({ theme }) => theme.colors.brand.primary.main};
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-family: ${({ theme }) => theme.typography.quaternary};
    text-transform: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.brand.primary.quaternary};
    }
  }
`;