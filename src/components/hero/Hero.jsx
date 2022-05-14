import React from "react";
import { MainButton } from "../../utils/buttons/MainButton";
import { HeroStyled } from "./Styled.Hero";

const Hero = () => {
  return (
    <HeroStyled className="hero" id="home">
      <div className="hero__container">
        <h1 className="hero__heading">
          Express <span>yourself</span>
        </h1>
        <p className="hero__description">Unlimited Posibilities</p>
        <MainButton href="#about">Explore</MainButton>
      </div>
    </HeroStyled>
  );
};

export default Hero;
