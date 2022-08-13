import React from "react";
import Satellite from "../common/animations/Satellite";
import PsychHeadphones from "../../assets/images/psych-headphones.png";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="initial-loader">
      <Satellite />
      <div className="initial-loader-recom">
        <img src={PsychHeadphones} />
        <p>Fly with me!</p>
      </div>
    </div>
  );
};

export default Loader;
