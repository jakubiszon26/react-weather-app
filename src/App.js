import React, { useEffect, useState, useRef } from "react";
import Degrees from "./components/Degrees";
import axios from "axios";
import "./App.css";
import CityInput from "./components/CityInput";
import WeatherImg from "./components/WeatherImg";
import GLOBE from "vanta/dist/vanta.globe.min.js";

function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  const [city, setCity] = useState(localStorage.getItem("lastCity"));
  const [temp, setTemp] = useState(270);
  const [cityName, setCityName] = useState("Gdansk");
  const [weather, setWeather] = useState("Clear");
  const [countryCode, setCountryCode] = useState("PL");
  const [weatherDescription, setWeatherDescription] = useState("Clear sky");

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          color: 0x5593db,
          backgroundColor: "0x0",
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

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
        setWeatherDescription(response.data.weather[0].description);
        localStorage.setItem("lastCity", response.data.name);
      })
      .catch((error) => {
        setCityName(error.response.data.message);
      });
  }, [city]);

  return (
    <div className="vanta-container" ref={myRef}>
      {/*  this Particles only for now, later i will make them myself */}
      <div className="container">
        <Degrees cityName={cityName} temp={temp} countryCode={countryCode} />
        <WeatherImg weatherDescription={weatherDescription} weather={weather} />
        <CityInput setCity={setCity} />
      </div>
      <a
        className="github-link"
        href="https://github.com/jakubiszon26/react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        <img className="github-image" src="github.svg" alt="github" />
      </a>
    </div>
  );
}

export default App;
