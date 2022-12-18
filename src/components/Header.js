import React from "react";
import Logo from "../imgs/nba.gif";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="title-container">
        <div className="logo-container">
          <img src={Logo} alt="NBA Logo"></img>
        </div>
        <div className="header-title">Memory Game: NBA Edition!</div>
      </div>
    </div>
  );
};

export default Header;
