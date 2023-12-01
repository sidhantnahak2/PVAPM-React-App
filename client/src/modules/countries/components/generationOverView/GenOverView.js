import React, { useState } from "react";
import LineBarChart from "../../../../components/LineBarChart";
import CountryHeader from "../CountryHeader";
import "../CountryDefault.css";
import "./GenOverView.css";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import SpeedChart from "../../../../components/SpeedChart";

const monthly = [
  { type: "Yearly", value: 14340997 },
  { type: "January", value: 143407 },
  { type: "February", value: 1440997 },
  { type: "March", value: 14097 },
  { type: "April", value: 1434097 },
  { type: "May", value: 430997 },
  { type: "June", value: 14342997 },
  { type: "July", value: 1434077 },
  { type: "August", value: 4440997 },
  { type: "September", value: 8340997 },
  { type: "October", value: 4390997 },
  { type: "November", value: 1434099 },
  { type: "December", value: 1440997 },
];

const data = [
  {
    name: "Aug-21",
    netEnergy: 1123054.0,
    normalisedEnergy: 996032.0,
    shortfall: -9.79,
  },
  {
    name: "Sep-21",
    netEnergy: 1129540,
    normalisedEnergy: 1016083,
    shortfall: -6.66,
  },
  {
    name: "Oct-21",
    netEnergy: 1290771,
    normalisedEnergy: 1192328,
    shortfall: -5.74,
  },
  {
    name: "Nov-21",
    netEnergy: 1263899,
    normalisedEnergy: 1131391,
    shortfall: -5.62,
  },
  {
    name: "Dec-21",
    netEnergy: 1141586,
    normalisedEnergy: 926575,
    shortfall: -5.32,
  },
  {
    name: "Jan-22",
    netEnergy: 1191623,
    normalisedEnergy: 1064010,
    shortfall: -9.22,
  },
  {
    name: "Feb-22",
    netEnergy: 1322276,
    normalisedEnergy: 1064010,
    shortfall: -9.56,
  },
  {
    name: "Mar-22",
    netEnergy: 1590993,
    normalisedEnergy: 1470641,
    shortfall: -6.94,
  },
  {
    name: "April-22",
    netEnergy: 1488139,
    normalisedEnergy: 1247061,
    shortfall: -15.15,
  },
  {
    name: "May-22",
    netEnergy: 1351927,
    normalisedEnergy: 1213604,
    shortfall: -2.4,
  },
  {
    name: "Jun-22",
    netEnergy: 1053558,
    normalisedEnergy: 1081669,
    shortfall: 9.37,
  },
  {
    name: "Jul-22",
    netEnergy: 1052632,
    normalisedEnergy: 1218349,
    shortfall: 22.6,
  },
];

