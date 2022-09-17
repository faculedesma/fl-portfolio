import React, { useEffect, useState } from "react";
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
            animations={module.animations}
            clickable={module.clickable}
            information={module.information}
            styles={module.styles}
            handleOnMouseLeave={handleOnMouseLeave}
            handleModuleClick={handleModuleClick}
          />
        );
      })}
    </div>
  );
};

export default Room;
