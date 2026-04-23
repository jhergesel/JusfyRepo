import styled from "styled-components";

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

    background: #111219;
    border-radius: 4px;

    /* Inside auto layout */

    flex: none;
    order: 3;
    flex-grow: 0;
    z-index: 3;

    .headers {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px;
      gap: 24px;
      background-color: transparent !important;

      width: 560px;
      height: 48px;

      /* Inside auto layout */

      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 0;

      .title {
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

          color: #f4f4f4;

          /* Inside auto layout */

          flex: none;
          order: 1;
          flex-grow: 0;
        }
      }

      .close {
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

      color: #f4f4f4;

      /* Inside auto layout */
      a {
        text-decoration: underline;
        color: #41c78f;
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

      background: #41c78f;
      border-radius: 4px;

      span {
        width: 202px;
        height: 30px;

        font-family: "Switzer", sans-serif;
        font-style: normal;
        font-weight: 400;
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

      .headers {
        width: 330px;
        .title {
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

        .close {
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

      .headers {
        width: 330px;
        .title {
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

        .close {
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

      .headers {
        width: 290px;
        .title {
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

        .close {
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