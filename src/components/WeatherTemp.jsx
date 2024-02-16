function WeatherTemp({ temp, units, setUnits }) {
  return (
    <div className="weather-summary__temp text-8xl font-thin text-gray-300 flex">
      {temp}
      <div className="text-base font-normal text-gray-400">
        <span
          onClick={() => setUnits("F")}
          className={units == "F" ? "text-white" : ""}
        >
          °F{" "}
        </span>
        |
        <span
          onClick={() => setUnits("C")}
          className={units == "C" ? "text-white" : ""}
        >
          {" "}
          °C
        </span>
      </div>
    </div>
  );
}

export default WeatherTemp;
