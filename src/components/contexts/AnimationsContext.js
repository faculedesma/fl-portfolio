import * as React from "react";

export const defaultContextValues = {
  animations: {
    fireworks: false,
    music: false,
    hand: true,
  },
};

export const AnimationsContext = React.createContext();
