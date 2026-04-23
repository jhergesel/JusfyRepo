import styled from "styled-components";

export const Input = styled.input<{ isError?: boolean }>`
  width: 62px;
  height: 62px;
  padding: 16px;
  margin: 0 8px;
  text-align: center;
  font-size: 2rem;
  border-radius: 8px;
  border: 1px solid ${({ isError }) => (isError ? "#F64E60" : "#ceced2")};
  background: #fff;
  transition: 0.3s ease-in-out;
  font-family: "Noto Sans";
  color: #131313;

  &:focus {
    border-color: #01ab7d;
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textField;

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    font-size: 1.5rem;
    margin: 0 4px;
  }
`;

export const ErrorMessage = styled.p`
  color: #f64e60;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.5px;
  text-align: center;
  margin-top: 8px;
`;
