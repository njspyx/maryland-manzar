import React from "react";
import "../App.css";
import "../styles/EventsPage.css";
import Header from "../components/Header";
import EventRow from "../components/EventRow";
import eventData from "../assets/past_events.json";

function Events() {
  return (
    <>
      <Header text={"Upcoming Events"} />
      <div className="upcoming-events-container">
        <h2>Coming Soon</h2>
        <a href="https://www.instagram.com/marylandmanzar/">
          Follow us on Instagram in the meantime!
        </a>
      </div>
      <Header text={"Past Events"} />
      <div>
        {eventData.map((event, index) => (
          <React.Fragment key={index}>
            <EventRow
              name={event.name}
              date={event.date}
              link={event.link}
              desc={event.desc}
              thumbnail={event.thumbnail}
              className="event-row"
            />
            {index < eventData.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Events;
