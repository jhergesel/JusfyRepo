import styled from 'styled-components';

export const Icon = styled.div<{ $active?: boolean; $routeActive?: boolean }>`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 4px;
  transition: background 0.3s ease;

  &:has([data-sidebar-gamification-surface]) {
    padding: 0;
  }

  ${({ $active, $routeActive }) =>
    ($active || $routeActive) &&
    `
    &:not(:has([data-sidebar-gamification-surface])) {
      background: #E7E8EC;
    }
  `}

  &:hover:not(:has([data-sidebar-gamification-surface])) {
    background: ${({ $active, $routeActive }) =>
      $active || $routeActive ? '#E7E8EC' : 'rgba(0, 0, 0, 0.04)'};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  &:hover ${Icon}:not(:has([data-sidebar-gamification-surface])) {
    background: rgba(0, 0, 0, 0.04);
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const MenuPanel = styled.div<{ $left?: number; $bottom?: number }>`
  position: fixed;
  left: ${({ $left = 0 }) => $left}px;
  bottom: ${({ $bottom = 0 }) => $bottom}px;
  width: min(370px, calc(100vw - 24px));
  max-height: calc(100vh - 24px);
  overflow: auto;
  border-radius: 8px;
  background: #fff;
  box-shadow:
    0 6px 30px 5px rgba(0, 0, 0, 0.12),
    0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 8px 10px -5px rgba(0, 0, 0, 0.2);
  z-index: 1300;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

export const ChallengesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const SectionTitle = styled.p`
  margin: 0;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
  color: #131313;
`;

export const Cta = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 4px 24px;
  border: none;
  border-radius: 5px;
  background: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
  color: #01ab7d;

  &:hover {
    text-decoration: underline;
  }
`;
