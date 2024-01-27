import WeatherDetails from "./WeatherDetails";
import ConditionIcon from "./ConditionIcon";
import WeatherTemp from "./WeatherTemp";

const WeatherSummary = ({ data }) => {
  const style = {
    width: "600px",
  };
  const units = "f";

  let temp;
  let wind;
  let humidity;
  let chanceOfRain;
  let condition = " ";

  if (data) {
    temp = units === "f" ? data.current.temp_f : data.current.temp_c;
    wind = data.current.wind_mph;
    humidity = data.current.humidity;
    chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;
    condition = data.current.condition.text.toLowerCase();
  }

  return (
    <div
      style={style}
      className="weather-summary flex items-center justify-between m-auto font-normal text-gray-500"
    >
      <ConditionIcon condition={condition} />
      <WeatherTemp temp={temp} />
      <WeatherDetails
        wind={wind}
        humidity={humidity}
        chanceOfRain={chanceOfRain}
      />
    </div>
  );
};

export default WeatherSummary;
