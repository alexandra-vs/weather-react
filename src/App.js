import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather defaultCity="Berlin" />
        <footer>
          This project was coded by {""}
          <a
            href="https://www.alexcodes.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alexandra Velasco-Svoboda
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/alexandra-vs/weather-react"
            rel="noopener noreferrer"
            target="_blank"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
