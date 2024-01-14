import React from "react";
import "../App.css";
import "../styles/TeamPage.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import { FaUser } from "react-icons/fa";
import teamData from "../assets/team_info.json";

function Team() {
  return (
    <>
      <Header text={"Meet the Team!"} />
      <div className="team-page">
        {Object.entries(teamData.teams).map(([teamName, members]) => (
          <div key={teamName}>
            <h2 className="team-subheader">{teamName}</h2>{" "}
            <div className="team-content">
              {members.map((member, index) => (
                <ProfileCard
                  key={index}
                  imgFilePath={member.image_url || "img-9.jpg"}
                  name={`${member.first_name} ${member.last_name}`}
                  position={member.position}
                  // contact={`${member.email}, ${member.phone}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Team;
