import React from "react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import raspberrypiLogo from '../../assets/images/techo-logo/raspberrypi.png';
import arduinoLogo from '../../assets/images/techo-logo/arduino.png';
import ionicLogo from '../../assets/images/techo-logo/ionic.png';
import firebaseLogo from '../../assets/images/techo-logo/firebase.png';
import herokuLogo from '../../assets/images/techo-logo/heroku.png';
import ovhLogo from '../../assets/images/techo-logo/ovh.png';
import mongodbLogo from '../../assets/images/techo-logo/mongodb.png';
import wordpressLogo from '../../assets/images/techo-logo/wordpress.png';
import chatgptLogo from '../../assets/images/techo-logo/chatgpt.png';
import stripeLogo from '../../assets/images/techo-logo/stripe.png';

function ProjectLanguages(props) {
  const displayLogos = (logo) => {
    console.log(logo)
    if (logo.iconifyClass === 'logos-raspberrypi')
      return (
        <img 
          alt="raspberrypi"
          style={{width: '30px'}} 
          src={raspberrypiLogo}
        />
      )
    else if (logo.iconifyClass === 'logos-arduino')
      return (
        <img 
          alt="arduino"
          style={{width: '35px'}}
          src={arduinoLogo}
        />
      )
    else if (logo.iconifyClass === 'logos-firebase')
      return (
        <img 
          alt="firebase"
          style={{width: '25px'}}
          src={firebaseLogo}
        />
      )
    else if (logo.iconifyClass === 'logos-ionic')
      return (
        <img 
          alt="ionic"
          style={{width: '30px'}}
          src={ionicLogo}
        />
      )
    else if (logo.iconifyClass === 'logos-heroku')
      return (
        <img 
          alt="heroku"
          style={{width: '35px'}}
          src={herokuLogo}
        />
      )
    else if (logo.iconifyClass === 'logos-ovh')
      return (
        <img 
          alt="ovh"
          style={{width: '35px'}}
          src={ovhLogo}
        />
      )
    else if (logo.iconifyClass === 'logos-mongodb')
      return (
        <img 
          alt="mongodb"
          style={{width: '35px'}}
          src={mongodbLogo}
        />
      )
    else if (logo.iconifyClass === 'logos-wordpress')
      return (
        <img 
          alt="wordpress"
          style={{width: '35px'}}
          src={wordpressLogo}
        />
      )
    else if (logo.iconifyClass === 'logos-stripe')
      return (
        <img 
          alt="stripe"
          style={{width: '35px'}}
          src={stripeLogo}
        />
      )
    else if (logo.iconifyClass === 'logos-chatgpt')
      return (
        <img 
          alt="chatgpt"
          style={{width: '35px'}}
          src={chatgptLogo}
        />
      )
    else
      return (
        <span
          className="iconify"
          data-icon={logo.iconifyClass}
          data-inline="false"
        />
      )
  }

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          {props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.name}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.name}</strong>
                  </Tooltip>
                }
              >
                <li
                  className="software-skill-inline-languages"
                  name={logo.skillName}
                >
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

export default ProjectLanguages;
