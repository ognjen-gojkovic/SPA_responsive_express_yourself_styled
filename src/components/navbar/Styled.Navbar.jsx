import styled from "styled-components";

export const NavbarStyled = styled.nav`
  height: 80px;
  width: 100%;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;

  .navbar__container {
    display: flex;
    justify-content: space-between;
    height: 80px;
    //z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;

    #navbar__logo {
      background-color: #ff8177;
      background: linear-gradient(to top #ff0844 0%, #ffb199 100%);
      background-size: 100%;
      background-clip: "text";
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
      display: flex;
      align-items: center;
      text-decoration: none;
      cursor: pointer;
      font-size: 2rem;
      padding-left: 3rem;
    }

    .navbar__menu {
      display: flex;
      align-items: center;
      list-style: none;
      margin-right: 20px;

      .navbar__item {
        height: 100%;
        width: 150px;
        margin-right: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .navbar__links {
        font-size: 1.3rem;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        width: 50%;
        height: 50%;
        transition: all 0.3s ease-in-out;
        position: relative;

        &:hover {
          color: #9518fc;
          transition: all 0.3s ease-in-out;

          &::after {
            width: 80%;
            transition: all 0.3s ease-in-out;
          }
        }

        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 10%;
          height: 5px;
          width: 0;
          border-radius: 4px;
          background: #ee0979;
          background: -webkit-linear-gradient(to right, #ff6a00, #ee0979);
          background: linear-gradient(to right, #ff6a00, #ee0979);
          transition: all 0.3s ease-in-out;
        }
      }

      #services-page {
        &::after {
          left: 0;
        }
        &:hover {
          &::after {
            width: 100%;
            left: 0;
          }
        }
      }

      .navbar__btn {
        width: 150px;

        .button {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          padding: 10px 20px;
          height: 100%;
          width: 100%;
          border: none;
          outline: none;
          border-radius: 4px;
          background: #ee0979;
          background: -webkit-linear-gradient(to right, #ff6a00, #ee0979);
          background: linear-gradient(to right, #ff6a00, #ee0979);
          color: #fff;
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }

  // media queries
  // ============================
  @media screen and (max-width: 960px) {
    .navbar__container {
      display: flex;
      justify-content: space-between;
      height: 80px;
      width: 100%;
      padding: 0;
      position: relative;

      .navbar__menu {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0;
        width: 100%;
        position: absolute;
        height: 0;
        top: -100%;
        opacity: 0;
        transition: all 0.3s ease-in-out;
        z-index: -20;

        &.active {
          background-color: #333;
          top: 100%;
          height: 60vh;
          opacity: 1;
          transition: all 0.3s ease-in-out;
          height: 60vh;
          font-size: 1.6rem;
          z-index: -5;
        }

        .navbar__item {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1rem;
          margin-right: 0;
          width: 150px;
          height: 60px;

          .navbar__links {
            width: 70%;
            height: 100%;
            text-align: center;
            padding: 10px 50px;
            display: table;
            display: flex;
            justify-content: center;
            align-items: center;

            &::after {
              bottom: 20%;
              left: 20%;
            }

            &:hover {
              &::after {
                width: 60%;
              }
            }
          }

          #services-page {
            &::after {
              left: 10%;
            }
            &:hover {
              &::after {
                width: 80%;
              }
            }
          }

          .navbar__btn {
            margin: 0;
            .button {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 100%;
              margin: 0;
            }
          }
        }
      }

      #navbar__logo {
        padding-left: 25px;
      }

      .navbar__toggle .bar {
        display: block;
        cursor: pointer;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        transition: all 0.3s ease-in-out;
        background-color: #fff;
      }

      #mobile-menu {
        position: absolute;
        top: 20%;
        right: 5%;
        transform: translate(5%, 20%);

        &.active .bar:nth-child(2) {
          opacity: 0;
        }

        &.active .bar:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        &.active .bar:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      }
    }
  }
`;
