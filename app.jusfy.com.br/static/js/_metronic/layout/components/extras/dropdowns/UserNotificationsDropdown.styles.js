import styled from "styled-components";

export const BoxNotifications = styled.div `
  background-color: #111219;

  span.btn {
    color: #ffffff;
    background-color: #41c78f;
    border-color: #41c78f;

    &:hover {
      background-color: #50d49d;
      border-color: #50d49d;
    }
  }

  > ul li a {
    border-bottom-color: #41c78f !important;
  }
`;

export const NotificationsTitle = styled.span `
  font-weight: 500;
  color: #111219;
`;

export const NotificationsDate = styled.span ``;