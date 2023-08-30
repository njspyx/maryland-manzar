import React from "react";
import "../styles/Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { FaRegEnvelope, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-socials">
          <a
            href="mailto:marylandmanzar@gmail.com"
            className="footer-social-icon"
          >
            <FaRegEnvelope className="fa-envelope" />
          </a>
          <a
            href="https://www.instagram.com/marylandmanzar/"
            className="footer-social-icon"
          >
            <FaInstagram className="fa-instagram" />
          </a>
        </div>
        <div class="footer-links">
          <div className="footer-link-wrapper">
            <a href="/" className="footer-link-items">
              Home
            </a>
            <a href="/about" className="footer-link-items">
              About
            </a>
            <a href="/team" className="footer-link-items">
              Team
            </a>
            <a
              href="mailto:marylandmanzar@gmail.com"
              className="footer-link-items"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
