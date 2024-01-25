import WeatherDetails from "./WeatherDetails";
import ConditionIcon from "./ConditionIcon";
import WeatherTemp from "./WeatherTemp";

const WeatherSummary = () => {
  const style = {
    width: "500px",
  };

  return (
    <div
      style={style}
      className="weather-summary flex items-center justify-between m-auto font-normal text-gray-500"
    >
      <ConditionIcon />
      <WeatherTemp />
      <WeatherDetails />
    </div>
  );
};

export default WeatherSummary;
