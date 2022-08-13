import React, { useEffect, useRef, useState } from "react";
import useAudio from "./hooks/useAudio";
import useCheckIsMobile from "./hooks/useCheckIsMobile";
import DoorsOpening from "../assets/sounds/door-opening.mp3";
import Header from "./header/Header";
import Avatar from "../components/common/avatar/Avatar";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import BeYourself from "./common/BeYourself";
import StillWorking from "./common/still-working/StillWorking";
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
import MusicButton from "./common/buttons/MusicButton";

const pageLoadTime = 2500;

const App = () => {
  const [animations, setAnimations] = useState(defaultContextValues.animations);
  const [sound, setSound] = useState(defaultSoundContextValues.audios);
  const [isLoading, setIsLoading] = useState(true);
  const [playing, toggle] = useAudio(DoorsOpening);
  const isMobile = useCheckIsMobile();
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

  return !isMobile ? (
    <AnimationsContext.Provider value={{ animations, toggleAnimation }}>
      <SoundContext.Provider value={{ sound, setSound }}>
        <div className={`app ${isLoading ? "" : "animate"}`}>
          {/* <Header /> */}
          <MusicButton />
          <Avatar />
          <Content />
          <Footer />
          <BeYourself />
        </div>
        {isLoading && <Loader />}
      </SoundContext.Provider>
    </AnimationsContext.Provider>
  ) : (
    <StillWorking />
  );
};

export default App;
