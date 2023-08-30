import React from "react";
import "../App.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaUser } from "react-icons/fa";

function Team() {
  return (
    <>
      <Header icon={<FaUser />} text={"Meet the Team"} />
      <div
        className="team-container"
        style={{
          height: "calc(100vh - 80px)",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Coming Soon!</h1>
      </div>
    </>
  );
}

export default Team;
