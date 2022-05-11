import React from "react";
import HomeHero from "./hero/HomeHero";
import "./content.scss";

const Content = () => {
  return (
    <div className="main-content">
      <div className="container">
        <HomeHero />
      </div>
    </div>
  );
};

export default Content;
