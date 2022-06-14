import React, { useContext, useEffect, useRef, useState } from "react";
import useAudio from "../../hooks/useAudio";
import BrainDamage from "../../../assets/sounds/brain-damage-0.mp3";
import RoomMusicPNG from "../../../assets/images/room-music-1-final.png";
import RoomMusicHoverPNG from "../../../assets/images/room-music-0-final.png";
import DSOTMFrame from "../../../assets/images/dsotm-frame.png";
import { AudioContext } from "../../contexts/AudioContext";

const HeroDraws = () => {
  const [shouldToggle, setShouldToggle] = useState(false);
  const [playing, toggle] = useAudio(BrainDamage);
  const { audio } = useContext(AudioContext);
  const mounted = useRef(false);

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

  const onDSOFTMClick = () => {
    setShouldToggle(true);
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

  return (
    <div className="hero-draws">
      <div className="hero-draws-image">
        <img
          className={`dsotm-logo ${shouldToggle ? "hide-dsotm" : ""}`}
          src={DSOTMFrame}
          onClick={onDSOFTMClick}
        />
        <img
          className={shouldToggle ? "hide-room" : "show-room"}
          src={RoomMusicPNG}
        />
        <img
          className={shouldToggle ? "show-room-hove" : "hide-room-hover"}
          onMouseLeave={handleOnMouseLeave}
          src={RoomMusicHoverPNG}
        />
      </div>
    </div>
  );
};

export default HeroDraws;
