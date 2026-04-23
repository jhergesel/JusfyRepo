import styled from "styled-components";

export const ContentOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px !important;

  @media (max-width: 578px) {
    gap: 14px;
  }

  @media (max-width: 420px) {
    gap: 24px;
  }

  .MuiButtonBase-root {
    padding: 9px 4px 9px 9px !important;
  }
  .MuiFormControlLabel-root {
    margin: 0 2px 0 -11px !important;
  }

  ${({ error }) =>
    error
      ? `
    .flex .MuiSvgIcon-root {
      color: #F0431B !important;
    }
  `
      : `
    .flex .MuiSvgIcon-root {
      color: #01AB7D !important;
    }
  `}

  ${({ disabled, theme }) =>
    disabled &&
    `
    /* Força os Radio Buttons desativados para #808080 */
    .flex .MuiSvgIcon-root,
    .flex .MuiRadio-root,
    .flex .Mui-disabled {
      color: #808080 !important;
    }

    .flex label {
      cursor: not-allowed !important;
      pointer-events: none;
    }
  `}
`;

export const RadioList = styled.div`
  display: flex;
  flex-direction: ${({ orientation }) =>
    orientation === "VERTICAL" ? "column" : "row"};
  gap: ${({ orientation }) => (orientation === "VERTICAL" ? "2px" : "20px")};

  @media (max-width: 578px) {
    gap: 30px;
  }
  @media (max-width: 450px) {
    gap: 40px;
  }
`;

export const Title = styled.label`
  color: #3f4254;
  font: normal 400 14px ${({ theme }) => theme.typography.secondary};
  line-height: 18px;
  display: inline;
  align-items: center;
  cursor: pointer;

  .subtitle {
    color: gray;
  }
`;

export const ErrorMessage = styled.span`
  color: #f0431b;
  font-family: Switzer;
  font: normal 400 12px ${({ theme }) => theme.typography.primary};
  line-height: 21px;
  letter-spacing: -0.56px;
`;
