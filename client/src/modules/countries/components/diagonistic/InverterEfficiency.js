import React from "react";
import Charts from "../../../../components/Charts";
import { Grid } from "@mui/material";

const data = [
  {
    name: "Inverter 1",
    Efficiency: 98.15,
  },
  {
    name: "Inverter 2",
    Efficiency: 98.16,
  },
  {
    name: "Inverter 3",
    Efficiency: 98.13,
  },
  {
    name: "Inverter 4",
    Efficiency: 98.14,
  },
];

const data1 = [
  {
    name: "Aug 21",
    Inverter1: 98.17,
    Inverter2: 98.43,
    Inverter3: 98.15,
    Inverter4: 98.12,
  },
  {
    name: "Sep 21",
    Inverter1: 99.17,
    Inverter2: 95.43,
    Inverter3: 91.15,
    Inverter4: 96.12,
  },
  {
    name: "Oct 21",
    Inverter1: 99.17,
    Inverter2: 96.43,
    Inverter3: 91.15,
    Inverter4: 99.12,
  },
  {
    name: "Nov 21",
    Inverter1: 90.17,
    Inverter2: 88.43,
    Inverter3: 99.15,
    Inverter4: 96.12,
  },
  {
    name: "Dec 21",
    Inverter1: 93.17,
    Inverter2: 90.43,
    Inverter3: 99.15,
    Inverter4: 96.12,
  },
  {
    name: "Jan 22",
    Inverter1: 93.17,
    Inverter2: 98.43,
    Inverter3: 96.15,
    Inverter4: 90.12,
  },
  {
    name: "Feb 22",
    Inverter1: 99.17,
    Inverter2: 96.43,
    Inverter3: 92.15,
    Inverter4: 98.12,
  },
  {
    name: "Mar 22",
    Inverter1: 96.17,
    Inverter2: 91.43,
    Inverter3: 97.15,
    Inverter4: 92.12,
  },
  {
    name: "Apr 22",
    Inverter1: 90.17,
    Inverter2: 89.43,
    Inverter3: 94.15,
    Inverter4: 93.1,
  },
  {
    name: "May 22",
    Inverter1: 91.17,
    Inverter2: 96.43,
    Inverter3: 94.15,
    Inverter4: 98.12,
  },
  {
    name: "Jun 22",
    Inverter1: 92.17,
    Inverter2: 97.43,
    Inverter3: 95.15,
    Inverter4: 90.12,
  },
  {
    name: "Jul 22",
    Inverter1: 96.17,
    Inverter2: 94.43,
    Inverter3: 92.15,
    Inverter4: 99.12,
  },
];

const InverterEfficiency = () => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={12} style={{ display: "flex", justifyContent: "center" }}>
        <Charts
          data={data}
          width={1450}
          height={500}
          title="Yearly Average Inverter Efficiency"
          xdataKey="name"
        />
      </Grid>
      <Grid item lg={12} style={{ display: "flex", justifyContent: "center" }}>
        <Charts
          data={data1}
          width={1450}
          height={500}
          title="Monthly Average Inverter Efficiency"
          xdataKey="name"
        />
      </Grid>
    </Grid>
  );
};

export default InverterEfficiency;
