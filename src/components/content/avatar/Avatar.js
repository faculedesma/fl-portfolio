import React, { useRef, useState } from "react";
import AvatarPNG from "../../../assets/images/avatar.png";
import Tooltip from "../../common/tooltip/Tooltip";
import "./avatar.scss";

const avatarContent =
  "Hi, I'm Facundo. Welcome to my portfolio. This project was born from my curiosity about doing something different, introspective, and a way to mix my passions for art, music & computers, and on top of it, having fun. Created with love. Hope you enjoy it!";

const Avatar = () => {
  const [open, setOpen] = useState(false);
  const avatarRef = useRef(null);

  const handleToggleTooltip = () => setOpen(!open);

  return (
    <picture
      ref={avatarRef}
      onMouseEnter={handleToggleTooltip}
      onMouseLeave={handleToggleTooltip}
      className="avatar"
    >
      <img src={AvatarPNG} />
      {open && <Tooltip content={avatarContent} top="0" left="80%" />}
    </picture>
  );
};

export default Avatar;
