import React from "react";

export const defaultContextValue = {
  animations: {
    fireworks: false,
    music: false,
  },
  setAnimations: () => {},
};

export const AnimationsContext = React.createContext();
