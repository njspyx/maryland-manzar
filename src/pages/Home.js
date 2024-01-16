import React from "react";
import "../App.css";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Button from "../components/Button";
import "../styles/HomePage.css";
import aboutImage2 from "../assets/RangBarse-720.jpg";
import aboutImage from "../assets/Marzar-M-pic.png";

function Home() {
  return (
    <>
      <Hero />
      <div id="about" className="about-section-above">
        <div className="about-text">
          <Header text={"About Maryland Manzar"} />
          <p>
            Maryland Manzar is a 1.0 co-ed collegiate competitive South Asian
            Fusion Dance Team at University of Maryland, College Park. With a
            passion for both traditional and contemporary dance styles, our
            talented group of dancers comes together to create captivating
            performances. We strive to showcase South Asian beauty, energy, and
            cultural richness through innovative choreography and storytelling.
            We aim to spread the joy of dance across our campus and beyond.
          </p>
          <p>
            <b>Get ready to experience the Manzar magic!</b>
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About" />
        </div>
      </div>
      <div id="about" className="about-section-below">
        <div className="about-image-below">
          <img src={aboutImage2} alt="About" />
        </div>
        <div className="about-buttons-container">
          <Button
            className="about-btn"
            externalUrl={
              "https://www.gofundme.com/f/maryland-manzar-fundraising"
            }
            buttonSize={"btn--large"}
            buttonStyle={"btn--outline-simple"}
            buttonColor={"btn--black"}
          >
            Donate to help us compete
          </Button>
          <Button
            className="about-btn"
            route={"events"}
            buttonSize={"btn--large"}
            buttonStyle={"btn--outline-simple"}
            buttonColor={"btn--black"}
          >
            Check out our past events
          </Button>
          <Button
            className="about-btn"
            externalUrl={
              "https://umdsbs.wordpress.com/2023/10/28/new-umd-co-ed-dance-team-spreads-culture-through-performance/"
            }
            buttonSize={"btn--large"}
            buttonStyle={"btn--outline-simple"}
            buttonColor={"btn--black"}
          >
            Featured in Stories Beneath the Shell
          </Button>
        </div>{" "}
      </div>
    </>
  );
}

export default Home;
