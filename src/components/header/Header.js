import React from "react";
import Logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div style={{ position: "relative" }}>
        <img src={Logo} className="headerLogo" />
      </div>
      <ul className="haederMenu">
        <li>Home</li>
      </ul>
    </div>
  );
};

export default Header;
