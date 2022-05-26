import React, { useContext } from "react";
import useAudio from "../../hooks/useAudio";
import DoorOpening from "../../../assets/sounds/door-opening.mp3";
import MusicNotes from "../animations/MusicNotes";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import { AudioContext } from "../../contexts/AudioContext";
import { AnimationsContext } from "../../contexts/AnimationsContext";
import "./buttons.scss";

const MusicButton = () => {
  const { animations, setAnimations } = useContext(AnimationsContext);
  const { audio, setAudio } = useContext(AudioContext);
  const [playing, toggle] = useAudio(DoorOpening);

  const handleClick = () => {
    setAudio(!audio);
    setAnimations({
      music: !animations.music,
    });
    toggle();
  };

  return (
    <>
      <a onClick={handleClick}>{audio ? <MdMusicNote /> : <MdMusicOff />}</a>
      {animations.music && <MusicNotes />}
    </>
  );
};

export default MusicButton;
