import styled from "styled-components";

export const PagesContainer = styled.div `
  margin-top: 4px;

  display: flex;
  justify-content: center;
  ul {
    display: flex;
    gap: 6px;
    list-style: none;
  }

  ul li.active {
    color: #131313;
    font-weight: 500;
    background: #f4f5f9;
  }
  ul li {
    font-family: "Noto Sans";
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    border-radius: 100%;
    width: 32px;
    height: 32px;
    padding: 6px 10px;
    color: #5e5e60;
  }

  .nextActions,
  .prevActions {
    display: flex;
    align-items: center;
    gap: 4px;

    div {
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s;
      cursor: pointer;
      border-radius: 100%;

      &:hover {
        background: #f4f5f9;
      }
    }

    div.forbidden {
      opacity: 0.38;
    }
  }

  .prevActions {
    div {
      transform: rotate(180deg);
    }
  }

  @media (max-width: 578px) {
    width: 100%;
    justify-content: center;
  }
`;