import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null)
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`)
      .then(response => setWeather(response.data))
  }, [capital, apiKey])

  if (!weather) return <p>Loading weather data...</p>

  const icon = weather.weather[0].icon
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

  return (
    <div>
      <h3>Weather: {capital}</h3>
      <img src={iconUrl} alt={weather.weather[0].description} />
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  )
}

export default Weather