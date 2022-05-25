import React from "react";
import Animation from "./Animation";
import strings from "../../../assets/animations/strings-animation.json";

const Strings = () => {
  return <Animation name="animation strings" file={strings} loop />;
};

export default Strings;
