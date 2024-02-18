import { useEffect, useState } from "react";
import arrow from "../icons/arrow.svg";
function WindChart({ selection, data }) {
  const [windData, setWindData] = useState();
  const style = {
    width: "600px",
    height: "100px",
  };

  const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

  function windStyle(wind) {
    return {
      transform: `rotate(${wind.angle}deg) scale(${clamp(
        wind.speed * 0.06,
        0.4,
        0.9
      )})`,
    };
  }

  useEffect(() => {
    if (data.forecast) {
      const localTime = parseInt(data.location.localtime.slice(11, 13));
      console.log("LOCAL TIME: ");
      console.log(localTime);
      let winds = data.forecast.forecastday[0].hour.map((hour, i) => {
        return {
          hour: `${i}`,
          angle: hour.wind_degree,
          speed: hour.wind_mph,
        };
      });
      setWindData(winds.slice(localTime, localTime + 8));
    }
  }, [data]);

  return (
    <ul
      className={`flex justify-around ${
        selection === "wind" ? "" : "hidden"
      } mt-2`}
      style={style}
    >
      {windData == null
        ? null
        : windData.map((wind, i) => {
            return (
              <li key={i} className="flex flex-col justify- items-center">
                <aside className="text-sm text-gray-300">
                  {wind.speed} mph
                </aside>
                <img className="w-10 " src={arrow} style={windStyle(wind)} />
                <aside className="text-xs text-gray-500">
                  {console.log(`HOUR: ${wind.hour}`)}
                  {wind.hour === "12" || wind.hour === "12"
                    ? 12
                    : wind.hour % 12}{" "}
                  {wind.hour >= 12 && wind.hour < 24 ? "PM" : "AM"}
                </aside>
              </li>
            );
          })}
    </ul>
  );
}

export default WindChart;
