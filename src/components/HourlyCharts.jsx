import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  ComposedChart,
  LabelList,
  YAxis,
} from "recharts";

export default function HourlyChart({ data }) {
  const [tempData, setTempData] = useState(null);
  let minTemperature = 0;
  let maxTemperature = 10;
  if (tempData) {
    minTemperature = Math.min(...tempData.map((item) => item.value));
    maxTemperature = Math.max(...tempData.map((item) => item.value));
  }
  useEffect(() => {
    // get local time
    // determine which 8 hour period
    console.log(data);
    if (data.forecast) {
      console.log(data.location.localtime.slice(11));
      console.log(data.forecast.forecastday[0].hour);
      let temps = data.forecast.forecastday[0].hour.map((hour, i) => {
        return {
          name: `${i}`,
          value: hour.temp_f,
        };
      });
      setTempData(temps.slice(16));
    }
  }, [data]);
  return (
    <ComposedChart
      width={600}
      height={100}
      data={tempData}
      className="ml-auto mr-auto"
      margin={{ top: 20, right: 30, left: 20, bottom: 20 }} // Adjust margins as needed
    >
      <Area
        type="monotone"
        dataKey="value"
        fill="#FFCC00"
        stroke="#8884d8"
        opacity={0.4}
      />
      <YAxis type="number" domain={["dataMin - 10", "dataMax"]} stroke="none" />
      {/* Adjust the domain as needed */}
      <Line type="monotone" dataKey="value" stroke="#FFCC00">
        <LabelList dataKey="value" position="top" fontSize={10} />
      </Line>
    </ComposedChart>
  );
}
