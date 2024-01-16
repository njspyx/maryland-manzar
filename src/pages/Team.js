import React from "react";
import "../App.css";
import "../styles/TeamPage.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import { FaUser } from "react-icons/fa";
import seniorImg from "../assets/team-senior.jpg";
import juniorImg from "../assets/team-junior.jpg";
import sophmoreImg from "../assets/team-sophmore.jpg";
import freshmanImg from "../assets/team-freshman.jpg";
import eboardImg from "../assets/team-eboard.jpg";

function Team() {
  return (
    <>
      <Header text={"Meet the Team!"} />
      <div className="team-container">
        <div className="team-image">
          <img src={seniorImg} alt="Seniors" />
          <img src={juniorImg} alt="Juniors" />
        </div>
        <div className="team-names">
          <div className="names">
            <h2>Seniors</h2>
            <p>(left to right, from bottom row) Tejaswi, Jenuvea</p>
            <p>(not pictured) Rohan</p>
          </div>
          <div className="names">
            <h2>Juniors</h2>
            <p>
              (left to right, from bottom row) Shaine, Abhiram, Priyanka,
              Akshita, Simmi Shashank, Karthick, Vedant, Sashwath
            </p>
            <p>(not pictured) Zuha, Kamelia</p>
          </div>
        </div>
        <div className="team-image">
          <img src={sophmoreImg} alt="Sophmores" />
          <img src={freshmanImg} alt="Freshman" />
        </div>
        <div className="team-names">
          <div className="names">
            <h2>Sophmores</h2>
            <p>
              (left to right, from bottom row) Mihika, Tanika, Neha K., Hiloni,
              Eesha, Eugene Kavi, Tharindi, Neel, Shaunak, Julianne, Aastha
            </p>
            <p>(not pictured) Megan</p>
          </div>
          <div className="names">
            <h2>Freshman</h2>
            <p>
              (left to right, from bottom row) Arsha, Samaya, Manvi, Bhavana
              Anushka, Neha N., Christina, Aarya Khushi U., Rubaina, Riya,
              Siyona, Isabelle Mallige, Anika, Shravya, Bhavika, Tanvi V.
            </p>
            <p>
              (not pictured) Aishwarya, Khushi C., Srihitha, Tanvi K., Sanjana
            </p>
          </div>
        </div>
      </div>
      <Header text={"Eboard"} />
      <div className="eboard-container">
        <img src={eboardImg} alt="Eboard" />
        <div className="eboard-teams">
          <div className="team">
            <h3>Captain</h3>
            <p>Mihika</p>
          </div>
          <div className="team">
            <h3>Secretary</h3>
            <p>Vedant</p>
          </div>
          <div className="team">
            <h3>Finance</h3>
            <p>Karthick, Akshita</p>
          </div>
          <div className="team">
            <h3>Management</h3>
            <p>Shashank, Aastha, Kavi, Rohan</p>
          </div>
          <div className="team">
            <h3>Choreography</h3>
            <p>Tharindi, Simmi, Shaunak, Julianne</p>
          </div>
          <div className="team">
            <h3>Marketing</h3>
            <p>Teja, Eugene, Jen</p>
          </div>
          <div className="team">
            <h3>Tech</h3>
            <p>Sashu, Zhua, Neel</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
