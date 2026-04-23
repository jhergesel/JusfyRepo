import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  display: grid;
  place-items: center;

  .content {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    gap: 0.5rem;
    border: 2px solid #2f3036;
    border-radius: 4px;
    margin-bottom: 1.6rem;
    max-width: 440px;

    .header {
      padding: 1rem;
      height: fit-content;

      progress {
        width: 80%;
      }
      p {
        font-family: "Switzer", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 24px;
        /* identical to box height */

        display: flex;
        align-items: center;

        color: #f4f4f4;
      }
    }

    .file {
      width: 100%;
      display: flex;
      height: fit-content;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      span {
        text-align: center;
        font-family: "Switzer", sans-serif;
        font-style: normal;
        font-weight: 500;
        padding-top: 1rem;
        font-size: 1.4rem;
        line-height: 2.25rem;

        /* identical to box height */

        color: #b5b5c3;
      }
    }
  }
`;