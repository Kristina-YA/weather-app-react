import Search from "./Search";
import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <h1>Weather APP</h1>
        <Search defaultCity="Kyiv" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
