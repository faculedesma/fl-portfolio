import React from "react";
import FLLogo from "../../../assets/images/logo-golden-ratio.png";
import "./logo.scss";

const Logo = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="logo"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <picture>
        <img src={FLLogo} type="image/webp" />
      </picture>
      <p>Facundo Ledesma</p>
    </div>
  );
};

export default Logo;
