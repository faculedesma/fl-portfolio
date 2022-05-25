import React from "react";
import Animation from "./Animation";
import pulse from "../../../assets/animations/pulse-animation.json";

const Pulse = () => {
  return <Animation name="animation pulse" file={pulse} loop />;
};

export default Pulse;
