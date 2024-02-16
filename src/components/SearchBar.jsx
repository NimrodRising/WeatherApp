import DropdownItem from "./DropdownItem";

const phrases = {
  sunny: "it's sunny.",
  clear: "it's clear",
  "partly cloudy": "it's partly cloudy.",
  cloudy: "it's cloudy.",
  overcast: "it's overcast.",
  mist: "there's mist.",
  "patchy rain possible": "there's patchy rain possible.",
  "patchy rain nearby": "there's patchy rain nearby.",
  "patchy snow possible": "there's patchy snow possible.",
  "patchy sleet possible": "there's patchy sleet possible.",
  "patchy freezing drizzle possible":
    "there's patchy freezing drizzle possible.",
  "thundery outbreaks possible":
    "there's the possibility of thundery outbreaks.",
  "blowing snow": "there's blowing snow.",
  blizzard: "there's a blizzard.",
  fog: "there's fog.",
  "freezing fog": "there's freezing fog.",
  "patchy light drizzle": "there's patchy light drizzle.",
  "light drizzle": "there's light drizzle.",
  "freezing drizzle": "there's freezing drizzle.",
  "heavy freezing drizzle": "there's heavy freezing drizzle.",
  "patchy light rain": "there's patchy light rain.",
  "light rain": "there's light rain.",
  "moderate rain at times": "there's moderate rain at times.",
  "moderate rain": "there's moderate rain.",
  "heavy rain at times": "there's heavy rain at times.",
  "heavy rain": "there's heavy rain.",
  "light freezing rain": "there's light freezing rain.",
  "moderate or heavy freezing rain": "there's moderate or heavy freezing rain.",
  "light sleet": "there's light sleet.",
  "moderate or heavy sleet": "there's moderate or heavy sleet.",
  "patchy light snow": "there's patchy light snow.",
  "light snow": "there's light snow.",
  "patchy moderate snow": "there's patchy moderate snow.",
  "moderate snow": "there's moderate snow.",
  "patchy heavy snow": "there's patchy heavy snow.",
  "heavy snow": "there's heavy snow.",
  "ice pellets": "there are ice pellets.",
  "light rain shower": "there's a light rain shower.",
  "moderate or heavy rain shower": "there's a moderate or heavy rain shower.",
  "torrential rain shower": "there's a torrential rain shower.",
  "light sleet showers": "there are light sleet showers.",
  "moderate or heavy sleet showers":
    "there are moderate or heavy sleet showers.",
  "light snow showers": "there are light snow showers.",
  "moderate or heavy snow showers": "there are moderate or heavy snow showers.",
  "light showers of ice pellets": "there are light showers of ice pellets.",
  "moderate or heavy showers of ice pellets":
    "there are moderate or heavy showers of ice pellets.",
  "patchy light rain with thunder": "there's patchy light rain with thunder.",
  "moderate or heavy rain with thunder":
    "there's moderate or heavy rain with thunder.",
  "patchy light snow with thunder": "there's patchy light snow with thunder.",
  "moderate or heavy snow with thunder":
    "there's moderate or heavy snow with thunder.",
};

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
      <div className="search-bar flex cursor-default select-none text-white">
        Right now in{" "}
        <ul className="relative">
          <li
            id="search-box"
            suppressContentEditableWarning={true}
            contentEditable={true}
            className={`font-normal outline-none ml-3.5 ${
              isSearching ? "bg-gray border border-black min-w-60" : ""
            }`}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
              }
            }}
            onClick={() => setIsSearching(true)}
          >
            {isSearching ? "" : city}
          </li>
          {dropdownList.length > 0 ? (
            <ul className="absolute flex flex-col text-gray-500 w-60 cursor-pointer ml-3.5 ">
              {Object.keys(dropdownList).map((key, i) => (
                <DropdownItem
                  key={i}
                  name={dropdownList[key].name}
                  region={dropdownList[key].region}
                  setCity={setCity}
                />
              ))}
            </ul>
          ) : null}
        </ul>
        , {phrases[condition]}
      </div>
    </div>
  );
};
export default Searchbar;
