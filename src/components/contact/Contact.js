import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <a className="mail" href="mailto: faculedesma1993@gmail.com">
        <Mail size={12} />
      </a>
      <a
        className="github"
        href="https://github.com/faculedesma"
        target="_blank"
      >
        <Github size={12} />
      </a>
      <a
        className="linkedin"
        href="https://linkedin.com/in/facundo-ledesma/"
        target="_blank"
      >
        <Linkedin size={12} />
      </a>
    </div>
  );
};

export default Contact;
