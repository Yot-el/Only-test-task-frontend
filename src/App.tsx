import React from "react";
import "./assets/styles/style.scss";
import HistoricalDates from "./components/HistoricalDates";

import { register } from 'swiper/element/bundle';
register();

const App = () => {
  return (
    <>
      <HistoricalDates className="app__section"/>
    </>
  );
};

export default App;