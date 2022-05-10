import React, { useEffect, useRef } from "react";
import useAudio from "./shared/hooks/useAudio";
import DoorsOpening from "../static/sounds/door-opening.mp3";
import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import BeYourself from "./BeYourself";
import "./app.scss";

const App = () => {
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
    <div className="app">
      <Header />
      <Content />
      <Footer />
      <BeYourself />
    </div>
  );
};

export default App;
