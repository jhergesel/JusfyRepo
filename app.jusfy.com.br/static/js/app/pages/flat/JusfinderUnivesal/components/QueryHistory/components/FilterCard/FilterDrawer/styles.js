import styled from "styled-components";
import {
    TextField,
    Checkbox
} from "@mui/material";
export const FilterDrawerButton = styled.div `
  display: flex;
  height: 40px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid #ceced2;
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.quartenary};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  width: 100%;
`;

export const DrawerFooter = styled.div `
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px 0;
  display: flex;
  justify-content: space-evenly;
`;

const BaseButton = styled.div `
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  padding: 10px 16px;
  border-radius: 4px;
  width: 35%;
  display: flex;
  justify-content: center;
  transition: background-color 0.2s;
`;

export const ClearButton = styled(BaseButton)
`
  border: 1px solid #ceced2;
  background-color: transparent;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const ApplyButton = styled(BaseButton)
`
  background-color: #01ab7d;
  color: #fff;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

export const CustomDateField = styled(TextField)
`
  .MuiOutlinedInput-root.Mui-focused fieldset {
    border-color: #01ab7d;
  }
`;

export const CustomCheckbox = styled(Checkbox)
`
  .MuiSvgIcon-root {
    color: #838486 !important;
  }

  &.Mui-checked .MuiSvgIcon-root {
    color: #01ab7d !important;
  }
`;