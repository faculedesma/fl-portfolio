import React from "react";
import FLLogo from "../../../assets/images/logos/logo-golden-ratio.png";
import "./logo.scss";

const Logo = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="logo"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <picture>
        <img src={FLLogo} type="image/webp" alt="logo" />
      </picture>
    </div>
  );
};

export default Logo;
