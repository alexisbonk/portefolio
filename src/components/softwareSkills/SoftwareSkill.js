import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function SoftwareSkill(props) {
  const displayLogos = (logo) => {
    if (logo.fontAwesomeClassname === 'logos-mysql')
      return (
        <img
          alt="mysql"
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mysql_original_wordmark_logo_icon_146417.png"
          style={{width: '50px'}}
        />
      )
    else if (logo.fontAwesomeClassname === 'logos-java')
      return (
        <img
          alt="java"
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_logo_icon_146458.png"
          style={{width: '50px'}}
        />
      )
    else if (logo.fontAwesomeClassname === 'logos-raspberrypi')
      return (
        <img
          alt="raspberrypi"
          src="https://cdn.icon-icons.com/icons2/2879/PNG/512/raspberry_food_fruit_icon_182572.png"
          style={{width: '50px'}}
        />
      )
    else if (logo.fontAwesomeClassname === 'logos-burp')
      return (
        <img
          alt="burpsuite"
          src="https://cdn.icon-icons.com/icons2/3053/PNG/512/burp_suite_macos_bigsur_icon_190319.png"
          style={{width: '50px'}}
        />
      )
    else if (logo.fontAwesomeClassname === 'logos-wireshark')
      return (
        <img
          alt="wireshark"
          src="https://cdn.icon-icons.com/icons2/1495/PNG/512/wireshark_103123.png"
          style={{width: '50px'}}
        />
      )
    else if (logo.fontAwesomeClassname === 'logos-nmap')
      return (
        <img
          alt="nmap"
          src="https://www.kali.org/tools/nmap/images/nmap-logo.svg"
          style={{width: '50px'}}
        />
      )
    else if (logo.fontAwesomeClassname === 'logos-hydra')
      return (
        <img
          alt="hydra"
          src="https://www.kali.org/tools/hydra/images/hydra-logo.svg"
          style={{width: '50px'}}
        />
      )
    else if (logo.fontAwesomeClassname === 'logos-john')
      return (
        <img
          alt="john"
          src="https://www.kali.org/tools/john/images/john-logo.svg"
          style={{width: '50px'}}
        />
      )
    else if (logo.fontAwesomeClassname === 'logos-openvas')
      return (
        <img
          alt="john"
          src="https://miro.medium.com/v2/resize:fit:954/1*ssgbiwYHOi9gIXt9pGCJYw.png"
          style={{width: '50px'}}
        />
      )
    else if (logo.fontAwesomeClassname === 'logos-iso')
      return (
        <img
          alt="iso"
          src="https://i0.wp.com/akitra.com/wp-content/uploads/2023/02/ISO-27001-large.png?fit=800%2C800&ssl=1"
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
