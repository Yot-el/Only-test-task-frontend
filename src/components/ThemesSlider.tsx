import React, { useEffect, useState } from "react";
import {Theme} from '../models/models'
import "../assets/styles/themes-slider.scss";
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Pagination } from 'swiper/modules';

interface Props {
  themes: Array<Theme>;
  activeTheme: number;
  setActiveTheme: Function;
}

const DatesSlider = ({ themes, activeTheme, setActiveTheme }: Props) => {

  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  useEffect(() => {
    swiper?.slideTo(activeTheme)
  }, [activeTheme])

  const convertSlidersCount = (count: number): string => {
    return count < 10 ? `0${count}` : `${count}`
  }

  const onPrevButtonClick = (): void => {
    const newTheme = activeTheme - 1;
    newTheme < 0 ? setActiveTheme(0) : setActiveTheme(newTheme);
  }

  const onNextButtonClick = (): void => {
    const newTheme = activeTheme + 1;
    newTheme > (themes.length - 1) ? setActiveTheme(themes.length - 1) : setActiveTheme(newTheme)
  }

  return (
    <div className="themes-slider">
      <div className="themes-slider__controls">
        <div className="themes-slider__fraction">
          <span className="themes-slider__current">
            { convertSlidersCount(activeTheme + 1) }
          </span>
          /
          <span className="themes-slider__total">
            { convertSlidersCount(themes.length) }
          </span>
        </div>
        <div className="themes-slider__buttons">
          <button className="themes-slider__button themes-slider__button--prev" onClick={onPrevButtonClick}>
            Prev
          </button>
          <button className="themes-slider__button themes-slider__button--next" onClick={onNextButtonClick}>
            Next
          </button>
        </div>
      </div>
      <Swiper
      onSwiper={setSwiper}
      className="themes-slider__slider"
      modules={[Pagination]}
      pagination
      slidesPerView={1}
      >
        { themes.map((theme, index) => (
          <SwiperSlide className="themes-slider__slider" key={index}>
            {theme.title}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default DatesSlider;