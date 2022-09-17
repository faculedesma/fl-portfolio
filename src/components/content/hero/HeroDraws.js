import React, { useContext, useEffect, useRef } from "react";
import { AnimationsContext } from "../../contexts/AnimationsContext";
import HandPoint from "../../common/animations/HandPoint";
import Room from "../room/Room";

const HeroDraws = () => {
  const { animations, toggleAnimation } = useContext(AnimationsContext);
  const mounted = useRef(false);

  const handleOnMouseLeave = () => toggleAnimation("hand");

  const handleModuleClick = () => toggleAnimation("hand");

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <div className="hero-draws">
      {/* {animations.hand && <HandPoint />} */}
      <Room
        handleOnMouseLeave={handleOnMouseLeave}
        handleModuleClick={handleModuleClick}
      />
    </div>
  );
};

export default HeroDraws;
