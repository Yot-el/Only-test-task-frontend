import React from "react";
import {Theme} from '../models/models'
import "../assets/styles/themes-circle.scss";

interface Props {
  className: string;
  themes: Array<Theme>;
  activeTheme: number;
  setActiveTheme: Function;
}

const ThemesCircle = ({ className, themes, activeTheme, setActiveTheme }: Props) => {

  const degrees = 360;
  const themesAngle = degrees/themes.length;

  const getAngle = (id: number): number => {
    return themesAngle * (activeTheme - id - 1)
  }

  return (
    <div className={`${className} themes-circle`}>
      { themes.map((theme, index) => (
        <button className={
          `themes-circle__button 
          ${activeTheme === index ? "themes-circle__button--active" : ""}`
          }
          style={{['--angle' as string]: `${getAngle(index)}deg`}}
          key={index}
          onClick={() => setActiveTheme(index)}
          >
          <span className="themes-circle__theme-index">
            {index + 1}
          </span>
          <span className="themes-circle__theme-title">
            {theme.title}
          </span>
        </button>
      ))
      }
    </div>
  );
}

export default ThemesCircle;