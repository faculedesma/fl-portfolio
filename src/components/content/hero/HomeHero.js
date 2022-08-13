import React from "react";
import HeroSection from "./HeroSection";
import HeroDraws from "./HeroDraws";
// import Avatar from "../avatar/Avatar";
import "./hero.scss";

const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="home-hero-top">
        {/* <Avatar /> */}
        <HeroSection />
      </div>
      <HeroDraws />
    </section>
  );
};

export default HomeHero;
