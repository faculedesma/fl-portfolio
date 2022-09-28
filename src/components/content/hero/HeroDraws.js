import React, { useEffect, useRef } from "react";
import Room from "../room/Room";

const HeroDraws = () => {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <div className="hero-draws">
      <Room />
    </div>
  );
};

export default HeroDraws;
