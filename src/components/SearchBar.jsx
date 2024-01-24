import sunny from "../icons/sunny.svg";
import wind from "../icons/wind.svg";
import umbrella from "../icons/umbrella.svg";
import raindrop from "../icons/raindrop.svg";
import { useState } from "react";

const Searchbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="search-bar">
        Right now in{" "}
        <span
          contentEditable={true}
          style={{ outline: "none", fontWeight: "400" }}
        >
          Content
        </span>
        , it is Partly Cloudy.
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "500px",
        }}
        className="weather-summary"
      >
        <div className="weather-summary__icon">
          <img src={sunny} style={{ width: "200px" }} alt="" />
        </div>
        <div className="weather-summary__temp" style={{ fontSize: "100px" }}>
          50°
        </div>
        <div
          className="weather-summary__details"
          style={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <img src={wind} style={{ width: "40px" }} />6 mph
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <img src={umbrella} style={{ width: "40px" }} />0 %
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <img src={raindrop} style={{ width: "40px" }} />
            80%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
