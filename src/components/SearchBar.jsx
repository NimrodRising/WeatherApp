const Searchbar = ({ setCity, city, data, getCitiesForDropdown }) => {
  let condition;

  if (data) {
    condition = data.current.condition.text.toLowerCase();
  }
  return (
    <div
      className="flex flex-column items-center m-auto"
      onKeyUp={(event) => {
        getCitiesForDropdown(event.target.textContent);
        setCity(event.target.textContent);
      }}
    >
      <div className="search-bar">
        Right now in{" "}
        <span contentEditable={true} className="font-normal outline-none">
          New York City
        </span>
        , it is {condition}.
      </div>
    </div>
  );
};

export default Searchbar;
