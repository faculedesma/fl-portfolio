import React from "react";
import AvatarPNG from "../../../assets/images/avatar.png";
import "./avatar.scss";

const Avatar = () => {
  return (
    //TODO: add event on click modal with brief story
    <div className="avatar">
      <img src={AvatarPNG} />
    </div>
  );
};

export default Avatar;
