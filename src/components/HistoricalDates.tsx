import React, { useState } from "react";
import {Theme} from '../models/models'
import "../assets/styles/historical-dates.scss";
import ThemesSlider from "./ThemesSlider";
import ThemesCircle from "./ThemesCircle";

interface Props {
  className: string;
  themes: Array<Theme>;
}

const HistoricalDates = ({ className, themes }: Props) => {
  const [activeTheme, setActiveTheme] = useState(0);

  const getFirstDate = (theme: Theme) => {
    return theme?.dates[0].date;
  }
  const getLastDate = (theme: Theme) => {
    const lastIndex = theme?.dates.length - 1;
    return theme?.dates[lastIndex].date;
  }

  return (
    <section className={`${className} historical-dates`}>
      <div className="container historical-dates__inner">
        <h2 className="historical-dates__title">
          Исторические<br/>даты
        </h2>
        <div className="historical-dates__main-dates">
          <h3 className="historical-dates__date historical-dates__date--first">{ getFirstDate(themes[activeTheme]) }</h3>
          <h3 className="historical-dates__date historical-dates__date--last">{ getLastDate(themes[activeTheme]) }</h3>
        </div>
        <ThemesCircle className="historical-dates__circle" themes={themes} activeTheme={activeTheme} setActiveTheme={setActiveTheme}/>
        <ThemesSlider themes={themes} activeTheme={activeTheme} setActiveTheme={setActiveTheme}/>
      </div>
    </section>
  );
}

export default HistoricalDates;