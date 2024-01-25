import Searchbar from "./components/SearchBar";
import WeatherSummary from "./components/WeatherSummary";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        padding: "100px",
        fontSize: "35px",
        fontWeight: "100",
      }}
      className="app"
    >
      <Searchbar />
      <WeatherSummary />
    </div>
  );
}

export default App;
