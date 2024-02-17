import TempChart from "./TempChart";
import PrecipitationChart from "./PrecipitationChart";
import WindChart from "./WindChart";
import { useState } from "react";

function ChartMenu({ data }) {
  const [selection, setSelection] = useState("temp");

  return (
    <div className="w-fit mx-auto cursor-pointer select-none">
      <ul className="flex text-xs gap-2 text-gray-300 font-light mt-10">
        <li
          className={`${
            selection == "temp" ? "underline underline-offset-2" : ""
          }`}
          onClick={() => {
            setSelection("temp");
          }}
        >
          Temperature
        </li>
        <li
          className={`${
            selection == "precip" ? "underline underline-offset-2" : ""
          }`}
          onClick={() => {
            setSelection("precip");
          }}
        >
          Precipitation
        </li>
        <li
          className={`${
            selection == "wind" ? "underline underline-offset-2" : ""
          }`}
          onClick={() => {
            setSelection("wind");
          }}
        >
          Wind
        </li>
      </ul>
      <TempChart selection={selection} data={data} />
      <WindChart selection={selection} data={data} />
      <PrecipitationChart selection={selection} data={data} />
    </div>
  );
}

export default ChartMenu;
