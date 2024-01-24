import Searchbar from "./components/SearchBar";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "100px",
        fontSize: "35px",
        fontWeight: "100",
      }}
      className="app"
    >
      <Searchbar />
    </div>
  );
}

export default App;
