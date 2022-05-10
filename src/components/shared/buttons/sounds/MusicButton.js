import React from "react";
import useAudio from "../../hooks/useAudio";
import DoorOpening from "../../../../static/sounds/door-opening.mp3";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import "../buttons.scss";

const MusicButton = () => {
  const [playing, toggle] = useAudio(DoorOpening);

  const handleClick = () => toggle();

  return (
    <a onClick={handleClick}>{playing ? <MdMusicNote /> : <MdMusicOff />}</a>
  );
};

export default MusicButton;
