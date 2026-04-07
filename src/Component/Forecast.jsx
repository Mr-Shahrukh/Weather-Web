import "../CSS/Forecast.css";
import getWeatherIcon from "../utils/getWeatherIcon";

function Forecast({ daily }) {
  if (!daily) return <div className="card">Loading...</div>;

  return (
    <div className="card">
      <h2>📅 3-Day Forecast</h2>

      <div className="forecast">
        {daily.time.slice(0, 3).map((date, i) => (
          <div key={i} className="forecast-box">
            <p>{date}</p>
            {getWeatherIcon(daily.weather_code[i])}
            <p>⬆ {daily.temperature_2m_max[i]}°C</p>
            <p>⬇ {daily.temperature_2m_min[i]}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;