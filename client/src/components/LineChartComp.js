import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function LineChartComp(props) {
  return (
    <div
      style={{
        height: "max-content",
        width: "max-content",
        borderStyle: "solid",
        borderColor: "#ed7d31",
        borderWidth: "3px",
        borderRadius: "5px",
      }}
    >
      <h3 style={{ textAlign: "center", fontFamily: "cursive" }}>
        {props?.title}
      </h3>
      <LineChart
        width={props?.width}
        height={props?.height}
        data={props?.data}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}
