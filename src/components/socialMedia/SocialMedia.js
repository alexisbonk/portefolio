import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a
        href={socialMediaLinks.github}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.spotify}
        className="icon-button spotify"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-spotify"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.stackOverflow}
        className="icon-button stack-overflow"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-stack-overflow"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.instagram}
        className="icon-button instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>
        <span></span>
      </a>
    </div>
  );
}
