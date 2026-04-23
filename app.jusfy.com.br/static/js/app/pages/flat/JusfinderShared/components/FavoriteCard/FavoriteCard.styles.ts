import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { ButtonHTMLAttributes } from 'react';

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 118px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--gray-300, #E7E8EC);
  background: var(--gray-0, #FFF);
  padding: 16px;
  @media (min-width: 900px) {
   width: 200px;
  }
`;

export const TitleWrapper = styled.div`
  color: var(--gray-900, #131313);
  font-family: var(--font-family-font-family-title, 'Noto Sans');
  font-size: var(--font-size-font-size-14, 14px);
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

export const ContentCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export const CreditQuantityCard = styled.div`
  display: flex;
  width: 50px;
  height: 34px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 4px;
  background: #e6f7f2;

  color: #383839;
  text-align: center;

  font-family: ${({ theme }) => theme.typography.quartenary};

  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

export const Icon = styled(SVG)`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;

export const OrderButtonContainer = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--brand-primary-primary-main, #01ab7d);
  background: var(--neutral-background-background-lighter, #fff);
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${({ hasCredits }) => hasCredits ? "end" : "center"};
`;
