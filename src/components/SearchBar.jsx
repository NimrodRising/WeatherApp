const Searchbar = ({ setCity, city }) => {
  let newCity = city;
  console.log(newCity);
  const condition = "partly cloudy";
  return (
    <div
      className="flex flex-column items-center m-auto"
      onKeyUp={(event) => {
        console.log(event.target.textContent);
        setCity(event.target.textContent);
      }}
    >
      <div className="search-bar">
        Right now in{" "}
        <span contentEditable={true} className="font-normal outline-none">
          Houston, TX
        </span>
        , it is {condition}.
      </div>
    </div>
  );
};

export default Searchbar;
