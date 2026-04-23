import styled from "styled-components";
import Dialog from "@mui/material/Dialog";

export const ModalDialogCustom = styled(Dialog)
`
  .MuiPaper-root {
    border-radius: 7px;
    overflow: ${({overflow}) => overflow};
    min-width: ${({ minWidth }) => minWidth};

    ${({ isBottomSheet, width }) =>
      isBottomSheet
        ? `
width: 100 % ;
max - width: 100 % ;
position: fixed;
bottom: 0;
margin: 0;
border - bottom - left - radius: 0;
border - bottom - right - radius: 0;
`
    : `
width: $ {
    width
};
`}
  }

  .MuiBackdrop-root {
    opacity: 0.3 !important;
    background: #000 !important;
  }

  .MuiDialog-paper {
    max-width: 100% !important;
    background-color: ${({backgroundColor}) => backgroundColor};
    box-shadow: none;
  }
`;