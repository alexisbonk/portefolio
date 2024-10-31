import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
//import { Fade } from "react-reveal";

function Educations(props) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      {/* <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            {props.language === 'en' ? 'Degrees Received' : 'Diplômes obtenus'}
          </h1>
        </Fade>
      </div> */}
      <div className="educations-body-div">
        {degrees.degrees.map((degree) => {
          return <DegreeCard degree={degree} theme={theme} language={props.language} />;
        })}
      </div>
    </div>
  );
}

export default Educations;
