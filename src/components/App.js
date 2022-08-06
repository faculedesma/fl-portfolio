import React, { useEffect, useRef, useState } from "react";
import useAudio from "./hooks/useAudio";
import DoorsOpening from "../assets/sounds/door-opening.mp3";
import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import BeYourself from "./common/BeYourself";
import Loader from "./loader/Loader";
import {
  AnimationsContext,
  defaultContextValues,
} from "./contexts/AnimationsContext";
import {
  SoundContext,
  defaultSoundContextValues,
} from "./contexts/SoundContext";
import "./app.scss";

const pageLoadTime = 2500;

const App = () => {
  const [animations, setAnimations] = useState(defaultContextValues.animations);
  const [sound, setSound] = useState(defaultSoundContextValues.audios);
  const [isLoading, setIsLoading] = useState(true);
  const [playing, toggle] = useAudio(DoorsOpening);
  const mounted = useRef(false);

  const toggleAnimation = (names) => {
    if (names instanceof Array) {
      const updatedAnimations = { ...animations };
      names.forEach((name) => {
        updatedAnimations[name] = !animations[name];
      });
      setAnimations(updatedAnimations);
    } else {
      setAnimations({
        ...animations,
        [names]: !animations[names],
      });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    mounted.current = true;

    setTimeout(() => {
      setIsLoading(false);
    }, pageLoadTime);

    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (mounted.current && !isLoading && sound.isOn) {
      toggle();
    }
  }, [isLoading]);

  return (
    <AnimationsContext.Provider value={{ animations, toggleAnimation }}>
      <SoundContext.Provider value={{ sound, setSound }}>
        <div className={`app ${isLoading ? "" : "animate"}`}>
          <Header />
          <Content />
          <Footer />
          <BeYourself />
        </div>
        {isLoading && <Loader />}
      </SoundContext.Provider>
    </AnimationsContext.Provider>
  );
};

export default App;
