import React from "react";
import AvatarPNG from "../../../assets/images/avatar.png";
import "./avatar.scss";

const Avatar = () => {
  return (
    <picture className="avatar">
      <img src={AvatarPNG} />
    </picture>
  );
};

export default Avatar;
