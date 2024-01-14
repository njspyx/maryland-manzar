import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Button.css";

const STYLES = [
  "btn--filled",
  "btn--outline",
  "btn--gradient-animated",
  "btn--outline-simple",
];
const SIZES = ["btn--medium", "btn--large"];
const COLORS = [
  "btn--white",
  "btn--red",
  "btn--gold",
  "btn--red-gold",
  "btn--black",
];

function Button({
  route,
  externalUrl,
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonColor = COLORS.includes(buttonColor)
    ? buttonColor
    : COLORS[0];

  // Button element
  const buttonElement = (
    <button
      className={`btn ${checkButtonSize} ${checkButtonColor} ${checkButtonStyle}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );

  // Conditionally render Link or <a> tag
  return externalUrl ? (
    <a href={externalUrl} className="btn-mobile">
      {buttonElement}
    </a>
  ) : (
    <Link to={route} className="btn-mobile">
      {buttonElement}
    </Link>
  );
}

export default Button;
