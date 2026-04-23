import styled from "styled-components";

export const WrapperModalContent = styled.div`
  display: flex;
  position: relative;
  padding: 40px;
  width: 500px;
  @media screen and (max-width: 578px) {
    width: 100%;
  }
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 578px) {
    width: 100%;
  }
`;

export const CloseIconButton = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
`;

export const Title = styled.p`
  color: var(--neutral-text-text-darker, #131313);
  text-align: center;
  font-family: var(--font-family-font-family-title, "Noto Sans");
  font-size: var(--font-size-font-size-20, 20px);
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  margin-top: 24px;
`;

export const Description = styled.p`
  color: var(--neutral-text-text-light, #5e5e60);
  text-align: center;
  font-family: var(--font-family-font-family-text, "Noto Sans");
  font-size: var(--font-size-font-size-14, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

export const ChangesTitle = styled.p`
  margin-top: 24px;
  margin-bottom: 8px;
  color: var(--neutral-text-text-darker, #131313);
  font-family: var(--font-family-font-family-title, "Noto Sans");
  font-size: var(--font-size-font-size-18, 18px);
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 25.2px */
`;

export const CheckIcon = styled.img`
  width: 13px;
  height: 13px;
  border-radius: 3px;
  background: var(--brand-primary-primary-lighter, #e6f7f2);
  margin-right: 8px;
`;

export const CheckLabel = styled.div`
  color: var(--neutral-text-text-light, #5e5e60);
  font-family: var(--font-family-font-family-text, "Noto Sans");
  font-size: var(--font-size-font-size-14, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 8px;
`;
