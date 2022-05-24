import React, { useContext } from "react";
import Logo from "../../assets/images/logo-1.png";
import MusicButton from "../common/buttons/MusicButton";
import MusicNotes from "../common/animations/MusicNotes";
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

  const handleMusicClick = () => {
    setAnimations({
      music: !animations.music,
    });
  };

  return (
    <header>
      <div className="header-container">
        <div className="container">
          <div className="header-section">
            <div className="header-logo">
              <img src={Logo} alt="logo" />
              <p>Facundo Ledesma</p>
            </div>
            <div className="header-menu">
              <a onClick={handleMusicClick}>
                <MusicButton />
                {animations.music && <MusicNotes />}
              </a>
              <a onClick={handleContactClick}>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
