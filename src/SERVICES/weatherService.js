export const fetchWeatherData = async (lat, lon) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,rain_sum,wind_speed_10m_max,wind_gusts_10m_max&hourly=temperature_2m&current=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,is_day,relative_humidity_2m,apparent_temperature,rain,showers`;

  const res = await fetch(url);
  return res.json();
};