import React from "react";
import MainTitleGIF from "../../../static/images/main-title.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-top">
        <img src={MainTitleGIF} />
      </div>
      <div className="hero-section-bottom">
        <p>Trying to live the present moment by doing things I love</p>
        <p>Are you interested to know more about me?</p>
        <a id="lets-talk" href="#footer">
          <span>Let's talk!</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
