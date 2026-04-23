import {
    Modal
} from "react-bootstrap";
import styled from "styled-components";

export const ButtonClose = styled.div `
  background: #41c78f;
  display: inline-block;
  padding: 10px 17px;
  position: absolute;
  top: -15px;
  right: -15px;
  color: #fff;
  font-weight: bold;
  border-radius: 50px;

  :hover {
    cursor: pointer;
    background: #3ab380;
  }
`;

export const ResponsiveModal = styled(Modal)
`
  .modal-body {
    padding: 40px !important;
  }

  .modal-content {
    border-radius: 10px !important;
  }

  .modal-dialog {
    max-width: 700px !important;
  }

  @media screen and (max-width: 767px) {
    .modal-content {
      width: 90% !important;
      margin: 0 auto !important;
    }
  }
`;

export const Content = styled.div `
  ${({ hasLink }) => (hasLink ? "margin-bottom: 20px;" : null)}
`;

export const Link = styled.a `
  font-weight: bold;
`;