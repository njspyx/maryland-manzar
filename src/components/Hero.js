import React from "react";
import Button from "./Button";
import "../styles/Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <h1>Maryland Manzar</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="hero-btns">
        <Button
          className="btn"
          route={"about"}
          buttonSize={"btn--large"}
          buttonStyle={"btn--outline"}
        >
          About Us!
        </Button>
        <Button
          className="no-border-btn"
          route={"join"}
          buttonSize={"btn--large"}
          buttonStyle={"btn--gradient-animated"}
          buttonColor={"btn--red-gold"}
        >
          Join Now!
        </Button>
      </div>
    </div>
  );
}

export default Hero;

/**
 *         <Button
          className="btn"
          route={"join"}
          buttonSize={"btn--large"}
          buttonStyle={"btn--fill"}
        >
          Join Now!
        </Button>
 */
