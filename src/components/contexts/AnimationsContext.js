import React from "react";

export const defaultContextValues = {
  animations: {
    fireworks: false,
    ["arrow-right"]: false,
    music: false,
  },
  setAnimations: () => {},
};

export const AnimationsContext = React.createContext();
