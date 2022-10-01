import { useState, useEffect, useRef } from "react";

const useAudio = (url, endCallback) => {
  const audio = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (url) {
      audio.current = new Audio(url);
      audio.current.addEventListener("ended", () => {
        setPlaying(false);
        if (endCallback) endCallback();
      });
    }
    return () => {
      if (url)
        audio.current.removeEventListener("ended", () => setPlaying(true));
    };
  }, [url]);

  useEffect(() => {
    if (audio.current) {
      if (playing) {
        audio.current.currentTime = 0;
        audio.current.volume = 0.6;
        audio.current.play();
      } else {
        audio.current.pause();
      }
    }
  }, [playing, audio.current]);

  return [playing, toggle];
};

export default useAudio;
