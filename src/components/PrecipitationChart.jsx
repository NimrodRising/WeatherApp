import { BarChart, Bar, LabelList } from "recharts";
import { useEffect, useState } from "react";

function PrecipitationChart({ selection, data }) {
  const [tempData, setTempData] = useState(null);

  useEffect(() => {
    console.log(data);
    if (data.forecast) {
      console.log(data.location.localtime.slice(11));
      let temps = data.forecast.forecastday[0].hour.map((hour, i) => {
        return {
          hour: `${i}`,
          value: hour.precip_mm,
        };
      });
      console.log("TEMPS TEMPS TEMPS");
      console.log(temps);
      setTempData(temps.slice(16));
    }
  }, [data]);
  return (
    <>
      <div
        className={`flex flex-col mx-auto justify-center ${
          selection === "precip" ? "" : "hidden"
        }`}
      >
        <BarChart width={600} height={100} margin={{ top: 20 }} data={tempData}>
          <Bar dataKey="value" fill="#FFCC00" opacity={0.3}>
            <LabelList dataKey="value" position="top" fontSize={10} />
          </Bar>
        </BarChart>
        <ul className="flex text-xs text-gray-500 font-medium justify-around w-100">
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
    </>
  );
}
export default PrecipitationChart;
