import React from "react";
import Animation from "./Animation";
import particles from "../../../static/animations/particle-explosion.json";

const Fireworks = () => {
  return <Animation name="animation fireworks" file={particles} />;
};

export default Fireworks;
