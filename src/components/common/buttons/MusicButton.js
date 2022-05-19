import React, { useState } from "react";
import useAudio from "../../hooks/useAudio";
import DoorOpening from "../../../assets/sounds/door-opening.mp3";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import "./buttons.scss";

const MusicButton = () => {
  const [musicOn, setMusicOn] = useState(false);
  const [playing, toggle] = useAudio(DoorOpening);

  const handleClick = () => {
    setMusicOn(!musicOn);
    // toggle();
  };

  return (
    <a onClick={handleClick}>{musicOn ? <MdMusicNote /> : <MdMusicOff />}</a>
  );
};

export default MusicButton;
