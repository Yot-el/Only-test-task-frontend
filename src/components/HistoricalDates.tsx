import React from "react";
import "../assets/styles/historical-dates.scss";
import DatesSlider from "./DatesSlider";
import DatesCircle from "./DatesCircle";

const HistoricalDates = () => {
  return (
    <section className="container">
      <h2>Исторические даты</h2>
      <DatesCircle />
      <DatesSlider />
    </section>
  );
}

export default HistoricalDates;