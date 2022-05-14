import styled from "styled-components";
import { MainButton } from "../../utils/buttons/MainButton";

export const FeaturesStyled = styled.section`
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
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
        background: #ff512f;
        background: linear-gradient(to top, transparent 30%, #dd2476, #ff512f);
        background: -webkit-linear-gradient(
          to top,
          transparent,
          #dd2476,
          #ff512f
        );
        position: relative;

        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 60%, #131313);
        }

        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 50%, #131313);
        }

        img {
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
        margin-top: 1rem;
        margin-bottom: 20px;
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
          margin-bottom: 500px;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .main__container {
      .main__image--container {
        margin-top: 20px;
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
          margin-top: 2.5rem;
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export const FeaturesButton = styled(MainButton)`
  &::before {
    content: "Sign Up";
  }
`;
