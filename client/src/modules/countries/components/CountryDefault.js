import React, { useState } from "react";
import CountryHeader from "./CountryHeader";
import CountryDefaultBody from "./CountryDefaultBody";
import "./CountryDefault.css";
import AdminDashBoard from "./AdminDashBoard";

const CountryDefault = () => {
  const [isAdminDashBoard, setIsAdminDashBoard] = useState(false);
  console.log("hereeeeeeeee");
  return (
    <div>
      <div className="country-header">
        <CountryHeader a={6} setDashBoard={setIsAdminDashBoard} />
      </div>
      {!isAdminDashBoard && (
        <div className="country-body">
          <CountryDefaultBody />
        </div>
      )}
      {isAdminDashBoard && (
        <div className="country-body">
          <AdminDashBoard />
        </div>
      )}
    </div>
  );
};

export default CountryDefault;
