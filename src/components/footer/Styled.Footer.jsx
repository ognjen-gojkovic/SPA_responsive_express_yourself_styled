import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: #131313;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .footer__links {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;

    .footer__link--wrapper {
      display: flex;

      .footer__link--items {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 1rem;
        text-align: left;
        width: 160px;

        h2 {
          margin-bottom: 1rem;
          color: #fff;
        }

        a {
          color: #fff;
          text-decoration: none;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease-in-out;

          &:hover {
            color: #888888;
            transition: all 0.3s ease-in-out;
          }
        }
      }
    }
  }

  .social__media {
    max-width: 1000px;
    width: 100%;

    .social__media--wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      max-width: 1000px;
      margin: 40px auto 0 auto;

      .website__rights {
        color: #fff;
      }

      #footer__logo {
        color: #fff;
        display: flex;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        font-size: 2rem;
      }

      .social__icons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 240px;

        .social__icon--link {
          color: #fff;
          font-size: 1.5rem;
        }
      }
    }
  }

  @media screen and (max-width: 820px) {
    .footer__links {
      padding-top: 2rem;

      .footer__link--wrapper {
        flex-direction: column;
      }
    }

    .social__media {
      .social__media--wrap {
        flex-direction: column;
        .footer__logo {
          #footer__logo {
            margin-bottom: 2rem;
          }
        }

        .website__rights {
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .footer__links {
      .footer__link--wrapper {
        .fotter__link--items {
          margin: 0;
          padding: 10px;
          width: 100%;
        }
      }
    }
  }
`;
