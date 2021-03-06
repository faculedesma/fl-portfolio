import React from "react";
import Module from "./Module";
import { drawModules } from "./drawModules";
import "./room.scss";

const Room = ({ handleOnMouseLeave, handleModuleClick }) => {
  return (
    <div className="room">
      {drawModules.map((module) => {
        return (
          <Module
            key={module.id}
            id={module.id}
            src={module.src}
            animation={module.animation}
            media={module.media}
            clickable={module.clickable}
            handleOnMouseLeave={handleOnMouseLeave}
            handleModuleClick={handleModuleClick}
          />
        );
      })}
    </div>
  );
};

export default Room;
