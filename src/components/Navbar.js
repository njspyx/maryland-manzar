import React, { useDebugValue, useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button.js";
import styled, { css } from "styled-components";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [button, setButton] = useState(true);

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

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleMenuClick}>
          <img src="logo.png" alt="Logo" />
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
            <Link to="/about" className="navbar-links" onClick={closeMenu}>
              About
            </Link>
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
            <Link to="/gallery" className="navbar-links" onClick={closeMenu}>
              Gallery
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
