import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { group: "Youth", impact: 70 },
  { group: "Seniors", impact: 40 },
  { group: "Low-income", impact: 80 },
  { group: "Businesses", impact: 50 },
];

function Impact() {
  return (
    <div>
      <h2>Policy Impact Visualization</h2>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="group" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="impact" fill="#2c3e50" />
      </BarChart>
    </div>
  );
}

export default Impact;
