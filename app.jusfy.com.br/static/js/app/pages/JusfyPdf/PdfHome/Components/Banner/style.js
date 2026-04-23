import styled from "styled-components/";

export const Container = styled.div `
  width: 100%;
  display: flex;
  position: relative;
  background: #18191f;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  top: 20%;

  .banner {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
  }

  .content {
    width: 100%;
    max-width: 1220px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .info-content {
    width: 100%;
    display: flex;

    align-items: center;
    flex-direction: row;
    gap: 0px;
  }
  .info-content span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 50px;

    line-height: 75px;
    /* identical to box height */

    display: flex;
    align-items: center;
    color: #f7f7f7;
  }

  .info-content img {
    width: 12rem;
    height: 60px;
  }

  .info-down {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 0px;
    margin-top: -25px;
  }
  .info-down p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 60px;
    /* identical to box height */

    display: flex;
    justify-content: space-around;
    align-items: center;

    color: #f7f7f7;
  }
  .info-down .button {
    background-color: #41c78f;
    border-radius: 8px;
    padding: 1rem;
    color: #f7f7f7;
    font-size: 18px;
    border: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.6rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    :hover {
      background-color: #13b370;
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
    position: relative;
    background: #18191f;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    justify-content: center;

    top: 15%;

    .banner {
      width: 100%;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }
    .content {
      width: 100%;
      max-width: 1220px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    .info-content {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      align-items: center;
    }
    .info-content span {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 35px;

      line-height: 75px;
      /* identical to box height */

      display: flex;
      align-items: center;
      color: #f7f7f7;
    }

    .info-content img {
      width: 7rem;
      height: 40px;
    }

    .info-down {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 0px;
      margin-top: -25px;
    }
    .info-down p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 60px;
      /* identical to box height */

      display: flex;
      align-items: center;

      color: #f7f7f7;
    }
    .info-down a {
      background: #41c78f;
      border-radius: 8px;
      padding: 1rem;
      color: #f7f7f7;
      font-size: 18px;
      text-align: center;
    }
  }
  @media (max-width: 992px) {
    width: 100%;
    background: #18191f;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    justify-content: center;

    margin-top: 50px;

    .banner {
      width: 100%;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }
    .content {
      width: 83%;
      max-width: 1220px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    .info-content {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      align-items: center;
    }
    .info-content span {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 35px;

      line-height: 75px;
      /* identical to box height */

      display: flex;
      align-items: center;
      color: #f7f7f7;
    }

    .info-content img {
      width: 7rem;
      height: 40px;
    }

    .info-down {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 0px;
      margin-top: -25px;
    }
    .info-down p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 60px;
      /* identical to box height */

      display: flex;
      align-items: center;

      color: #f7f7f7;
    }
    .info-down .button {
      background: #41c78f;
      border-radius: 8px;
      padding: 1rem;
      color: #f7f7f7;
      font-size: 18px;
    }
  }
  @media (max-width: 820px) {
    width: 100%;
    background: #18191f;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    justify-content: center;
    margin-top: 50px;

    .banner {
      width: 100%;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }
    .content {
      width: 100%;
      max-width: 1220px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    .info-content {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      align-items: center;
    }
    .info-content span {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 35px;

      line-height: 75px;
      /* identical to box height */

      display: flex;
      align-items: center;
      color: #f7f7f7;
    }

    .info-content img {
      width: 7rem;
      height: 40px;
    }

    .info-down {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 0px;
      margin-top: -25px;
    }
    .info-down p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 60px;
      /* identical to box height */

      display: flex;
      align-items: center;

      color: #f7f7f7;
    }
    .info-down .button {
      background-color: #41c78f;
      border-radius: 8px;
      padding: 1rem;
      color: #f7f7f7;
      font-size: 18px;
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    background: #18191f;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    margin-top: 50px;

    .banner {
      width: 100%;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }
    .content {
      width: 100%;
      max-width: 1220px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    .info-content {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      align-items: center;
    }
    .info-content span {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 35px;

      line-height: 75px;
      /* identical to box height */

      display: flex;
      align-items: center;
      color: #f7f7f7;
    }

    .info-content img {
      width: 7rem;
      height: 40px;
    }

    .info-down {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 0px;
      margin-top: -25px;
    }
    .info-down p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 60px;
      /* identical to box height */

      display: flex;
      align-items: center;

      color: #f7f7f7;
    }
    .info-down a {
      background: #41c78f;
      border-radius: 8px;
      padding: 1rem;
      color: #f7f7f7;
      font-size: 18px;
      text-align: center;
    }
  }
  @media (max-width: 578px) {
    width: 100%;
    position: relative;
    background: #18191f;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    top: 2%;

    .banner {
      width: 100%;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }

    .info-content {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      align-items: center;
    }
    .info-content span {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 35px;

      line-height: 75px;
      /* identical to box height */

      display: flex;
      align-items: center;
      color: #f7f7f7;
    }

    .info-content img {
      width: 7rem;
      height: 40px;
    }

    .info-down {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 0px;
      margin-top: -25px;
    }
    .info-down p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 60px;
      /* identical to box height */

      display: flex;
      align-items: center;

      color: #f7f7f7;
    }
    .info-down a {
      background: #41c78f;
      border-radius: 8px;
      padding: 1rem;
      color: #f7f7f7;
      font-size: 18px;
      text-align: center;
    }
  }
`;