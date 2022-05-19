import React, { useEffect, useRef, useState } from "react";
import useAudio from "./hooks/useAudio";
import DoorsOpening from "../assets/sounds/door-opening.mp3";
import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import BeYourself from "./common/BeYourself";
import {
  AnimationsContext,
  defaultContextValues,
} from "./contexts/AnimationsContext";
import "./app.scss";

const App = () => {
  const [animations, setAnimations] = useState(defaultContextValues);
  const [playing, toggle] = useAudio(DoorsOpening);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    if (mounted) {
      toggle(); //check sound
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
