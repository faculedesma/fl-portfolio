import React, { useContext } from "react";
import { AnimationsContext } from "../../contexts/AnimationsContext";
import MainTitleGIF from "../../../assets/images/main-title.png";

const HeroSection = () => {
  const { animations, setAnimations } = useContext(AnimationsContext);

  const handleClick = () => {
    setAnimations({
      fireworks: !animations.fireworks,
    });
  };

  return (
    <div className="hero-section">
      <div className="hero-section-top">
        <img src={MainTitleGIF} />
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
