import React from "react";
import Contact from "./contact/Contact";
import "./footer.scss";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <Contact />
      </div>
    </footer>
  );
};

export default Footer;
