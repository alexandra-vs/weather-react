import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}C`);
  }

  let apiKey = "a64b705a37558d573aa48063a58b50cf";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from weather</h2>;
}