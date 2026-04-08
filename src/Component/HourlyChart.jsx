import "../CSS/HourlyChart.css";
import { ResponsiveContainer } from "recharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function HourlyChart({ hourly }) {
  if (!hourly) return <div className="card">Loading...</div>;

  const data = hourly.time.slice(0, 8).map((t, i) => ({
    time: t.split("T")[1],
    temp: hourly.temperature_2m[i],
  }));

  return (
    <div className="card">
      <h2>📈 Hourly Temperature</h2>

      <LineChart width={350} height={250} data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="temp" stroke="#00c6ff" />
      </LineChart>
    </div>
  );
}

export default HourlyChart;