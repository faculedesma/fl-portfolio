import React, { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import "./buttons.scss";

const ThemeButton = () => {
  const [isLight, setIsLight] = useState(true);

  const handleClick = () => setIsLight(!isLight);

  return (
    <button onClick={handleClick}>
      {isLight ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default ThemeButton;
