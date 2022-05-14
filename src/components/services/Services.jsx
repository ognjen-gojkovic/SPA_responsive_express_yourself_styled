import React from "react";
import { ServicesStyled } from "./Styled.Services";

const Services = () => {
  return (
    <ServicesStyled id="services">
      <h1>Our Services</h1>
      <div className="services__wrapper">
        <div className="services__card">
          <h2>Custom designs</h2>
          <p>AI powered technologies</p>
          <div className="services__btn">
            <button>Get Started</button>
          </div>
        </div>
        <div className="services__card">
          <h2>Are you in?</h2>
          <p>Take the leap.</p>
          <div className="services__btn">
            <button>Get Started</button>
          </div>
        </div>
        <div className="services__card">
          <h2>Full gradients</h2>
          <p>100 posibilities</p>
          <div className="services__btn">
            <button>Get Started</button>
          </div>
        </div>
        <div className="services__card">
          <h2>Infinite choices</h2>
          <p>1000's of colors</p>
          <div className="services__btn">
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </ServicesStyled>
  );
};

export default Services;
