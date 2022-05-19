import React, { useContext } from "react";
import Contact from "./contact/Contact";
import { AnimationsContext } from "../contexts/AnimationsContext";
import Fireworks from "../common/animations/Fireworks";
import ArrowRight from "../common/animations/ArrowRight";
import "./footer.scss";

const Footer = () => {
  const { animations } = useContext(AnimationsContext);

  return (
    <footer id="footer">
      <div className="container">
        <Contact />
        {animations.fireworks && <ArrowRight />}
        {animations.fireworks && <Fireworks />}
      </div>
    </footer>
  );
};

export default Footer;
