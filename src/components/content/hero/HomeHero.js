import React from "react";
import HeroSection from "./HeroSection";
import HeroDraws from "./HeroDraws";
import "./hero.scss";

const HomeHero = () => {
  return (
    <div className="home-hero">
      <HeroSection />
      <HeroDraws />
    </div>
  );
};

export default HomeHero;
