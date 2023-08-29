import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          {props.language === 'en' ? 'Made with' : 'Fait avec'} <span role="img">❤️</span> {props.language === 'en' ? 'by' : 'par'} {greeting.title2}
        </p>
      </Fade>
    </div>
  );
}
