const Searchbar = () => {
  const condition = "partly cloudy";
  const city = "Houston, TX";
  return (
    <div className="flex flex-column items-center">
      <div className="search-bar">
        Right now in{" "}
        <span contentEditable={true} className="font-normal outline-none">
          {city}
        </span>
        , it is {condition}.
      </div>
    </div>
  );
};

export default Searchbar;
