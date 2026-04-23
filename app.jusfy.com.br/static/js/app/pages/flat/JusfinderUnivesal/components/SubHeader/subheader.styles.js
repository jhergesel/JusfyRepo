import styled from "styled-components";

export const SubHeaderWrapper = styled.div `
  width: 100%;
  display: ${props => (props.isVisible ? "flex" : "none")};
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  position: relative;

  @media (max-width: 579px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;