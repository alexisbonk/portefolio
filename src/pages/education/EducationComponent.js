import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
//import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} language={props.language} setLanguage={props.setLanguage} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                {props.language === 'en' ? 'Education' : 'Éducation'}
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                {props.language === 'en' ? 'Basic Qualification and Diplomas' : 'Qualifications et diplômes'}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {props.language === 'en' ? 
                  'I love organizing pair programming and other tech-related activities. Below are some of my major diplomas.' : 
                  `J'aime organiser des pair-programming et d'autres activités liées à la tech. Voici quelques-uns de mes principaux diplômes.`
                }
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} language={props.language} />
        {/* <Certifications theme={props.theme} /> */}
      </div>
      <Footer theme={props.theme} language={props.language}/>
    </div>
  );
}

export default Education;
