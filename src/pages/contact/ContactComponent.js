import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting } from "../../portfolio.js";
import { style } from "glamor";

const contactSection = {
  title: "Contact Me",
  title_fr: "Me contacter",
  profile_image_path: "bonko.png",
  description:
    "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  description_fr:
    "Vous pouvez me contacter aux adresses mentionnées ci-dessous. J'essaierai de vous répondre le plus rapidement possible.",
};

function Contact(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentColor}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentColor}`,
    },
  });

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} language={props.language} setLanguage={props.setLanguage} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assests/images/contact/${contactSection.profile_image_path}`)}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {props.language === 'en' ? contactSection.title : contactSection.title_fr}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {props.language === 'en' ? contactSection.description : contactSection.description_fr}
              </p>
              <SocialMedia />
              <br />
              <br />
              <a {...styles} className="general-btn" href={props.language === 'en' ? greeting.resumeLink : greeting.resumeLink_fr} rel="noopener noreferrer" target='_blank'>
                {props.language === 'en' ? 'See my Resume' : 'Voir mon CV'}
              </a>
            </div>
          </div>
        </Fade>
        
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} language={props.language} />
    </div>
  );
}

export default Contact;
