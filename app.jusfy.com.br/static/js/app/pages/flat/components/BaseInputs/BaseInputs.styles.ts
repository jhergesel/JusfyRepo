import styled from "styled-components";
import { Checkbox } from "@mui/material";

export const WrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LabelInput = styled.label`
  font: normal 500 14px ${({ theme }) => theme.typography.quartenary};
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
  text-align: left;
  color: ${({ theme }) => theme.colors.black.primary};
  margin: 0;

  span {
    color: #d83143;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;

  gap: 0px;
  border-radius: 5px !important;
  border: ${({ error }) =>
    error ? "1px solid #FF3A4F !important" : "1px solid #cac9cf !important"};
  padding: 0px 12px 0px 12px;
  opacity: 0px;
  outline: none !important;
  font: normal 400 14px ${({ theme }) => theme.typography.quartenary} !important;
  background: ${({ disabled }) =>
    disabled ? "rgba(202, 201, 207, 0.20)" : "#ffffff !important"};

  ::after {
    display: none;
  }
  ::before {
    display: none;
  }
`;
export const TermsOptionContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
`;

export const TermsOptionCheckBox = styled(Checkbox)`
  margin: 0 !important;
  padding: 0 !important;
  width: 18px;
  height: 18px;
`;

export const TermsOptionLabel = styled.label`
  font-family: ${({ theme }) => theme.typography.quartenary}
  font-size: 12px;
  color: #3f4254;
  font-weight: 400;

  a {
    color: #01ab7d;
    text-decoration: underline;
    cursor: pointer;
    font-weight: 700;
  }
`;

export const Error = styled.div`
  color: #e91229;
  font-family: ${({ theme }) => theme.typography.quartenary}
  font-size: 12px;
  font-weight: 400;
`;
