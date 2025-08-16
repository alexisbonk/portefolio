import React from "react";
import "./ExperienceCard.css";

function formatExperiencePeriod(start, end, lang) {
  if (!start) return "";
  const monthNames = {
    en: ["jan.", "feb.", "mar.", "apr.", "may", "jun.", "jul.", "aug.", "sep.", "oct.", "nov.", "dec."],
    fr: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."]
  };
  const presentStr = lang === 'fr' ? "Aujourd’hui" : "Present";
  const [startMonth, startYear] = start.split("/").map(Number);
  let endMonth, endYear;
  if (end) {
    [endMonth, endYear] = end.split("/").map(Number);
  } else {
    const now = new Date();
    endMonth = now.getMonth() + 1;
    endYear = now.getFullYear();
  }
  const startStr = `${monthNames[lang][startMonth-1]} ${startYear}`;
  const endStr = end ? `${monthNames[lang][endMonth-1]} ${endYear}` : presentStr;
  let months = (endYear - startYear) * 12 + (endMonth - startMonth) + (end ? 1 : 0);
  if (!end) {
    months = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
  }
  let duration = "";
  if (lang === 'fr') {
    if (months < 12) {
      duration = `${months} mois`;
    } else {
      const years = Math.floor(months/12);
      const rem = months % 12;
      duration = `${years} an${years>1?"s":""}${rem>0?` et ${rem} mois`:""}`;
    }
  } else {
    if (months < 12) {
      duration = `${months} month${months > 1 ? "s" : ""}`;
    } else {
      const years = Math.floor(months/12);
      const rem = months % 12;
      if (rem > 0) {
        duration = `${years} year${years > 1 ? "s" : ""} and ${rem} month${rem > 1 ? "s" : ""}`;
      } else {
        duration = `${years} year${years > 1 ? "s" : ""}`;
      }
    }
  }
  return `${startStr} - ${endStr} · ${duration}`;
}

function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;
  const descriptionText = props.language === 'en' ? experience["description"] : experience["description_fr"]

  return (
    <div
      className="experience-card"
      style={{
        border: `1px solid ${experience["color"]}`,
        backgroundColor: theme.imageDark,
      }}
    >
      <div className="experience-card-logo-div">
        <img
          className="experience-card-logo"
          src={require(`../../assets/images/experience/${experience["logo_path"]}`)}
          alt=""
        />
      </div>
      <div className="experience-card-body-div">
        <div className="experience-card-header-div">
          <div className="experience-card-heading-left">
            <h3 className="experience-card-title" style={{ color: theme.text }}>
              {props.language === 'en' ? experience["title"] : experience["title_fr"]}
            </h3>
            <p
              className="experience-card-company"
              style={{ color: theme.secondaryText }}
            >
              <a
                href={experience["company_url"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience["company"]}
              </a>
            </p>
          </div>
          <div className="experience-card-heading-right">
            <p
              className="experience-card-duration"
              style={{ color: theme.secondaryText }}
            >
              {formatExperiencePeriod(experience.start_date, experience.end_date, props.language)}
            </p>
            <p
              className="experience-card-location"
              style={{ color: theme.secondaryText }}
            >
              {props.language === 'en' ? experience["location"] : experience["location_fr"]}
            </p>
          </div>
        </div>
        <p
          className="experience-card-description"
          style={{ color: theme.text }}
        >
          {descriptionText.split('\n').map((line, index) => {
            return (
              <span key={index}>
                {line}
                <br />
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;
