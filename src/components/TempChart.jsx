import { useEffect, useState } from "react";
import { Line, Area, ComposedChart, LabelList, YAxis } from "recharts";

export default function HourlyChart({ data, selection }) {
  const [tempData, setTempData] = useState(null);
  useEffect(() => {
    console.log(data);
    if (data.forecast) {
      console.log(data.location.localtime.slice(11));
      let temps = data.forecast.forecastday[0].hour.map((hour, i) => {
        return {
          hour: `${i}`,
          value: hour.temp_f,
        };
      });
      setTempData(temps.slice(16));
    }
  }, [data]);
  return (
    <div
      className={`flex flex-col mx-auto justify-center ${
        selection === "temp" ? "" : "hidden"
      }`}
    >
      <ComposedChart
        width={600}
        height={100}
        data={tempData}
        margin={{ top: 30, right: 10, left: -50, bottom: 0 }}
        className="m-0 p-0"
      >
        <Area
          type="monotone"
          dataKey="value"
          fill="#FFCC00"
          stroke="#8884d8"
          opacity={0.4}
        />
        <YAxis
          type="number"
          domain={["dataMin - 10", "dataMax"]}
          stroke="none"
          className="hidden"
          fontSize={10}
        />

        <Line type="monotone" dataKey="value" stroke="#FFCC00">
          <LabelList dataKey="value" position="top" fontSize={10} />
        </Line>
      </ComposedChart>

      <ul className="flex text-xs text-gray-500 font-medium justify-between w-fill ml-1 mr-1 ">
        {tempData == null
          ? null
          : tempData.map((temp, i) => {
              return (
                <li key={i} className="">
                  {temp.hour % 12} PM
                </li>
              );
            })}
      </ul>
    </div>
  );
}
