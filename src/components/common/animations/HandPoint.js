import React from "react";
import Animation from "./Animation";
import hand from "../../../assets/animations/hand-click.json";

const HandPoint = () => {
  return <Animation name="hand" file={hand} loop />;
};

export default HandPoint;
