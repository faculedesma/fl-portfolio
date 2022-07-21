import React, { useContext, useEffect, useRef, useState } from "react";
import useAudio from "../../hooks/useAudio";
import BrainDamage from "../../../assets/sounds/brain-damage-0.mp3";
import RoomMusicWEBM from "../../../assets/images/room-music-animation.webm";
import RoomMusicHoverWEBM from "../../../assets/images/room-music-hover-animation.webm";
import DSOTMFrame from "../../../assets/images/dsotm-frame.webp";
import { AudioContext } from "../../contexts/AudioContext";
import { AnimationsContext } from "../../contexts/AnimationsContext";
import HandPoint from "../../common/animations/HandPoint";

const HeroDraws = () => {
  const [shouldToggle, setShouldToggle] = useState(false);
  const [playing, toggle] = useAudio(BrainDamage);
  const { audio } = useContext(AudioContext);
  const { animations, toggleAnimation } = useContext(AnimationsContext);
  const mounted = useRef(false);
  const hoverImgRef = useRef(null);

  const handleOnMouseLeave = () => {
    if (!shouldToggle) {
      return;
    }
    setShouldToggle(false);
    toggleAnimation("hand");
    if (audio) {
      toggle();
    }
  };

  const handleDSOFTMClick = () => {
    setShouldToggle(true);
    toggleAnimation("hand");

    if (audio) {
      toggle();
    }
  };

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!playing && shouldToggle) {
      if (audio) {
        toggle();
      }
    }
  }, [playing, shouldToggle]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (hoverImgRef.current && !hoverImgRef.current.contains(event.target)) {
        handleOnMouseLeave && handleOnMouseLeave();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleOnMouseLeave]);

  return (
    <div className="hero-draws">
      <div className="hero-draws-image">
        <picture
          className={`dsotm-logo ${shouldToggle ? "hide-dsotm" : ""}`}
          onClick={handleDSOFTMClick}
        >
          <source src={DSOTMFrame} type="image/webp" />
        </picture>
        {animations.hand && <HandPoint />}
        <video
          id="waiting-room"
          src={RoomMusicWEBM}
          className={shouldToggle ? "hide-room" : "show-room"}
          type="video/webm"
          loop
          autoPlay
          muted
        ></video>
        <video
          id="psych-room"
          ref={hoverImgRef}
          src={RoomMusicHoverWEBM}
          className={shouldToggle ? "show-room-hover" : "hide-room-hover"}
          onMouseLeave={handleOnMouseLeave}
          type="video/webm"
          loop
          autoPlay
          muted
        ></video>
      </div>
    </div>
  );
};

export default HeroDraws;
