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

  return (
    <section className={`${className} historical-dates`}>
      <div className="container historical-dates__inner">
        <h2 className="historical-dates__title">
          Исторические<br/>даты
        </h2>
        <div className="historical-dates__main-dates">
          <h3 className="historical-dates__date historical-dates__date--first">2015</h3>
          <h3 className="historical-dates__date historical-dates__date--last">2022</h3>
        </div>
        <ThemesCircle className="historical-dates__circle" themes={themes} activeTheme={activeTheme} setActiveTheme={setActiveTheme}/>
        <ThemesSlider themes={themes} activeTheme={activeTheme} setActiveTheme={setActiveTheme}/>
      </div>
    </section>
  );
}

export default HistoricalDates;