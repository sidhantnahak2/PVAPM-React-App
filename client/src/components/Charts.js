import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const colours = ["#122b4f", "#ed7d31", "#047e7ef7"];

export default function Charts(props) {
  const [data, setData] = useState(props?.data);
  const keys = Object.keys(props?.data[0])?.filter((i) => i != "name");

  useEffect(() => {
    setData(props?.data);
  }, [props?.data]);

  const getColourPicker = (index) => {
    const hexColourLength = 6;
    let colourCode = "#";
    try {
      if (index < colours.length) return colours[index];
      else {
        for (let i = 0; i < hexColourLength; i++) {
          const isLetter = Math.round(Math.random());
          if (isLetter) {
            colourCode = colourCode + getRandomLetter();
          } else {
            colourCode = colourCode + getRandomNumber();
          }
        }
        return colourCode;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRandomNumber = () => {
    try {
      return Math.round(Math.random() * 9);
    } catch (error) {
      console.log(error);
    }
  };

  const getRandomLetter = () => {
    try {
      const charList = "ABCDEFabcdef";
      const index = Math.round(Math.random() * (charList?.length - 1));
      return charList[index];
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        height: "max-content",
        width: "max-content",
      }}
    >
      <h3
        style={{
          textAlign: "center",
        }}
      >
        <span style={{ fontFamily: "cursive" }}>{props?.title}</span>
      </h3>

      <BarChart
        width={props?.width}
        height={props?.height}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={props?.xdataKey} />
        <YAxis label={{ value: props?.YAxisLabel, angle: -90 }} />
        <Tooltip />
        <Legend />
        {keys?.map((item, index) => {
          return <Bar dataKey={item} fill={getColourPicker(index)} />;
        })}
      </BarChart>
    </div>
  );
}
