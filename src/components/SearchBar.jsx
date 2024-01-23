const Searchbar = () => {
  return (
    <div>
      <div className="search-bar">
        The weather in
        <input className="input" />
        ...
      </div>
      <div className="weather-summary">
        <div className="weather-summary__temp">50°</div>
        <div className="weather-summary__details">
          <div>Windspeed</div>
          <div>Chance of rain</div>
          <div>Humidity</div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
