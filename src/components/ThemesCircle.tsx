import React, { useEffect, useRef } from "react";
import {Theme} from '../models/models'
import gsap from "gsap";
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
  const buttons = useRef(null);

  const getAngle = (id: number): number => {
    return themesAngle * (activeTheme - id - 1)
  }

  const tl = gsap.timeline();

  useEffect(() => {
      // @ts-ignore
      const ctx = gsap.context(() => {
        // @ts-ignore
        const buttonsArray = [...buttons.current.children];
        buttonsArray.forEach((button, index) => {
          tl.to(button, {'--angle': `${getAngle(index)}deg`, duration: 0.5}, "<")
        });

        tl.fromTo('.themes-circle__theme-title--active', {opacity: 0}, {opacity: 1, duration: 0.5});
        
      }, buttons); 
    }, [activeTheme])

  return (
    <div className={`${className} themes-circle`} ref={buttons}>
      { themes.map((theme, index) => (
        <button className={
          `themes-circle__button 
          ${activeTheme === index ? "themes-circle__button--active" : ""}`
          }
          key={index}
          onClick={() => setActiveTheme(index)}
          >
          <span className="themes-circle__theme-index">
            {index + 1}
          </span>
          <span className={`themes-circle__theme-title ${activeTheme === index ? "themes-circle__theme-title--active" : ""}`}>
            {theme.title}
          </span>
        </button>
      ))
      }
    </div>
  );
}

export default ThemesCircle;