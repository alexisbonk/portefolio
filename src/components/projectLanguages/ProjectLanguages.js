import React from "react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function ProjectLanguages(props) {
  const displayLogos = (logo) => {
    console.log(logo)
    if (logo.iconifyClass === 'logos-raspberrypi')
      return (
        <img 
          alt="raspberrypi"
          style={{width: '30px'}} 
          src="https://cdn.icon-icons.com/icons2/2879/PNG/512/raspberry_food_fruit_icon_182572.png"
        />
      )
    else if (logo.iconifyClass === 'logos-arduino')
      return (
        <img 
          alt="arduino"
          style={{width: '35px'}} 
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/arduino_official_logo_icon_167833.png"
        />
      )
    else if (logo.iconifyClass === 'logos-ionic')
      return (
        <img 
          alt="ionic"
          style={{width: '30px'}} 
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/ionic_original_logo_icon_146462.png"
        />
      )
    else if (logo.iconifyClass === 'logos-heroku')
      return (
        <img 
          alt="heroku"
          style={{width: '35px'}} 
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/heroku_logo_icon_168126.png"
        />
      )
    else if (logo.iconifyClass === 'logos-ovh')
      return (
        <img 
          alt="ovh"
          style={{width: '35px'}} 
          src="https://cdn.icon-icons.com/icons2/2407/PNG/512/ovh_icon_146131.png"
        />
      )
    else if (logo.iconifyClass === 'logos-mongodb')
      return (
        <img 
          alt="mongodb"
          style={{width: '35px'}} 
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
        />
      )
    else if (logo.iconifyClass === 'logos-wordpress')
      return (
        <img 
          alt="wordpress"
          style={{width: '35px'}} 
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/wordpress_logo_icon_167953.png"
        />
      )
    else if (logo.iconifyClass === 'logos-stripe')
      return (
        <img 
          alt="stripe"
          style={{width: '35px'}} 
          src="https://cdn.icon-icons.com/icons2/2407/PNG/512/stripe_icon_146092.png"
        />
      )
    else if (logo.iconifyClass === 'logos-chatgpt')
      return (
        <img 
          alt="chatgpt"
          style={{width: '35px'}} 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png"
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
