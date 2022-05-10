import React from "react";
import HomeHero from "./hero/HomeHero";
import About from "./about/About";
import "./content.scss";

const Content = () => {
  return (
    <div className="main-content">
      <div className="container">
        <HomeHero />
        {/* <About /> */}
      </div>
    </div>
  );
};

export default Content;
