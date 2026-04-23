import styled from "styled-components";

export const Badge = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: var(--radius-full, 999px);
  border: 1px solid var(--neutral-stroke-stroke-dark, #ceced2);
  background: var(--neutral-background-background-lighter, #fff);
`;

export const Avatar = styled.span`
  display: flex;
  width: 26px;
  height: 26px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: var(--radius-full, 999px);
  background: var(--brand-primary-primary-light, #b3e6d8);
`;
