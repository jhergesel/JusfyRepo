import styled from "styled-components";

export const ToolsButton = styled.button `
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${({ $hasActive }) => $hasActive ? '#F4F6F9' : 'none'};
  border: ${({ $hasActive }) => $hasActive ? '1px solid #E1E3EA' : '1px solid transparent'};
  color: #5E6278;
  font-size: 12px;
  cursor: pointer;
  padding: 4px 10px;
  border-radius: 6px;
  transition: all 0.2s ease;
  font-weight: 500;

  &:hover {
    background: #F4F6F9;
    border-color: #E1E3EA;
  }
`;

export const CountBadge = styled.span `
  background: #5E6278;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 18px;
  text-align: center;
`;

export const ToolMenuItem = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ $disabled }) => $disabled ? 0.6 : 1};
  transition: background 0.2s ease;

  &:hover {
    background: ${({ $disabled }) => $disabled ? 'transparent' : '#F4F6F9'};
  }
`;

export const ToolInfo = styled.div `
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ToolLabel = styled.span `
  font-size: 14px;
  font-weight: 500;
  color: ${({ $disabled }) => $disabled ? '#B5B5C3' : '#181C32'};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ComingSoonText = styled.span `
  font-size: 10px;
  color: #7E8299;
  font-weight: 400;
  font-style: italic;
`;

export const ActiveToolBadge = styled.div `
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${({ $color }) => `
$ {
    $color
}
15 `};
  border: 1px solid ${({ $color }) => $color};
  color: ${({ $color }) => $color};
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: 500;
`;

export const RemoveButton = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
  border-radius: 50%;
  transition: all 0.2s ease;
  margin-left: 4px;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  svg {
    font-size: 14px;
  }
`;