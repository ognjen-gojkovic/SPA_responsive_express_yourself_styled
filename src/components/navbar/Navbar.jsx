import React from "react";
import { NavbarStyled } from "./Styled.Navbar";

const Navbar = () => {
  const [active, setActive] = React.useState("");

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <NavbarStyled>
      <div className="navbar__container">
        <a href="#home" id="navbar__logo">
          ArtStation
        </a>
        <div
          className={`navbar__toggle ${active ? "active" : ""}`}
          id="mobile-menu"
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar__menu ${active ? "active" : ""}`}>
          <li className="navbar__item">
            <a
              href="#home"
              className="navbar__links"
              id="home-page"
              onClick={() => setActive("")}
            >
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="#about"
              className="navbar__links"
              id="about-page"
              onClick={() => setActive("")}
            >
              About
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="#services"
              className="navbar__links"
              id="services-page"
              onClick={() => setActive("")}
            >
              Services
            </a>
          </li>
          <li className="navbar__btn">
            <a
              href="#sign-up"
              className="button"
              id="signup"
              onClick={() => setActive("")}
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
