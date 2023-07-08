import React from "react";
import "./button.css";

const Button = ({ value = "button", className }) => {
  return (
    <button type="button" className={`button ${className}`}>
      <span>{value}</span>
    </button>
  );
};

export default Button;
