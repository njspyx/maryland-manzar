import React, { useEffect } from "react";
import Button from "./Button";
import "../styles/Hero.css";

function Hero() {
  // Parallax effect implementation
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(".hero-container");
      const scrollY = window.pageYOffset;

      hero.style.backgroundPositionY = `${scrollY * 0.1}px`; // Controll speed of parallax
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero-container">
      <h1>Maryland Manzar</h1>
      <p>competitive bollywood fusion dance team @ umd</p>
      <div className="hero-btns">
        <Button
          className="btn"
          route={"#about"}
          buttonSize={"btn--large"}
          buttonStyle={"btn--outline"}
        >
          About Us!
        </Button>
        <Button
          className="no-border-btn"
          route={"join"}
          buttonSize={"btn--large"}
          buttonStyle={"btn--filled"}
          buttonColor={"btn--red"}
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
