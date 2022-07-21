import React from "react";
import Animation from "./Animation";
import satellite from "../../../assets/animations/satellite.json";

const Satellite = () => {
  return <Animation name="satellite" file={satellite} loop />;
};

export default Satellite;
