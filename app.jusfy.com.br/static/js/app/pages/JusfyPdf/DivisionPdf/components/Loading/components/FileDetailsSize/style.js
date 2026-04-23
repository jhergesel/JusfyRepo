import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 15px;
  flex-wrap: wrap;

  width: 1200px;
  height: 450px;

  .file-options-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 24px 40px;
    gap: 24px;

    width: 843px;
    height: 372px;

    background: #111219;
    border: 2px solid #2f3036;
    border-radius: 4px;

    .file-back-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px;
      gap: 8px;

      width: 291px;
      height: 36px;

      p {
        width: 250px;
        height: 36px;

        font-family: "Switzer", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        /* identical to box height */

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 10px;

        color: #41c78f;
      }
    }
    .line {
      width: 763px;
      height: 0px;

      border: 2px solid #2f3036;
    }
    .file-size-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      gap: 4px;
      width: 763px;
      height: 106px;
      .file-size-options {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1.25rem 0.1875rem;
        gap: 32px;
        width: 763px;
        height: 102px;
        .file-platform-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 16px;
          gap: 1rem;
          width: 100%;
          height: 30px;

          label {
            width: fit-content;
            height: 30px;
            font-family: "Switzer", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 30px;
            /* identical to box height */

            color: #f4f4f4;
          }

          span {
            width: fit-content;
            height: 30px;
            font-family: "Switzer", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 30px;
            /* identical to box height */

            color: #f4f4f4;
          }
          input {
            width: 7rem;
            height: 43px;
            text-align: center;

            border: 2px solid #f4f4f4;
            border-radius: 4px;
            color: #b5b5c3;
            background-color: transparent;

            &:focus {
              border: 2px solid #babcbe;
            }
          }
        }
        .select-items {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0px;
          gap: 8px;
          width: 214px;
          height: 62px;
          .select-options {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            padding: 16px;
            gap: 8px;
            width: 214px;
            height: 62px;
            border: 2px solid #babcbe;
            border-radius: 4px;
          }

          .input {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0px;
            gap: 8px;
            text-align: center;

            width: 190px;
            height: 62px;
          }
        }
      }
    }
    .mb-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 20px 40px;
      gap: 32px;

      width: 763px;
      height: 102px;
    }
  }
  @media (max-width: 1200px) {
    width: 100%;
    height: 100vh;
    padding: 0px;
    justify-content: center;
    margin-top: 20px;

    .file-options-container {
      width: 100%;
      padding: 10px;

      .file-back-container {
        width: 96%;

        display: flex;
        justify-content: flex-start;

        p {
          width: 40%;
          font-size: 24px;
          margin-right: 196px;
        }
      }

      .line {
        width: 100%;
      }

      .file-size-container {
        width: 714px;
        display: flex;
        flex-direction: column;

        .file-size-options {
          display: flex;
          width: fit-content;

          flex-direction: row;
          padding: 0px;
          .file-platform-container {
            width: max-content;

            padding: 0px;
            margin: 0 auto;
            padding-top: 2rem;

            label {
              font-size: 18px;
            }
          }
          .select-items {
            width: 235px;

            .select-options {
              width: 230px;
              margin-top: -25px;
            }

            .input {
              text-align: center;
              font-size: 14px;
              margin-top: -25px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 992px) {
    width: 100%;
    height: 100vh;
    padding: 0px;
    justify-content: center;
    margin-top: 20px;

    .file-options-container {
      width: 100%;
      padding: 10px;

      .file-back-container {
        width: 96%;

        display: flex;
        justify-content: flex-start;

        p {
          width: 40%;
          font-size: 24px;
          margin-right: 196px;
        }
      }

      .line {
        width: 100%;
      }

      .file-size-container {
        width: 714px;
        display: flex;
        flex-direction: column;

        .file-size-options {
          display: flex;
          width: fit-content;

          flex-direction: row;
          padding: 0px;
          .file-platform-container {
            width: max-content;

            padding: 0px;
            margin: 0 auto;
            padding-top: 2rem;

            label {
              font-size: 18px;
            }
          }
          .select-items {
            width: 235px;

            .select-options {
              width: 230px;
              margin-top: -25px;
            }

            .input {
              text-align: center;
              font-size: 14px;
              margin-top: -25px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 820px) {
    width: 100%;
    height: 100vh;
    padding: 0px;
    justify-content: center;
    margin-top: 20px;

    .file-options-container {
      width: 100%;
      padding: 10px;

      .file-back-container {
        width: 96%;

        display: flex;
        justify-content: flex-start;

        p {
          width: 40%;
          font-size: 24px;
          margin-right: 196px;
        }
      }

      .line {
        width: 100%;
      }

      .file-size-container {
        width: 714px;
        display: flex;
        flex-direction: column;

        .file-size-options {
          display: flex;
          width: fit-content;

          flex-direction: row;
          padding: 0px;
          .file-platform-container {
            width: max-content;

            padding: 0px;
            margin: 0 auto;
            padding-top: 2rem;

            label {
              font-size: 18px;
            }
          }
          .select-items {
            width: 235px;

            .select-options {
              width: 230px;
              margin-top: -25px;
            }

            .input {
              text-align: center;
              font-size: 14px;
              margin-top: -25px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    display: grid;
    place-items: center;
    justify-content: flex-start;
    width: 100vw;
    height: 100vh;
    padding: 10px;
    margin-top: 40px;

    .file-options-container {
      width: 65%;
      height: fit-content;
      padding: 1rem;

      .file-back-container {
        width: 100%;

        p {
          width: fit-content;
          font-size: 20px;
        }
      }

      .line {
        width: 100%;
      }

      .file-size-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 10px;

        .file-size-options {
          display: flex;
          width: 248px;

          flex-direction: column;
          margin-top: -25px;

          .file-platform-container {
            width: max-content;
            display: flex;
            align-items: center;
            padding: 0px;
            margin: 0 auto;
            padding-top: 2rem;
            label {
              font-size: 16px;
            }

            span {
              font-size: 16px;
            }
          }
          .select-items {
            width: 235px;

            .select-options {
              width: 230px;
              margin-top: -25px;
            }

            .input {
              text-align: center;
              font-size: 14px;
              margin-top: -25px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 712px) {
    width: 650px;
    height: 100vh;
    padding: 0px;
    margin-top: -40px;

    .file-options-container {
      width: 100%;
      padding: 10px;

      .file-back-container {
        width: 76%;
        display: flex;
        justify-content: flex-start;

        p {
          width: 100%;
          font-size: 22px;
          margin-right: 200px;
        }
      }

      .line {
        width: 100%;
      }

      .file-size-container {
        width: 615px;
        display: flex;
        flex-direction: column;
        margin-top: 10px;

        .file-size-options {
          display: flex;
          width: fit-content;
          align-items: center;
          flex-direction: row;
          margin-top: -25px;
          padding: 0px;

          .file-platform-container {
            width: max-content;

            padding: 0px;
            margin: 0 auto;
            padding-top: 2rem;

            label {
              font-size: 14px;
            }
          }
          .select-items {
            width: 235px;

            .select-options {
              width: 230px;
              margin-top: -25px;
            }

            .input {
              text-align: center;
              font-size: 14px;
              margin-top: -25px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 578px) {
    width: fit-content;
    height: 100vh;
    padding: 0px;
    margin-top: -3rem;
    margin-bottom: 10rem;
    gap: 0.6rem;

    .file-options-container {
      width: 100%;
      padding: 1rem;
      margin-top: 0.9rem;
      height: fit-content;

      .file-back-container {
        width: 100%;

        p {
          width: 100%;
          font-size: 18px;
          margin-right: 100px;
        }
      }

      .line {
        width: 100%;
      }

      .file-size-container {
        width: 340px;
        display: flex;
        flex-direction: column;

        .file-size-options {
          display: flex;
          width: 248px;

          flex-direction: column;
          padding: 0px;

          .file-platform-container {
            width: max-content;

            padding: 0px;
            margin: 0 auto;
            padding-top: 2rem;
            label {
              font-size: 14px;
            }

            input {
            }
            span {
              width: fit-content;
              font-size: 0.9rem;
            }
          }
          .select-items {
            width: 235px;
            margin-top: -18px;

            .select-options {
              width: 230px;
            }

            .input {
              text-align: center;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`;

export const ModalInfo = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  gap: 24px;

  position: absolute;
  width: 420px;
  height: 144px;
  right: 190px;
  top: 251px;

  background: #ffffff;
  border: 2px solid #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  z-index: 3;

  p {
    width: 372px;
    height: 96px;

    font-family: "Switzer", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;

    color: #4b4b4b;
  }
  @media (max-width: 820px) {
    width: 370px;
    height: 144px;
    right: 34px;
    top: 60%;
    padding: 10px;

    p {
      width: 320px;
      font-size: 14px;

      align-items: center;
    }
  }
  @media (max-width: 768px) {
    width: 370px;
    height: 144px;
    left: 200px;
    top: 60%;
    padding: 10px;

    p {
      width: 320px;
      font-size: 14px;

      align-items: center;
    }
  }
  @media (max-width: 712px) {
    width: 370px;
    height: 144px;
    left: 300px;
    top: 55%;
    padding: 10px;

    p {
      width: 320px;
      font-size: 14px;

      align-items: center;
    }
  }
  @media (max-width: 548px) {
    width: 320px;
    height: 144px;
    left: 50px;
    top: 70%;

    p {
      width: 290px;
      font-size: 14px;

      align-items: center;
    }
  }
  @media (max-width: 390px) {
    width: 320px;
    height: 144px;
    left: 35px;
    top: 70%;

    p {
      width: 290px;
      font-size: 14px;

      align-items: center;
    }
  }
  @media (max-width: 375px) {
    width: 320px;
    height: 144px;
    left: 25px;
    top: 75%;

    p {
      width: 290px;
      font-size: 14px;

      align-items: center;
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
        font-weight: 400;
        font-size: 32px;
        line-height: 48px;
        /* identical to box height */

        display: flex;
        align-items: center;
        text-align: center;
        color: #f4f4f4;
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
        border: none;
        background: #41c78f;
        border-radius: 4px;

        span {
          width: 136px;
          height: 30px;

          font-family: "Switzer", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 30px;
          /* identical to box height */

          display: flex;
          align-items: center;

          color: #fafafa;
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
            font-family: "Switzer", sans-serif;
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
            font-family: "Switzer", sans-serif;
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

export const ErrorText = styled.span `
  color: #f64e60;
  padding: 0 16px;
`;