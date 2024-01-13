import React from "react";
import "../App.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Header from "../components/Header";
import EventRow from "../components/EventRow";
import { FaMapMarkerAlt } from "react-icons/fa";
import eventData from "../assets/past_events.json"; // Correct path to your JSON file

function Events() {
  return (
    <>
      <Header icon={<FaMapMarkerAlt />} text={"Follow Our Journey"} />
      <div>
        {eventData.map((event, index) => (
          <React.Fragment key={index}>
            <EventRow
              name={event.name}
              date={event.date}
              link={event.link}
              desc={event.desc}
              thumbnail={event.thumbnail}
            />
            {index < eventData.length - 1 && <hr />} {/* Horizontal line */}
          </React.Fragment>
        ))}
      </div>
      {/* Footer or other components */}
    </>
  );
}

export default Events;
