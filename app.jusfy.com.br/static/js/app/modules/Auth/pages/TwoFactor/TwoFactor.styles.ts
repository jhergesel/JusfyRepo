import styled from "styled-components";
import Badge from "../../../../components/flat/ui/Badge";
import InputOtp from "app/components/flat/ui/Inputs/InputOtp";

export const Header = styled.header`
  padding: 20px 40px;
  background-color: #ffffff;
  border-bottom: 1px solid #e7e8ec;

  @media (max-width: 768px) {
    padding: 16px 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Section = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    min-height: 100vh;
    padding: 20px;
  }
`;

export const Banner = styled.img`
  flex: 1;
  padding: 24px;
  max-width: 50%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 20px;
    gap: 16px;
  }
`;

export const Title = styled.h1`
  color: var(--neutral-text-text-darker, #131313);
  font-family: var(--font-family-font-family-title, "Noto Sans");
  font-size: var(--font-size-font-size-20, 20px);
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Subtitle = styled.h1`
  color: var(--neutral-text-text-dark, #383839);
  text-align: center;
  font-family: var(--font-family-font-family-text, "Noto Sans");
  font-size: var(--font-size-font-size-14, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const SuccessMessage = styled.p`
  color: #01ab7d;
  font-family: var(--font-family-font-family-text, "Noto Sans");
  font-size: var(--font-size-font-size-14, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  text-align: center;
  margin-top: -10px;
  margin-bottom: 10px;
`;

export const StyledBadge = styled(Badge)`
  cursor: default;
`;

export const StyledInputOtp = styled(InputOtp)``;

export const ButtonText = styled.span`
  color: #fff;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  gap: 10px;
`;

export const Span = styled.span`
  color: var(--neutral-text-text-dark, #383839);
  font-family: var(--font-family-font-family-text, "Noto Sans");
  font-size: var(--font-size-font-size-14, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  padding-top: 24px;
`;

export const ResendLink = styled.a<{ isDisabled?: boolean }>`
  color: ${({ isDisabled }) => (isDisabled ? "#a0a0a0" : "#01ab7d")} !important;
  text-decoration: underline !important;
  cursor: ${({ isDisabled }) =>
    isDisabled ? "not-allowed" : "pointer"} !important;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.6 : 1)};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ isDisabled }) =>
      isDisabled ? "#a0a0a0" : "#007656"} !important;
    text-decoration: underline !important;
  }
`;
