import Searchbar from "./components/Searchbar";
import WeatherSummary from "./components/WeatherSummary";
import { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState("Chattanooga");
  const [data, setData] = useState(0);

  function getWeatherByCity(city) {
    return fetch(
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
        return data;
      });
  }

  function getIPAddress() {
    return fetch(`https://api.ipify.org/?format=json`)
      .then((res) => res.json())
      .then((data) => data.ip);
  }

  function getCitiesForDropdown(search) {
    return fetch(
      ` http://api.weatherapi.com/v1/search.json?key=7e72971ce6c047b5a8d70821242501&q=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  }

  useEffect(() => {
    function getCityByIP(IP) {
      return fetch(
        `http://api.weatherapi.com/v1/ip.json?key=7e72971ce6c047b5a8d70821242501&q=${IP}`
      )
        .then((response) => response.text())
        .then((data) => JSON.parse(data))
        .then((data) => {
          if (data.error) {
            return;
          }
          setCity(data.city);
          console.log(city);
          return data.city;
        });
    }
    async function fetchData() {
      try {
        const ipAddress = await getIPAddress();
        const city = await getCityByIP(ipAddress);
        const data = await getWeatherByCity(city);
        setData(data);
      } catch {
        console.log("error getting ip address");
      }
    }
    fetchData();
  }, []);

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
      <Searchbar
        setCity={setCity}
        city={city}
        data={data}
        getCitiesForDropdown={getCitiesForDropdown}
      />
      <WeatherSummary data={data} />
    </div>
  );
}

export default App;