const GenOverView = () => {
  const [yearlyEnergyMonth, setYearlyEnergyMonth] = useState("Yearly");
  const [energy, setEnergy] = useState(14340997);
  const [checkBoxChecked, setCheckBoxChecked] = useState({
    NetEnergy: true,
    NormalisedEnergy: true,
    ShortFall: true,
  });

  const handleChangeYear = ({ type, value }) => {
    try {
      console.log("here");
      setEnergy(value);
      setYearlyEnergyMonth(type);
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
        <Grid container spacing={2}>
          <Grid
            item
            lg={12}
            style={{
              borderStyle: "solid",
              borderColor: "#ed7d31",
              borderWidth: "3px",
              borderRadius: "5px",

              marginLeft: "20px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: "10px",
              }}
            >
              <select
                name="level"
                id="level"
                style={{
                  width: "15vw",
                  height: "7vh",
                  textAlign: "center",
                  fontWeight: "bolder",
                  borderStyle: "solid",
                  borderColor: "#ED7D31",
                  borderWidth: "3px",
                  fontFamily: "cursive",
                  fontSize: "20px",
                  backgroundColor: "#edeaea",
                }}
                onChange={(e) => {
                  const data = monthly?.find((m) => m.type == e.target.value);
                  handleChangeYear(data);
                }}
              >
                <option
                  value="Yearly"
                  onClick={() => {
                    handleChangeYear({ type: "Yearly", value: 14340997 });
                  }}
                >
                  Yearly
                </option>
                <option
                  value="January"
                  onClick={() => {
                    handleChangeYear({ type: "January", value: 14340997 });
                  }}
                >
                  January
                </option>
                <option
                  value="February"
                  onClick={() => {
                    handleChangeYear({ type: "February", value: 1111907 });
                  }}
                >
                  February
                </option>
                <option
                  value="March"
                  onClick={() => {
                    handleChangeYear({ type: "March", value: 14340997 });
                  }}
                >
                  March
                </option>
                <option
                  value="April"
                  onClick={() => {
                    handleChangeYear({ type: "April", value: 11141997 });
                  }}
                >
                  April
                </option>
                <option
                  value="May"
                  onClick={() => {
                    handleChangeYear({ type: "May", value: 11540996 });
                  }}
                >
                  May
                </option>
                <option
                  value="June"
                  onClick={() => {
                    handleChangeYear({ type: "June", value: 11342991 });
                  }}
                >
                  June
                </option>
                <option
                  value="July"
                  onClick={() => {
                    handleChangeYear({ type: "July", value: 5340997 });
                  }}
                >
                  July
                </option>
                <option
                  value="August"
                  onClick={() => {
                    handleChangeYear({ type: "August", value: 4340997 });
                  }}
                >
                  August
                </option>
                <option
                  value="September"
                  onClick={() => {
                    handleChangeYear({ type: "September", value: 10340997 });
                  }}
                >
                  September
                </option>
                <option
                  value="October"
                  onClick={() => {
                    handleChangeYear({ type: "October", value: 10080997 });
                  }}
                >
                  October
                </option>
                <option
                  value="November"
                  onClick={() => {
                    handleChangeYear({ type: "November", value: 1130997 });
                  }}
                >
                  November
                </option>
                <option
                  value="December"
                  onClick={() => {
                    handleChangeYear({ type: "December", value: 12140997 });
                  }}
                >
                  December
                </option>
              </select>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <SpeedChart
                title={`${yearlyEnergyMonth} Net Energy & Grid Loss`}
                minValue={0}
                maxValue={20000000}
                value={energy}
              />
              <SpeedChart
                title={`${yearlyEnergyMonth} Contractual Energy`}
                minValue={0}
                maxValue={20000000}
                value={energy}
              />
            </div>
          </Grid>
          <Grid
            item
            lg={12}
            style={{
              borderStyle: "solid",
              borderColor: "#ed7d31",
              borderWidth: "3px",
              borderRadius: "5px",

              marginLeft: "20px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: "10px",
              }}
            >
              <select
                name="level"
                id="level"
                style={{
                  width: "15vw",
                  height: "7vh",
                  textAlign: "center",
                  fontWeight: "bolder",
                  borderStyle: "solid",
                  borderColor: "#ED7D31",
                  borderWidth: "3px",
                  fontFamily: "cursive",
                  fontSize: "20px",
                  backgroundColor: "#edeaea",
                }}
                onChange={(e) => {
                  const data = monthly?.find((m) => m.type == e.target.value);
                  handleChangeYear(data);
                }}
              >
                <option
                  value="Yearly"
                  onClick={() => {
                    handleChangeYear({ type: "Yearly", value: 14340997 });
                  }}
                >
                  Yearly
                </option>
                <option
                  value="January"
                  onClick={() => {
                    handleChangeYear({ type: "January", value: 14340997 });
                  }}
                >
                  January
                </option>
                <option
                  value="February"
                  onClick={() => {
                    handleChangeYear({ type: "February", value: 1111907 });
                  }}
                >
                  February
                </option>
                <option
                  value="March"
                  onClick={() => {
                    handleChangeYear({ type: "March", value: 14340997 });
                  }}
                >
                  March
                </option>
                <option
                  value="April"
                  onClick={() => {
                    handleChangeYear({ type: "April", value: 11141997 });
                  }}
                >
                  April
                </option>
                <option
                  value="May"
                  onClick={() => {
                    handleChangeYear({ type: "May", value: 11540996 });
                  }}
                >
                  May
                </option>
                <option
                  value="June"
                  onClick={() => {
                    handleChangeYear({ type: "June", value: 11342991 });
                  }}
                >
                  June
                </option>
                <option
                  value="July"
                  onClick={() => {
                    handleChangeYear({ type: "July", value: 5340997 });
                  }}
                >
                  July
                </option>
                <option
                  value="August"
                  onClick={() => {
                    handleChangeYear({ type: "August", value: 4340997 });
                  }}
                >
                  August
                </option>
                <option
                  value="September"
                  onClick={() => {
                    handleChangeYear({ type: "September", value: 10340997 });
                  }}
                >
                  September
                </option>
                <option
                  value="October"
                  onClick={() => {
                    handleChangeYear({ type: "October", value: 10080997 });
                  }}
                >
                  October
                </option>
                <option
                  value="November"
                  onClick={() => {
                    handleChangeYear({ type: "November", value: 1130997 });
                  }}
                >
                  November
                </option>
                <option
                  value="December"
                  onClick={() => {
                    handleChangeYear({ type: "December", value: 12140997 });
                  }}
                >
                  December
                </option>
              </select>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <SpeedChart
                title="Yearly Excess Shortfall"
                minValue={-1000000}
                maxValue={1000000}
                value={-659003}
              />
              <SpeedChart
                title="Yearly Excess/Shortfall Percentage"
                minValue={-50}
                maxValue={50}
                value={4.39}
              />
            </div>
          </Grid>

          <Grid
            item
            lg={12}
            style={{
              borderStyle: "solid",
              borderColor: "#ed7d31",
              borderWidth: "3px",
              borderRadius: "5px",

              marginLeft: "20px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: "10px",
              }}
            >
              <select
                name="level"
                id="level"
                style={{
                  width: "15vw",
                  height: "7vh",
                  textAlign: "center",
                  fontWeight: "bolder",
                  borderStyle: "solid",
                  borderColor: "#ED7D31",
                  borderWidth: "3px",
                  fontFamily: "cursive",
                  fontSize: "20px",
                  backgroundColor: "#edeaea",
                }}
                onChange={(e) => {
                  const data = monthly?.find((m) => m.type == e.target.value);
                  handleChangeYear(data);
                }}
              >
                <option
                  value="Yearly"
                  onClick={() => {
                    handleChangeYear({ type: "Yearly", value: 14340997 });
                  }}
                >
                  Yearly
                </option>
                <option
                  value="January"
                  onClick={() => {
                    handleChangeYear({ type: "January", value: 14340997 });
                  }}
                >
                  January
                </option>
                <option
                  value="February"
                  onClick={() => {
                    handleChangeYear({ type: "February", value: 1111907 });
                  }}
                >
                  February
                </option>
                <option
                  value="March"
                  onClick={() => {
                    handleChangeYear({ type: "March", value: 14340997 });
                  }}
                >
                  March
                </option>
                <option
                  value="April"
                  onClick={() => {
                    handleChangeYear({ type: "April", value: 11141997 });
                  }}
                >
                  April
                </option>
                <option
                  value="May"
                  onClick={() => {
                    handleChangeYear({ type: "May", value: 11540996 });
                  }}
                >
                  May
                </option>
                <option
                  value="June"
                  onClick={() => {
                    handleChangeYear({ type: "June", value: 11342991 });
                  }}
                >
                  June
                </option>
                <option
                  value="July"
                  onClick={() => {
                    handleChangeYear({ type: "July", value: 5340997 });
                  }}
                >
                  July
                </option>
                <option
                  value="August"
                  onClick={() => {
                    handleChangeYear({ type: "August", value: 4340997 });
                  }}
                >
                  August
                </option>
                <option
                  value="September"
                  onClick={() => {
                    handleChangeYear({ type: "September", value: 10340997 });
                  }}
                >
                  September
                </option>
                <option
                  value="October"
                  onClick={() => {
                    handleChangeYear({ type: "October", value: 10080997 });
                  }}
                >
                  October
                </option>
                <option
                  value="November"
                  onClick={() => {
                    handleChangeYear({ type: "November", value: 1130997 });
                  }}
                >
                  November
                </option>
                <option
                  value="December"
                  onClick={() => {
                    handleChangeYear({ type: "December", value: 12140997 });
                  }}
                >
                  December
                </option>
              </select>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <SpeedChart
                title="Actual PR"
                minValue={0}
                maxValue={100}
                value={79}
              />
              <SpeedChart
                title="AC Line Loss Percentage"
                minValue={-20}
                maxValue={20}
                value={1.44}
              />
            </div>
          </Grid>

          <Grid
            item
            lg={12}
            style={{
              borderStyle: "solid",
              borderColor: "#ed7d31",
              borderWidth: "3px",
              borderRadius: "5px",
              marginLeft: "20px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#edeaea",
                  borderStyle: "solid",
                  borderColor: "#ed7d31",
                  borderWidth: "3px",
                  borderRadius: "5px",
                }}
              >
                <FormGroup style={{ display: "flex", flexDirection: "row" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        color="success"
                        onChange={(e) => {
                          setCheckBoxChecked({
                            ...checkBoxChecked,
                            NetEnergy: !checkBoxChecked?.NetEnergy,
                          });
                        }}
                      />
                    }
                    label="Net Energy"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        color="success"
                        onChange={(e) => {
                          setCheckBoxChecked({
                            ...checkBoxChecked,
                            NormalisedEnergy:
                              !checkBoxChecked?.NormalisedEnergy,
                          });
                        }}
                      />
                    }
                    label="Normalised Energy"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        color="success"
                        onChange={(e) => {
                          setCheckBoxChecked({
                            ...checkBoxChecked,
                            ShortFall: !checkBoxChecked?.ShortFall,
                          });
                        }}
                      />
                    }
                    label="Shortfall"
                  />
                </FormGroup>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <LineBarChart
                data={data}
                height={200}
                width={1000}
                title=" Yearly Net Energy Vs Normalised Energy Vs Excess/Shortfall"
                hideNetEnergy={!checkBoxChecked?.NetEnergy}
                hideNormalisedEnergy={!checkBoxChecked?.NormalisedEnergy}
                hideShortFall={!checkBoxChecked?.ShortFall}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default GenOverView;
