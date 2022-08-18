import React, { useState } from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiMail } from "react-icons/fi";
import GmailLogo from "../../../assets/images/gmail-logo.png";
import GithubLogo from "../../../assets/images/github-logo.png";
import LinkedInLogo from "../../../assets/images/linkedin-logo.png";
import WhatsAppLogo from "../../../assets/images/whatsapp-logo.png";

const Contact = () => {
  const [selectedLink, setSelectedLink] = useState("");

  const handleSelectLink = (name) => setSelectedLink(name);

  const cleanUpLink = () => setSelectedLink("");

  return (
    <div className="contact">
      <a
        className="mail"
        href="mailto: faculedesma1993@gmail.com"
        onMouseEnter={() => handleSelectLink("gmail")}
        onMouseLeave={cleanUpLink}
      >
        {selectedLink === "gmail" ? (
          <img src={GmailLogo} alt="gmail" />
        ) : (
          <FiMail />
        )}
      </a>
      <a
        className="github"
        href="https://github.com/faculedesma"
        target="_blank"
        onMouseEnter={() => handleSelectLink("github")}
        onMouseLeave={cleanUpLink}
      >
        {selectedLink === "github" ? (
          <img src={GithubLogo} alt="github" />
        ) : (
          <FiGithub />
        )}
      </a>
      <a
        className="linkedin"
        href="https://linkedin.com/in/facundo-ledesma/"
        target="_blank"
        onMouseEnter={() => handleSelectLink("linkedin")}
        onMouseLeave={cleanUpLink}
      >
        {selectedLink === "linkedin" ? (
          <img src={LinkedInLogo} alt="linkedin" />
        ) : (
          <FaLinkedinIn />
        )}
      </a>
      <a
        className="whatsapp"
        href="https://wa.me/+543816435791"
        target="_blank"
        onMouseEnter={() => handleSelectLink("whatsapp")}
        onMouseLeave={cleanUpLink}
      >
        {selectedLink === "whatsapp" ? (
          <img src={WhatsAppLogo} alt="whatsapp" />
        ) : (
          <FaWhatsapp />
        )}
      </a>
    </div>
  );
};

export default Contact;
