import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  height: 100vh;
  background-color: #293667;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const LogoWrapper = styled.div `
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

export const LogoText = styled.span `
  color: rgb(232, 230, 227);
`;

export const Wrapper = styled.div `
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  width: ${({ width }) => width};
`;

export const Label = styled.label `
  color: #293667;
  font-size: 14px;
`;

export const Error = styled.div `
  background-color: #de5462;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  text-align: center;
`;

export const ErrorLabel = styled.span `
  color: #de5462;
`;

export const Input = styled.input `
  width: 100%;
  height: calc(1.5em + 1.3rem + 2px);
  border: 2px solid #e4e6ef !important;
  border-radius: 10px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding-left: 10px;
`;

export const Form = styled.div `
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h2 `
  color: #3f4254;
  font-weight: 500;
  margin-bottom: 21px;
`;

export const Fields = styled.div `
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

export const FieldsContainer = styled.div `
  width: 50%;
  ${({ half }) => (half ? "padding-right: 10px;" : null)}
`;

export const FieldsWrapper = styled.div `
  display: flex;
  gap: 20px;
`;

export const ActionWrapper = styled.div `
  align-items: center;
  display: flex;
  margin: 11px 0;
  gap: ${({ justifyContent }) => (!justifyContent ? "24px" : null)};
  ${({ justifyContent }) =>
    justifyContent ? `
justify - content: $ {
    justifyContent
}
` : null};
`;

export const ButtonLabel = styled.span `
  font-weight: lighter;
`;

export const SubmitButton = styled.button `
  cursor: pointer;
  background: #40c78f;
  padding: 10px 30px;
  font-size: 18px;
  color: #fff;
  border-radius: 10px;
  border: none;
  width: 50%;
  ${({ disabled }) => (disabled ? "opacity: 0.8" : null)};
`;

export const SubmitButtonSpinner = styled.span `
  top: 0;
  left: calc(50% + ${({ left }) => left}px);
  position: relative;
`;

export const Button = styled.button `
  cursor: pointer;
  right: 42px;
  bottom: 116px;
  color: #293667;
  font-weight: ${({ lighter }) => (lighter ? "lighter" : "bold")};
  background: transparent;
  border: none;
  height: 27px;
  padding: 0;
`;

export const BreakLine = styled.hr ``;