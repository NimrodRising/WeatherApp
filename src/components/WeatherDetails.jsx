import windIcon from "../icons/wind.svg";
import umbrella from "../icons/umbrella.svg";
import raindrop from "../icons/raindrop.svg";

function WeatherDetails({ wind, humidity, chanceOfRain }) {
  return (
    <ul className="weather-summary__details">
      <div className="flex gap-2">
        <img src={windIcon} className="w-10" />
        {`${wind} `}
        <span className="text-gray-400">mph</span>
      </div>
      <div className="flex gap-2">
        <img src={umbrella} className="w-10" />
        {chanceOfRain}
        <span className="text-gray-400">%</span>
      </div>
      <div className="flex gap-2">
        <img src={raindrop} className="w-10" />
        {humidity} <span className="text-gray-400">%</span>
      </div>
    </ul>
  );
}

export default WeatherDetails;
