import React from "react";
import HeroSection from "./HeroSection";
import HeroDraws from "./HeroDraws";
import About from "../about/About";
import "./hero.scss";

const HomeHero = () => {
  return (
    <section className="home-hero">
      <About />
      <HeroSection />
      <HeroDraws />
    </section>
  );
};

export default HomeHero;
