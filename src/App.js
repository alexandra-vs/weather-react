import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by {""}
          <a href="https://www.alexcodes.co/" rel="noreferrer" target="_blank">
            Alexandra Velasco-Svoboda
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/alexandra-vs/weather-react"
            rel="noreferrer"
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
