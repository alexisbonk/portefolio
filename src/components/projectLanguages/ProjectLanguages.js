import React from "react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function ProjectLanguages(props) {
  const displayLogos = (logo) => {
    if (logo.iconifyClass === 'logos-raspberrypi')
      return (
        <img 
          alt=""
          style={{width: '30px', marginBottom: '-3px'}} 
          src="https://cutewallpaper.org/24/raspberry-pi-logo-png/raspberry-pi-logo-transparent-png-stickpng.png"
        />
      )
    else if (logo.iconifyClass === 'logos-ionic')
      return (
        <img 
          alt=""
          style={{width: '30px', marginBottom: '-3px'}} 
          src="https://www.svgrepo.com/show/353912/ionic-icon.svg"
        />
      )
    else if (logo.iconifyClass === 'logos-heroku')
      return (
        <img 
          alt=""
          style={{width: '30px', marginBottom: '-3px'}} 
          src="https://cdn-icons-png.flaticon.com/512/873/873120.png"
        />
      )
    else if (logo.iconifyClass === 'logos-ovh')
      return (
        <img 
          alt=""
          style={{width: '30px', marginBottom: '-3px'}} 
          src="https://avatars.githubusercontent.com/u/1698434?s=200&v=4"
        />
      )
    else if (logo.iconifyClass === 'logos-mongodb')
      return (
        <img 
          alt=""
          style={{width: '30px', marginBottom: '-3px'}} 
          src="https://www.nicepng.com/png/full/103-1039678_mongodb-logo-01a-graphic-design.png"
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
