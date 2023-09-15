import React, { useState } from "react";
import "../assets/styles/dates-circle.scss";

interface Props {
  className: string;
}

const themes = [
  {
    id: 1,
    title: "Наука"
  }, 
  {
    id: 2,
    title: "Литература"
  },
  {
    id: 3,
    title: "Кино"
  },
  {
    id: 4,
    title: "Театр"
  },
  {
    id: 5,
    title: "Темааа"
  },
  {
    id: 6,
    title: ""
  }
]

const DatesCircle = ({ className }: Props) => {

  const [activeTheme, setActiveTheme] = useState(1);
  const degrees = 360;
  const themesAngle = degrees/themes.length;

  const getAngle = (id: number) => {
    return themesAngle * (activeTheme - id - 1)
  }

  return (
    <div className={`${className} dates-circle`}>
      { themes.map((theme) => (
        <button className={
          `dates-circle__button 
          ${activeTheme === theme.id ? "dates-circle__button--active" : ""}`
          }
          style={{['--angle' as string]: `${getAngle(theme.id)}deg`}}
          key={theme.id}
          onClick={() => setActiveTheme(theme.id)}
          >
          <span className="dates-circle__theme-index">
            {theme.id}
          </span>
          <span className="dates-circle__theme-title">
            {theme.title}
          </span>
        </button>
      ))
      }
    </div>
  );
}

export default DatesCircle;