import { Grid } from "@mui/material";
import React from "react";
import Charts from "../../../../components/Charts";
import LineChartComp from "../../../../components/LineChartComp";

const data = [
  {
    name: "Aug-21",
    PVSYST: 139,
    ACTUAL: 117.78,
  },
  {
    name: "Sep-21",
    PVSYST: 129,
    ACTUAL: 140,
  },
  {
    name: "Oct-21",
    PVSYST: 119,
    ACTUAL: 111,
  },
  {
    name: "Nov-21",
    PVSYST: 193,
    ACTUAL: 117.78,
  },
  {
    name: "Dec-21",
    PVSYST: 180.87,
    ACTUAL: 156,
  },
  {
    name: "Jan-22",
    PVSYST: 175,
    ACTUAL: 125.68,
  },
  {
    name: "Feb-22",
    PVSYST: 180,
    ACTUAL: 150,
  },
  {
    name: "Mar-22",
    PVSYST: 170,
    ACTUAL: 130,
  },
  {
    name: "April-22",
    PVSYST: 110,
    ACTUAL: 90,
  },
  {
    name: "May-22",
    PVSYST: 120,
    ACTUAL: 117.78,
  },
  {
    name: "June-22",
    PVSYST: 150,
    ACTUAL: 168,
  },
  {
    name: "July-22",
    PVSYST: 139,
    ACTUAL: 110,
  },
];

const data1 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Detailed = () => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        lg={6}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Charts
          data={data}
          width={700}
          height={300}
          title="PV(SYST) GHI (kwH) Vs Actual GHI(kwH)"
          xdataKey="name"
        />
      </Grid>
      <Grid
        item
        lg={6}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Charts
          data={data}
          width={700}
          height={300}
          title="PV(SYST) GTI (kwH) Vs Actual GTI(kwH)"
          xdataKey="name"
        />
      </Grid>

      <Grid
        item
        lg={6}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <LineChartComp
          data={data1}
          width={700}
          height={300}
          title="PV(SYST) GTI (kwH) Vs Actual GTI(kwH)"
          xdataKey="name"
        />
      </Grid>

      <Grid
        item
        lg={6}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <LineChartComp
          data={data1}
          width={700}
          height={300}
          title="PV(SYST) GTI (kwH) Vs Actual GTI(kwH)"
          xdataKey="name"
        />
      </Grid>
    </Grid>
  );
};

export default Detailed;
