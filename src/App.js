import React, { useEffect, useState } from "react";
import Particles from "react-particles-js";
import Degrees from "./components/Degrees";
import axios from "axios";
import "./App.css";
import CityInput from "./components/CityInput";
import WeatherImg from "./components/WeatherImg";
function App() {
  const [city, setCity] = useState("Gdańsk");
  const [temp, setTemp] = useState(270);
  const [cityName, setCityName] = useState("Gdansk");
  const [weather, setWeather] = useState("Clear");
  const [countryCode, setCountryCode] = useState("Clear");

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        console.log(response.status);
        console.log(response);
        setTemp(response.data.main.temp);
        setCityName(response.data.name);
        setWeather(response.data.weather[0].main);
        setCountryCode(response.data.sys.country);
      })
      .catch((error) => {
        setCityName(error.response.data.message);
      });
  }, [city]);

  return (
    <>
      {/*  this Particles only for now, later i will make them myself */}
      <Particles />
      <div className="container">
        <Degrees cityName={cityName} temp={temp} countryCode={countryCode} />
        <WeatherImg weather={weather} />
        <CityInput setCity={setCity} />
      </div>
      <a
        className="github-link"
        href="https://github.com/jakubiszon26/react-weather-app"
      >
        <img className="github-image" src="github.svg" alt="github" />
      </a>
    </>
  );
}

export default App;
