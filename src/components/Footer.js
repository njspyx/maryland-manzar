import React from "react";
import "../styles/Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import {
  FaRegEnvelope,
  FaInstagram,
  FaTiktok,
  FaFacebookF,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-design"></div>
      <div className="footer-container">
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/marylandmanzar/"
            className="footer-social-link"
          >
            <FaInstagram className="footer-social-icon" />
          </a>
          <a
            href="https://www.tiktok.com/@maryland.manzar"
            className="footer-social-link"
          >
            <FaTiktok className="footer-social-icon" />
          </a>
          <a
            href="https://www.facebook.com/marylandmanzar?mibextid=LQQJ4d"
            className="footer-social-link"
          >
            <FaFacebookF className="footer-social-icon" />
          </a>
          <a
            href="mailto:marylandmanzar@gmail.com"
            className="footer-social-link"
          >
            <FaRegEnvelope className="footer-social-icon" />
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
