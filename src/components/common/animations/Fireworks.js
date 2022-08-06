import React from "react";
import Animation from "./Animation";
import particles from "../../../assets/animations/particle-explosion.json";

const Fireworks = () => {
  return <Animation name="fireworks" file={particles} speed={1} />;
};

export default Fireworks;
