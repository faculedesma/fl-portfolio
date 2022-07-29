import React, { useContext, useEffect, useRef } from "react";
import useAudio from "../../hooks/useAudio";
import BrainDamage from "../../../assets/sounds/brain-damage-0.mp3";
import { AudioContext } from "../../contexts/AudioContext";
import { AnimationsContext } from "../../contexts/AnimationsContext";
import HandPoint from "../../common/animations/HandPoint";
import Room from "../room/Room";

const HeroDraws = () => {
  const [playing, toggle] = useAudio(BrainDamage);
  const { audio } = useContext(AudioContext);
  const { animations, toggleAnimation } = useContext(AnimationsContext);
  const mounted = useRef(false);

  const handleOnMouseLeave = () => {
    toggleAnimation("hand");
    if (audio) {
      toggle();
    }
  };

  const handleModuleClick = () => {
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
    if (!playing) {
      if (audio) {
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
