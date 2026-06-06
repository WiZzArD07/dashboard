"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", projects: 8 },
  { month: "Feb", projects: 12 },
  { month: "Mar", projects: 15 },
  { month: "Apr", projects: 18 },
  { month: "May", projects: 22 },
  { month: "Jun", projects: 24 },
];

export default function ProjectChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="projects"
          stroke="#3B82F6"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}