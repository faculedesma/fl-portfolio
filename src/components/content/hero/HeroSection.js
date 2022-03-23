import React, { useEffect } from "react";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-section-top">
          <p>Hi, i'm Facundo Ledesma</p>
        </div>
        <div className="hero-section-bottom">
          <p>Trying to live the present moment by doing things i love</p>
          <a id="lets-talk" href="#">
            <span>Let's talk!</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
