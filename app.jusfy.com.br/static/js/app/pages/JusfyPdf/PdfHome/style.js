import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #111219;

  .content-title {
    display: grid;
    place-items: center;
    padding: 2rem;

    .title {
      display: flex;
      align-items: baseline;
      gap: 0.2rem;

      p {
        font-family: "Switzer", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 2.4rem;
        color: #f7f7f7;
      }
    }

    span {
      width: 26rem;
      font-family: "Switzer";
      font-style: normal;
      font-weight: 400;
      font-size: 1.5rem;

      display: flex;
      align-items: center;
      text-align: center;
      color: #f7f7f7;
    }
  }

  .content-button {
    display: grid;
    place-items: center;
    margin-top: 4rem;

    grid-gap: 1.5rem;

    .comprimir {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20rem;

      button {
        all: unset;
        width: 100%;
        background: #41c78f;
        border-radius: 0.25rem;
        font-family: "Switzer", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 1.875rem;
        padding: 1rem;
        /* identical to box height */
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #fafafa;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        :hover {
          background-color: #13b370;
        }
      }
    }

    .decision {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20rem;

      small {
        font-family: "Switzer", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #fafafa;
      }
    }

    .division {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20rem;

      button {
        all: unset;
        width: 100%;
        background: #41c78f;
        border-radius: 0.25rem;
        font-family: "Switzer", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 1.875rem;
        padding: 1rem;
        /* identical to box height */
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #fafafa;
        cursor: pointer;
        transition: 0.2s ease-in-out;

        :hover {
          background-color: #13b370;
        }
      }
    }
  }
`;