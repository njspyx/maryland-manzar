import React, { useDebugValue, useState, Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button.js";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import logoImage from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [button, setButton] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // Toggle menu for mobile
  const handleMenuClick = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      closeMenu();
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // Scroll to top when navigating to a new page, or scroll to a specific element if a hash is provided
  useEffect(() => {
    showButton();
    if (location.hash) {
      let element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top if no hash
    }
  }, [location]); // Re-run the effect if the location changes

  const handleAboutClick = () => {
    closeMenu();
    navigate("/#about");
  };
  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleMenuClick}>
          <img src={logoImage} alt="Logo" />
        </Link>
        <div className="menu-icon" onClick={handleMenuClick}>
          {menuOpen ? (
            <FaTimes className="fa-times" />
          ) : (
            <FaBars className="fa-bars" />
          )}
        </div>
        <ul className={menuOpen ? "navbar-menu active" : "navbar-menu"}>
          <li className="navbar-item">
            <Link to="/" className="navbar-links" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <a className="navbar-links" onClick={handleAboutClick}>
              About
            </a>
          </li>
          <li className="navbar-item">
            <Link to="/team" className="navbar-links" onClick={closeMenu}>
              Team
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/events" className="navbar-links" onClick={closeMenu}>
              Events
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/join"
              className="navbar-links-mobile"
              onClick={closeMenu}
            >
              Join!
            </Link>
          </li>
        </ul>
        {button && (
          <Button
            route={"/join"}
            buttonStyle={"btn--outline"}
            buttonColor={"btn--white"}
            buttonSize={"btn--medium"}
          >
            <div className="navbar-join-button">Join!</div>
          </Button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
