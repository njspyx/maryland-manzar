import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Events from "./pages/Events";
import Footer from "./components/Footer";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import { ReactComponent as SceneSVG } from "./assets/scene.svg";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        {/*
        <div className="footer-scene-container">
          <SceneSVG className="footer-scene" />
        </div>
          */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
