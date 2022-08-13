import React, { useEffect, useRef, useState } from "react";
import AvatarPNG from "../../../assets/images/avatar.png";
import Tooltip from "../../common/tooltip/Tooltip";
import "./avatar.scss";

const avatarContent = {
  personal:
    "Hi, I'm Facundo. Welcome to my portfolio. This project was born from my curiosity about doing something different, introspective, and a way to mix my passions for art, music & computers, and on top of it, having fun. Created with love. Hope you enjoy it!",
};

const Avatar = () => {
  const [open, setOpen] = useState(false);
  const avatarRef = useRef(null);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;

    setTimeout(() => {
      setOpen(true);
    }, 4000);

    return () => {
      mounted.current = false;
    };
  }, []);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  return (
    <picture
      ref={avatarRef}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      className="avatar"
    >
      <img src={AvatarPNG} />
      {open && (
        <Tooltip
          information={avatarContent}
          bottom="75%"
          left="75%"
          maxHeight="250px"
        />
      )}
    </picture>
  );
};

export default Avatar;
