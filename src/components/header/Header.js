import React, { useContext } from "react";
import MusicButton from "../common/buttons/MusicButton";
import { AnimationsContext } from "../contexts/AnimationsContext";
import Logo from "../common/logo/Logo";
import "./header.scss";

const Header = () => {
  const { toggleAnimation } = useContext(AnimationsContext);

  const handleContactClick = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
    toggleAnimation(["fireworks", "arrow"]);
  };

  return (
    <header>
      <div className="header-container">
        <div className="container">
          <div className="header-section">
            <div className="header-logo">
              <Logo />
            </div>
            <div className="header-menu">
              <MusicButton />
              <a onClick={handleContactClick}>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
