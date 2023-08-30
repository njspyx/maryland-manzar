import React from "react";
import "../App.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaExclamation } from "react-icons/fa";

function Home() {
  return (
    <>
      <Hero />
      <Header icon={<FaExclamation />} text={"About Maryland Manzar"} />
      <div className="about-section-container">
        <div className="about-text-wrapper">
          <p>
            Phasellus maximus lacus libero. Suspendisse condimentum dapibus
            tempus. Suspendisse nisl justo, luctus sit amet sagittis id, tempor
            non est. Proin ac scelerisque massa, ac posuere quam. Sed quis nisi
            maximus, tempor dui non, cursus purus. Pellentesque vitae odio
            faucibus, pulvinar odio sed, dapibus ipsum. Morbi interdum eros vel
            enim convallis scelerisque.
          </p>
        </div>
        <div className="about-slogan-container">
          <p className="about-slogan-large">MANZAR</p>
          <p className="about-slogan-small">means</p>
          <p className="about-slogan-large">SPECTACLE</p>
        </div>
        <div className="about-image-container">
          <img className="about-image" src="img-9.jpg"></img>
        </div>
      </div>
    </>
  );
}

export default Home;
