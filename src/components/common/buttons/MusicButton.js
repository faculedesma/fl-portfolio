import React, { useContext } from "react";
import MusicNotes from "../animations/MusicNotes";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import { SoundContext } from "../../contexts/SoundContext";
import { AnimationsContext } from "../../contexts/AnimationsContext";
import "./buttons.scss";

const MusicButton = () => {
  const { animations, toggleAnimation } = useContext(AnimationsContext);
  const { sound, setSound } = useContext(SoundContext);

  const handleClick = () => {
    setSound(!sound);
    toggleAnimation("music");
  };

  return (
    <>
      <a onClick={handleClick}>{sound ? <MdMusicNote /> : <MdMusicOff />}</a>
      {animations.music && <MusicNotes />}
    </>
  );
};

export default MusicButton;
