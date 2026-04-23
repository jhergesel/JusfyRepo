import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  gap: 8px;
  background: linear-gradient(180deg, #111219 0%, #111219 365.62%);
  width: 100%;
  height: 6rem;

  border-bottom: 0.5px solid #4e4e4e;

  .logo {
    display: flex;
    width: 181.34px;
    height: 40px;

    img {
      display: flex;
      width: 181.34px;
      height: 40px;
    }
  }

  .buttons-content {
    display: flex;
    gap: 2rem;
  }
  .buttons-content.mobile {
    display: none;
  }
  .icon-hamburguer {
    display: none;
  }
  .userInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px 32px;
    gap: 8px;
    width: fit-content;
    max-width: 50%;
    height: 46px;
    cursor: pointer;
    border: 2px solid #41c78f;
    border-radius: 4px;
    background-color: transparent;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;

    font-family: "Switzer", sans-serif;

    color: #41c78f;
  }
  .userInfoAbout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 18px;
    gap: 8px;
    width: fit-content;

    height: 46px;
    cursor: pointer;
    border: 2px solid #41c78f;
    border-radius: 4px;
    background-color: transparent;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;

    font-family: "Switzer", sans-serif;

    color: #41c78f;
  }

  .login {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 32px;
    gap: 8px;
    width: 145px;
    height: 46px;
    background: #41c78f;
    border: 2px solid #41c78f;
    border-radius: 4px;
    cursor: pointer;

    .loginText {
      width: 62px;
      height: 30px;

      font-family: "Switzer", sans-serif;
      font-style: normal;
      font-size: 17px;
      font-weight: 500;
      line-height: 30px;

      display: flex;
      margin-top: 12px;
      color: #ffff;
    }
  }

  @media (max-width: 578px) {
    .logo {
      width: 70px;

      img {
        width: 70px;
      }
    }
    .buttons-content {
      display: none;
    }

    .buttons-content.mobile {
      position: absolute;
      width: 80%;
      height: 15rem;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      top: 10%;
      right: 10%;
      background-color: #18191f;
      z-index: 1;
      border-radius: 5px;
      gap: 0.8rem;
      padding: 0;
    }

    .userInfo {
      width: 75%;
      display: flex;

      max-width: 100%;
      padding: 0;
      border: none;
      padding: 0;

      color: #fff;

      &:hover {
        opacity: 0.7;
      }
    }
    .userInfoAbout {
      width: 100%;
      max-width: 100%;
      border: none;
      display: flex;
      justify-content: flex-start;
      color: #fff;
      padding: 0;
      margin-top: 0.8rem;
      &:hover {
        opacity: 0.7;
      }
      span {
        text-align: center;
      }
    }
    .login {
      background: transparent;
      border: none;

      &:hover {
        opacity: 0.7;
      }
    }

    .icon-hamburguer {
      display: flex;
    }
  }
