const Searchbar = ({
  setCity,
  city,
  data,
  getCitiesForDropdown,
  dropdownList,
  isSearching,
  setIsSearching,
}) => {
  let condition;

  if (data) {
    condition = data.current.condition.text.toLowerCase();
  }

  return (
    <div
      className="flex flex-column items-center m-auto"
      onKeyUp={(event) => {
        getCitiesForDropdown(event.target.textContent);
      }}
    >
      <div className="search-bar flex cursor-default select-none">
        Right now in{" "}
        <ul className="relative">
          <li
            id="search-box"
            contentEditable={true}
            className={`font-normal outline-none ml-3.5 ${
              isSearching ? "bg-gray border border-black w-60" : ""
            }`}
            // style={style}
            onClick={() => setIsSearching(true)}
          >
            {isSearching ? "" : city}
          </li>
          {dropdownList.length > 0 ? (
            <ul className="absolute flex flex-col text-black w-60 cursor-pointer  ml-3.5 ">
              {console.log(Object.keys(dropdownList))}
              {Object.keys(dropdownList).map((key, i) => (
                <li
                  className="bg-white border-black border w-30 hover:bg-gray-200"
                  key={i}
                  onClick={() =>
                    setCity(
                      `${dropdownList[key].name}, ${dropdownList[key].region}`
                    )
                  }
                >
                  {`${dropdownList[key].name}, ${dropdownList[key].region}`}
                </li>
              ))}
            </ul>
          ) : null}
        </ul>
        , it is {condition}.
      </div>
    </div>
  );
};

export default Searchbar;
