import React from "react";
import "./assets/styles/base.scss";
import HistoricalDates from "./components/HistoricalDates";

import { register } from 'swiper/element/bundle';
register();

const App = () => {
  return (
    <>
      <HistoricalDates />
    </>
  );
};

export default App;