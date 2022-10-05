import React, { useEffect, useRef } from "react";
import Room from "../room/Room";
import Year from "../year/Year";
import Contact from "../../contact/Contact";

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
      <Year />
      <Contact />
    </div>
  );
};

export default HeroDraws;
