import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/Weather.css';

function Weather({ city }) {
  const [weather, setWeather] = useState({
    temperature: null,
    windSpeed: null,
    description: '',
    icon: '',
  });

  useEffect(() => {
    if (!city) return;

    const API_KEY = import.meta.env.VITE_APP_WEATHERSTACK_ACCESS_KEY;
    const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${encodeURIComponent(city)}`;

    axios.get(url)
      .then(response => {
        const { current } = response.data;
        setWeather({
          temperature: current.temperature,
          windSpeed: current.wind_speed,
          description: current.weather_descriptions[0],
          icon: current.weather_icons[0],
        });
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }, [city]);

  return (
    <div className="weatherContainer">
      <h2>Weather in {city}</h2>
      <div className="weatherInfo">
        {weather.temperature !== null && <p>Temperature: {weather.temperature} °C</p>}
        {weather.windSpeed !== null && <p>Wind Speed: {weather.windSpeed} km/h</p>}
        {weather.description && <p>Conditions: {weather.description}</p>}
      </div>
      {weather.icon && <img src={weather.icon} alt="Weather icon" className="weatherIcon" />}
    </div>
  );
}

export default Weather;
