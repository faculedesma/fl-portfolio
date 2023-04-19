import React, { useState } from "react";
import useAudio from "../../hooks/useAudio";
import Logo from "../../common/logo/Logo";
import Ladder from "../../../assets/images/other/ladder.png";
import GuySmall from "../../../assets/images/other/guy-small.png";
import Arrow from "../../../assets/images/other/arrow.png";
import Shark from "../../../assets/images/other/shark.png";
import Bike from "../../../assets/images/other/bike.png";
import JugbandBlues from "../../../assets/sounds/jugband-blues.mp3";
import ButtonBorder from "../../../assets/images/other/button-image.png";
import Tooltip from "../../common/tooltip/Tooltip";
import MainTitle from "./MainTitle";

const content = {
  generic: "Welcome to my portfolio!",
  personal:
    "This is my first independent project and it was born from my curiosity about doing something different, introspective, and a way to mix my passions for art, music & computers. It was a journey of self-knowledge, to find out who I am and what inspires me. The room next contains multiple objects that represent a part of me. Go ahead and get to know me. Mystery is fundamental. Created with love. Hope you enjoy it!",
};

const HeroSection = () => {
  const [playing, toggle] = useAudio(JugbandBlues);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    const room = document.getElementById("room");
    room.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickBike = () => {
    const bike = document.getElementById("bike");
    bike.classList.add("bike-click");
    toggle();
  };

  const closeTooltip = () => setOpen(false);

  return (
    <>
      <div className="hero-section">
        <div className="hero-section-top">
          <img
            onClickCapture={handleClickBike}
            id="bike"
            className="bike"
            src={Bike}
            alt="bike"
          />
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
              <span>Let's play!</span>
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
