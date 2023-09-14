import React from "react";
import "../assets/styles/historical-dates.scss";
import DatesSlider from "./DatesSlider";
import DatesCircle from "./DatesCircle";

interface Props {
  className: string;
}

const HistoricalDates = ({ className }: Props) => {
  return (
    <section className={`${className} historical-dates`}>
      <div className="container historical-dates__inner">
        <h2 className="historical-dates__title">
          Исторические<br/>даты
        </h2>
        <DatesCircle />
        <DatesSlider />
      </div>
    </section>
  );
}

export default HistoricalDates;