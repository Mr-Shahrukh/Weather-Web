import "../CSS/CurrentWeather.css";
import getWeatherIcon from "../utils/getWeatherIcon";

function CurrentWeather({ current,city }) {
  if (!current) return <div className="card">Loading...</div>;

  return (
   <div className="card">
      <h2>📍 {city || "Current Location"}</h2>

      <div className="icon">
        {getWeatherIcon(current.weather_code, current.is_day)}
      </div>

      <p className="temp">{current.temperature_2m}°C</p>
      <p>💨 Wind: {current.wind_speed_10m} km/h</p>
    </div>
  );
}

export default CurrentWeather;