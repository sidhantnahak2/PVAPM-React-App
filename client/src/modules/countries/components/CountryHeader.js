import React from "react";
import "./CountryHeader.css";
import GreenLogo from "../../../newLogo.PNG";

import Buttons from "../../../components/ButtonsComp";
import { useLocation, useNavigate } from "react-router-dom";
import PageURL from "../../../constants/PageURL";
import DropDown from "../../../components/DropDown";

const CountryHeader = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="header">
      <div className="logo">
        <img
          src={GreenLogo}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt=""
        />
      </div>
      <div className="title">
        <h3 style={{ color: "#ed7d31", fontSize: "140%" }}>
          Creating Climate To Live In A Better World
        </h3>
        <div className="dropdown">
          <DropDown />
        </div>
        {PageURL.COUNTRYDEFAULT == location.pathname && (
          <div>
            <Buttons
              type="contained"
              buttonType="primary"
              buttonText="Admin Dashboard"
              onClick={() => {
                console.log(props);
                props?.setDashBoard(true);
              }}
            ></Buttons>
          </div>
        )}
      </div>
      <div className="logout">
        <Buttons
          type="contained"
          buttonType="primary"
          buttonText="Logout"
          onClick={() => {
            navigate(PageURL.BASE);
          }}
        ></Buttons>
      </div>
    </div>
  );
};

export default CountryHeader;
