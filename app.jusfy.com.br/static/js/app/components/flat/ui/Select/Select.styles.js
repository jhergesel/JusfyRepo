import styled from "styled-components";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export const Container = styled.div `
width: 100%;

label {
    color: #111219;
    font-family: "Noto Sans";
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 4px;
  }
}`;

export const CustomSelect = styled(Select)
`
height: 40px;
    width: 100% !important;
    outline: none;
  font-family: "Noto Sans" !important;

 
    .MuiSelect-select {
      display: flex ;
  align-items: center ;
  gap: 10px ;
  padding-left: 6px ;
    }

  fieldset {
    border: 1px solid #CAC9CF !important;
    outline: none !important;
    border-radius: 5px;
}

  .Mui-focused .MuiOutlinedInput-notchedOutline: {
    outline: none;
  },
`;

export const CustomOption = styled(MenuItem)
`
  display: flex !important;
  align-items: center !important;
  gap: 10px !important;
  padding-left: 6px !important;
`;