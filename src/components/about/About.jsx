import React from "react";
import { FaLayerGroup } from "react-icons/fa";
import { AboutButton, AboutStyled } from "./Styled.About";

const About = () => {
  return (
    <AboutStyled id="about">
      <div className="main__container">
        <div className="main__image--container">
          <div className="main__image--card">
            <i>
              <FaLayerGroup />
            </i>
          </div>
        </div>
        <div className="main__content">
          <h1>What do we do?</h1>
          <h2>We help businesses to scale.</h2>
          <p>Schedule a call to learn more about our services.</p>
          <AboutButton href="#sign-up">Schedule a call</AboutButton>
        </div>
      </div>
    </AboutStyled>
  );
};

export default About;
