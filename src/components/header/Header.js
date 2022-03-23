import React from "react";
import { Link } from "react-router-dom";
import GuitarLogo from "../../static/images/guitar-logo.webp";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="container">
          <div className="header-section">
            <div className="header-logo">
              <img src={GuitarLogo} alt="logo" />
              <p>FL</p>
            </div>
            <div className="header-menu">
              <Link to="/home">Home</Link>
              <Link to="/about-me">About me</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
