import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 80px;
  gap: 2px;

  width: 100%;

  height: 100vh;
  background: #111219;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 2px;

    background-color: transparent;
    width: 418px;
    height: 128px;

    .header-title {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px;
      gap: 4px;

      h3 {
        width: 100%;
        height: 54px;

        font-family: "Switzer", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 54px;
        /* identical to box height */

        display: flex;
        align-items: center;

        color: #f4f4f4;
      }
    }

    span {
      width: 418px;
      height: 72px;
      font-family: "Switzer", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;

      display: flex;
      text-align: center;
      color: #888888;

      opacity: 0.9;
    }
  }
  @media (max-width: 1400px) {
    width: 100%;
    padding: 40px;
    height: 100%;
  }
  @media (max-width: 1200px) {
    width: 100%;
    padding: 40px;
    height: 100%;
  }
  @media (max-width: 992px) {
    width: 100%;
    padding: 40px;
    height: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 40px;
    height: 100vh;
  }
  @media (max-width: 548px) {
    width: 100%;
    height: 100%;
    padding: 20px;
    .header {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .header-title {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 1.0625rem 0px 6.0625rem;

        h3 {
          text-align: center;
          font-size: 25px;
        }
      }

      span {
        font-size: 15px;
        text-align: center;
        padding: 0px 19px 0px 22px;
      }
    }
  }

  @media (max-width: 360px) {
    width: 100%;
    height: 100%;
    .header {
      width: 100%;

      .header-title {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        h3 {
          text-align: center;
          font-size: 16px;
        }
      }

      span {
        width: 100%;
        font-size: 16px;
      }
    }
  }
`;