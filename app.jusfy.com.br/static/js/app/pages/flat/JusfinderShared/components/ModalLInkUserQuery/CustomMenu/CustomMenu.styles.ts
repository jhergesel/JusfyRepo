import styled from "styled-components";

export const CustomMenuContent = styled.div`
  position: absolute !important;
  z-index: 99999;
  background: #fff;
  width: 100%;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  padding: 10px;
  background: #fff;
  text-align: center;
  button {
    background-color: #01ab7d !important;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background: #01906a !important;
    }
  }
`;
