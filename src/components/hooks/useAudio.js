import { useState, useEffect } from "react";

const useAudio = (url, endCallback) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    audio.addEventListener("ended", () => {
      setPlaying(false);
      if (endCallback) endCallback();
    });
    return () => {
      audio.removeEventListener("ended", () => setPlaying(true));
    };
  }, []);

  useEffect(() => {
    if (playing) {
      audio.currentTime = 0;
      audio.volume = 0.6;
      audio.play();
    } else {
      audio.pause();
    }
  }, [playing]);

  return [playing, toggle];
};

export default useAudio;
