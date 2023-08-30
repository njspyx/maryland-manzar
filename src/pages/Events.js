import React from "react";
import "../App.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Header from "../components/Header";
import { FaBars, FaTimes, FaMapMarkerAlt } from "react-icons/fa";

function Events() {
  return (
    <>
      <Header icon={<FaMapMarkerAlt />} text={"Follow Our Journey"} />
      <Cards />
    </>
  );
}

export default Events;
