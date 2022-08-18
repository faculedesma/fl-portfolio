import React from "react";
import Logo from "../../../assets/images/logo-golden-ratio.png";
import "./still-working.scss";

const StillWorking = () => {
  return (
    <div className="still-working">
      <picture>
        <img src={Logo} type="image/webp" alt="logo" />
      </picture>
      <p>
        Still working on mobile version! I encourague you to go to your laptop
        and have fun!
      </p>
    </div>
  );
};

export default StillWorking;
