import React, { useState, useContext } from "react";
import { AnimationsContext } from "../../contexts/AnimationsContext";
import useAudio from "../../hooks/useAudio";
import Logo from "../../common/logo/Logo";
import Ladder from "../../../assets/images/other/ladder.png";
import GuySmall from "../../../assets/images/other/guy-small.png";
import Arrow from "../../../assets/images/other/arrow.png";
import Shark from "../../../assets/images/other/shark.png";
import Bike from "../../../assets/images/other/bike.png";
import JugbandBlues from "../../../assets/sounds/jugband-blues.mp3";
import Rainbow from "../../../assets/images/other/rainbow.png";
import ButtonBorder from "../../../assets/images/other/button-image.png";
import Tooltip from "../../common/tooltip/Tooltip";
import MainTitle from "./MainTitle";

const content = {
  personal:
    "Hi, again. Welcome to my portfolio. This project was born from my curiosity about doing something different, introspective, and a way to mix my passions for art, music & computers, and on top of it, having fun. Created with love. Hope you enjoy it!",
};

const HeroSection = () => {
  const { animations, toggleAnimation } = useContext(AnimationsContext);
  const [playing, toggle] = useAudio(JugbandBlues);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
    toggleAnimation(["fireworks", "arrow"]);
  };

  const handleClickBike = () => {
    const bike = document.getElementById("bike");
    const rainbow = document.getElementById("rainbow");
    bike.classList.add("bike-click");
    rainbow.style.display = "inherit";
    toggle();
  };

  const closeTooltip = () => setOpen(false);

  return (
    <>
      <div className="hero-section">
        <div className="hero-section-top">
          <img
            onClick={handleClickBike}
            id="bike"
            className="bike"
            src={Bike}
            alt="bike"
          />
          <img id="rainbow" className="rainbow" src={Rainbow} alt="rainbow" />
          <Logo />
          <MainTitle />
        </div>
        <div className="hero-section-middle">
          <p>Trying to live the present moment by doing things I love</p>
          <p>Are you interested to know more about me?</p>
        </div>
        <div className="hero-section-bottom">
          <div className="connection-me">
            <img className="ladder" src={Ladder} alt="ladder" />
            <img className="guy-small" src={GuySmall} alt="guy" />
          </div>
          <img className="arrow" src={Arrow} alt="arrow" />
          <div className="button-arrow">
            <img className="shark" src={Shark} alt="shark" />
            <button onClick={handleClick}>
              <img className="button-border" src={ButtonBorder} alt="border" />
              <span>Let's talk!</span>
            </button>
          </div>
        </div>
        {open && (
          <Tooltip information={content} close closeTooltip={closeTooltip} />
        )}
      </div>
    </>
  );
};

export default HeroSection;
