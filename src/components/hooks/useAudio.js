import { useState, useEffect, useRef } from "react";

const useAudio = (url, endCallback) => {
  const audio = useRef(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    audio.current.addEventListener("ended", () => {
      setPlaying(false);
      if (endCallback) endCallback();
    });
    return () => {
      audio.current.removeEventListener("ended", () => setPlaying(true));
    };
  }, []);

  useEffect(() => {
    if (playing) {
      audio.current.autoplay = true;
      audio.current.currentTime = 0;
      audio.current.volume = 0.6;
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [playing]);

  return [playing, toggle];
};

export default useAudio;
