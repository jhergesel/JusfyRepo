import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    margin: 4px 0 0;
    font-weight: 700;
    color: #111219;
    font-family: "Noto Sans";
  }

  span {
    font-family: "Noto Sans";
    color: #655d79;
  }

  @media (max-width: 579px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
