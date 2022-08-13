import React from "react";
import Logo from "../../../assets/images/logo-golden-ratio.png";
import "./still-working.scss";

const StillWorking = () => {
  return (
    <div className="still-working">
      <picture>
        <img src={Logo} type="image/webp" />
      </picture>
      <p>
        Still working on mobile version! If you want to play with it go to a
        desktop!
      </p>
    </div>
  );
};

export default StillWorking;
