import React, { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [weatherData, setWeatherData] = useState(null);

  const api_key = import.meta.env.VITE_SOME_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}`
      )
      .then((response) => {
        console.log(response.data);
        setWeatherData(response.data);
      });
  }, []);

  console.log(weatherData);

  const languages = Object.values(country.languages);

  if (!weatherData) {
    return null;
  }

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>

      <h3>Languages:</h3>
      <ul>
        {languages.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
      <div>
        <img src={country.flags.png} alt="country flag" />
      </div>
      <h2>Weather in {country.capital}</h2>
      <p>Temperature is {(weatherData.main.temp - 273.5).toFixed(1)} Celsius</p>
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <p>Wind is {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default Country;
