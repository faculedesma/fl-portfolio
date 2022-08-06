import React, { useRef, useEffect, useContext } from "react";
import { AnimationsContext } from "../../contexts/AnimationsContext";
import lottie from "lottie-web";
import "./animations.scss";

const Animation = ({ name, file, loop, speed = 2 }) => {
  const container = useRef(null);
  const { toggleAnimation } = useContext(AnimationsContext);

  const handleComplete = () => {
    toggleAnimation(name);
  };

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current,
      animationData: file,
      renderer: "svg",
      loop: loop || false,
      autoplay: false,
      setQuality: "low",
    });

    animation.setSpeed(speed);
    animation.onComplete = handleComplete;
    animation.play();
  }, []);

  return <div className={`animation ${name}`} ref={container}></div>;
};

export default Animation;
