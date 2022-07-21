import React, { useContext } from "react";
import useAudio from "../../hooks/useAudio";
import MusicNotes from "../animations/MusicNotes";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import { AudioContext } from "../../contexts/AudioContext";
import { AnimationsContext } from "../../contexts/AnimationsContext";
import "./buttons.scss";

const MusicButton = () => {
  const { animations, toggleAnimation } = useContext(AnimationsContext);
  const { audio, setAudio } = useContext(AudioContext);

  const handleClick = () => {
    setAudio(!audio);
    toggleAnimation("music");
  };

  return (
    <>
      <a onClick={handleClick}>{audio ? <MdMusicNote /> : <MdMusicOff />}</a>
      {animations.music && <MusicNotes />}
    </>
  );
};

export default MusicButton;
