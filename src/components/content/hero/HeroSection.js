import React, { useContext, useState } from "react";
import MainTitle from "./MainTitle";
import Logo from "../../common/logo/Logo";
import { AnimationsContext } from "../../contexts/AnimationsContext";

const HeroSection = () => {
  const [showInfinite, setShowInfinite] = useState(false);
  const { animations, toggleAnimation } = useContext(AnimationsContext);

  const handleClick = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
    toggleAnimation(["fireworks", "arrow"]);
  };

  const handleToggleLogo = () => {
    setShowInfinite(!showInfinite);
  };

  return (
    <>
      <div className="hero-section">
        <Logo onMouseEnter={handleToggleLogo} onMouseLeave={handleToggleLogo} />
        <div className="hero-section-top">
          <MainTitle />
        </div>
        <div className="hero-section-bottom">
          <p>Trying to live the present moment by doing things I love</p>
          <p>Are you interested to know more about me?</p>
        </div>
      </div>
      <div className="hero-button">
        <button onClick={handleClick}>
          <span>Let's talk!</span>
        </button>
      </div>
      {showInfinite && (
        <div className="hero-infinite">
          <span>&#8734;</span>
        </div>
      )}
    </>
  );
};

export default HeroSection;
