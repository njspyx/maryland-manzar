import React from "react";
import "../App.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaExclamation } from "react-icons/fa";
import "../styles/HomePage.css";

function Home() {
  return (
    <>
      <Hero />
      <div id="about" className="about-section-container">
        <div className="about-image">
          <img src="img-9.jpg" alt="Maryland Manzar" />
        </div>
        <div className="about-text">
          <Header text={"About Maryland Manzar"} />
          <p>
            Maryland Manzar is a 1.0 co-ed collegiate competitive South Asian
            Fusion Dance Team at UMCP. With a passion for both traditional and
            contemporary dance styles, our talented group of dancers comes
            together to create captivating performances. We strive to showcase
            South Asian beauty, energy, and cultural richness through innovative
            choreography and storytelling. We aim to spread the joy of dance
            across our campus and beyond.
          </p>
          <p>
            <b>Get ready to experience the Manzar magic!</b>
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
