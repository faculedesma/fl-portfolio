import React, { useContext, useEffect, useRef } from "react";
import useAudio from "../../hooks/useAudio";
import BrainDamage from "../../../assets/sounds/brain-damage-0.mp3";
import { SoundContext } from "../../contexts/SoundContext";
import { AnimationsContext } from "../../contexts/AnimationsContext";
import HandPoint from "../../common/animations/HandPoint";
import Room from "../room/Room";

const HeroDraws = () => {
  const [playing, toggle] = useAudio(BrainDamage);
  const { sound } = useContext(SoundContext);
  const { animations, toggleAnimation } = useContext(AnimationsContext);
  const mounted = useRef(false);

  const handleOnMouseLeave = () => {
    toggleAnimation("hand");
    if (sound) {
      toggle();
    }
  };

  const handleModuleClick = () => {
    toggleAnimation("hand");
    if (sound) {
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
    if (!playing) {
      if (sound) {
        toggle();
      }
    }
  }, [playing]);

  return (
    <div className="hero-draws">
      {animations.hand && <HandPoint />}
      <Room
        handleOnMouseLeave={handleOnMouseLeave}
        handleModuleClick={handleModuleClick}
      />
    </div>
  );
};

export default HeroDraws;