`;
export const ContainerLogin = styled.div `
  position: absolute;
  width: 1920px;
  height: 1000px;
  right: 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.25);
  z-index: 2;

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    padding: 40px;
    gap: 24px;
    margin-top: 40px;
    width: 648px;
    height: 478px;

    position: absolute;
    background: #111219;
    border-radius: 4px;
    z-index: 2;

    .container-closed {
      width: 36px;
      height: 36px;
    }

    .input-first {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      gap: 4px;

      width: 560px;
      height: 88px;

      label {
        width: 45px;
        height: 24px;

        font-family: "Switzer", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height */

        display: flex;
        align-items: center;

        color: #f7f7f7;
      }

      input {
        box-sizing: border-box;

        width: 560px;
        height: 60px;

        background: #ffffff;
        border: 2px solid #babcbe;
        border-radius: 4px;
      }
    }
    .input-second {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      gap: 4px;

      width: 560px;
      height: 88px;

      .input-title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0px;
        gap: 8px;

        width: 560px;
        height: 24px;

        label {
          width: 52px;
          height: 24px;

          font-family: "Switzer", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          /* identical to box height */

          display: flex;
          align-items: center;

          color: #f7f7f7;
        }

        a {
          width: 149px;
          height: 24px;

          font-family: "Switzer", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          /* identical to box height */

          display: flex;
          align-items: center;
          text-decoration-line: underline;

          color: #41c78f;
        }
      }

      input {
        width: 560px;
        height: 60px;

        background: #ffffff;
        border: 2px solid #babcbe;
        border-radius: 4px;
      }
    }

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 16px 40px;
      gap: 8px;

      width: 560px;
      height: 62px;
      border: none;
      background: #41c78f;
      border-radius: 4px;
      cursor: pointer;
      transition: 0.2 ease-in-out;

      :hover {
        background-color: #13b370;
      }

      span {
        width: 60px;
        height: 30px;

        font-family: "Switzer", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        /* identical to box height */

        display: flex;
        align-items: center;

        color: #fafafa;
      }
    }

    p {
      width: 420px;
      height: 24px;

      font-family: "Switzer", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height */

      display: flex;
      align-items: center;
      text-align: center;

      color: #4b4b4b;

      a {
        margin-left: 3px;
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 1891px) {
    width: 100%;
    z-index: 3;
    .container {
      width: 45%;
      margin-top: 0px;
      top: 100px;

      .input-first {
        width: 100%;

        label {
          font-size: 14px;
        }
        input {
          width: 100%;
          height: 50px;
        }
      }
      .input-second {
        width: 100%;
        .input-title {
          width: 100%;
          a {
            width: 50%;
            font-size: 12px;

            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
          }

          label {
            font-size: 14px;
          }
        }

        input {
          width: 100%;
          height: 50px;
        }
      }

      button {
        width: 100%;
        height: 50px;
        padding: 14px 30px;

        span {
          font-size: 18px;
        }
      }

      p {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
      }
    }
  }
  @media (max-width: 1290px) {
    width: 100%;
    z-index: 6;
    .container {
      width: 65%;
      margin-top: 0px;
      top: 100px;
      z-index: 9;
      .input-first {
        width: 100%;

        label {
          font-size: 14px;
        }
        input {
          width: 100%;
          height: 50px;
        }
      }
      .input-second {
        width: 100%;
        .input-title {
          width: 100%;
          a {
            width: 50%;
            font-size: 12px;

            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
          }

          label {
            font-size: 14px;
          }
        }

        input {
          width: 100%;
          height: 50px;
        }
      }

      button {
        width: 100%;
        height: 50px;
        padding: 14px 30px;

        span {
          width: 20%;
          font-size: 18px;
        }
      }

      p {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
      }
    }
  }

  @media (max-width: 820px) {
    width: 100%;

    .container {
      width: 55%;
      margin-top: 0px;
      top: 100px;

      .input-first {
        width: 100%;

        label {
          font-size: 14px;
        }
        input {
          width: 100%;
          height: 50px;
        }
      }
      .input-second {
        width: 100%;
        .input-title {
          width: 100%;
          a {
            width: 50%;
            font-size: 12px;

            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
          }

          label {
            font-size: 14px;
          }
        }

        input {
          width: 100%;
          height: 50px;
        }
      }

      button {
        width: 100%;
        height: 50px;
        padding: 14px 30px;

        span {
          width: 20%;
          font-size: 18px;
        }
      }

      p {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;

    .container {
      width: 85%;
      margin-top: 0px;
      top: 100px;

      .input-first {
        width: 100%;

        label {
          font-size: 14px;
        }
        input {
          width: 100%;
          height: 50px;
        }
      }
      .input-second {
        width: 100%;
        .input-title {
          width: 100%;
          a {
            width: 50%;
            font-size: 12px;

            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
          }

          label {
            font-size: 14px;
          }
        }

        input {
          width: 100%;
          height: 50px;
        }
      }

      button {
        width: 100%;
        height: 50px;
        padding: 14px 30px;

        span {
          width: 20%;
          font-size: 18px;
        }
      }

      p {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
      }
    }
  }
  @media (max-width: 548px) {
    width: 100%;
    margin-bottom: 1.6rem;

    .container {
      width: 95%;
      margin-top: 0px;
      top: 100px;

      .input-first {
        width: 100%;

        label {
          font-size: 14px;
        }
        input {
          width: 100%;
          height: 50px;
        }
      }
      .input-second {
        width: 100%;
        .input-title {
          width: 100%;
          a {
            width: 50%;
            font-size: 12px;

            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
          }

          label {
            font-size: 14px;
          }
        }

        input {
          width: 100%;
          height: 50px;
        }
      }

      button {
        width: 100%;
        height: 50px;
        padding: 14px 30px;

        span {
          width: 20%;
          font-size: 18px;
        }
      }

      p {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
      }
    }
  }
`;