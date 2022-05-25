import React from "react";
import Strings from "../common/animations/Strings";
import Pulse from "../common/animations/Pulse";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="initial-loader">
      <Strings />
      <Pulse />
    </div>
  );
};

export default Loader;
