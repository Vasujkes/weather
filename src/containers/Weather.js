import React from "react";
import { connect } from "react-redux";

import { WeatherInfo } from "../components";

import { time, icon, temp } from "../helpers";

function createData(time, temp, humidity, pressure, weather) {
  return { time, temp, humidity, pressure, weather };
}

const Weather = ({ current, isLoading }) => {
  const rows = current.map((item) =>
    createData(
      time(item.dt),
      temp(item.main.temp),
      item.main.humidity,
      item.main.pressure,
      icon(item.weather[0].id)
    )
  );

  const tableHead = {
    Date: "Date",
    Temperature: "Temperature",
    Humidity: "Humidity",
    Pressure: "Pressure",
    Weather: "Weather",
  };


  return <WeatherInfo current={current} data={rows} isLoading={isLoading} tableHead={tableHead}/>;
};
export default connect(({ weather }) => weather)(Weather);
