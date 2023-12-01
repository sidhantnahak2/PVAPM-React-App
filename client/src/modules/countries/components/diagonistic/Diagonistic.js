import React from "react";
import { useLocation } from "react-router-dom";
import CountryHeader from "../CountryHeader";
import "../CountryHeader.css";
import PageURL from "../../../../constants/PageURL";
import InverterEfficiency from "./InverterEfficiency";
import SCBSMB from "./SCBSMB";
import LossFlow from "./LossFlow";
import Detailed from "./Detailed";

const Diagonistic = () => {
  const location = useLocation();

  return (
    <div>
      <div className="country-header">
        <CountryHeader />
      </div>
      {location?.pathname == PageURL.INDIA_INVERTER_EFFICIENCY && (
        <InverterEfficiency />
      )}
      {location?.pathname == PageURL.INDIA_LOSS_FLOW && <LossFlow />}
      {location?.pathname == PageURL.INDIA_INVERTER1_SCB_SMB1 && <SCBSMB />}
      {location?.pathname == PageURL.INDIA_INVERTER1_SCB_SMB2 && <SCBSMB />}
      {location?.pathname == PageURL.INDIA_DIAGONISTIC_DETAILED && <Detailed />}
    </div>
  );
};

export default Diagonistic;
