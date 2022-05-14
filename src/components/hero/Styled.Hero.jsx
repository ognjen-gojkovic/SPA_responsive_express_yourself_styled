import styled from "styled-components";

export const HeroStyled = styled.section`
  background: #000;
  background: linear-gradient(to bottom, #000, #131313);
  padding: 200px 0;
  height: 100vh;

  .hero__container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    text-align: center;
    padding: 30px;

    .hero__heading {
      font-size: 100px;
      margin-bottom: 24px;
      color: #fff;

      span {
        background: #ee0979;
        background: linear-gradient(to right, #ff6a00, #ee0979);
        background: -webkit-linear-gradient(to right, #ff6a00, #ee0979);
        background-size: 100%;
        background-clip: "text";
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
      }
    }

    .hero__description {
      font-size: 60px;
      background: #da22ff;
      background: linear-gradient(to right, #8f0eff, #da22ff);
      background: -webkit-linear-gradient(to right, #9114ff, #da22ff);
      background-size: 100%;
      background-clip: "text";
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }
  }

  .highlight {
    border-bottom: 3px solid rgb(132, 0, 255);
  }

  // media queries
  // ============================
  @media (max-width: 768px) {
    .hero__container {
      .hero__heading {
        font-size: 60px;
      }

      .hero__description {
        font-size: 40px;
      }
    }
  }
`;
