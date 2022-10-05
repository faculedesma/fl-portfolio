import React from "react";
import {
  FaLinkedinIn,
  FaBehance,
  FaGithubAlt,
  FaPaperPlane,
} from "react-icons/fa";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <a className="mail" href="mailto: faculedesma1993@gmail.com">
        <FaPaperPlane />
      </a>
      <a
        className="github"
        href="https://github.com/faculedesma"
        target="_blank"
      >
        <FaGithubAlt />
      </a>
      <a
        className="linkedin"
        href="https://linkedin.com/in/facundo-ledesma/"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
      <a
        className="behance"
        href="https://www.behance.net/facundoledesma5"
        target="_blank"
      >
        <FaBehance />
      </a>
    </div>
  );
};

export default Contact;
