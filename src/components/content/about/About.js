import React from "react";
import AboutMePNG from "../../../static/images/about-me.png";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      {/* <p>About me</p> */}
      <div className="about-image">
        <img src={AboutMePNG} />
      </div>
    </div>
  );
};

export default About;
