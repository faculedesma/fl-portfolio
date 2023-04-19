import React from "react";
import Module from "./Module";
import { drawModules } from "./drawModules";
import "./room.scss";

const Room = ({ increaseCount }) => {
  return (
    <div id="room" className="room">
      {drawModules.map((module) => {
        return (
          <Module
            key={module.id}
            id={module.id}
            src={module.src}
            animations={module.animations}
            clickable={module.clickable}
            information={module.information}
            increaseCompleteCount={increaseCount}
          />
        );
      })}
    </div>
  );
};

export default React.memo(Room);
