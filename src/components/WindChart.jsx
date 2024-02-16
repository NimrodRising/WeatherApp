function WindChart({ selection }) {
  return (
    <div
      className={`flex flex-col mx-auto justify-center ${
        selection === "temp" ? "" : "hidden"
      }`}
    ></div>
  );
}

export default WindChart;
