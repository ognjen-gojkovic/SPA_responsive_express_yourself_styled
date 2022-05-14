import React from "react";
import { FooterStyled } from "./Styled.Footer";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer__links">
        <div className="footer__link--wrapper">
          <div className="footer__link--items">
            <h2>About Us</h2>
            <a href="#sign-up">How it works</a> <a href="#home">Testimonials</a>
            <a href="#home">Careers</a> <a href="#home">Terms of Service</a>
          </div>
          <div className="footer__link--items">
            <h2>Contact Us</h2>
            <a href="#home">Contact</a> <a href="#home">Support</a>
            <a href="#home">Destinations</a>
          </div>
        </div>
        <div className="footer__link--wrapper">
          <div className="footer__link--items">
            <h2>Videos</h2>
            <a href="#home">Submit Video</a> <a href="#home">Ambassadors</a>
            <a href="#home">Agency</a>
          </div>
          <div className="footer__link--items">
            <h2>Social Media</h2>
            <a href="#home">Instagram</a> <a href="#home">Facebook</a>
            <a href="#home">Youtube</a> <a href="#home">Twitter</a>
          </div>
        </div>
      </div>
      <section className="social__media">
        <div className="social__media--wrap">
          <div className="footer__logo">
            <a href="#home" id="footer__logo">
              ArtStation
            </a>
          </div>
          <p className="website__rights">
            &copy; ArtStation {`${new Date().getFullYear()}`}. All rights
            reserved
          </p>
          <div className="social__icons">
            <a href="#home" className="social__icon--link" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#home" className="social__icon--link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#home" className="social__icon--link">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#home" className="social__icon--link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#home" className="social__icon--link">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </section>
    </FooterStyled>
  );
};

export default Footer;
