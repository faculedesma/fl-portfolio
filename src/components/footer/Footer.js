import React, { useContext } from "react";
import Contact from "./contact/Contact";
import { AnimationsContext } from "../contexts/AnimationsContext";
import Fireworks from "../common/animations/Fireworks";
import Arrow from "../common/animations/Arrow";
import "./footer.scss";

const Footer = () => {
  const { animations } = useContext(AnimationsContext);

  return (
    <footer id="footer">
      <div className="container">
        <Contact />
        {animations.fireworks && (
          <>
            <Arrow />
            <Fireworks />
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
