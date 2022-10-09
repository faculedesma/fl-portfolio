import React, { useState, useEffect, useRef } from "react";
import Room from "../room/Room";
import Year from "../year/Year";
import Contact from "../../contact/Contact";
import Complete from "../complete/Complete";

const total = 21;

const HeroDraws = () => {
  const [completeCount, setCompleteCount] = useState([]);
  const mounted = useRef(false);

  const increaseCount = (id) => {
    if (completeCount.find((moduleId) => moduleId === id)) {
      return;
    }
    setCompleteCount([...completeCount, id]);
  };

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <div className="hero-draws">
      <Room increaseCount={increaseCount} />
      <Year />
      <Contact />
      <Complete count={completeCount.length} total={total} />
    </div>
  );
};

export default HeroDraws;
