import styled from "styled-components";

export const ContentOptions = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px !important;

  .MuiButtonBase-root {
    padding: 9px 4px 9px 9px !important;
  }

  .MuiIconButton-root.Mui-disabled {
    color: #808080 !important;

    .MuiSvgIcon-root,
    .MuiRadio-root,
    .Mui-disabled {
      color: #808080 !important;
    }
  }

  .MuiFormControlLabel-root {
    margin: 0 2px 0 -11px !important;
  }

  .flex {
    label {
      margin-bottom: 0 !important;
      height: 30px;
    }

    label {
      color: #3f4254;
      font: normal 400 14px ${({ theme }) => theme.typography.quartenary};
      line-height: 19.6px;
    }
  }
`;

export const RadioList = styled.div `
  display: flex;
  flex-direction: ${({ orientation }) =>
    orientation === "VERTICAL" ? "column" : "row"};
  gap: ${({ orientation }) => (orientation === "VERTICAL" ? "2px" : "20px")};

  label {
    color: #3f4254;
    font: normal 400 14px ${({ theme }) => theme.typography.secondary};
    line-height: 18px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.span `
  color: #f0431b;
  font-family: Switzer;
  font: normal 400 12px ${({ theme }) => theme.typography.primary};
  line-height: 21px;
  letter-spacing: -0.56px;
`;
export const Content = styled.div `
  .MuiSvgIcon-root {
    color: ${({ value }) => {
      return value ? "#01AB7D" : "#CECED2";
    }} !important;
  }
`;