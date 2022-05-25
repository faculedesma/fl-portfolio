import React, { useRef, useEffect, useContext } from "react";
import { AnimationsContext } from "../../contexts/AnimationsContext";
import lottie from "lottie-web";
import "./animations.scss";

const Animation = ({ name, file, loop }) => {
  const container = useRef(null);
  const { animations, setAnimations } = useContext(AnimationsContext);

  const handleComplete = () => {
    setAnimations({
      [name]: !animations[name],
    });
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

    animation.onComplete = handleComplete;
    animation.play();
  }, []);

  return <div className={name} ref={container}></div>;
};

export default Animation;
