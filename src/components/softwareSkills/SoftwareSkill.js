import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function SoftwareSkill(props) {
  const displayLogos = (logo) => {
    if (logo.fontAwesomeClassname === 'python')
      return (
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
          style={{width: '42px'}}
        />
      )
    else if (logo.fontAwesomeClassname === 'mysql')
      return (
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png"
          style={{width: '50px'}}
        />
      )
    else if (logo.fontAwesomeClassname === 'raspberrypi')
      return (
        <img
          alt=""
          src="https://cutewallpaper.org/24/raspberry-pi-logo-png/raspberry-pi-logo-transparent-png-stickpng.png"
          style={{width: '50px'}}
        />
      )
    else if (logo.fontAwesomeClassname === 'raspberrypi')
      return (
        <img
          alt=""
          src="https://cutewallpaper.org/24/raspberry-pi-logo-png/raspberry-pi-logo-transparent-png-stickpng.png"
          style={{width: '50px'}}
        />
      )
    else
      return (
        <span
          className="iconify"
          data-icon={logo.fontAwesomeClassname}
          style={logo.style}
          data-inline="false"
        />
      )
  }

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.skillName}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.skillName}</strong>
                  </Tooltip>
                }
              >
                <li className="software-skill-inline" name={logo.skillName}>
                  {displayLogos(logo)}
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SoftwareSkill;
