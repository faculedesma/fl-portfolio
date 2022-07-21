import React, { useContext } from "react";
import MainTitle from "./MainTitle";
import { AnimationsContext } from "../../contexts/AnimationsContext";

const HeroSection = () => {
  const { animations, toggleAnimation } = useContext(AnimationsContext);

  const handleClick = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
    toggleAnimation(["fireworks", "arrow"]);
  };

  return (
    <div className="hero-section">
      <div className="hero-section-top">
        <MainTitle />
      </div>
      <div className="hero-section-bottom">
        <p>Trying to live the present moment by doing things I love</p>
        <p>Are you interested to know more about me?</p>
        <button onClick={handleClick}>
          <span>Let's talk!</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
