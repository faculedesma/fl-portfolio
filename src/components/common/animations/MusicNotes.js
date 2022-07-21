import React from "react";
import Animation from "./Animation";
import musicNotes from "../../../assets/animations/music-notes.json";

const MusicNotes = () => {
  return <Animation name="music" file={musicNotes} />;
};

export default MusicNotes;
