import React from "react";
import "../styles/EventRow.css";
import Button from "./Button";

// To be used for listing past events on Events page
function EventRow({ name, link, desc, thumbnail, date }) {
  return (
    <div className="event-row">
      <div className="event-thumbnail">
        <img src={thumbnail} alt={name} />
      </div>
      <div className="event-info">
        <h3>{name}</h3>
        <p className="event-date">{date}</p>
        <p>{desc}</p>
      </div>
      <Button
        className="event-link"
        externalUrl={link}
        buttonSize={"btn--small"}
        buttonStyle={"btn--outline-simple"}
        buttonColor={"btn--black"}
      >
        View Photos
      </Button>
    </div>
  );
}

export default EventRow;
