import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Tooltip from "../../common/tooltip/Tooltip";
import "./complete.scss";

const completeInfo = {
  generic: "Patience is essential.",
  personal:
    "Amazing job! You have completed the labyrinth. You can trust that I'm saying the truth or keep playing in the room. As always, it depends only on you. Hope you had fun and if you are interested let's talk and share. Thank you! Bye!",
};

const Counter = ({ count, total }) => {
  const [complete, setComplete] = useState(false);

  const handleComplete = () => {
    const check = document.getElementById("check");
    check.style.animationPlayState = "paused";
    setComplete(true);
  };

  return (
    <div className="complete-counter">
      <p>{count}</p>
      <p>/</p>
      <p>{total}</p>
      {count === total && <FaCheck id="check" onClick={handleComplete} />}
      {complete && (
        <Tooltip
          information={completeInfo}
          close
          closeTooltip={() => setComplete(false)}
        />
      )}
    </div>
  );
};

export default Counter;
