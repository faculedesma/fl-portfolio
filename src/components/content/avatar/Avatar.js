import React from "react";
import AvatarPNG from "../../../assets/images/avatar.webp";
import "./avatar.scss";

const Avatar = () => {
  return (
    //TODO: add event on click modal with brief story
    <picture className="avatar">
      <img src={AvatarPNG} />
    </picture>
  );
};

export default Avatar;
