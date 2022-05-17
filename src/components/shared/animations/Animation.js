import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";
import "./animations.scss";

const Animation = ({ name, file }) => {
  const container = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current,
      animationData: file,
      renderer: "svg",
      loop: false,
    });

    animation.play();

    return () => {
      animation.destroy();
    };
  }, []);

  return <div className={name} ref={container}></div>;
};

export default Animation;
