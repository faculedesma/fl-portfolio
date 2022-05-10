import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../../static/images/logo-1.png";
import MusicButton from "../shared/buttons/sounds/MusicButton";
import "./header.scss";

const Header = () => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const handleLogoHover = (isHovered) => setIsLogoHovered(isHovered);

  return (
    <header>
      <div className="header-container">
        <div className="container">
          <div className="header-section">
            <div className="header-logo">
              <img
                onMouseEnter={() => handleLogoHover(true)}
                onMouseLeave={() => handleLogoHover(false)}
                src={Logo}
                alt="logo"
              />
              {isLogoHovered && <p>Facundo Ledesma</p>}
            </div>
            <div className="header-menu">
              <a>
                <MusicButton />
              </a>
              {/* <Link to="home">Home</Link> */}
              <Link to="contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
