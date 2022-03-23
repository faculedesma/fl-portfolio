import React from "react";
import HeroSection from "./HeroSection";
import "./hero.scss";

const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="hero-bg"></div>
      <div className="hero-draw"></div>
      <HeroSection />
    </section>
  );
};

export default HomeHero;
