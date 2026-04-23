import styled from "styled-components";

export const HomeContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 16px;
  margin-top: 20px;

  width: 352px;
  height: 200px;
  border: 1px dashed #babcbe;
  border-radius: 4px;

  p {
    width: 284px;
    height: 24px;

    font-family: "Switzer", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #000000;
  }

  .buttons-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 16px;

    width: 320px;
    height: 128px;

    .button-file {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 24px 64px;
      gap: 8px;

      width: 320px;
      height: 72px;

      background: #41c78f;
      border-radius: 4px;
      margin-top: -15px;
      transition: 0.2s ease-in-out;
      cursor: pointer;

      :hover {
        background-color: #13b370;
      }

      p {
        width: 192px;
        height: 24px;
        font-family: "Switzer", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;

        display: flex;
        align-items: center;

        color: #fafafa;
      }

      .input {
        display: none;
      }
    }

    .cloud-service-container {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 0px;
      gap: 16px;

      width: 320px;
      height: 40pc;

      .google-drive-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 8px;
        background-color: transparent;
        width: 152px;
        height: 40px;

        border: 2px solid #babcbe;
        border-radius: 4px;
        margin-top: -12px;

        .button-google-drive {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 8px;
          gap: 8px;

          span {
            width: 90px;
            height: 21px;

            font-family: "Switzer", sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 21px;
            /* identical to box height */

            display: flex;
            align-items: center;

            color: #000000;
          }
        }
      }
      .dropbox-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 8px;

        width: 152px;
        height: 40px;

        border: 2px solid #babcbe;
        border-radius: 4px;
        margin-top: -12px;
        background-color: transparent;

        .dropbox-button {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 8px;
          gap: 8px;

          span {
            width: 60px;
            height: 21px;

            font-family: "Switzer", sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 21px;
            /* identical to box height */

            display: flex;
            align-items: center;

            color: #000000;
          }
        }
      }
    }
  }
`;

export const CardInfo = styled.div `
  position: absolute;
  width: 1920px;
  height: 100%;
  right: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.25);

  /* Inside auto layout */

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    gap: 24px;
    margin-top: 35px;

    position: absolute;
    width: 640px;
    height: 298px;
    left: calc(50% - 640px / 2);
    top: calc(50% - 298px / 2);

    background: #ffffff;
    border-radius: 4px;

    /* Inside auto layout */

    flex: none;
    order: 3;
    flex-grow: 0;
    z-index: 3;

    .card-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px;
      gap: 24px;

      width: 560px;
      height: 48px;

      /* Inside auto layout */

      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 0;

      .card-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 8px;

        width: 428px;
        height: 48px;

        span {
          width: 384px;
          height: 48px;

          font-family: "Switzer", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 29px;
          line-height: 48px;
          /* identical to box height */

          display: flex;
          align-items: center;
          text-align: center;

          color: #4b4b4b;

          /* Inside auto layout */

          flex: none;
          order: 1;
          flex-grow: 0;
        }
      }

      .card-close {
        width: 36px;
        height: 36px;
        margin-top: -10px;
      }
    }

    p {
      width: 560px;
      height: 60px;

      font-family: "Switzer", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;

      align-items: center;

      color: #4b4b4b;

      /* Inside auto layout */
      a {
        text-decoration: underline;
        color: #091d5c;
      }
    }

    .button-plans {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 16px 40px;
      gap: 8px;

      width: 302px;
      height: 62px;

      background: #091d5c;
      border-radius: 4px;

      span {
        width: 202px;
        height: 30px;

        font-family: "Switzer", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        /* identical to box height */

        display: flex;
        align-items: center;

        color: #ffffff;
      }
    }
  }
  @media (max-width: 1280px) {
    .container {
      width: 652px;
      margin: 0 auto;
      left: calc(50% -200px / 2);
      right: 20px;
    }
  }
  @media (max-width: 1200px) {
    .container {
      width: 652px;
      margin: 0 auto;
      left: calc(50% - 10px / 2);
      right: 0px;
    }
  }
  @media (max-width: 912px) {
    .container {
      width: 652px;
      margin: 0 auto;
      left: calc(50% - 10px / 2);
      right: -130px;
    }
  }

  @media (max-width: 820px) {
    .container {
      width: 652px;
      margin: 0 auto;
      left: calc(50% - 10px / 2);
      right: -120px;
    }
  }
  @media (max-width: 768px) {
    .container {
      width: 652px;
      margin: 0 auto;
      left: calc(50% - 20px / 2);
      right: -180px;
    }
  }
  @media (max-width: 712px) {
    .container {
      width: 652px;
      margin: 0 auto;
      left: calc(50% - 20px / 2);
      right: -250px;
    }
  }
  @media (max-width: 548px) {
    .container {
      width: 354px;
      margin: 0 auto;
      right: -550px;
      padding: 15px;

      .card-header {
        width: 330px;
        .card-title {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          span {
            width: 201px;
            font-size: 16px;
          }
        }

        .icon {
          width: 20px !important;
          height: 20px !important;
        }

        .card-close {
        }
      }

      p {
        padding: 15px;

        width: 350px;
        font-size: 14px;
        margin-top: -15px;
      }

      .button-plans {
        width: 324px;
        padding: 8px 20px;
        height: 45px;
        margin-top: 20px;
      }
    }
  }
  @media (max-width: 395px) {
    .container {
      width: 354px;
      margin: 0 auto;
      right: -590px;
      padding: 15px;

      .card-header {
        width: 330px;
        .card-title {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          span {
            width: 201px;
            font-size: 16px;
          }
        }

        .icon {
          width: 20px !important;
          height: 20px !important;
        }

        .card-close {
        }
      }

      p {
        padding: 15px;

        width: 350px;
        font-size: 14px;
        margin-top: -15px;
      }

      .button-plans {
        width: 324px;
        padding: 8px 20px;
        height: 45px;
        margin-top: 20px;
      }
    }
  }
  @media (max-width: 320px) {
    .container {
      width: 310px;
      margin: 0 auto;
      right: -650px;
      padding: 15px;

      .card-header {
        width: 290px;
        .card-title {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          span {
            width: 201px;
            font-size: 16px;
          }
        }

        .icon {
          width: 20px !important;
          height: 20px !important;
        }

        .card-close {
        }
      }

      p {
        padding: 15px;

        width: 310px;
        font-size: 14px;
        margin-top: -15px;
      }

      .button-plans {
        width: 290px;
        padding: 8px 20px;
        height: 45px;
        margin-top: 20px;
      }
    }
  }
`;