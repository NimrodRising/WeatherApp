import wind from "../icons/wind.svg";
import umbrella from "../icons/umbrella.svg";
import raindrop from "../icons/raindrop.svg";

function WeatherDetails() {
  return (
    <ul className="weather-summary__details">
      <div className="flex gap-2">
        <img src={wind} className="w-10" />6{" "}
        <span className="text-gray-400">mph</span>
      </div>
      <div className="flex gap-2">
        <img src={umbrella} className="w-10" />0
        <span className="text-gray-400">%</span>
      </div>
      <div className="flex gap-2">
        <img src={raindrop} className="w-10" />
        80 <span className="text-gray-400">%</span>
      </div>
    </ul>
  );
}

export default WeatherDetails;
