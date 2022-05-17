import React, { useEffect, useRef, useState } from "react";
import useAudio from "./shared/hooks/useAudio";
import DoorsOpening from "../static/sounds/door-opening.mp3";
import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import BeYourself from "./shared/BeYourself";
import {
  AnimationsContext,
  defaultContextValue,
} from "./contexts/AnimationsContext";
import "./app.scss";

const App = () => {
  const [animations, setAnimations] = useState(defaultContextValue);
  const [playing, toggle] = useAudio(DoorsOpening);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    if (mounted) {
      toggle();
    }
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <AnimationsContext.Provider value={{ animations, setAnimations }}>
      <div className="app">
        <Header />
        <Content />
        <Footer />
        <BeYourself />
      </div>
    </AnimationsContext.Provider>
  );
};

export default App;
