import React, { useContext } from "react";
import Contact from "./contact/Contact";
import { AnimationsContext } from "../contexts/AnimationsContext";
import Fireworks from "../common/animations/Fireworks";
import "./footer.scss";

const Footer = () => {
  const { animations } = useContext(AnimationsContext);

  return (
    <footer id="footer">
      <Contact />
      {animations.fireworks && <Fireworks />}
    </footer>
  );
};

export default Footer;
