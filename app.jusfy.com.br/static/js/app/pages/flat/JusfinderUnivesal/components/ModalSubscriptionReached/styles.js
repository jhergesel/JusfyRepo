import styled from "styled-components";
import {
    Modal
} from "react-bootstrap";

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
  z-index: 9999;
  :hover {
    cursor: pointer;
    background: #3ab380;
  }
`;

export const ResponsiveModal = styled(Modal)
`
  .modal-body {
    padding: 40px !important;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .modal-content {
    border-radius: 10px !important;
    max-height: 90vh;
  }

  .modal-dialog {
    max-width: 1200px !important;
  }

  @media screen and (max-width: 767px) {
    .modal-content {
      width: 90% !important;
      margin: 0 auto !important;
    }
  }
`;