import React, { useContext, useEffect, useRef, useState } from "react";
import useAudio from "../../hooks/useAudio";
import BrainDamage from "../../../assets/sounds/brain-damage-0.mp3";
import RoomMusicWEBM from "../../../assets/images/room-music-animation.webm";
import RoomMusicHoverWEBM from "../../../assets/images/room-music-hover-animation.webm";
import DSOTMFrame from "../../../assets/images/dsotm-frame.webp";
import { AudioContext } from "../../contexts/AudioContext";

const HeroDraws = () => {
  const [shouldToggle, setShouldToggle] = useState(false);
  const [playing, toggle] = useAudio(BrainDamage);
  const { audio } = useContext(AudioContext);
  const mounted = useRef(false);
  const hoverImgRef = useRef(null);

  const handleOnMouseLeave = () => {
    if (!playing) {
      return;
    } else {
      setShouldToggle(false);
      if (audio) {
        toggle();
      }
    }
  };

  const handleDSOFTMClick = () => {
    setShouldToggle(true);
    document.getElementById("psych-room").play();

    if (audio) {
      toggle();
    }
  };

  useEffect(() => {
    mounted.current = true;
    const waiting = document.getElementById("waiting-room");
    waiting.muted = true;
    waiting.play();

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
          <source srcset={DSOTMFrame} type="image/webp" />
        </picture>
        <video
          id="waiting-room"
          src={RoomMusicWEBM}
          className={shouldToggle ? "hide-room" : "show-room"}
          type="video/webm"
          preload
          loop
          autoplay
          muted
        ></video>
        <video
          id="psych-room"
          ref={hoverImgRef}
          src={RoomMusicHoverWEBM}
          className={shouldToggle ? "show-room-hover" : "hide-room-hover"}
          onMouseLeave={handleOnMouseLeave}
          type="video/webm"
          preload
          loop
          autoplay
          muted
        ></video>
      </div>
    </div>
  );
};

export default HeroDraws;
