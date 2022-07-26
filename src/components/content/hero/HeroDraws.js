import React, { useContext, useEffect, useRef, useState } from "react";
import useAudio from "../../hooks/useAudio";
import BrainDamage from "../../../assets/sounds/brain-damage-0.mp3";
import RoomMusicHoverWEBM from "../../../assets/images/room-music-hover-animation.webm";
import { AudioContext } from "../../contexts/AudioContext";
import { AnimationsContext } from "../../contexts/AnimationsContext";
import HandPoint from "../../common/animations/HandPoint";
import Room from "./Room";

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
    setShouldToggle(!shouldToggle);
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
        {animations.hand && <HandPoint />}
        <Room onClickDSOTM={handleDSOFTMClick} />
      </div>
      <div className="hero-draws-videos">
        {shouldToggle && (
          <video
            id="psych-room"
            ref={hoverImgRef}
            src={RoomMusicHoverWEBM}
            onMouseLeave={handleOnMouseLeave}
            type="video/webm"
            loop
            autoPlay
            muted
          ></video>
        )}
      </div>
    </div>
  );
};

export default HeroDraws;
