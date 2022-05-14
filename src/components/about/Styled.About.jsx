import styled from "styled-components";
import { MainButton } from "../../utils/buttons/MainButton";

export const AboutStyled = styled.section`
  background-color: #131313;
  padding: 10rem 0;
  height: 100%;

  .main__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    z-index: 1;
    max-width: 1300px;
    padding: 0 50px;

    .main__image--container {
      text-align: center;

      .main__image--card {
        margin: 10px;
        width: 500px;
        height: 500px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
        background-image: linear-gradient(to right, #00dbd3 0, #fc00ff 100%);

        i {
          font-size: 14rem;
        }
      }
    }

    .main__content {
      color: #fff;
      width: 100%;

      h1 {
        font-size: 2rem;
        background-color: #fe3b6f;
        background: linear-gradient(to top, #ff087b 0%, #ed1a52 100%);
        background-size: 100%;
        background-clip: "text";
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
        text-transform: uppercase;
        margin-bottom: 32px;
      }

      h2 {
        font-size: 4rem;
        font-size: 60px;
        background: #ff8177;
        background: linear-gradient(to right, #9114ff, #da22ff);
        background: -webkit-linear-gradient(to right, #9114ff, #da22ff);
        background-size: 100%;
        background-clip: "text";
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
      }

      p {
        margin: 1rem 0 4rem 0;
        font-size: 2rem;
        font-weight: 700;
      }
    }
  }

  // media queries
  @media screen and (max-width: 1100px) {
    .main__container {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 0 auto;
      height: 90%;

      .main__image--container {
        display: flex;
        justify-content: center;
        .main__image--card {
          height: 425px;
          width: 425px;
        }
      }

      .main-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 4rem;

        h1 {
          font-size: 2.5rem;
          margin-top: 2rem;
        }

        h2 {
          font-size: 3rem;
        }

        p {
          margin-top: 1rem;
          font-size: 1.5rem;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .main__container {
      .main__image--container {
        .main__image--card {
          width: 250px;
          height: 250px;

          i {
            font-size: 4rem;
          }
        }
      }

      .main__content {
        h1 {
          font-size: 2rem;
          margin-top: 3rem;
        }

        h2 {
          font-size: 2rem;
        }

        p {
          margin-top: 2rem;
          font-size: 1.5rem;
        }
      }
    }
  }
`;

/**
  #card-2 {
    background: #ff512f;
    background: linear-gradient(to right, #dd2476, #ff512f);
    background: -webkit-linear-gradient(to right, #dd2476, #ff512f);
  }
 */

export const AboutButton = styled(MainButton)`
  padding: 20px 60px;

  &::before {
    content: "Schedule a call";
    padding: 20px 60px;
  }

  @media screen and (max-width: 480px) {
    padding: 10px 20px;

    &::before {
      content: "Schedule a call";
      padding: 10px 20px;
    }
  }
`;
