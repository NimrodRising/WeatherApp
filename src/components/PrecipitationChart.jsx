function PrecipitationChart({ selection }) {
  return (
    <div
      className={`flex flex-col mx-auto justify-center ${
        selection === "temp" ? "" : "hidden"
      }`}
    ></div>
  );
}

export default PrecipitationChart;
