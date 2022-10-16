import React, { useEffect, useRef, useState } from "react";
import useAudio from "./hooks/useAudio";
import Content from "./content/Content";
import Loader from "./loader/Loader";
import BlackPage from "./black/Black";
import {
  SoundContext,
  defaultSoundContextValues,
} from "./contexts/SoundContext";
import WakeUPMP3 from "../assets/sounds/wake-up.mp3";
import "./app.scss";

const App = () => {
  const [sound, setSound] = useState(defaultSoundContextValues.audios);
  const [isLoading, setIsLoading] = useState(true);
  const [goToApp, setGoToApp] = useState(false);
  const [playing, toggle] = useAudio(WakeUPMP3);
  const mounted = useRef(false);

  const onContinue = () => {
    setGoToApp(true);
    toggle();
  };

  const handleIsLoaded = () => setIsLoading(false);

  useEffect(() => {
    setIsLoading(true);
    mounted.current = true;

    window.addEventListener("load", handleIsLoaded);

    return () => {
      window.removeEventListener("load", handleIsLoaded, true);
      mounted.current = false;
    };
  }, []);

  return (
    <SoundContext.Provider value={{ sound, setSound }}>
      <div className={`app ${!goToApp ? "" : "animate"}`}>
        <Content />
        <BlackPage />
      </div>
      {!goToApp && <Loader isLoading={isLoading} onContinue={onContinue} />}
    </SoundContext.Provider>
  );
};

export default App;
