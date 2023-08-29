import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";

function Home(props) {
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} language={props.language} setLanguage={props.setLanguage} />
      <Greeting theme={props.theme} language={props.language} />
      <Skills theme={props.theme} language={props.language} />
      <Footer theme={props.theme} language={props.language} />
    </div>
  );
}

export default Home;
