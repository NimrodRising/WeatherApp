import WeatherDetails from "./WeatherDetails";
import ConditionIcon from "./ConditionIcon";
import WeatherTemp from "./WeatherTemp";
import { useState } from "react";

const WeatherSummary = ({ data }) => {
  const [units, setUnits] = useState("F");
  const style = {
    width: "650px",
  };

  let temp;
  let wind;
  let humidity;
  let chanceOfRain;
  let condition = " ";
  let timeOfDay;

  if (data) {
    temp = units === "F" ? data.current.temp_f : data.current.temp_c;
    wind = data.current.wind_mph;
    humidity = data.current.humidity;
    chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;
    condition = data.current.condition.text.toLowerCase();
    timeOfDay = data.current.is_day === 1 ? "day" : "night";
  }

  return (
    <div
      style={style}
      className="weather-summary cursor-default select-none  flex items-center justify-between m-auto font-normal text-gray-400"
    >
      <ConditionIcon condition={condition} timeOfDay={timeOfDay} />
      <WeatherTemp temp={temp} units={units} setUnits={setUnits} />
      <WeatherDetails
        wind={wind}
        humidity={humidity}
        chanceOfRain={chanceOfRain}
      />
    </div>
  );
};

export default WeatherSummary;
