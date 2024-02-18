import { BarChart, Bar, LabelList } from "recharts";
import { useEffect, useState } from "react";

function PrecipitationChart({ selection, data }) {
  const [precipData, setPrecipData] = useState(null);

  useEffect(() => {
    console.log(data);
    if (data.forecast) {
      const localTime = parseInt(data.location.localtime.slice(11, 13));
      let temps = data.forecast.forecastday[0].hour.map((hour, i) => {
        return {
          hour: `${i}`,
          value: hour.precip_mm,
        };
      });
      setPrecipData(temps.slice(localTime, localTime + 8));
    }
  }, [data]);
  return (
    <>
      <div
        className={`flex flex-col mx-auto justify-center ${
          selection === "precip" ? "" : "hidden"
        }`}
      >
        <BarChart
          width={600}
          height={100}
          margin={{ top: 20 }}
          data={precipData}
        >
          <Bar dataKey="value" fill="#FFCC00" opacity={0.3}>
            <LabelList dataKey="value" position="top" fontSize={10} />
          </Bar>
        </BarChart>
        <ul className="flex text-xs text-gray-500 font-medium justify-around w-100">
          {precipData == null
            ? null
            : precipData.map((precip, i) => {
                return (
                  <li key={i} className="">
                    {console.log(`HOUR: ${precip.hour}`)}
                    {precip.hour === "12" || precip.hour === "12"
                      ? 12
                      : precip.hour % 12}{" "}
                    {precip.hour >= 12 && precip.hour < 24 ? "PM" : "AM"}
                  </li>
                );
              })}
        </ul>
      </div>
    </>
  );
}
export default PrecipitationChart;
