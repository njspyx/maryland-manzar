import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Button.css";

const STYLES = ["btn--filled", "btn--outline", "btn--gradient-animated"];
const SIZES = ["btn--medium", "btn--large"];
const COLORS = ["btn--white", "btn--red", "btn--gold", "btn--red-gold"];

function Button({
  route,
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

  return (
    <Link to={route} className="btn-mobile">
      <button
        className={`btn ${checkButtonSize} ${checkButtonColor} ${checkButtonStyle}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
