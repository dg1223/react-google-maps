import logo from "./logo.svg";
import "./App.css";
import MyLocation from "./components/MyLocation";
import Direction from "./components/Direction";
import { useState } from "react";

function App() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const displayDirection = (event) => {
    event.preventDefault(); // prevent page from reloading on change
    const start = event.target.origin.value;
    const end = event.target.destination.value;
    setOrigin(start);
    setDestination(end);
  };
  return (
    <div className="App">
      <form onSubmit={displayDirection}>
        <input type="text" name="origin" required />
        <br />
        <input type="text" name="destination" required />
        <br />
        <input type="submit" value="Show Directions" />
      </form>
      {/* <MyLocation></MyLocation> */}
      <Direction origin={origin} destination={destination}></Direction>
    </div>
  );
}

export default App;
