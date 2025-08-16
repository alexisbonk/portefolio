import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import mysqlLogo from '../../assets/images/techo-logo/mysql.png';
import javaLogo from '../../assets/images/techo-logo/java.png';
import raspberrypiLogo from '../../assets/images/techo-logo/raspberrypi.png';
import burpsuiteLogo from '../../assets/images/techo-logo/burpsuite.png';
import wiresharkLogo from '../../assets/images/techo-logo/wireshark.png';
import kaliLogo from '../../assets/images/techo-logo/kali.png';
import nmapLogo from '../../assets/images/techo-logo/nmap.png';
import hydraLogo from '../../assets/images/techo-logo/hydra.png';
import johnLogo from '../../assets/images/techo-logo/john.png';
import openvasLogo from '../../assets/images/techo-logo/openvas.png';
import isoLogo from '../../assets/images/techo-logo/iso.png';

function SoftwareSkill(props) {
  const displayLogos = (logo) => {
    if (logo.fontAwesomeClassname === 'logos-mysql')
      return (
        <img
          alt="mysql"
          style={{width: '50px'}}
          src={mysqlLogo}
        />
      )
    else if (logo.fontAwesomeClassname === 'logos-java')
      return (
        <img
          alt="java"
          style={{width: '50px'}}
          src={javaLogo}
        />
      )
    else if (logo.fontAwesomeClassname === 'logos-raspberrypi')
      return (
        <img
          alt="raspberrypi"
          style={{width: '45px'}}
          src={raspberrypiLogo}
        />
      )
    else if (logo.fontAwesomeClassname === 'logos-burp')
      return (
        <img
          alt="burpsuite"
          style={{width: '60px'}}
          src={burpsuiteLogo}
        />
      )
    else if (logo.fontAwesomeClassname === 'logos-wireshark')
      return (
        <img
          alt="wireshark"
          style={{width: '50px'}}
          src={wiresharkLogo}
        />
      )
    else if (logo.fontAwesomeClassname === 'logos-kali')
      return (
        <img
          alt="kali"
          style={{width: '50px'}}
          src={kaliLogo}
        />
      )
    else if (logo.fontAwesomeClassname === 'logos-nmap')
      return (
        <img
          alt="nmap"
          style={{width: '50px'}}
          src={nmapLogo}
        />
      )
    else if (logo.fontAwesomeClassname === 'logos-hydra')
      return (
        <img
          alt="hydra"
          style={{width: '50px'}}
          src={hydraLogo}
        />
      )
    else if (logo.fontAwesomeClassname === 'logos-john')
      return (
        <img
          alt="john"
          style={{width: '50px'}}
          src={johnLogo}
        />
      )
    else if (logo.fontAwesomeClassname === 'logos-openvas')
      return (
        <img
          alt="john"
          style={{width: '50px'}}
          src={openvasLogo}
        />
      )
    else if (logo.fontAwesomeClassname === 'logos-iso')
      return (
        <img
          alt="iso"
          style={{width: '50px'}}
          src={isoLogo}
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
