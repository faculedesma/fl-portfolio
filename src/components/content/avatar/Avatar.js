import React from "react";
import AvatarPNG from "../../../static/images/avatar.png";
import "./avatar.scss";

const Avatar = () => {
  return (
    <div className="avatar">
      <img src={AvatarPNG} />
    </div>
  );
};

export default Avatar;
