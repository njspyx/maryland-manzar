import React from "react";
import "../styles/ProfileCard.css";

const ProfileCard = ({ imgFilePath, name, position, contact }) => {
  return (
    <div className="profile-card-container">
      <div className="profile-picture">
        <img src={imgFilePath} alt={name} />
      </div>
      <div className="profile-details">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-position">{position}</p>
        {contact && <p className="profile-contact">{contact}</p>}
      </div>
    </div>
  );
};

export default ProfileCard;
