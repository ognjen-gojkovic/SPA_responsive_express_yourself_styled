import styled from "styled-components";

export const ServicesStyled = styled.section`
  background-color: #131313;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10rem 0;

  h1 {
    background: #ff8177;
    background: linear-gradient(to right, #ff0844, #ffb199);
    background: -webkit-linear-gradient(to right, #ff0844, #ffb199);
    background-size: 100%;
    background-clip: "text";
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    margin-bottom: 5rem;
    font-size: 2.5rem;
  }

  .services__wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;

    .services__card {
      margin: 10px;
      height: 425px;
      width: 300px;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #fff;
      background-image: linear-gradient(to right, #00dbde 0%, #fc00ff 100%);
      transition: all 0.3s ease-in-out;

      &:nth-child(2) {
        background: #fdc830;
        background: -webkit-linear-gradient(to right, #f37335, #fdc830);
        background: linear-gradient(to right, #f37335, #fdc830);
      }

      &:nth-child(3) {
        background: #52c234;
        background: -webkit-linear-gradient(to right, #061700, #52c234);
        background: linear-gradient(to right, #061700, #52c234);
      }

      &:nth-child(4) {
        background: #000046;
        background: -webkit-linear-gradient(to right, #1cb5e0, #000046);
        background: linear-gradient(to right, #1cb5e0, #000046);
      }

      h2 {
        text-align: center;
      }

      p {
        text-align: center;
        margin-top: 24px;
        font-size: 20px;
      }

      .services__btn {
        display: flex;
        justify-content: center;
        margin-top: 1rem;

        button {
          color: #fff;
          padding: 12px 24px;
          border: none;
          outline: none;
          border-radius: 4px;
          background: #131313;
          font-size: 1rem;

          &:hover {
            cursor: pointer;
          }
        }
      }

      &:hover {
        transform: scale(1.075);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 1300px) {
    .services__wrapper {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 768px) {
    .services__wrapper {
      grid-template-columns: 1fr;
    }
  }
`;
