import React from "react";

export const defaultSoundContextValues = {
  audios: {
    reggeaBackingTrack: false,
    brainDamage: false,
  },
  isOn: false,
  setSound: () => {},
};

export const SoundContext = React.createContext();
