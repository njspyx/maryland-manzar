import React from "react";
import "../styles/EventRow.css";

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
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="event-link"
      >
        View Photos
      </a>
    </div>
  );
}

export default EventRow;
