import Searchbar from "./components/SearchBar";
import WeatherSummary from "./components/WeatherSummary";
import { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState("Houston, TX");
  const [data, setData] = useState(0);

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=7e72971ce6c047b5a8d70821242501&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        return JSON.parse(data);
      })
      .then((data) => {
        if (data.error) {
          return;
        }
        setData(data);
        console.log(data);
      });
  }, [city]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "100px",
        fontSize: "35px",
        fontWeight: "100",
      }}
      className="app flex flex-column"
    >
      <Searchbar setCity={setCity} city={city} />
      <WeatherSummary data={data} />
    </div>
  );
}

export default App;
