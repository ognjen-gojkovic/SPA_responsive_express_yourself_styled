import React from "react";
import { FeaturesButton, FeaturesStyled } from "./Styled.Features";
import UsersSVG from "../../assets/undraw_people_re_8spw.svg";

const Features = () => {
  return (
    <FeaturesStyled id="sign-up">
      <div className="main__container">
        <div className="main__content">
          <h1>Join Us</h1>
          <h2>Sign Up Today</h2>
          <p>See the opportunities we can seize together.</p>
          <FeaturesButton href="#home">Sign Up</FeaturesButton>
        </div>
        <div className="main__image--container">
          <div className="main__image--card" id="card-2">
            <img src={UsersSVG} alt="svg img" />
          </div>
        </div>
      </div>
    </FeaturesStyled>
  );
};

export default Features;
