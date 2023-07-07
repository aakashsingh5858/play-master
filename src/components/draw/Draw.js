import React from "react";
import "./draw.css";

export const Rectangle = ({ top, left, transform, bottom, right, zIndex }) => {
  return (
    <span
      className="rectangle"
      style={{
        top: top,
        left: left,
        transform: transform,
        bottom: bottom,
        right: right,
        zIndex: zIndex,
      }}
    ></span>
  );
};
