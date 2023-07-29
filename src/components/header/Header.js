import React from "react";
import Logo from "../../assets/logo.svg";
import "./header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div>
        <img src={Logo} className="headerLogo" />
      </div>
      <ul className="haederMenu">
        <li></li>
      </ul>
    </div>
  );
};

export default Header;
