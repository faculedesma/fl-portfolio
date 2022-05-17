import React, { useState, useEffect, useRef } from "react";
import useAudio from "../../shared/hooks/useAudio";
import BrainDamage from "../../../static/sounds/brain-damage-0.mp3";
import RoomMusicGIF from "../../../static/images/room-music-1-final.png";
import RoomMusicHoverGIF from "../../../static/images/room-music-0-final.png";

const HeroDraws = () => {
  const [isHover, setIsHover] = useState(false);
  const [playing, toggle] = useAudio(BrainDamage);
  const mounted = useRef(false);

  const handleOnHover = () => {
    setIsHover(!isHover);
    // if (mounted) toggle();
  };

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <div className="hero-draws">
      <div className="hero-draws-image">
        <img
          onMouseEnter={handleOnHover}
          onMouseLeave={handleOnHover}
          src={isHover ? RoomMusicHoverGIF : RoomMusicGIF}
        />
      </div>
    </div>
  );
};

export default HeroDraws;
