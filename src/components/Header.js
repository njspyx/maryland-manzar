import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header(props) {
  return (
    <>
      <div className="header-container">
        <div className="icon-wrapper">{props.icon}</div>
        <h1>{props.text}</h1>
        <div className="icon-wrapper">{props.icon}</div>
      </div>
    </>
  );
}

export default Header;
