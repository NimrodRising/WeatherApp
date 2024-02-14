function WeatherTemp({ temp, units, setUnits }) {
  return (
    <div className="weather-summary__temp text-8xl font-thin text-black flex">
      {temp}
      <div className="text-base font-medium text-slate-400">
        <span
          onClick={() => setUnits("F")}
          className={units == "F" ? "text-black" : ""}
        >
          °F{" "}
        </span>
        |
        <span
          onClick={() => setUnits("C")}
          className={units == "C" ? "text-black" : ""}
        >
          {" "}
          °C
        </span>
      </div>
    </div>
  );
}

export default WeatherTemp;
