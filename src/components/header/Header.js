import React, { useContext } from "react";
import Logo from "../../assets/images/logo.webp";
import MusicButton from "../common/buttons/MusicButton";
import { AnimationsContext } from "../contexts/AnimationsContext";
import "./header.scss";

const Header = () => {
  const { animations, setAnimations } = useContext(AnimationsContext);

  const handleContactClick = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
    setAnimations({
      fireworks: !animations.fireworks,
    });
  };

  return (
    <header>
      <div className="header-container">
        <div className="container">
          <div className="header-section">
            <div className="header-logo">
              <picture>
                <img src={Logo} type="image/webp" />
              </picture>
              <p>Facundo Ledesma</p>
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
