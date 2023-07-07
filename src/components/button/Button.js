import React from "react";
import "./button.css";

const Button = ({ value, className }) => {
  return (
    <button type="button" className={className}>
      <span>{value}</span>
    </button>
  );
};

export default Button;
