import React, { useEffect, useRef, useState } from "react";
import useAudio from "../../hooks/useAudio";
import BrainDamage from "../../../assets/sounds/brain-damage-0.mp3";
import RoomMusicPNG from "../../../assets/images/room-music-1-final.png";
import RoomMusicHoverPNG from "../../../assets/images/room-music-0-final.png";

const HeroDraws = () => {
  const [shouldToggle, setShouldToggle] = useState(false);
  const [playing, toggle] = useAudio(BrainDamage);
  const mounted = useRef(false);

  const handleOnMouseEnter = () => {
    if (mounted) {
      setShouldToggle(true);
      toggle();
    }
  };

  const handleOnMouseLeave = () => {
    if (!playing) {
      return;
    } else {
      setShouldToggle(false);
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
      toggle();
    }
  }, [playing, shouldToggle]);

  return (
    <div className="hero-draws">
      <div className="hero-draws-image">
        <img
          className={shouldToggle ? "hide-room" : "show-room"}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          src={RoomMusicPNG}
        />
        <img
          className={shouldToggle ? "show-room-hove" : "hide-room-hover"}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          src={RoomMusicHoverPNG}
        />
      </div>
    </div>
  );
};

export default HeroDraws;
