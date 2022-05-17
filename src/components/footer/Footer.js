import React, { useContext } from "react";
import Contact from "./contact/Contact";
import { AnimationsContext } from "../contexts/AnimationsContext";
import Fireworks from "../shared/animations/Fireworks";
import "./footer.scss";

const Footer = () => {
  const { animations } = useContext(AnimationsContext);

  return (
    <footer id="footer">
      <div className="container">
        <Contact />
        {animations.fireworks && <Fireworks />}
      </div>
    </footer>
  );
};

export default Footer;
