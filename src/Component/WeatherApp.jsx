import { useEffect, useState } from "react";
import "../CSS/WeatherApp.css";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import HourlyChart from "./HourlyChart";
import { fetchWeatherData } from "../SERVICES/weatherService";
import { getBackground } from "../utils/getBackground";

function WeatherApp() {
  const [current, setCurrent] = useState(null);
  const [daily, setDaily] = useState(null);
  const [hourly, setHourly] = useState(null);
  const [bg, setBg] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  const searchCityWeather = async () => {
  if (!city) {
    setError("Please enter a city");
    await new Promise(res => setTimeout(res, 500));
    return;
  }
  
  try {
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );

    const geoData = await geoRes.json();

    if (!geoData.results) {
      setError("City not found");
      return;
    }

    const lat = geoData.results[0].latitude;
    const lon = geoData.results[0].longitude;

    const data = await fetchWeatherData(lat, lon);

    setCurrent(data.current);
    setDaily(data.daily);
    setHourly(data.hourly);
    setError("");
  } catch (err) {
    setError("Error fetching city weather");
  }
};

  useEffect(() => {
  if (loaded) return;   // 🔥 prevent multiple calls

  setBg(getBackground());

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const data = await fetchWeatherData(
        position.coords.latitude,
        position.coords.longitude
      );
      if (!data) {
        setError("Failed to load weather data");
        return;
      }
      if (data) {
        setCurrent(data.current);
        setDaily(data.daily);
        setHourly(data.hourly);
        setLoaded(true);   // ✅ mark loaded
      }
    },
    () => setError("Location denied")
  );
}, [loaded]);

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <h1 className="title">🌦 Weather Dashboard</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchCityWeather()}
        />

        <button onClick={searchCityWeather}>
           Search
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="content">
        <CurrentWeather current={current} city={city} />
        <Forecast daily={daily} />
        <HourlyChart hourly={hourly} />
      </div>
    </div>
  );
}

export default WeatherApp;