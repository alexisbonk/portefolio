import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function ProjectCard({ repo, theme, language }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  function getStatusClass(status) {
    switch (status) {
      case true:
        return 'status-online';
      case false:
        return 'status-closed';
      default:
        return 'status-unknown';
    }
  }

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: repo.online || repo.online === null ? 'pointer' : '',
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={repo.id}
          onClick={() => repo.url && openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div">
            <OverlayTrigger
              key={repo.id}
              placement={"top"}
              overlay={
                <Tooltip id={`tooltip-top`}>
                  <strong>{repo.online || repo.online === null ? 'Online' : 'Offline'}</strong>
                </Tooltip>
              }
            >
              <div className={`status-circle ${getStatusClass(repo.online)}`}/>
            </OverlayTrigger>
            <p className="repo-name" style={{ color: theme.text }}>
              {language === 'en' ? repo.name : repo.name_fr}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {language === 'en' ? repo.description : repo.description_fr}
          </p>
          <div className="repo-details">
            <ProjectLanguages logos={repo.languages} />
          </div>
        </div>
      </Fade>
    </div>
  );
}
