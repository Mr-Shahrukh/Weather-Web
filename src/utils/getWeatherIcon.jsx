import {
  WiDaySunny,
  WiNightClear,
  WiCloud,
  WiDayCloudy,
  WiFog,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

const getWeatherIcon = (code, isDay = 1) => {
  const size = 60;

  if (code === 0) {
    return isDay ? <WiDaySunny size={size} /> : <WiNightClear size={size} />;
  }

  if (code === 1 || code === 2) {
    return <WiDayCloudy size={size} />;
  }

  if (code === 3) {
    return <WiCloud size={size} />;
  }

  if (code >= 45 && code <= 48) {
    return <WiFog size={size} />;
  }

  if (code >= 51 && code <= 67) {
    return <WiRain size={size} />;
  }

  if (code >= 71 && code <= 77) {
    return <WiSnow size={size} />;
  }

  if (code >= 80 && code <= 82) {
    return <WiRain size={size} />;
  }

  if (code >= 95) {
    return <WiThunderstorm size={size} />;
  }

  return <WiCloud size={size} />;
};

export default getWeatherIcon;