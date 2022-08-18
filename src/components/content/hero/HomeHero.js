import React from "react";
import HeroSection from "./HeroSection";
import HeroDraws from "./HeroDraws";
import "./hero.scss";

const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="home-hero-top">
        <HeroSection />
      </div>
      <HeroDraws />
    </section>
  );
};

export default HomeHero;
