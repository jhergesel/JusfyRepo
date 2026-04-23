import styled from "styled-components";

export const Container = styled.div `
  min-height: 52px;
  position: relative;
  top: 86.05px;
  background-color: #f8bf00;
  border-radius: 6px;
  font-family: Switzer;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  margin: 12.05px 16px;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const ContentWrapper = styled.div `
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ContentActions = styled(ContentWrapper)
`
  gap: 38px;
`;

export const Button = styled.button `
  min-width: fit-content;
  width: 121px;
  height: 36px;
  padding: 8px;
  border-radius: 9px;
  border: 1px solid #fff;
  background-color: transparent;
  font-size: 12px;
  color: #fff;
`;