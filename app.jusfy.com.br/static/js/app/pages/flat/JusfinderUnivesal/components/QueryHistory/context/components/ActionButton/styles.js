import styled from "styled-components";

export const Content = styled.div `
  position: relative;
`;

export const ButtonAction = styled.button `
  display: flex;
  visibility: ${({ status }) => (status === "pending" ? "hidden" : "visible")};
  width: 32px;
  height: 32px;
  padding: 0px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border: none;
  border-radius: 4px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 8px;
    background-image: url("/media/jusfinder/icon-button.svg");
    left: 8px;
    background-size: cover;
    width: 16px;
    height: 16px;
    background-color: transparent;
  }
`;

export const Menu = styled.div `
  display: ${props => (props.open ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  background-color: #fff;
  width: 144px;
  top: 30px;
  left: -110px;
  border-radius: 4px;
  padding: 8px 0 8px 0;
  z-index: 99;
  box-shadow: 0px 3px 14px 2px rgba(0, 0, 0, 0.12),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 5px 5px -3px rgba(0, 0, 0, 0.2);

  div {
    padding: 6px 16px;
    width: 100%;

    span {
      margin-right: 0px !important;
      color: #383839;
      font-family: ${({ theme }) => theme.typography.quartenary};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.15px;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
      cursor: pointer;
    }
  }
`;
export const ContainerLoading = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: not-allowed;
`;