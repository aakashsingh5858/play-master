import React from "react";
import "./input.css";

const Input = ({ placeholder, type, suffix, className }) => {
  return (
    <div className="input_Container">
      <input type={type} placeholder={placeholder} className={className} />
      <img src={suffix} className="suffixIcon" />
    </div>
  );
};

export default Input;
