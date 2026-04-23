import styled from "styled-components";
import SVG from "react-inlinesvg";

export const FilterDrawerButtonWrapper = styled.button<{ width?: number | string; disabled?: boolean }>`
  display: flex;
  height: 40px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid #ceced2;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-family: ${({ theme }) => theme.typography.quartenary};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  width: ${({ width }) =>
    typeof width === "number" ? `${width}px` : width || "100%"};
  background-color: ${({ disabled }) => (disabled ? "#f5f5f5" : "#fff")};
  color: ${({ disabled }) => (disabled ? "#9ca3af" : "#111")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#f5f5f5" : "#f0f0f0")};
  }
`;

export const Icon = styled(SVG)`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  cursor: pointer;
`;
