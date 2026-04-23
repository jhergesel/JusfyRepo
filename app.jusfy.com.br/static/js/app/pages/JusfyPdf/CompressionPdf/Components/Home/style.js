import styled from "styled-components";

export const HomeContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 16px;
  margin-top: 20px;
  width: 100%;
  max-width: 352px;
  height: 200px;
  border: 1px dashed #babcbe;
  border-radius: 4px;

  p {
    width: 284px;
    height: 24px;

    font-family: "Switzer", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #f4f4f4;
  }

  .buttons-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 16px;

    width: 320px;
    height: 128px;

    span {
      color: #f4f4f4;
    }

    .button-file {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 24px 64px;
      gap: 8px;

      width: 320px;
      height: 72px;

      background-color: #41c78f;
      border-radius: 4px;
      margin-top: -15px;
      cursor: pointer;
      transition: 0.2s ease-in-out;

      :hover {
        background-color: #13b370;
      }

      p {
        width: 192px;
        height: 24px;
        font-family: "Switzer", sans-serif;
        font-style: normal;
        font-weight: 400;
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
  display: none;
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

    .card-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px;
      gap: 24px;
      background-color: #111219 !important;

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

          color: #f4f4f4;

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

export const ModalDownload = styled.div `
  position: absolute;
  width: 100%;
  height: 100vh;
  right: 0px;
  top: 0px;

  background: rgba(0, 0, 0, 0.25);

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    gap: 24px;
    z-index: 2;

    position: absolute;
    width: 708px;
    height: fit-content;
    left: calc(50% - 708px / 2);
    top: calc(50% - 500px / 2);

    background: #111219;
    border-radius: 4px;

    .card-tit {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px;
      gap: 24px;

      width: 100%;
      height: 48px;

      p {
        width: 568px;
        height: 48px;

        font-family: "Switzer", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 48px;
        /* identical to box height */
        color: #f4f4f4;
        display: flex;
        align-items: center;
        text-align: center;
      }
    }

    .content-text {
      height: fit-content;
      p {
        height: fit-content;

        font-family: "Switzer", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;

        align-items: center;
        margin-top: -10px;

        color: #f4f4f4;
      }
    }

    .card-button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      padding: 0px;
      gap: 24px;

      width: 628px;
      height: 62px;
      margin-top: 10px;

      .button-zip {
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
        transition: 0.2s ease-in-out;

        :hover {
          background-color: #13b370;
        }

        span {
          width: 136px;
          height: 30px;

          font-family: "Switzer", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 30px;
          /* identical to box height */

          display: flex;
          align-items: center;

          color: #ffffff;
        }
        .text-loose {
          width: 177px;
          height: 30px;

          font-family: "Switzer", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 30px;
          /* identical to box height */

          display: flex;
          align-items: center;

          color: #ffffff;
        }
      }
    }
  }
  @media (max-width: 962px) {
    width: 100%;
    height: 1200px;
    .container {
      width: 700px;
      left: 140px;
      top: 20%;

      .card-tit {
        width: 650px;

        p {
          width: 90%;
          font-size: 24px;
        }
      }

      p {
        width: 650px;
        font-size: 20px;
      }

      .card-button {
        width: 675px;
        padding: 10px;

        .button-zip {
          width: 56%;
          padding: 0px;

          span {
            width: 250px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            padding: 8px;
          }
          .text-loose {
            font-size: 18px;
            padding: 8px;
          }
        }
      }
    }
  }
  @media (max-width: 820px) {
    width: 100%;
    height: 1200px;
    .container {
      width: 600px;
      left: 90px;
      top: 20%;

      .card-tit {
        width: 550px;

        p {
          width: 90%;
          font-size: 24px;
        }
      }

      p {
        width: 550px;
        font-size: 20px;
      }

      .card-button {
        width: 575px;
        padding: 10px;

        .button-zip {
          width: 46%;
          padding: 0px;

          span {
            width: 250px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            padding: 8px;
          }
          .text-loose {
            font-size: 14px;
            padding: 8px;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 1200px;
    .container {
      width: 90%;
      height: fit-content;
      left: 5%;
      top: 20%;
      gap: 0;

      .card-tit {
        width: 49rem;
        align-items: center;

        p {
          width: 90%;
          height: fit-content;
          font-size: 1.8rem;
        }
      }

      .content-text {
        height: fit-content;
        padding: 0;
        margin-top: 1.5rem;
        p {
          width: fit-content;
          height: fit-content;
          font-size: 1.8rem;
        }
      }

      .card-button {
        width: 575px;
        padding: 10px;

        .button-zip {
          width: 46%;
          padding: 0px;

          span {
            width: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            padding: 8px;
          }
          .text-loose {
            font-size: 14px;
            padding: 8px;
          }
        }
      }
    }
  }
  @media (max-width: 712px) {
    width: 100%;
    height: 1200px;
    .container {
      width: 600px;
      left: 60px;
      top: 20%;

      .card-tit {
        width: 550px;

        p {
          width: 90%;
          font-size: 22px;
        }
      }

      p {
        width: 550px;
        font-size: 18px;
      }

      .card-button {
        width: 575px;
        padding: 10px;

        .button-zip {
          width: 46%;
          padding: 0px;

          span {
            width: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            padding: 8px;
          }
          .text-loose {
            font-size: 14px;
            padding: 8px;
          }
        }
      }
    }
  }
  @media (max-width: 548px) {
    width: 100%;
    .container {
      width: 90%;
      height: fit-content;
      left: 17px;
      top: 10%;
      padding: 2.4rem;
      gap: 0;

      .card-tit {
        width: 300px;

        p {
          width: 100%;
          font-size: 14px;
        }
      }

      .content-text {
        padding: 0;
        p {
          width: 100%;
          height: fit-content;
          font-size: 1rem;
        }
      }

      .card-button {
        width: 100%;
        padding: 10px;

        .button-zip {
          width: 100%;
          padding: 0px;

          span {
            width: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            padding: 8px;
          }
          .text-loose {
            font-size: 12px;
            padding: 8px;
          }
        }
      }
    }
  }
  @media (max-width: 375px) {
    width: 100%;
    .container {
      width: 300px;
      left: 11px;
      top: 10%;

      .card-tit {
        width: 270px;

        p {
          width: 100%;
          font-size: 12px;
        }
      }

      p {
        width: 270px;
        font-size: 14px;
      }

      .card-button {
        width: 270px;
        padding: 10px;

        .button-zip {
          width: 46%;
          padding: 0px;

          span {
            width: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            padding: 8px;
          }
          .text-loose {
            font-size: 12px;
            padding: 8px;
          }
        }
      }
    }
  }
`;