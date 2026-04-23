import styled from "styled-components";

export const Content = styled.div `
  .file-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

    width: 341px;
    height: 458px;

    .file-details {
      box-sizing: border-box;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 24px 40px;
      gap: 24px;

      width: 341px;
      height: 372px;

      background: transparent;
      border: 2px solid #2f3036;
      border-radius: 4px;

      .file-name {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        gap: 8px;
        margin-top: 10px;
        justify-content: flex-start;

        width: 26rem;
        height: 24rem;
        /*background-color: lightsalmon;*/

        p {
          /*background-color: magenta;*/
          width: 100%;
          padding: 0 1rem;

          font-family: "Switzer", sans-serif;
          font-style: normal;
          /*font-weight: 500;*/
          font-size: 1rem;
          /*line-height: 36px;*/
          /* identical to box height */

          display: flex;
          align-items: center;
          text-align: center;
          color: #b5b5c3;
          text-align: center;
        }
      }

      .file-description {
        width: 98px;
        height: 48px;

        font-family: "Switzer", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: center;
        display: flex;
        flex-direction: column;
        color: #4b4b4b;
        margin-top: -25px;

        span {
          color: #b5b5c3;
        }
      }

      button {
        border: none;
        display: flex;
        justify-content: center;
        background-color: transparent;
        width: 156px;
        height: 24px;

        u {
          width: 181px;
          height: 24px;

          font-family: "Switzer", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
          /* identical to box height */

          display: flex;
          align-items: center;
          text-decoration-line: underline;

          color: #41c78f;
        }
      }
    }

    .button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 16px 40px;
      gap: 8px;
      pointer-events: ${props => (props.disabled ? "none" : null)};

      width: 341px;
      height: 62px;
      border: none;
      background: #41c78f;
      border-radius: 4px;
      transition: 0.2s ease-in-out;
      cursor: pointer;

      :hover:not(disabled) {
        background-color: #13b370;
      }

      &:disabled {
        opacity: 0.2;
        cursor: not-allowed;
      }

      span {
        width: 105px;
        height: 30px;

        font-family: "Switzer", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        /* identical to box height */

        display: flex;
        align-items: center;

        color: #fafafa;
      }
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    width: 65%;
    height: fit-content;
    flex: none;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

    .file-container {
      width: 100%;
      height: 372px;
      flex: none;
      order: 0;
      flex-grow: 0;
      margin-top: -5px;

      .file-details {
        width: 100%;
        height: fit-content;
        flex: none;
        order: 0;
        flex-grow: 0;
        padding: 11px;

        .file-name {
          width: 100%;
          height: fit-content;

          p {
            font-size: 14px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        .file-description {
          width: 118px;
          height: 48px;
        }
      }

      .button {
        width: 100%;
        margin-bottom: 80px;
        padding: 10px 20px;

        span {
          font-size: 16px;
        }
      }
    }
  }
  @media (max-width: 548px) {
    width: fit-content;
    flex: none;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

    .file-container {
      width: 100%;
      height: fit-content;
      flex: none;
      order: 0;
      flex-grow: 0;
      margin-top: -0.2rem;
      margin-bottom: 1rem;

      .file-details {
        width: 100%;
        height: fit-content;
        flex: none;
        order: 0;
        flex-grow: 0;
        padding: 1rem;

        .file-name {
          width: 100%;
          height: fit-content;

          p {
            font-size: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            text-align: center;
          }
        }

        .file-description {
          width: 98px;
          height: 48px;
        }
      }

      .button {
        margin-bottom: 70px;
        padding: 10px 20px;

        span {
          font-size: 14px;
        }
      }
    }
  }
`;