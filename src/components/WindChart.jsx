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
    console.log(data);
    if (data.forecast) {
      console.log(data.location.localtime.slice(11));
      let winds = data.forecast.forecastday[0].hour.map((hour, i) => {
        return {
          hour: `${i}`,
          angle: hour.wind_degree,
          speed: hour.wind_mph,
        };
      });
      setWindData(winds.slice(16));
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
                  {wind.hour % 12} PM
                </aside>
              </li>
            );
          })}
    </ul>
  );
}

export default WindChart;
