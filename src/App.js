import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <h1>Weather App</h1>
        <Weather />
      </div>
      <footer>
        This project was coded by {""}
        <a
          href="https://inspiring-lewin-d06e19.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
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
  );
}

export default App;
