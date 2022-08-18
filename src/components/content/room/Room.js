import React, { useEffect, useState } from "react";
import Module from "./Module";
import { drawModules } from "./drawModules";
import "./room.scss";

const defaultLoopCount = {
  right: 0,
  left: 0,
};

const Room = ({ handleOnMouseLeave, handleModuleClick }) => {
  const [loopCount, setLoopCount] = useState(defaultLoopCount);

  const handleIncrementLoop = (id) => {
    let updatedLoop = {};
    if (id === "left-speaker") {
      updatedLoop = {
        ...loopCount,
        left: loopCount.left + 1,
      };
    } else {
      updatedLoop = {
        ...loopCount,
        right: loopCount.right + 1,
      };
    }
    setLoopCount(updatedLoop);
  };

  const cleanLoopCount = () => setLoopCount(defaultLoopCount);

  useEffect(() => {
    if (loopCount.left === 6) {
      setLoopCount({
        ...loopCount,
        left: 0,
      });
    }
  }, [loopCount.left]);

  useEffect(() => {
    if (loopCount.right === 6) {
      setLoopCount({
        ...loopCount,
        right: 0,
      });
    }
  }, [loopCount.right]);

  return (
    <div className="room">
      {drawModules.map((module) => {
        return (
          <Module
            key={module.id}
            id={module.id}
            src={module.src}
            animation={module.animation}
            clickable={module.clickable}
            information={module.information}
            styles={module.styles}
            loopCount={loopCount}
            cleanLoopCount={cleanLoopCount}
            incrementLoop={(id) => handleIncrementLoop(id)}
            handleOnMouseLeave={handleOnMouseLeave}
            handleModuleClick={handleModuleClick}
          />
        );
      })}
    </div>
  );
};

export default Room;
