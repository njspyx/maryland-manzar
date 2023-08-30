import React from "react";
import "../App.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaCamera } from "react-icons/fa";
import MyGallery from "../components/MyGallery";

function Gallery() {
  return (
    <>
      <Header icon={<FaCamera />} text={"Team Photos"} />
      <MyGallery />
    </>
  );
}

export default Gallery;
