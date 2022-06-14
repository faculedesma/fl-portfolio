import React from "react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiTwitter, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="contact">
      <ul>
        <li>
          <a href="mailto: faculedesma1993@gmail.com">
            <FiMail />
          </a>
        </li>
        <li>
          <a href="https://github.com/faculedesma" target="_blank">
            <FiGithub />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/faculedesma73" target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/facundo-ledesma/" target="_blank">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a href="https://wa.me/+543816435791" target="_blank">
            <FaWhatsapp />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
