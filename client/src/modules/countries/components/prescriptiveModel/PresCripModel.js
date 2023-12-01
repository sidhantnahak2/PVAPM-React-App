import React, { useState } from "react";
import "../CountryDefault.css";
import CountryHeader from "../CountryHeader";
import Table from "../../../../components/Table";
import Charts from "../../../../components/Charts";
import LineBarChart from "../../../../components/LineBarChart";
import { Grid } from "@mui/material";

const data = [
  {
    name: "Module",
    Loss: 5.25,
  },
  {
    name: "Soiling",
    Loss: 3.5,
  },
  {
    name: "Shadow",
    Loss: 1.3,
  },
  {
    name: "Resistance",
    Loss: 1,
  },
  {
    name: "Overheating",
    Loss: 1,
  },
];

const PresCripModel = () => {
  const [dataSet, setDataSet] = useState(data);
  const [showCheckBox, setShowCheckBox] = useState({
    Module: true,
    Soiling: true,
    Shadow: true,
    Resistance: true,
    Overheating: true,
  });

  const onChangeCheckBox = ({ name }) => {
    console.log(name);

    try {
      const newData1 = data?.filter((item) => {
        if (item?.name != name) {
          if (showCheckBox[item?.name]) return item;
        } else {
          if (!showCheckBox[item?.name]) return item;
        }
      });

      const checked = { ...showCheckBox };
      checked[name] = !checked[name];
      setShowCheckBox(checked);
      setDataSet(newData1);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="country-header">
        <CountryHeader />
      </div>
      <div>
        <Grid
          container
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Grid
            item
            lg={7}
            style={{ borderStyle: "solid", borderColor: "#ed7d31" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "80vh",
              }}
            >
              <Table onChange={onChangeCheckBox} />
            </div>
          </Grid>
          <Grid
            item
            lg={4}
            style={{ borderStyle: "solid", borderColor: "#ed7d31" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "80vh",
              }}
            >
              <Charts
                data={dataSet}
                width={560}
                height={500}
                title="Loss Contribution"
                xdataKey="name"
                YAxisLabel="Percentage of Losses"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PresCripModel;
